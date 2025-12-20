import { CPU, StorageDrive, Provider } from '../data/hardware';
import { agaveCPUs } from '../data/agave';
import { frankendancerCPUs } from '../data/frankendancer';
import {
  enterpriseGen5,
  enterpriseGen4,
  consumerDrives,
} from '../data/storage';
import { providers } from '../data/providers';

export interface SearchResult {
  type: 'cpu' | 'storage' | 'provider';
  category?: 'agave' | 'frankendancer';
  title: string;
  subtitle: string;
  data: CPU | StorageDrive | Provider;
  link: string;
}

export function searchHardware(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search CPUs
  agaveCPUs.forEach((cpu) => {
    const matchScore = getMatchScore(cpu, searchTerm, 'agave');
    if (matchScore > 0) {
      results.push({
        type: 'cpu',
        category: 'agave',
        title: `${cpu.manufacturer} ${cpu.model}`,
        subtitle: `${cpu.cores} cores, ${cpu.threads} threads, ${cpu.baseClock}`,
        data: cpu,
        link: '/category/agave',
      });
    }
  });

  frankendancerCPUs.forEach((cpu) => {
    const matchScore = getMatchScore(cpu, searchTerm, 'frankendancer');
    if (matchScore > 0) {
      results.push({
        type: 'cpu',
        category: 'frankendancer',
        title: `${cpu.manufacturer} ${cpu.model}`,
        subtitle: `${cpu.cores} cores, ${cpu.threads} threads, ${cpu.baseClock}`,
        data: cpu,
        link: '/category/frankendancer',
      });
    }
  });

  // Search Storage
  [...enterpriseGen5, ...enterpriseGen4, ...consumerDrives].forEach((drive) => {
    const matchScore = getStorageMatchScore(drive, searchTerm);
    if (matchScore > 0) {
      results.push({
        type: 'storage',
        title: `${drive.manufacturer} ${drive.model}`,
        subtitle: `${drive.size}${
          drive.generation ? `, ${drive.generation}` : ''
        } - ${drive.randomWrite}`,
        data: drive,
        link: '/category/agave', // Storage is shown on all category pages
      });
    }
  });

  // Search Providers
  providers.forEach((provider) => {
    if (provider.name.toLowerCase().includes(searchTerm)) {
      results.push({
        type: 'provider',
        title: provider.name,
        subtitle: 'Datacenter Provider',
        data: provider,
        link: provider.link,
      });
    }
  });

  // Sort by relevance (exact matches first, then partial matches)
  return results
    .sort((a, b) => {
      const aScore = getRelevanceScore(a, searchTerm);
      const bScore = getRelevanceScore(b, searchTerm);
      return bScore - aScore;
    })
    .slice(0, 20); // Limit to top 20 results
}

function getMatchScore(cpu: CPU, searchTerm: string, category: string): number {
  const model = cpu.model.toLowerCase();
  const manufacturer = cpu.manufacturer.toLowerCase();
  const categoryLower = category.toLowerCase();

  let score = 0;

  // Exact model match
  if (model === searchTerm) score += 100;
  // Model starts with search term
  else if (model.startsWith(searchTerm)) score += 50;
  // Model contains search term
  else if (model.includes(searchTerm)) score += 25;

  // Manufacturer match
  if (manufacturer.includes(searchTerm)) score += 10;

  // Category match
  if (categoryLower.includes(searchTerm)) score += 5;

  // Partial number matches (e.g., "7965" matches "7965WX")
  const modelNumbers = model.match(/\d+/g) || [];
  const searchNumbers = searchTerm.match(/\d+/g) || [];
  if (searchNumbers.length > 0) {
    searchNumbers.forEach((num) => {
      if (modelNumbers.some((m) => m.includes(num))) score += 15;
    });
  }

  return score;
}

function getStorageMatchScore(drive: StorageDrive, searchTerm: string): number {
  const model = drive.model.toLowerCase();
  const manufacturer = drive.manufacturer.toLowerCase();

  let score = 0;

  // Exact model match
  if (model === searchTerm) score += 100;
  // Model starts with search term
  else if (model.startsWith(searchTerm)) score += 50;
  // Model contains search term
  else if (model.includes(searchTerm)) score += 25;

  // Manufacturer match
  if (manufacturer.includes(searchTerm)) score += 10;

  // Size match
  if (drive.size.toLowerCase().includes(searchTerm)) score += 5;

  return score;
}

function getRelevanceScore(result: SearchResult, searchTerm: string): number {
  const title = result.title.toLowerCase();

  // Exact title match gets highest score
  if (title === searchTerm) return 1000;
  if (title.startsWith(searchTerm)) return 500;
  if (title.includes(searchTerm)) return 100;

  return 50;
}
