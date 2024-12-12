import React from 'react';
import { Shield, Clock, Star } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Trusted & Vetted Cleaners',
    description: 'All our cleaners undergo thorough background checks and training'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Weekly, bi-weekly, or monthly cleaning to suit your needs'
  },
  {
    icon: Star,
    title: 'Satisfaction Guaranteed',
    description: 'Not happy? We\'ll re-clean any areas you\'re not satisfied with'
  }
];

export default function Features() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose NeatNook</h2>
          <p className="text-lg text-gray-600">Experience the difference of professional cleaning</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}