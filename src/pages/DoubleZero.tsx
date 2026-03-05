import SEO from '../components/SEO';
import { doubleZeroRings } from '../data/doublezero';

export default function DoubleZero() {
  return (
    <div className="min-h-screen bg-solana-dark">
      <SEO
        title="DoubleZero Phase II – Ring 2 & Ring 3 Providers - Solana HCL"
        description="DoubleZero Phase II datacenter providers for Ring 2 and Ring 3 regions. Strengthen Solana geographic decentralization with bonus stake delegation."
        keywords="DoubleZero, Solana validators, Ring 2, Ring 3, geographic decentralization, datacenter providers, bonus stake"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">DoubleZero</h1>
        <p className="text-xl text-gray-300 mb-4">
          DoubleZero Phase II – Ring 2 & Ring 3 Datacenter Providers
        </p>
        <p className="text-gray-400 mb-8 max-w-3xl">
          As part of DoubleZero Phase II, additional bonus stake is being
          delegated to validators operating in Ring 2 and Ring 3 regions. This
          initiative is focused on strengthening Solana's geographic
          decentralization by incentivizing infrastructure deployment outside of
          traditional Ring 1 hubs.
        </p>

        <p className="text-gray-300 mb-12">
          Below is a list of datacenter providers with regional reach aligned to
          Ring 2 and Ring 3 bonus regions.
        </p>

        {doubleZeroRings.map((ring) => (
          <section
            key={ring.ring}
            id={ring.ring.toLowerCase().replace(' ', '-')}
            className="mb-12 scroll-mt-20"
          >
            <h2 className="text-2xl font-bold text-white mb-2 group flex items-center gap-2">
              {ring.ring} Providers
              <a
                href={`#${ring.ring.toLowerCase().replace(' ', '-')}`}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-solana-green"
                aria-label={`Link to ${ring.ring} section`}
              >
                #
              </a>
            </h2>
            <p className="text-gray-400 mb-6">{ring.regions}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ring.providers.map((provider) => (
                <a
                  key={`${ring.ring}-${provider.name}`}
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
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
