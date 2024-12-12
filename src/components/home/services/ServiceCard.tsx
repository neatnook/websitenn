import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  price: string;
}

export default function ServiceCard({ title, description, icon: Icon, path, price }: ServiceCardProps) {
  return (
    <Link 
      to={path}
      className="group relative flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
        transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-600 
          text-white shadow-lg group-hover:scale-110 transition-transform">
          <Icon className="h-7 w-7" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>

        {/* Description */}
        <p className="mt-4 text-base text-gray-600 leading-relaxed">{description}</p>

        {/* Price */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-medium text-orange-600">{price}</span>
          <span className="text-sm text-gray-500 group-hover:text-orange-600 transition-colors">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
}