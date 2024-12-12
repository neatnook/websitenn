import React from 'react';
import { Sparkles, Shield, Clock } from 'lucide-react';
import PostcodeSearch from '../../components/common/PostcodeSearch';

export default function DeepCleaning() {
  return (
    <div className="pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Deep Cleaning Service</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A thorough, intensive cleaning service that reaches every corner of your home. Perfect for spring cleaning or preparing your property for special occasions.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <PostcodeSearch />
          </div>
        </div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Sparkles className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Deep Clean</h3>
            <p className="text-gray-600">Thorough cleaning of every nook and cranny</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">6-8 Hour Service</h3>
            <p className="text-gray-600">Comprehensive cleaning that takes time to perfect</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
            <p className="text-gray-600">Visible difference or we'll re-clean for free</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Premium Deep Clean Includes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Deep cleaning of kitchen appliances',
              'Thorough bathroom descaling',
              'Inside window cleaning',
              'Behind/under furniture cleaning',
              'Cabinet interior cleaning',
              'Skirting board detailed clean',
              'Light fixture cleaning',
              'Wall spot cleaning',
              'Door frame cleaning',
              'Scale removal from taps/shower heads'
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Sparkles className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">Deep Clean Pricing</h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
            <div className="text-4xl font-bold text-orange-600 mb-4">From £25/hour</div>
            <p className="text-gray-600 mb-6">Minimum 6 hours service</p>
            <PostcodeSearch buttonText="Book Deep Clean" />
          </div>
        </div>
      </div>
    </div>
  );
}