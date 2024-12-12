import React from 'react';
import { FAQItem } from './FAQItem';
import { faqData } from './faqData';

export default function FAQ() {
  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {faqData.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
}