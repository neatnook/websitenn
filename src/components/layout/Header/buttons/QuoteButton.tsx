import React from 'react';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuoteButton() {
  return (
    <Link
      to="/quote"
      className="inline-flex items-center px-4 py-2 border border-orange-600 bg-orange-600 
        text-white rounded-md hover:bg-orange-700 hover:border-orange-700 transition-colors"
    >
      <Calculator className="w-4 h-4 mr-2" />
      <span>Get a Quote</span>
    </Link>
  );
}