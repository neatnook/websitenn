import React from 'react';
import { Utensils } from 'lucide-react';
import { QuoteFormData } from '../../../types';
import { useOvenSelection } from '../../../hooks/useOvenSelection';
import Tooltip from '../../../../../components/common/Tooltip';

interface OvenSelectionProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

const ovenTypes = [
  {
    id: 'singleOven',
    label: 'Single Oven',
    tooltip: 'Deep cleaning of a standard single oven unit',
    price: '£65'
  },
  {
    id: 'doubleOven',
    label: 'Double Oven',
    tooltip: 'Deep cleaning of a double oven unit',
    price: '£95'
  },
  {
    id: 'rangeOven',
    label: 'Range Oven',
    tooltip: 'Deep cleaning of range style ovens (e.g., AGA, Rangemaster)',
    price: '£120'
  }
];

export default function OvenSelection({ formData, onChange }: OvenSelectionProps) {
  const { handleOvenSelect } = useOvenSelection(formData, onChange);

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Select Oven Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {ovenTypes.map(({ id, label, tooltip, price }) => (
          <Tooltip key={id} content={tooltip}>
            <label className={`
              relative flex flex-col p-4 cursor-pointer rounded-lg border-2
              ${formData.additionalServices?.[id] 
                ? 'border-orange-600 bg-orange-50' 
                : 'border-gray-200 hover:border-orange-200'}
            `}>
              <input
                type="radio"
                name="ovenType"
                checked={formData.additionalServices?.[id] || false}
                onChange={() => handleOvenSelect(id)}
                className="sr-only"
              />
              <div className="flex items-center mb-2">
                <Utensils className={`w-5 h-5 mr-3 ${
                  formData.additionalServices?.[id] ? 'text-orange-600' : 'text-gray-400'
                }`} />
                <span className="text-sm font-medium text-gray-900">{label}</span>
              </div>
              <div className="mt-2 text-sm font-medium text-orange-600">{price}</div>
            </label>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}