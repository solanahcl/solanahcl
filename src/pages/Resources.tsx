import { getResourcesByCategory } from '../data/resources';

export default function Resources() {
  const resourcesByCategory = getResourcesByCategory();

  return (
    <div className="min-h-screen bg-solana-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Solana Validator Resources</h1>
        <p className="text-xl text-gray-300 mb-12">
          A curated list of tools, guides, and resources for Solana validators.
        </p>

        {Object.entries(resourcesByCategory).map(([category, resources]) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card block group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-solana-green transition-colors mb-2">
                    {resource.title}
                  </h3>
                  <span className="text-sm text-gray-400 group-hover:text-solana-green transition-colors">
                    Visit resource →
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

