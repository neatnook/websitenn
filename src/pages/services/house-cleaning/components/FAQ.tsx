import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: 'How often should I schedule regular cleaning?',
    answer: 'The frequency depends on your needs. Most clients choose weekly or bi-weekly cleaning to maintain a consistently clean home. Monthly cleaning is also available for lighter maintenance.'
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No, our professional cleaners bring all necessary cleaning supplies and equipment. We use eco-friendly products that are tough on dirt but gentle on surfaces.'
  },
  {
    question: 'How long does a regular cleaning take?',
    answer: 'A typical cleaning session takes 2-3 hours for a standard-sized home. The exact duration depends on the size of your home and its condition.'
  },
  {
    question: 'Can I trust your cleaners in my home?',
    answer: 'Absolutely. All our cleaners undergo thorough background checks, are fully insured, and have been trained to our high standards. Your security and peace of mind are our top priorities.'
  }
];

export default function FAQ() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about our house cleaning service</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
}