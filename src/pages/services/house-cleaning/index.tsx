import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';

export default function HouseCleaning() {
  return (
    <div className="pt-24 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <Hero />
      <Features />
      <HowItWorks />
      <Services />
      <FAQ />
      <CallToAction />
    </div>
  );
}