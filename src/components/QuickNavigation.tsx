import { Link } from 'react-router-dom';

interface NavItem {
  icon: string;
  title: string;
  description: string;
  link: string;
  anchor?: string;
}

export default function QuickNavigation() {
  const navItems: NavItem[] = [
    {
      icon: '⚙️',
      title: 'Baseline Hardware',
      description: 'Minimum requirements',
      link: '/category/agave',
      anchor: '#baseline',
    },
    {
      icon: '✅',
      title: 'Recommended Hardware',
      description: 'Tested configurations',
      link: '/category/agave',
      anchor: '#recommended',
    },
    {
      icon: '🔧',
      title: 'CPU Performance',
      description: 'Tuning guide',
      link: '/category/agave',
      anchor: '#cpu',
    },
    {
      icon: '💿',
      title: 'Storage',
      description: 'SSD requirements',
      link: '/category/agave',
      anchor: '#storage',
    },
    {
      icon: '🌐',
      title: 'Datacenter Providers',
      description: 'Server providers',
      link: '/',
      anchor: '#providers',
    },
    {
      icon: '📚',
      title: 'Resources',
      description: 'Tools & guides',
      link: '/resources',
    },
  ];

  return (
    <section className="py-12 bg-solana-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Solana Hardware Compatibility List
          </h1>
          <p className="text-gray-400">
            Community-maintained hardware guide for running Solana validators with optimal performance
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-solana-green mb-4">📍 Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link + (item.anchor || '')}
                className="card text-center hover:border-solana-green transition-all group"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-sm font-semibold text-white group-hover:text-solana-green transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

