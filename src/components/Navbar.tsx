import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';

interface NavItem {
  icon: string;
  title: string;
  link: string;
  anchor?: string;
}

export default function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isQuickNavOpen, setIsQuickNavOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const quickNavRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isCategoryActive = () => {
    return location.pathname.startsWith('/category/');
  };

  const getCurrentCategory = () => {
    const path = location.pathname;
    if (path.includes('/category/agave')) return 'Agave';
    if (path.includes('/category/frankendancer')) return 'Frankendancer';
    if (path.includes('/category/firedancer')) return 'Firedancer';
    return 'Clients';
  };

  const getCurrentCategoryPath = (): string => {
    const path = location.pathname;
    if (path.includes('/category/frankendancer')) return '/category/frankendancer';
    if (path.includes('/category/firedancer')) return '/category/firedancer';
    if (path.includes('/category/agave')) return '/category/agave';
    return '/category/agave'; // Default to agave
  };

  const currentCategoryPath = getCurrentCategoryPath();

  const quickNavItems: NavItem[] = [
    {
      icon: '⚙️',
      title: 'Baseline Hardware',
      link: currentCategoryPath,
      anchor: '#baseline',
    },
    {
      icon: '✅',
      title: 'Recommended Hardware',
      link: currentCategoryPath,
      anchor: '#recommended',
    },
    {
      icon: '🔧',
      title: 'CPU Performance',
      link: currentCategoryPath,
      anchor: '#cpu',
    },
    {
      icon: '💿',
      title: 'Storage',
      link: currentCategoryPath,
      anchor: '#storage',
    },
    {
      icon: '🌐',
      title: 'Datacenter Providers',
      link: '/',
      anchor: '#providers',
    },
    {
      icon: '📚',
      title: 'Resources',
      link: '/resources',
    },
  ];

  const validatorClients = [
    { name: 'Agave', path: '/category/agave' },
    { name: 'Frankendancer', path: '/category/frankendancer' },
    { name: 'Firedancer', path: '/category/firedancer' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        quickNavRef.current &&
        !quickNavRef.current.contains(event.target as Node)
      ) {
        setIsQuickNavOpen(false);
      }
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('[data-drawer-toggle]')
      ) {
        setIsMobileDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileDrawerOpen]);

  const handleDrawerLinkClick = () => {
    setIsMobileDrawerOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-solana-dark border-b border-solana-dark-border backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <span className="text-xl font-bold text-solana-green">
                Solana HCL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-1 justify-end ml-4">
              <SearchBar />

              {/* Quick Navigation Dropdown */}
              <div className="relative" ref={quickNavRef}>
                <button
                  onClick={() => setIsQuickNavOpen(!isQuickNavOpen)}
                  className="text-sm font-medium transition-colors text-gray-300 hover:text-solana-green flex items-center space-x-1"
                >
                  <span>Level Up</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isQuickNavOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isQuickNavOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-solana-dark-alt border border-solana-dark-border rounded-lg shadow-xl overflow-hidden z-50">
                    <div className="p-2">
                      {quickNavItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link + (item.anchor || '')}
                          onClick={() => setIsQuickNavOpen(false)}
                          className="block px-4 py-3 rounded-lg hover:bg-solana-dark-hover transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{item.icon}</span>
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-solana-green transition-colors">
                                {item.title}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-solana-green'
                    : 'text-gray-300 hover:text-solana-green'
                }`}
              >
                Home
              </Link>

              <a
                href="https://github.com/solanahcl/solanahcl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors text-gray-300 hover:text-solana-green flex items-center space-x-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              {/* Dropdown for Validator Clients */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                    isCategoryActive()
                      ? 'text-solana-green'
                      : 'text-gray-300 hover:text-solana-green'
                  }`}
                >
                  <span>{getCurrentCategory()}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-solana-dark-alt border border-solana-dark-border rounded-lg shadow-lg overflow-hidden">
                    {validatorClients.map((client) => (
                      <Link
                        key={client.path}
                        to={client.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(client.path)
                            ? 'bg-solana-dark-hover text-solana-green'
                            : 'text-gray-300 hover:bg-solana-dark-hover hover:text-solana-green'
                        }`}
                      >
                        {client.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-drawer-toggle
              onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-solana-green transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileDrawerOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-80 bg-solana-dark-alt border-l border-solana-dark-border z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-solana-dark-border">
            <h2 className="text-lg font-bold text-solana-green">Menu</h2>
            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="p-2 text-gray-300 hover:text-solana-green transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Search Bar */}
            <div className="mb-4">
              <SearchBar />
            </div>

            {/* Home Link */}
            <Link
              to="/"
              onClick={handleDrawerLinkClick}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive('/')
                  ? 'bg-solana-dark-hover text-solana-green'
                  : 'text-gray-300 hover:bg-solana-dark-hover hover:text-solana-green'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">🏠</span>
                <span className="font-medium">Home</span>
              </div>
            </Link>

            <a
              href="https://github.com/solanahcl/solanahcl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDrawerLinkClick}
              className="block px-4 py-3 rounded-lg transition-colors text-gray-300 hover:bg-solana-dark-hover hover:text-solana-green"
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium">GitHub</span>
              </div>
            </a>

            {/* Validator Clients */}
            <div>
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Validator Clients
              </div>
              {validatorClients.map((client) => (
                <Link
                  key={client.path}
                  to={client.path}
                  onClick={handleDrawerLinkClick}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(client.path)
                      ? 'bg-solana-dark-hover text-solana-green'
                      : 'text-gray-300 hover:bg-solana-dark-hover hover:text-solana-green'
                  }`}
                >
                  {client.name}
                </Link>
              ))}
            </div>

            {/* Level Up Navigation */}
            <div>
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Level Up
              </div>
              {quickNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link + (item.anchor || '')}
                  onClick={handleDrawerLinkClick}
                  className="block px-4 py-3 rounded-lg hover:bg-solana-dark-hover transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-300 group-hover:text-solana-green transition-colors">
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
