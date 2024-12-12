import React from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';

interface ServiceTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const services = [
  {
    id: 'regular',
    title: 'Regular Clean',
    description: 'Our standard cleaning service',
    icon: RotateCcw,
    price: '£20/hour',
  },
  {
    id: 'deep',
    title: 'Deep Clean',
    description: 'Thorough cleaning of every nook and cranny',
    icon: Sparkles,
    price: '£25/hour',
  },
];

export default function ServiceTypeSelect({ value, onChange }: ServiceTypeSelectProps) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Select Service Type</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <label
              key={service.id}
              className={`relative flex flex-col p-4 cursor-pointer rounded-lg border-2 
                ${value === service.id 
                  ? 'border-orange-600 bg-orange-50' 
                  : 'border-gray-200 hover:border-orange-200'}`}
            >
              <input
                type="radio"
                name="serviceType"
                value={service.id}
                checked={value === service.id}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center mb-2">
                <Icon className={`w-6 h-6 ${value === service.id ? 'text-orange-600' : 'text-gray-400'}`} />
                <span className="ml-3 font-medium text-gray-900">{service.title}</span>
              </div>
              <p className="text-sm text-gray-500">{service.description}</p>
              <p className="mt-2 font-medium text-orange-600">{service.price}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
}