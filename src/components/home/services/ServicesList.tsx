import React from 'react';
import { Home, Sparkles, Calendar } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Home,
    title: 'Regular House Cleaning',
    description: 'A professional cleaning service tailored to keep your home sparkling and tidy for everyday comfort.',
    path: '/services/house-cleaning',
    price: 'From £18/hr'
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom cleaning that tackles hidden dirt and grime in every corner of your home.',
    path: '/services/deep-cleaning',
    price: 'From £25/hr'
  },
  {
    icon: Calendar,
    title: 'End of Tenancy',
    description: 'Comprehensive cleaning designed to meet tenancy standards, ensuring a smooth move-out process.',
    path: '/services/end-of-tenancy',
    price: 'From £180'
  }
];

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}