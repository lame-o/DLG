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
    <nav className="fixed top-0 left-0 right-0 bg-law-primary z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/dlg_logo.gif"
                alt="Dwight Law Group"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-white font-bold hover:text-law-gold transition-colors ${isActive('/') === 'text-law-gold' ? 'text-law-gold' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`text-white font-bold hover:text-law-gold transition-colors ${isActive('/about') === 'text-law-gold' ? 'text-law-gold' : ''}`}>
              About DLG
            </Link>
            <Link to="/services" className={`text-white font-bold hover:text-law-gold transition-colors ${isActive('/services') === 'text-law-gold' ? 'text-law-gold' : ''}`}>
              DLG Services
            </Link>
            <Link to="/publications" className={`text-white font-bold hover:text-law-gold transition-colors ${isActive('/publications') === 'text-law-gold' ? 'text-law-gold' : ''}`}>
              DLG Publications
            </Link>
            <Link to="/contact" className={`text-white font-bold hover:text-law-gold transition-colors ${isActive('/contact') === 'text-law-gold' ? 'text-law-gold' : ''}`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-law-gold transition-colors"
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
                className={`block px-3 py-2 hover:text-law-gold ${isActive('/')}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 hover:text-law-gold ${isActive('/about')}`}
                onClick={() => setIsOpen(false)}
              >
                About DLG
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 hover:text-law-gold ${isActive('/services')}`}
                onClick={() => setIsOpen(false)}
              >
                DLG Services
              </Link>
              <Link 
                to="/publications" 
                className={`block px-3 py-2 hover:text-law-gold ${isActive('/publications')}`}
                onClick={() => setIsOpen(false)}
              >
                DLG Publications
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 hover:text-law-gold ${isActive('/contact')}`}
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