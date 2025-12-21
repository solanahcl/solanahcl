import { CPU, StorageDrive } from '../data/hardware';

interface HardwareTableProps {
  cpus?: CPU[];
  storage?: StorageDrive[];
  category?: 'agave' | 'frankendancer' | 'firedancer';
}

// Generate a unique ID for a CPU or storage drive
function generateId(item: CPU | StorageDrive, index: number, type: 'cpu' | 'storage'): string {
  if ('model' in item) {
    // CPU
    const cpu = item as CPU;
    const modelSlug = cpu.model.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `${type}-${cpu.manufacturer.toLowerCase()}-${modelSlug}`;
  } else {
    // Storage
    const drive = item as StorageDrive;
    const modelSlug = drive.model.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `${type}-${drive.manufacturer.toLowerCase()}-${modelSlug}-${index}`;
  }
}

export default function HardwareTable({ cpus, storage }: HardwareTableProps) {
  if (cpus && cpus.length > 0) {
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Recommended</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Base Clock</th>
              <th>Max Boost Clock</th>
              <th>Cores</th>
              <th>Threads</th>
              <th>Default TDP</th>
              {cpus[0].pohSpeed && <th>PoH Speed</th>}
              {cpus[0].testnetCaughtUp && <th>Testnet</th>}
              {cpus[0].mainnetCaughtUp && <th>Mainnet</th>}
            </tr>
          </thead>
          <tbody>
            {cpus.map((cpu, index) => {
              const id = generateId(cpu, index, 'cpu');
              return (
                <tr key={index} id={id} className="scroll-mt-20">
                  <td className={cpu.recommended ? 'text-solana-green' : 'text-gray-500'}>
                    {cpu.recommended ? 'Yes' : 'No'}
                  </td>
                  <td>{cpu.manufacturer}</td>
                  <td className="font-mono text-sm">{cpu.model}</td>
                  <td>{cpu.baseClock}</td>
                  <td>{cpu.maxBoostClock}</td>
                  <td>{cpu.cores}</td>
                  <td>{cpu.threads}</td>
                  <td>{cpu.defaultTDP}</td>
                  {cpu.pohSpeed && <td>{cpu.pohSpeed}</td>}
                  {cpu.testnetCaughtUp && <td>{cpu.testnetCaughtUp}</td>}
                  {cpu.mainnetCaughtUp && <td>{cpu.mainnetCaughtUp}</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (storage && storage.length > 0) {
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Size</th>
              {storage[0].generation && <th>Generation</th>}
              <th>Seq Read</th>
              <th>Seq Write</th>
              <th>Random Read</th>
              <th>Random Write</th>
            </tr>
          </thead>
          <tbody>
            {storage.map((drive, index) => {
              const id = generateId(drive, index, 'storage');
              return (
                <tr key={index} id={id} className="scroll-mt-20">
                  <td>{drive.manufacturer}</td>
                  <td className="font-mono text-sm">{drive.model}</td>
                  <td>{drive.size}</td>
                  {drive.generation && <td>{drive.generation}</td>}
                  <td>{drive.sequentialRead}</td>
                  <td>{drive.sequentialWrite}</td>
                  <td>{drive.randomRead}</td>
                  <td>{drive.randomWrite}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}
