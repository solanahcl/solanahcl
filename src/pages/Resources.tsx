import { getResourcesByCategory } from '../data/resources';
import SEO from '../components/SEO';

// Static SEO data for Resources page
const RESOURCES_SEO = {
  title: 'Solana Validator Resources - Tools, Guides & Monitoring',
  description: 'Curated list of tools, guides, monitoring solutions, and resources for Solana validators. Find validator management tools, failover solutions, and performance monitoring.',
  keywords: 'Solana validator tools, validator resources, Solana monitoring, validator guides, validator failover',
};

export default function Resources() {
  const resourcesByCategory = getResourcesByCategory();

  return (
    <div className="min-h-screen bg-solana-dark">
      <SEO
        title={RESOURCES_SEO.title}
        description={RESOURCES_SEO.description}
        keywords={RESOURCES_SEO.keywords}
      />
      
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
