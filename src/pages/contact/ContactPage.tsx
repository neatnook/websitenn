import React from 'react';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FAQ from './components/FAQ';

export default function ContactPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <FAQ />
    </div>
  );
}