import React from 'react';
import { Shield, Heart, Star, Clock, Users, Leaf } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building trust through reliability and transparency'
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'Treating every home with the utmost care and respect'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Maintaining the highest standards in everything we do'
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description: 'Respecting your time with reliable scheduling'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Contributing positively to our local community'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Using eco-friendly products and practices'
  }
];

export default function Values() {
  return (
    <div className="bg-orange-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do at NeatNook, from how we train our team 
            to how we interact with our clients.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <Icon className="h-8 w-8 text-orange-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}