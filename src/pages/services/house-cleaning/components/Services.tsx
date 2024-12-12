import React from 'react';
import { CheckCircle } from 'lucide-react';

const includedServices = [
  'Kitchen cleaning and sanitizing',
  'Bathroom cleaning and disinfecting',
  'Dusting all surfaces and fixtures',
  'Vacuuming carpets and rugs',
  'Mopping all hard floors',
  'Making beds (linens provided)',
  'Empty bins and replace bags',
  'Clean mirrors and glass surfaces',
  'Wipe door handles and light switches',
  'Clean window sills and tracks'
];

export default function Services() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
          <p className="text-lg text-gray-600">Our comprehensive cleaning checklist</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {includedServices.map((service) => (
            <div key={service} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}