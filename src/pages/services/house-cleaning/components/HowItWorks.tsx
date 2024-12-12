import React from 'react';
import { Calendar, Sparkles, Coffee } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Your Clean',
    description: 'Choose your preferred date and time through our simple online booking system.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Sparkles,
    title: 'Professional Service',
    description: 'Our expert team arrives fully equipped with eco-friendly cleaning supplies.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Coffee,
    title: 'Enjoy Your Clean Home',
    description: 'Relax in your spotless home, backed by our satisfaction guarantee.',
    color: 'bg-green-50 text-green-600'
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-gradient-to-br from-white to-orange-50/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Three simple steps to your cleaner home</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, title, description, color }, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon Container */}
                <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>

                {/* Step Number */}
                <div className="absolute top-4 right-4">
                  <span className="text-sm font-medium text-gray-400">Step {index + 1}</span>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-[2px] bg-gradient-to-r from-gray-200 to-transparent transform translate-x-8">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-200 rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Trusted Cleaners', value: '100+' },
            { label: 'Happy Customers', value: '1000+' },
            { label: 'Service Guarantee', value: '100%' },
            { label: 'Years Experience', value: '5+' }
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-orange-600 mb-2">{value}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}