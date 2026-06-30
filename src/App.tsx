import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import DoubleZero from './pages/DoubleZero';
import Resources from './pages/Resources';
import './styles/index.css';

function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const element = document.getElementById(location.hash.slice(1));

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash, location.pathname, location.key]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-solana-dark">
        <HashScroll />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/doublezero" element={<DoubleZero />} />
          <Route path="/category/:type" element={<Category />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
