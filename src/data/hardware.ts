// TypeScript interfaces for hardware data structures

export interface CPU {
  recommended: boolean;
  manufacturer: string;
  model: string;
  baseClock: string;
  maxBoostClock: string;
  cores: number;
  threads: number;
  defaultTDP: string;
  pohSpeed?: string;
  testnetCaughtUp?: string;
  mainnetCaughtUp?: string;
  notes?: string;
}

export interface StorageDrive {
  manufacturer: string;
  model: string;
  size: string;
  generation?: string;
  sequentialRead: string;
  sequentialWrite: string;
  randomRead: string;
  randomWrite: string;
  notes?: string;
}

export interface Provider {
  name: string;
  link: string;
}

export interface Resource {
  title: string;
  link: string;
  category: string;
}

export interface Contributor {
  name: string;
  twitter?: string;
  website?: string;
  github?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  cpus?: CPU[];
  storage?: StorageDrive[];
}

export type CategoryType = 'agave' | 'frankendancer' | 'firedancer';

