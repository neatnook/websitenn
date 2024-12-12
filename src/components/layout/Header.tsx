import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const services = [
  { name: 'House Cleaning', path: '/services/house-cleaning' },
  { name: 'Deep Cleaning', path: '/services/deep-cleaning' },
  { name: 'End of Tenancy', path: '/services/end-of-tenancy' },
  { name: 'Oven Cleaning', path: '/services/oven-cleaning' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesMouseEnter = () => setIsServicesOpen(true);
  const handleServicesMouseLeave = () => setIsServicesOpen(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">NeatNook</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-orange-600">
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-orange-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+441234567890"
              className="inline-flex items-center px-4 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>01234 567890</span>
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Menu */}
            <div className="px-3 py-2">
              <div className="font-medium text-gray-900">Services</div>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block pl-4 py-2 text-gray-600 hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <a
              href="tel:+441234567890"
              className="block px-3 py-2 text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              01234 567890
            </a>
          </div>
        </div>
      )}
    </header>
  );
}