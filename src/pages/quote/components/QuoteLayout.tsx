import React from 'react';
import QuoteForm from './QuoteForm';

export default function QuoteLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your cleaning needs and we'll provide you with an instant quote.
            Book your professional cleaning service in minutes.
          </p>
        </div>

        <QuoteForm />
      </div>
    </div>
  );
}