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
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {contributors.map((contributor, index) => (
                <tr key={index}>
                  <td className="font-semibold text-white w-1/3">{contributor.name}</td>
                  <td className="text-gray-300">
                    <div className="flex flex-wrap gap-4">
                      {contributor.twitter && (
                        <a
                          href={contributor.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-solana-green hover:underline"
                        >
                          Twitter
                        </a>
                      )}
                      {contributor.github && (
                        <a
                          href={contributor.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-solana-green hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {contributor.website && (
                        <a
                          href={contributor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-solana-green hover:underline"
                        >
                          Website
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
