import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
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
  );
}