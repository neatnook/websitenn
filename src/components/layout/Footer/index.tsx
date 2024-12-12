import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Lock } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-orange-500">NeatNook</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Professional cleaning services in Cambridge and surrounding areas. Making homes sparkle since 2020.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Get Quote', path: '/quote' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'House Cleaning', path: '/services/house-cleaning' },
                { name: 'Deep Cleaning', path: '/services/deep-cleaning' },
                { name: 'End of Tenancy', path: '/services/end-of-tenancy' },
                { name: 'Oven Cleaning', path: '/services/oven-cleaning' },
              ].map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  01234 567890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@neatnook.co.uk"
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@neatnook.co.uk
                </a>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                <span>Cambridge, UK</span>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-2 mt-1" />
                <div>
                  <p>Mon-Fri: 8am - 6pm</p>
                  <p>Sat: 9am - 4pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} NeatNook Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/admin" className="text-sm text-gray-400 hover:text-orange-500 transition-colors flex items-center opacity-50 hover:opacity-100">
                <Lock className="w-3 h-3 mr-1" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}