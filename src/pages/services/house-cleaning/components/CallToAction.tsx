import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className="bg-[#fbda74] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready for a Cleaner Home?</h2>
        <p className="text-lg text-orange-50 mb-8">Get your instant quote today</p>
        <div className="max-w-md mx-auto">
          <Link
            to="/quote"
            className="block w-full bg-white text-orange-600 py-3 px-6 rounded-lg 
              hover:bg-orange-50 transition-colors duration-200 font-medium text-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}