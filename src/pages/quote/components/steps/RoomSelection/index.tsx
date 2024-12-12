import React from 'react';
import { QuoteFormData } from '../../../types';
import OvenSelection from './OvenSelection';
import RoomCounter from './RoomCounter';
import { roomTypes } from './roomData';

interface RoomSelectionProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

export default function RoomSelection({ formData, onChange }: RoomSelectionProps) {
  const isOvenCleaning = formData.service === 'oven';
  const isRegularCleaning = formData.service === 'regular';

  if (isOvenCleaning) {
    return <OvenSelection formData={formData} onChange={onChange} />;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Please choose the rooms to clean</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {roomTypes.map(({ id, label, icon, max }) => (
          <RoomCounter
            key={id}
            id={id}
            label={label}
            icon={icon}
            count={formData[id as keyof QuoteFormData] as number || 0}
            onChange={(value) => onChange({ [id]: value })}
            max={max}
          />
        ))}
      </div>

      {!isRegularCleaning && (
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Options</h3>
          {/* Additional options for deep cleaning and end of tenancy */}
        </div>
      )}
    </div>
  );
}