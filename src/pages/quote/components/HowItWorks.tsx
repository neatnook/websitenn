import React from 'react';
import { CalendarCheck, Sparkles, Coffee, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'BOOK',
    description: 'Choose your ideal time and service.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Sparkles,
    title: 'CLEAN',
    description: 'Once confirmed, we will arrive ready to clean with all supplies!',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Coffee,
    title: 'SIT BACK & RELAX',
    description: 'Enjoy your clean home backed by our 100% satisfaction guarantee!',
    color: 'bg-green-100 text-green-600'
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          How It Works
        </h2>
      </div>

      {/* Steps */}
      <div className="p-6">
        <div className="space-y-8">
          {steps.map(({ icon: Icon, title, description, color }, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>

                {/* Step Number */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">{index + 1}</span>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 ml-[19px] top-12 bottom-0 w-[2px] h-8 bg-gray-200">
                  <ArrowRight className="absolute -bottom-1 -right-[7px] w-4 h-4 text-gray-300 transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-600">1000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}