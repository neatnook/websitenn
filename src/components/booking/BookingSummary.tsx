import React from 'react';
import { Shield, Clock, CheckCircle } from 'lucide-react';

export default function BookingSummary() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Booking Summary</h2>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Fully Insured</h3>
            <p className="text-sm text-gray-500">All our cleaners are fully insured and vetted</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Flexible Scheduling</h3>
            <p className="text-sm text-gray-500">Choose a time that works for you</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Satisfaction Guaranteed</h3>
            <p className="text-sm text-gray-500">Not happy? We'll re-clean for free</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-medium text-gray-900 mb-4">What's included:</h3>
        <ul className="space-y-2">
          {[
            'Professional cleaning equipment',
            'Eco-friendly cleaning products',
            'Trained & vetted cleaners',
            'Public liability insurance',
            'Satisfaction guarantee',
          ].map((item, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}