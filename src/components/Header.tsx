import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600">NeatNook</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-emerald-600">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-emerald-600">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+441234567890" className="inline-flex items-center px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-md">
              <Phone className="w-4 h-4 mr-2" />
              <span>01234 567890</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Services</Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Pricing</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}