import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CategoryType } from '../data/hardware';
import HardwareTable from '../components/HardwareTable';
import Notes from '../components/Notes';
import { agaveCPUs, agaveNotes } from '../data/agave';
import { frankendancerCPUs, frankendancerNotes } from '../data/frankendancer';
import { enterpriseGen5, enterpriseGen4, consumerDrives, storageNotes } from '../data/storage';

export default function Category() {
  const { type } = useParams<{ type: CategoryType }>();
  const location = useLocation();

  // Handle anchor scrolling on mount and hash changes
  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash, location.pathname]);

  const getCategoryData = () => {
    switch (type) {
      case 'agave':
        return {
          name: 'Agave',
          description: 'The standard Solana validator client',
          cpus: agaveCPUs,
          notes: agaveNotes,
        };
      case 'frankendancer':
        return {
          name: 'Frankendancer',
          description: 'A hybrid validator combining Agave and Firedancer components',
          cpus: frankendancerCPUs,
          notes: frankendancerNotes,
        };
      case 'firedancer':
        return {
          name: 'Firedancer',
          description: 'A high-performance validator implementation built from the ground up',
          cpus: [],
          notes: 'Firedancer is a next-generation validator implementation. Hardware recommendations are similar to Frankendancer.',
        };
      default:
        return {
          name: 'Unknown',
          description: '',
          cpus: [],
          notes: '',
        };
    }
  };

  const categoryData = getCategoryData();

  return (
    <div className="min-h-screen bg-solana-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">{categoryData.name}</h1>
        <p className="text-xl text-gray-300 mb-8">{categoryData.description}</p>

        <section id="baseline" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">Baseline Hardware</h2>
          <p className="text-gray-300 mb-4">
            Minimum specifications for running a Solana validator node. Source:{' '}
            <a
              href="https://docs.anza.xyz/operations/requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solana-green hover:underline"
            >
              Anza Operations Requirements
            </a>
          </p>
          
          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">🖥️</span> CPU
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2">Validator Requirements</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>2.8GHz base clock speed, or faster</li>
                    <li>SHA extensions instruction support</li>
                    <li>AMD Gen 3 or newer / Intel Ice Lake or newer</li>
                    <li>Higher clock speed preferable over more cores</li>
                    <li>AVX2 instruction support</li>
                    <li>Support for AVX512f is helpful</li>
                    <li>12 cores / 24 threads, or more</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Additional RPC Node Requirements</p>
                  <p className="text-sm text-gray-300">16 cores / 32 threads, or more</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">💾</span> Memory (RAM)
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2">Validator Requirements</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Error Correction Code (ECC) memory suggested</li>
                    <li>Motherboard with 512GB capacity suggested</li>
                    <li>256GB or more</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Additional RPC Node Requirements</p>
                  <p className="text-sm text-gray-300">512 GB or more for all account indexes</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">💿</span> Storage (Disk)
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2">Validator Requirements</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>PCIe Gen3 x4 NVME SSD, or better</li>
                    <li>Accounts: 500GB+ (High TBW)</li>
                    <li>Ledger: 1TB+ (High TBW)</li>
                    <li>Snapshots: 250GB+ (High TBW)</li>
                    <li>OS: 500GB+ (SATA OK)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Additional RPC Node Requirements</p>
                  <p className="text-sm text-gray-300">
                    Larger ledger disk if longer transaction history required.
                    Accounts and ledger should not be stored on the same disk.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">🎮</span> GPUs
              </h3>
              <p className="text-sm text-gray-300">
                Not necessary at this time. Operators in the validator community do not use GPUs currently.
              </p>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Validator Requirements</th>
                  <th>Additional RPC Node Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">CPU</td>
                  <td>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>2.8GHz base clock speed, or faster</li>
                      <li>SHA extensions instruction support</li>
                      <li>AMD Gen 3 or newer / Intel Ice Lake or newer</li>
                      <li>Higher clock speed preferable over more cores</li>
                      <li>AVX2 instruction support</li>
                      <li>Support for AVX512f is helpful</li>
                      <li>12 cores / 24 threads, or more</li>
                    </ul>
                  </td>
                  <td>16 cores / 32 threads, or more</td>
                </tr>
                <tr>
                  <td className="font-semibold">RAM</td>
                  <td>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Error Correction Code (ECC) memory suggested</li>
                      <li>Motherboard with 512GB capacity suggested</li>
                      <li>256GB or more</li>
                    </ul>
                  </td>
                  <td>512 GB or more for all account indexes</td>
                </tr>
                <tr>
                  <td className="font-semibold">Disk</td>
                  <td>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>PCIe Gen3 x4 NVME SSD, or better</li>
                      <li>Accounts: 500GB+ (High TBW)</li>
                      <li>Ledger: 1TB+ (High TBW)</li>
                      <li>Snapshots: 250GB+ (High TBW)</li>
                      <li>OS: 500GB+ (SATA OK)</li>
                    </ul>
                  </td>
                  <td>
                    Larger ledger disk if longer transaction history required.
                    Accounts and ledger should not be stored on the same disk.
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold">GPUs</td>
                  <td colSpan={2}>
                    Not necessary at this time. Operators in the validator community do not use GPUs currently.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="recommended" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">Recommended Hardware</h2>
          {categoryData.notes && (
            <Notes content={categoryData.notes} />
          )}
        </section>

        {categoryData.cpus && categoryData.cpus.length > 0 && (
          <section id="cpu" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">Recommended CPUs</h2>
            <HardwareTable cpus={categoryData.cpus} category={type} />
          </section>
        )}

        {/* Storage Section - shown for all categories */}
        <section id="storage" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">Storage Recommendations</h2>
          
          <Notes content={storageNotes} />

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Enterprise Gen 5 (PCIe 5.0)</h3>
            <HardwareTable storage={enterpriseGen5} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Enterprise Gen 4 (PCIe 4.0)</h3>
            <HardwareTable storage={enterpriseGen4} />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Consumer Drives</h3>
            <HardwareTable storage={consumerDrives} />
          </div>
        </section>
      </div>
    </div>
  );
}

