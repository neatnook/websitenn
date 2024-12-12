import React from 'react';
import { QuoteFormData } from '../../../types';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';

interface ServiceStepProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
  onComplete?: () => void;
}

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
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            isSelected={formData.service === service.id}
            onSelect={handleServiceSelect}
          />
        ))}
      </div>
    </div>
  );
}