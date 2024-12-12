import React from 'react';
import { Service } from '../../types/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative">
        <div className="flex items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg group-hover:scale-110 transition-transform">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.title}</h3>
        </div>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}