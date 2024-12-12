import React from 'react';
import { Building, Home } from 'lucide-react';

interface PropertyTypeSectionProps {
  propertyType: string;
  onChange: (value: string) => void;
}

const propertyTypes = [
  { id: 'flat', label: 'Flat/Apartment', icon: Building },
  { id: 'house', label: 'House', icon: Home },
  { id: 'studio', label: 'Studio', icon: Building },
  { id: 'other', label: 'Other', icon: Building }
];

export default function PropertyTypeSection({ propertyType, onChange }: PropertyTypeSectionProps) {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">What type of property do you have?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {propertyTypes.map(({ id, label, icon: Icon }) => (
          <label
            key={id}
            className={`
              relative flex flex-col items-center p-4 cursor-pointer rounded-lg border-2 
              ${propertyType === id 
                ? 'border-orange-600 bg-orange-50' 
                : 'border-gray-200 hover:border-orange-200'}
            `}
          >
            <input
              type="radio"
              name="propertyType"
              value={id}
              checked={propertyType === id}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <Icon className={`w-8 h-8 mb-2 ${
              propertyType === id ? 'text-orange-600' : 'text-gray-400'
            }`} />
            <span className="text-sm font-medium text-gray-900 text-center">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}