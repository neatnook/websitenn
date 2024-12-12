import React from 'react';
import { Brush } from 'lucide-react'; // Changed from Carpet to Brush
import { QuoteFormData } from '../../types';
import Tooltip from '../../../../components/common/Tooltip';

interface CarpetCleaningProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

const carpetRooms = [
  {
    id: 'singleBedrooms',
    label: 'Single Bedrooms',
    tooltip: 'Carpet cleaning for single bedrooms'
  },
  {
    id: 'doubleBedrooms',
    label: 'Double Bedrooms',
    tooltip: 'Carpet cleaning for double/master bedrooms'
  },
  {
    id: 'livingRooms',
    label: 'Living Rooms',
    tooltip: 'Carpet cleaning for living/sitting rooms'
  },
  {
    id: 'hallway',
    label: 'Hallway',
    tooltip: 'Carpet cleaning for hallways and corridors'
  },
  {
    id: 'stairs',
    label: 'Stairs',
    tooltip: 'Carpet cleaning for staircases'
  },
  {
    id: 'otherRooms',
    label: 'Other Rooms',
    tooltip: 'Carpet cleaning for additional rooms'
  }
];

export default function CarpetCleaning({ formData, onChange }: CarpetCleaningProps) {
  const handleCarpetCleaningToggle = () => {
    onChange({
      needsCarpetCleaning: !formData.needsCarpetCleaning,
      // Reset carpet room counts when disabling carpet cleaning
      carpetCleaning: !formData.needsCarpetCleaning ? {} : formData.carpetCleaning
    });
  };

  const handleRoomCountChange = (roomId: string, change: number) => {
    const currentCount = formData.carpetCleaning?.[roomId] || 0;
    const newCount = Math.max(0, Math.min(10, currentCount + change));
    
    onChange({
      carpetCleaning: {
        ...formData.carpetCleaning,
        [roomId]: newCount
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Carpet Cleaning</h2>
        <label className={`
          relative flex items-center p-4 cursor-pointer rounded-lg border-2
          ${formData.needsCarpetCleaning 
            ? 'border-orange-600 bg-orange-50' 
            : 'border-gray-200 hover:border-orange-200'}
        `}>
          <input
            type="checkbox"
            checked={formData.needsCarpetCleaning || false}
            onChange={handleCarpetCleaningToggle}
            className="sr-only"
          />
          <Brush className={`w-5 h-5 mr-3 ${
            formData.needsCarpetCleaning ? 'text-orange-600' : 'text-gray-400'
          }`} />
          <span className="text-sm font-medium text-gray-900">
            Do you need carpet shampoo cleaning?
          </span>
        </label>
      </div>

      {formData.needsCarpetCleaning && (
        <div className="space-y-4 pt-4">
          <h3 className="text-md font-medium text-gray-900">Select rooms for carpet cleaning:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {carpetRooms.map(({ id, label, tooltip }) => (
              <div key={id} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <Tooltip content={tooltip}>
                    <span className="font-medium text-gray-900">{label}</span>
                  </Tooltip>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => handleRoomCountChange(id, -1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
                        text-gray-500 hover:bg-gray-50"
                      disabled={!formData.carpetCleaning?.[id]}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">
                      {formData.carpetCleaning?.[id] || 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRoomCountChange(id, 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
                        text-gray-500 hover:bg-gray-50"
                      disabled={formData.carpetCleaning?.[id] >= 10}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}