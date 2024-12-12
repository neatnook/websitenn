import React from 'react';
import { Flame, Shield, Clock } from 'lucide-react';
import PostcodeSearch from '../../components/common/PostcodeSearch';

export default function OvenCleaning() {
  return (
    <div className="pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Oven Cleaning</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Restore your oven to showroom condition with our professional oven cleaning service. We use eco-friendly, fume-free products.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <PostcodeSearch />
          </div>
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Flame className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Deep Clean</h3>
            <p className="text-gray-600">Removes burnt-on carbon and grease</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
            <p className="text-gray-600">Safe, non-toxic cleaning solutions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">2-3 Hours</h3>
            <p className="text-gray-600">Ready to use the same day</p>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Complete disassembly for thorough cleaning',
              'Eco-friendly dip tank process',
              'Clean all removable parts',
              'Degrease oven interior',
              'Clean oven door glass',
              'Polish external surfaces',
              'Function test after cleaning',
              'Ready to use immediately'
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Flame className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">Simple Pricing</h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
            <div className="text-4xl font-bold text-orange-600 mb-4">From £65</div>
            <p className="text-gray-600 mb-6">Single oven clean</p>
            <PostcodeSearch buttonText="Book Oven Clean" />
          </div>
        </div>
      </div>
    </div>
  );
}