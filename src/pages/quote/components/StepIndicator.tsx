import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="relative flex flex-col items-center">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
              ${index <= currentStep 
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' 
                : 'bg-gray-100 text-gray-400'}
            `}>
              {index < currentStep ? (
                <Check className="w-6 h-6" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span className={`text-sm font-medium transition-colors duration-300 ${
                index <= currentStep ? 'text-orange-600' : 'text-gray-400'
              }`}>
                {step}
              </span>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-grow mx-4">
              <div className={`h-1 rounded-full transition-all duration-300 ${
                index < currentStep 
                  ? 'bg-orange-600' 
                  : index === currentStep 
                    ? 'bg-gradient-to-r from-orange-600 to-gray-200'
                    : 'bg-gray-200'
              }`} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}