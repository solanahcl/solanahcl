import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-solana-dark to-solana-dark-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Solana Hardware
            <span className="block text-solana-green mt-2">Compatibility List</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive guide to compatible hardware for running Solana validators.
            Explore recommended CPUs, storage solutions, and datacenter providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/category/agave"
              className="btn-primary inline-block"
            >
              Explore Hardware
            </Link>
            <Link
              to="/resources"
              className="px-6 py-3 rounded-lg border border-solana-dark-border text-white hover:border-solana-green transition-all duration-200"
            >
              View Resources
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-solana-green opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-solana-green opacity-5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

