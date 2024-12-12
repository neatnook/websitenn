import React from 'react';
import ServicesHeader from './ServicesHeader';
import ServicesList from './ServicesList';
import TestimonialsCarousel from '../TestimonialsCarousel';

export default function Services() {
  return (
    <>
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesHeader />
          <ServicesList />
        </div>
      </div>
      <TestimonialsCarousel />
    </>
  );
}