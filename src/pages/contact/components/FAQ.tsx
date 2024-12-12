import React from 'react';

const faqs = [
  {
    question: 'What areas do you cover?',
    answer: 'We currently serve Cambridge and surrounding areas within a 15-mile radius.'
  },
  {
    question: 'How do I book a cleaning service?',
    answer: 'You can book through our online booking system, by phone, or by sending us a message through the contact form.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require 24 hours notice for cancellations. Late cancellations may incur a fee.'
  },
  {
    question: 'Are your cleaners insured?',
    answer: 'Yes, all our cleaners are fully insured and have undergone thorough background checks.'
  }
];

export default function FAQ() {
  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}