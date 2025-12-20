import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';

export default function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const validatorClients = [
    { name: 'Agave', path: '/category/agave' },
    { name: 'Frankendancer', path: '/category/frankendancer' },
    { name: 'Firedancer', path: '/category/firedancer' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-solana-dark border-b border-solana-dark-border backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-xl font-bold text-solana-green">
              Solana HCL
            </span>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8 flex-1 justify-end ml-4">
            <SearchBar />

            <Link
              to="/"
              className={`text-sm font-medium transition-colors hidden md:block ${
                isActive('/')
                  ? 'text-solana-green'
                  : 'text-gray-300 hover:text-solana-green'
              }`}
            >
              Home
            </Link>

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
                <span className="hidden sm:inline">{getCurrentCategory()}</span>
                <span className="sm:hidden">Clients</span>
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
                <div className="absolute top-full right-0 mt-2 w-48 bg-solana-dark-alt border border-solana-dark-border rounded-lg shadow-lg overflow-hidden">
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

            <Link
              to="/resources"
              className={`text-sm font-medium transition-colors hidden md:block ${
                isActive('/resources')
                  ? 'text-solana-green'
                  : 'text-gray-300 hover:text-solana-green'
              }`}
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
