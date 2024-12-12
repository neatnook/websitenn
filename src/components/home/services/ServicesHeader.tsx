import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ServicesHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 
        text-orange-600 font-medium text-sm mb-4">
        <Sparkles className="w-4 h-4 mr-2" />
        Our Professional Services
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
        Expert Cleaning Solutions
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Choose from our range of professional cleaning services, each designed to meet your specific needs
      </p>
    </div>
  );
}