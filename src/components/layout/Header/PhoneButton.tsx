import React from 'react';
import { Phone } from 'lucide-react';

export default function PhoneButton() {
  return (
    <a
      href="tel:+441234567890"
      className="inline-flex items-center px-4 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md transition-colors"
    >
      <Phone className="w-4 h-4 mr-2" />
      <span>01234 567890</span>
    </a>
  );
}