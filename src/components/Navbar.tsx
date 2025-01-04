import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-law-gold" : "text-gray-600";
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-law-primary">Dwight Law Group</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-law-primary transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:text-law-primary transition-colors ${isActive('/about')}`}>
              About DLG
            </Link>
            <Link to="/services" className={`hover:text-law-primary transition-colors ${isActive('/services')}`}>
              DLG Services
            </Link>
            <Link to="/publications" className={`hover:text-law-primary transition-colors ${isActive('/publications')}`}>
              DLG Publications
            </Link>
            <Link to="/contact" className="px-4 py-2 rounded bg-law-primary text-white hover:bg-law-secondary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className={`block px-3 py-2 hover:text-law-primary ${isActive('/')}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 hover:text-law-primary ${isActive('/about')}`}
                onClick={() => setIsOpen(false)}
              >
                About DLG
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 hover:text-law-primary ${isActive('/services')}`}
                onClick={() => setIsOpen(false)}
              >
                DLG Services
              </Link>
              <Link 
                to="/publications" 
                className={`block px-3 py-2 hover:text-law-primary ${isActive('/publications')}`}
                onClick={() => setIsOpen(false)}
              >
                DLG Publications
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 hover:text-law-primary ${isActive('/contact')}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;