import React from 'react';
import { Home } from 'lucide-react';

interface PropertyDetailsProps {
  bedrooms: number;
  bathrooms: number;
  onBedroomsChange: (value: number) => void;
  onBathroomsChange: (value: number) => void;
}

export default function PropertyDetails({
  bedrooms,
  bathrooms,
  onBedroomsChange,
  onBathroomsChange,
}: PropertyDetailsProps) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Property Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => onBedroomsChange(Number(e.target.value))}
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
            Number of Bathrooms
          </label>
          <select
            value={bathrooms}
            onChange={(e) => onBathroomsChange(Number(e.target.value))}
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
    </div>
  );
}