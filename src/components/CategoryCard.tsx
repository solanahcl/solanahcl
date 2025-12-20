import { Link } from 'react-router-dom';
import { CategoryType } from '../data/hardware';

interface CategoryCardProps {
  type: CategoryType;
  name: string;
  description: string;
  cpuCount?: number;
}

export default function CategoryCard({ type, name, description, cpuCount }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${type}`}
      className="card block group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-solana-green transition-colors">
          {name}
        </h3>
        <span className="text-solana-green text-sm font-medium">
          →
        </span>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      {cpuCount !== undefined && (
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>{cpuCount} CPUs</span>
        </div>
      )}
    </Link>
  );
}

