import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProviderCard from '../components/ProviderCard';
import Contributors from '../components/Contributors';
import { providers } from '../data/providers';
import { contributors, inspiredBy } from '../data/contributors';
import { agaveCPUs } from '../data/agave';
import { frankendancerCPUs } from '../data/frankendancer';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-solana-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Validator Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <CategoryCard
              type="agave"
              name="Agave"
              description="The standard Solana validator client. Optimized for 24-core CPUs with high clock speeds."
              cpuCount={agaveCPUs.length}
            />
            <CategoryCard
              type="frankendancer"
              name="Frankendancer"
              description="A hybrid validator combining Agave and Firedancer components. Benefits from SMT and more cores."
              cpuCount={frankendancerCPUs.length}
            />
            <CategoryCard
              type="firedancer"
              name="Firedancer"
              description="A high-performance validator implementation built from the ground up for maximum throughput."
              cpuCount={0}
            />
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-16 bg-solana-dark-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Datacenter Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <ProviderCard key={index} provider={provider} />
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <Contributors contributors={contributors} />
      
      {/* Inspired By Section */}
      <section className="py-16 bg-solana-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Inspired By</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspiredBy.map((person, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{person.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {person.twitter && (
                    <a
                      href={person.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-solana-green transition-colors"
                    >
                      Twitter
                    </a>
                  )}
                  {person.website && (
                    <a
                      href={person.website}
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
    </div>
  );
}

