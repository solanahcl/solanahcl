import { CPU, StorageDrive, NetworkCard } from '../data/hardware';

interface HardwareTableProps {
  cpus?: CPU[];
  storage?: StorageDrive[];
  network?: NetworkCard[];
  category?: 'agave' | 'frankendancer' | 'firedancer';
}

// Generate a unique ID for a CPU, storage drive, or network card
function generateId(item: CPU | StorageDrive | NetworkCard, index: number, type: 'cpu' | 'storage' | 'network'): string {
  const modelSlug = item.model.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `${type}-${item.manufacturer.toLowerCase()}-${modelSlug}-${index}`;
}

function networkStatusClass(status?: string): string {
  if (!status) {
    return 'text-gray-300';
  }

  const normalized = status.toLowerCase();

  if (normalized.includes('does not') || normalized.includes('do not work') || normalized.includes('no native') || normalized.includes('do not use')) {
    return 'text-red-400 font-medium';
  }

  if (normalized.includes('mixed') || normalized.includes('caveat') || normalized.includes('unstable')) {
    return 'text-amber-300 font-medium';
  }

  if (normalized.includes('works')) {
    return 'text-solana-green font-medium';
  }

  return 'text-gray-300';
}

function networkStatusIcon(status?: string): { label: string; className: string } | null {
  if (!status) {
    return null;
  }

  const normalized = status.toLowerCase();

  if (normalized.includes('does not') || normalized.includes('do not work') || normalized.includes('no native') || normalized.includes('do not use')) {
    return { label: 'X', className: 'text-red-400' };
  }

  if (normalized.includes('mixed') || normalized.includes('caveat') || normalized.includes('unstable')) {
    return { label: '!', className: 'text-amber-300' };
  }

  if (normalized.includes('works')) {
    return { label: 'OK', className: 'text-solana-green' };
  }

  return null;
}

function NetworkStatus({ status }: { status?: string }) {
  const icon = networkStatusIcon(status);

  return (
    <>
      {icon && <span className={`${icon.className} mr-1 font-bold`}>{icon.label}</span>}
      {status}
    </>
  );
}

export default function HardwareTable({ cpus, storage, network }: HardwareTableProps) {
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
                  <td className={cpu.recommended ? 'text-solana-green font-medium' : 'text-gray-500'}>
                    {cpu.recommended ? 'Yes' : 'No'}
                  </td>
                  <td className="text-gray-300">{cpu.manufacturer}</td>
                  <td className="font-mono text-sm text-gray-300">{cpu.model}</td>
                  <td className="text-gray-300">{cpu.baseClock}</td>
                  <td className="text-gray-300">{cpu.maxBoostClock}</td>
                  <td className="text-gray-300">{cpu.cores}</td>
                  <td className="text-gray-300">{cpu.threads}</td>
                  <td className="text-gray-300">{cpu.defaultTDP}</td>
                  {cpu.pohSpeed && <td className="text-gray-300">{cpu.pohSpeed}</td>}
                  {cpu.testnetCaughtUp && <td className="text-gray-300">{cpu.testnetCaughtUp}</td>}
                  {cpu.mainnetCaughtUp && <td className="text-gray-300">{cpu.mainnetCaughtUp}</td>}
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
                  <td className="text-gray-300">{drive.manufacturer}</td>
                  <td className="font-mono text-sm text-gray-300">{drive.model}</td>
                  <td className="text-gray-300">{drive.size}</td>
                  {drive.generation && <td className="text-gray-300">{drive.generation}</td>}
                  <td className="text-gray-300">{drive.sequentialRead}</td>
                  <td className="text-gray-300">{drive.sequentialWrite}</td>
                  <td className="text-gray-300">{drive.randomRead}</td>
                  <td className="text-gray-300">{drive.randomWrite}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (network && network.length > 0) {
    const hasAfXdpData = network.some((nic) => nic.driver || nic.afXdpWithoutZeroCopy || nic.afXdpWithZeroCopy);

    return (
      <div className="table-container">
        <table className="table">
          <thead>
            {hasAfXdpData ? (
              <tr>
                <th>Driver / NIC Family</th>
                <th>AF_XDP w/o ZC</th>
                <th>AF_XDP w/ ZC</th>
                <th>Comments</th>
              </tr>
            ) : (
              <tr>
                <th>Manufacturer</th>
                <th>Model</th>
                <th>Speed</th>
                <th>Ports</th>
                <th>Media</th>
                <th>Comments</th>
              </tr>
            )}
          </thead>
          <tbody>
            {network.map((nic, index) => {
              const id = generateId(nic, index, 'network');

              if (hasAfXdpData) {
                return (
                  <tr key={index} id={id} className="scroll-mt-20">
                    <td className="text-gray-300">
                      <div className="font-mono text-sm text-gray-200">{nic.driver}</div>
                      <div className="text-xs text-gray-400">{nic.manufacturer} {nic.model}</div>
                    </td>
                    <td className={networkStatusClass(nic.afXdpWithoutZeroCopy)}>
                      <NetworkStatus status={nic.afXdpWithoutZeroCopy} />
                    </td>
                    <td className={networkStatusClass(nic.afXdpWithZeroCopy)}>
                      <NetworkStatus status={nic.afXdpWithZeroCopy} />
                    </td>
                    <td className="max-w-2xl text-gray-300">{nic.notes}</td>
                  </tr>
                );
              }

              return (
                <tr key={index} id={id} className="scroll-mt-20">
                  <td className="text-gray-300">{nic.manufacturer}</td>
                  <td className="font-mono text-sm text-gray-300">{nic.model}</td>
                  <td className="text-gray-300">{nic.speed}</td>
                  <td className="text-gray-300">{nic.ports}</td>
                  <td className="text-gray-300 capitalize">{nic.media}</td>
                  <td className="max-w-2xl text-gray-300">{nic.notes}</td>
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
