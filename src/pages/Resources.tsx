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
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((resource, index) => (
                    <tr key={index}>
                      <td className="font-semibold text-white w-1/3">{resource.title}</td>
                      <td className="text-gray-300">
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-solana-green hover:underline break-all"
                        >
                          {resource.link}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
