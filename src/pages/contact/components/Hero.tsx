import React from 'react';
import { MessageSquare, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or need to book a service? We're here to help. Contact our friendly team for prompt assistance.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="relative bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MessageSquare className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Chat with Us</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Quick response within 2 hours
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Opening Hours</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Mon-Fri: 8am - 6pm
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Cambridge, UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}