import React from 'react';
import { Phone, Mail, Clock, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactInfo() {
  return (
    <div className="flex justify-between items-center h-10 text-sm">
      <div className="hidden lg:flex items-center space-x-6">
        <a href="tel:+441234567890" className="flex items-center hover:text-orange-100">
          <Phone className="w-4 h-4 mr-2" />
          01234 567890
        </a>
        <a href="mailto:info@neatnook.co.uk" className="flex items-center hover:text-orange-100">
          <Mail className="w-4 h-4 mr-2" />
          info@neatnook.co.uk
        </a>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Mon-Fri: 8am - 6pm
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/quote" className="flex items-center hover:text-orange-100">
          <Calculator className="w-4 h-4 mr-2" />
          Get a Quote
        </Link>
        <a href="/about" className="hover:text-orange-100">About Us</a>
        <a href="/contact" className="hover:text-orange-100">Contact</a>
      </div>
    </div>
  );
}