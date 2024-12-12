import React from 'react';
import { 
  Utensils, Refrigerator, Waves, Wind, 
  KanbanSquare, Grid, DoorClosed, Blinds,
  Key
} from 'lucide-react';
import { QuoteFormData } from '../../../types';
import Tooltip from '../../../../../components/common/Tooltip';

interface AdditionalServicesProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

const additionalServices = [
  {
    id: 'singleOven',
    label: 'Single Oven',
    icon: Utensils,
    tooltip: 'Deep cleaning of a standard single oven unit'
  },
  {
    id: 'doubleOven',
    label: 'Double Oven',
    icon: Utensils,
    tooltip: 'Deep cleaning of a double oven unit'
  },
  {
    id: 'rangeOven',
    label: 'Range Oven',
    icon: Utensils,
    tooltip: 'Deep cleaning of range style ovens (e.g., AGA, Rangemaster)'
  },
  {
    id: 'fridge',
    label: 'Fridge',
    icon: Refrigerator,
    tooltip: 'Interior and exterior cleaning of your refrigerator'
  },
  {
    id: 'washingMachine',
    label: 'Washing Machine',
    icon: Waves,
    tooltip: 'Deep clean of washing machine including drawer and seal'
  },
  {
    id: 'dishwasher',
    label: 'Dishwasher',
    icon: Waves,
    tooltip: 'Thorough cleaning of dishwasher including filters'
  },
  {
    id: 'kitchenCabinets',
    label: 'Kitchen Cabinets',
    icon: KanbanSquare,
    tooltip: 'Deep cleaning inside and outside of kitchen cabinets'
  }
];

const keyServices = [
  {
    id: 'keyPickup',
    label: 'Key Pickup',
    icon: Key,
    tooltip: 'We can collect your keys before the service'
  },
  {
    id: 'keyDropoff',
    label: 'Key Dropoff',
    icon: Key,
    tooltip: 'We can return your keys after the service'
  }
];

const additionalItems = [
  {
    id: 'windowCount',
    label: 'Interior Windows',
    icon: Grid,
    tooltip: 'Interior window cleaning including frames and sills'
  },
  {
    id: 'blindCount',
    label: 'Window Blinds',
    icon: Blinds,
    tooltip: 'Detailed cleaning of window blinds'
  },
  {
    id: 'doorCount',
    label: 'Interior Doors',
    icon: DoorClosed,
    tooltip: 'Cleaning of interior doors including frames and handles'
  }
];

export default function AdditionalServices({ formData, onChange }: AdditionalServicesProps) {
  const handleServiceToggle = (serviceId: string) => {
    onChange({
      additionalServices: {
        ...formData.additionalServices,
        [serviceId]: !formData.additionalServices?.[serviceId]
      }
    });
  };

  const handleCountChange = (field: 'windowCount' | 'blindCount' | 'doorCount', change: number) => {
    const currentCount = formData[field] || 0;
    const newCount = Math.max(0, Math.min(20, currentCount + change));
    onChange({ [field]: newCount });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Additional Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalServices.map(({ id, label, icon: Icon, tooltip }) => (
            <Tooltip key={id} content={tooltip}>
              <label className={`
                relative flex items-center p-4 cursor-pointer rounded-lg border-2
                ${formData.additionalServices?.[id] 
                  ? 'border-orange-600 bg-orange-50' 
                  : 'border-gray-200 hover:border-orange-200'}
              `}>
                <input
                  type="checkbox"
                  checked={formData.additionalServices?.[id] || false}
                  onChange={() => handleServiceToggle(id)}
                  className="sr-only"
                />
                <Icon className={`w-5 h-5 mr-3 ${
                  formData.additionalServices?.[id] ? 'text-orange-600' : 'text-gray-400'
                }`} />
                <span className="text-sm font-medium text-gray-900">{label}</span>
              </label>
            </Tooltip>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Key Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {keyServices.map(({ id, label, icon: Icon, tooltip }) => (
            <Tooltip key={id} content={tooltip}>
              <label className={`
                relative flex items-center p-4 cursor-pointer rounded-lg border-2
                ${formData.additionalServices?.[id] 
                  ? 'border-orange-600 bg-orange-50' 
                  : 'border-gray-200 hover:border-orange-200'}
              `}>
                <input
                  type="checkbox"
                  checked={formData.additionalServices?.[id] || false}
                  onChange={() => handleServiceToggle(id)}
                  className="sr-only"
                />
                <Icon className={`w-5 h-5 mr-3 ${
                  formData.additionalServices?.[id] ? 'text-orange-600' : 'text-gray-400'
                }`} />
                <span className="text-sm font-medium text-gray-900">{label}</span>
              </label>
            </Tooltip>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {additionalItems.map(({ id, label, icon: Icon, tooltip }) => (
            <div key={id} className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <Tooltip content={tooltip}>
                  <div className="flex items-center">
                    <Icon className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="font-medium text-gray-900">{label}</span>
                  </div>
                </Tooltip>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => handleCountChange(id as any, -1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
                      text-gray-500 hover:bg-gray-50"
                    disabled={!formData[id as keyof QuoteFormData]}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">
                    {formData[id as keyof QuoteFormData] || 0}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCountChange(id as any, 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
                      text-gray-500 hover:bg-gray-50"
                    disabled={(formData[id as keyof QuoteFormData] as number) >= 20}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}