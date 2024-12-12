import React from 'react';
import { MapPin, Building, Home } from 'lucide-react';
import { QuoteFormData } from '../../../types';

interface AddressFieldsProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

export default function AddressFields({ formData, onChange }: AddressFieldsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Address Details</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Home className="w-5 h-5 mr-2 text-gray-400" />
              Address Line
            </div>
          </label>
          <input
            type="text"
            value={formData.addressLine1 || ''}
            onChange={(e) => onChange({ addressLine1: e.target.value })}
            placeholder="House number and street name"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2 text-gray-400" />
                City
              </div>
            </label>
            <input
              type="text"
              value={formData.city || ''}
              onChange={(e) => onChange({ city: e.target.value })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                Postcode
              </div>
            </label>
            <input
              type="text"
              value={formData.postcode}
              onChange={(e) => onChange({ postcode: e.target.value.toUpperCase() })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}