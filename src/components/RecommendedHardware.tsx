import { Link } from 'react-router-dom';
import { agaveCPUs } from '../data/agave';
import { frankendancerCPUs } from '../data/frankendancer';
import { enterpriseGen5 } from '../data/storage';
import { CPU } from '../data/hardware';

interface CPUWithClient extends CPU {
  client: 'Agave' | 'Frankendancer' | 'Firedancer';
}

export default function RecommendedHardware() {
  // Get top 3 recommended CPUs from each client
  const topAgaveCPUs = agaveCPUs.filter(cpu => cpu.recommended).slice(0, 3);
  const topFrankendancerCPUs = frankendancerCPUs.filter(cpu => cpu.recommended).slice(0, 3);
  
  // Combine and add client info
  const allCPUs: CPUWithClient[] = [
    ...topAgaveCPUs.map(cpu => ({ ...cpu, client: 'Agave' as const })),
    ...topFrankendancerCPUs.map(cpu => ({ ...cpu, client: 'Frankendancer' as const })),
  ];

  // Get top storage drives (top 6 from Enterprise Gen 5)
  const topStorage = enterpriseGen5.slice(0, 6);

  return (
    <section className="py-16 bg-solana-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Recommended Hardware</h2>
          <p className="text-gray-400">
            Top recommended hardware for Solana validators - CPUs, RAM, and storage solutions.
          </p>
        </div>

        {/* CPUs Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">🖥️ CPUs</h3>
          <div className="table-container mb-6">
            <table className="table">
              <thead>
                <tr>
                  <th className="w-24">Client</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Base Clock</th>
                  <th>Max Boost</th>
                  <th>Cores</th>
                  <th>Threads</th>
                  <th>TDP</th>
                  <th>Performance</th>
                </tr>
              </thead>
              <tbody>
                {allCPUs.map((cpu, index) => {
                  const getClientLink = () => {
                    if (cpu.client === 'Agave') return '/category/agave';
                    if (cpu.client === 'Frankendancer') return '/category/frankendancer';
                    return '/category/firedancer';
                  };
                  
                  return (
                    <tr key={index}>
                      <td>
                        <Link
                          to={getClientLink()}
                          className="text-solana-green hover:underline font-medium"
                        >
                          {cpu.client}
                        </Link>
                      </td>
                      <td className="text-gray-300">{cpu.manufacturer}</td>
                      <td className="font-mono text-sm text-gray-300">{cpu.model}</td>
                      <td className="text-gray-300">{cpu.baseClock}</td>
                      <td className="text-gray-300">{cpu.maxBoostClock}</td>
                      <td className="text-gray-300">{cpu.cores}</td>
                      <td className="text-gray-300">{cpu.threads}</td>
                      <td className="text-gray-300">{cpu.defaultTDP}</td>
                      <td className="text-gray-300">
                        {cpu.pohSpeed || (cpu.mainnetCaughtUp ? cpu.mainnetCaughtUp : '-')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* RAM Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">💾 Memory (RAM)</h3>
          <div className="table-container mb-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Minimum</th>
                  <th>Recommended</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-white">Validator</td>
                  <td className="text-gray-300">256GB</td>
                  <td className="text-gray-300">512GB+</td>
                  <td className="text-gray-300">ECC memory suggested, 3200MHz+</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">RPC Node</td>
                  <td className="text-gray-300">512GB</td>
                  <td className="text-gray-300">512GB+</td>
                  <td className="text-gray-300">For all account indexes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Storage Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">💿 Storage (Enterprise Gen 5)</h3>
          <div className="table-container mb-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Size</th>
                  <th>Seq Read</th>
                  <th>Seq Write</th>
                  <th>Random Read</th>
                  <th>Random Write</th>
                </tr>
              </thead>
              <tbody>
                {topStorage.map((drive, index) => (
                  <tr key={index}>
                    <td className="text-gray-300">{drive.manufacturer}</td>
                    <td className="font-mono text-sm text-gray-300">{drive.model}</td>
                    <td className="text-gray-300">{drive.size}</td>
                    <td className="text-gray-300">{drive.sequentialRead}</td>
                    <td className="text-gray-300">{drive.sequentialWrite}</td>
                    <td className="text-gray-300">{drive.randomRead}</td>
                    <td className="text-gray-300">{drive.randomWrite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/category/agave"
            className="btn-primary inline-block"
          >
            Explore All Hardware Recommendations
          </Link>
        </div>
      </div>
    </section>
  );
}

