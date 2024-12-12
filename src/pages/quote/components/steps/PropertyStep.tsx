import React from 'react';
import { Home, Bath, DoorOpen } from 'lucide-react';
import { QuoteFormData } from '../../types';

interface PropertyStepProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

export default function PropertyStep({ formData, onChange }: PropertyStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Property Details</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <DoorOpen className="w-5 h-5 mr-2 text-gray-400" />
              Number of Bedrooms
            </div>
          </label>
          <select
            value={formData.bedrooms}
            onChange={(e) => onChange({ bedrooms: Number(e.target.value) })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Bedroom' : 'Bedrooms'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-2 text-gray-400" />
              Number of Bathrooms
            </div>
          </label>
          <select
            value={formData.bathrooms}
            onChange={(e) => onChange({ bathrooms: Number(e.target.value) })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Bathroom' : 'Bathrooms'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center">
            <Home className="w-5 h-5 mr-2 text-gray-400" />
            Property Type
          </div>
        </label>
        <select
          value={formData.propertyType}
          onChange={(e) => onChange({ propertyType: e.target.value })}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        >
          <option value="house">House</option>
          <option value="flat">Flat/Apartment</option>
          <option value="bungalow">Bungalow</option>
          <option value="office">Office</option>
        </select>
      </div>
    </div>
  );
}