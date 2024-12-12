import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5" />
      <div className="relative px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-orange-600" />
              How It Works
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Get your home sparkling clean in 3 simple steps
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
              100% Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}