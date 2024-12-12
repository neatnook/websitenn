import React from 'react';
import { Link } from 'react-router-dom';

export default function QuickLinks() {
  const links = [
    { name: 'About Us', path: '/about' },
    { name: 'Book Now', path: '/book' },
    { name: 'Coverage Area', path: '/coverage' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link) => (
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
  );
}