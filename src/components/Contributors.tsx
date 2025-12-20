import { Contributor } from '../data/hardware';

interface ContributorsProps {
  contributors: Contributor[];
  title?: string;
}

export default function Contributors({ contributors, title = 'Contributors' }: ContributorsProps) {
  return (
    <section className="py-16 bg-solana-dark-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-white mb-2">{contributor.name}</h3>
              <div className="flex flex-wrap gap-2">
                {contributor.twitter && (
                  <a
                    href={contributor.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-solana-green transition-colors"
                  >
                    Twitter
                  </a>
                )}
                {contributor.github && (
                  <a
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-solana-green transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {contributor.website && (
                  <a
                    href={contributor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-solana-green transition-colors"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

