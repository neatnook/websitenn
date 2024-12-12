import React from 'react';
import { QuoteFormData } from '../../types';
import PropertyTypeSection from './sections/PropertyTypeSection';
import RoomsSection from './sections/RoomsSection';
import AdditionalServices from './sections/AdditionalServices';
import CarpetCleaning from './sections/CarpetCleaning';
import OvenSelection from './sections/OvenSelection';

interface RoomSelectionProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

export default function RoomSelection({ formData, onChange }: RoomSelectionProps) {
  // Only show additional options for deep cleaning and end of tenancy
  const showAdditionalOptions = formData.service !== 'regular';
  const isOvenCleaning = formData.service === 'oven';

  if (isOvenCleaning) {
    return (
      <div className="space-y-8">
        <OvenSelection formData={formData} onChange={onChange} />
        
        {/* Optional Notes Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Notes</h3>
          <textarea
            value={formData.notes || ''}
            onChange={(e) => onChange({ notes: e.target.value })}
            placeholder="Any specific instructions or concerns about your oven..."
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            rows={4}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Property Type Selection - Always shown */}
      <PropertyTypeSection
        propertyType={formData.propertyType}
        onChange={(propertyType) => onChange({ propertyType })}
      />

      {/* Furnishing Status - Only for deep cleaning and end of tenancy */}
      {showAdditionalOptions && formData.service !== 'regular' && (
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Furnishing Status</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['furnished', 'unfurnished', 'semi-furnished'].map((status) => (
              <label
                key={status}
                className={`
                  relative flex flex-col items-center p-4 cursor-pointer rounded-lg border-2 
                  ${formData.furnishingStatus === status 
                    ? 'border-orange-600 bg-orange-50' 
                    : 'border-gray-200 hover:border-orange-200'}
                `}
              >
                <input
                  type="radio"
                  name="furnishingStatus"
                  value={status}
                  checked={formData.furnishingStatus === status}
                  onChange={(e) => onChange({ furnishingStatus: e.target.value })}
                  className="sr-only"
                />
                <span className="text-sm font-medium text-gray-900 text-center">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Rooms Selection - Always shown except for oven cleaning */}
      <RoomsSection
        formData={formData}
        onChange={onChange}
      />

      {/* Additional Services - Only for deep cleaning and end of tenancy */}
      {showAdditionalOptions && formData.service !== 'regular' && (
        <>
          <AdditionalServices formData={formData} onChange={onChange} />
          <CarpetCleaning formData={formData} onChange={onChange} />
        </>
      )}
    </div>
  );
}