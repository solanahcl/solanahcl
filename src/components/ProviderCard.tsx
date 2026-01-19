import { Provider } from '../data/hardware';

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <a
      href={provider.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card block group"
    >
      <h3 className="text-lg font-semibold text-white group-hover:text-solana-green transition-colors mb-2">
        {provider.name}
      </h3>
      <span className="text-sm text-gray-400 group-hover:text-solana-green transition-colors">
        Visit website →
      </span>
    </a>
  );
}

