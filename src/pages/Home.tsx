import Hero from '../components/Hero';
import RecommendedHardware from '../components/RecommendedHardware';
import Contributors from '../components/Contributors';
import SEO from '../components/SEO';
import { providers } from '../data/providers';
import { doubleZeroRings } from '../data/doublezero';
import { contributors, inspiredBy } from '../data/contributors';

// Static SEO data for Home page
const HOME_SEO = {
  title:
    'Solana Hardware Compatibility List - Recommended Hardware for Validators',
  description:
    'Community-maintained hardware guide for running Solana validators. Find recommended CPUs, storage solutions, and datacenter providers for Agave, Frankendancer, and Firedancer.',
  keywords:
    'Solana validator hardware, Solana HCL, validator CPU recommendations, Solana storage, datacenter providers',
};

export default function Home() {
  return (
    <div>
      <SEO
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        keywords={HOME_SEO.keywords}
      />

      <Hero />

      {/* Recommended Hardware Section */}
      <RecommendedHardware />

      {/* Providers Section */}
      <section id="providers" className="py-16 bg-solana-dark-alt scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Datacenter Providers
          </h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider, index) => (
                  <tr key={index}>
                    <td className="font-semibold text-white w-1/3">
                      {provider.name}
                    </td>
                    <td className="text-gray-300">
                      <a
                        href={provider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-solana-green hover:underline break-all"
                      >
                        {provider.link}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DoubleZero Section */}
      <section id="doublezero" className="py-12 bg-solana-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">
              DoubleZero Phase II
            </h2>
            <a
              href="/category/doublezero"
              className="text-solana-green hover:underline text-sm"
            >
              View all →
            </a>
          </div>
          <p className="text-gray-400 mb-6 max-w-3xl text-sm">
            Bonus stake delegated to validators in Ring 2 & Ring 3 regions to
            strengthen Solana's geographic decentralization.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {doubleZeroRings.map((ring) => (
              <div key={ring.ring} className="card">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {ring.ring}
                </h3>
                <p className="text-gray-400 text-xs mb-3">{ring.regions}</p>
                <div className="flex flex-wrap gap-2">
                  {ring.providers.map((provider) => (
                    <a
                      key={`${ring.ring}-${provider.name}`}
                      href={provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-solana-green hover:underline"
                    >
                      {provider.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section - moved to bottom */}
      <Contributors contributors={contributors} />

      {/* Inspired By Section */}
      <section className="py-16 bg-solana-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Inspired By</h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {inspiredBy.map((person, index) => (
                  <tr key={index}>
                    <td className="font-semibold text-white w-1/3">
                      {person.name}
                    </td>
                    <td className="text-gray-300">
                      <div className="flex flex-wrap gap-4">
                        {person.twitter && (
                          <a
                            href={person.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-solana-green hover:underline"
                          >
                            Twitter
                          </a>
                        )}
                        {person.website && (
                          <a
                            href={person.website}
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
    </div>
  );
}
