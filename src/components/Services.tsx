import React from 'react';
import { Sparkles, Calendar, Home, Clock, Shield, Star } from 'lucide-react';

const services = [
  {
    title: 'Regular Cleaning',
    description: 'Weekly or bi-weekly cleaning services tailored to your needs',
    icon: Home,
  },
  {
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of every nook and cranny',
    icon: Sparkles,
  },
  {
    title: 'Flexible Scheduling',
    description: 'Book cleanings at times that suit your schedule',
    icon: Calendar,
  },
  {
    title: 'Same-Day Service',
    description: 'Available for urgent cleaning needs',
    icon: Clock,
  },
  {
    title: 'Insured & Bonded',
    description: 'Your property is protected while we work',
    icon: Shield,
  },
  {
    title: 'Satisfaction Guaranteed',
    description: '100% satisfaction or we'll re-clean for free',
    icon: Star,
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional cleaning services customized to meet your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="mt-4 text-base text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}