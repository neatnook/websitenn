import React from 'react';
import { 
  Utensils,
  Refrigerator,
  Waves,
  Wind,
  KanbanSquare,
  Blinds,
  Grid,
  DoorClosed
} from 'lucide-react';
import { QuoteFormData } from '../../types';
import Tooltip from '../../../../components/common/Tooltip';

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
    tooltip: 'Deep cleaning of a double oven unit or range cooker'
  },
  {
    id: 'rangeOven',
    label: 'Range Oven',
    icon: Utensils,
    tooltip: 'Comprehensive cleaning of range style ovens'
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
    id: 'hob',
    label: 'Hob',
    icon: Utensils,
    tooltip: 'Detailed cleaning of stovetop/hob surface and controls'
  },
  {
    id: 'chimney',
    label: 'Chimney',
    icon: Wind,
    tooltip: 'Cleaning of kitchen extractor fan/chimney'
  },
  {
    id: 'kitchenCabinets',
    label: 'Kitchen Cabinets',
    icon: KanbanSquare,
    tooltip: 'Deep cleaning inside and outside of kitchen cabinets'
  }
];

interface CounterProps {
  icon: typeof Grid;
  label: string;
  tooltip: string;
  count: number;
  onChange: (change: number) => void;
  max?: number;
}

function Counter({ icon: Icon, label, tooltip, count, onChange, max = 20 }: CounterProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon className="w-5 h-5 text-gray-400 mr-2" />
          <Tooltip content={tooltip}>
            <span className="font-medium text-gray-900">{label}</span>
          </Tooltip>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => onChange(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
              text-gray-500 hover:bg-gray-50"
            disabled={count <= 0}
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{count}</span>
          <button
            type="button"
            onClick={() => onChange(1)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
              text-gray-500 hover:bg-gray-50"
            disabled={count >= max}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

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

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Additional Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Counter
            icon={Grid}
            label="Interior Windows"
            tooltip="Interior window cleaning including frames and sills"
            count={formData.windowCount || 0}
            onChange={(change) => handleCountChange('windowCount', change)}
          />
          <Counter
            icon={Blinds}
            label="Window Blinds"
            tooltip="Detailed cleaning of window blinds"
            count={formData.blindCount || 0}
            onChange={(change) => handleCountChange('blindCount', change)}
          />
          <Counter
            icon={DoorClosed}
            label="Interior Doors"
            tooltip="Cleaning of interior doors including frames and handles"
            count={formData.doorCount || 0}
            onChange={(change) => handleCountChange('doorCount', change)}
          />
        </div>
      </div>
    </div>
  );
}