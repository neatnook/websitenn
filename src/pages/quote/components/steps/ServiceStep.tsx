import React from 'react';
import { Sparkles, Home, Calendar, Timer } from 'lucide-react';
import { QuoteFormData } from '../../types';

interface ServiceStepProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
  onComplete?: () => void; // Add onComplete prop
}

const services = [
  {
    id: 'regular',
    title: 'Regular Cleaning',
    description: 'Recurring cleaning service',
    icon: Home
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    description: 'Thorough deep clean',
    icon: Sparkles
  },
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy',
    description: 'Moving in/out cleaning',
    icon: Calendar
  },
  {
    id: 'oven',
    title: 'Oven Cleaning',
    description: 'Professional oven clean',
    icon: Timer
  }
];

export default function ServiceStep({ formData, onChange, onComplete }: ServiceStepProps) {
  const handleServiceSelect = (serviceId: string) => {
    onChange({ service: serviceId });
    // Auto-advance after a brief delay for visual feedback
    setTimeout(() => {
      onComplete?.();
    }, 300);
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Select Service Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <label
              key={service.id}
              className={`relative flex flex-col p-4 cursor-pointer rounded-lg border-2 
                transition-all duration-300
                ${formData.service === service.id 
                  ? 'border-orange-600 bg-orange-50 transform scale-[0.98]' 
                  : 'border-gray-200 hover:border-orange-200 hover:bg-orange-50/10'}`}
            >
              <input
                type="radio"
                name="service"
                value={service.id}
                checked={formData.service === service.id}
                onChange={() => handleServiceSelect(service.id)}
                className="sr-only"
              />
              <div className="flex items-center mb-2">
                <Icon className={`w-6 h-6 ${formData.service === service.id ? 'text-orange-600' : 'text-gray-400'}`} />
                <span className="ml-3 font-medium text-gray-900">{service.title}</span>
              </div>
              <p className="text-sm text-gray-500">{service.description}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
}