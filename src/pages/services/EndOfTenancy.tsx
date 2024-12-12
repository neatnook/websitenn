import React from 'react';
import { CheckCircle, ClipboardCheck, Star } from 'lucide-react';
import PostcodeSearch from '../../components/common/PostcodeSearch';

export default function EndOfTenancy() {
  return (
    <div className="pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">End of Tenancy Cleaning</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional end of tenancy cleaning service designed to help you get your deposit back. Approved by leading estate agents and landlords.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <PostcodeSearch />
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ClipboardCheck className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Inventory Checklist</h3>
            <p className="text-gray-600">Cleaning tailored to your inventory requirements</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Star className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">48hr Guarantee</h3>
            <p className="text-gray-600">Free re-clean within 48 hours if required</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Agency Approved</h3>
            <p className="text-gray-600">Meets requirements of leading agencies</p>
          </div>
        </div>

        {/* Comprehensive Checklist */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">End of Tenancy Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Deep clean of all rooms',
              'Professional oven cleaning',
              'Inside window cleaning',
              'Full bathroom descaling',
              'Cabinet cleaning inside & out',
              'Wall marks removal',
              'Skirting boards & door frames',
              'Light switches & sockets',
              'Remove limescale & soap scum',
              'Clean all appliances inside & out'
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">Fixed Price Packages</h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
            <div className="text-4xl font-bold text-orange-600 mb-4">From £180</div>
            <p className="text-gray-600 mb-6">1-2 bedroom property</p>
            <PostcodeSearch buttonText="Get Quote" />
          </div>
        </div>
      </div>
    </div>
  );
}