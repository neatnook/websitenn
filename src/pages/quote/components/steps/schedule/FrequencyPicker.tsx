import React from 'react';
import { Repeat, Calendar, ArrowLeftRight, Clock } from 'lucide-react';

interface FrequencyPickerProps {
  selectedFrequency: string;
  onChange: (frequency: string) => void;
}

const frequencies = [
  { 
    id: 'weekly', 
    label: 'Weekly',
    icon: Calendar,
    description: 'Most thorough clean with consistent service'
  },
  { 
    id: 'biweekly', 
    label: 'Bi-weekly',
    icon: ArrowLeftRight,
    description: 'Perfect balance of cleanliness and value'
  },
  { 
    id: 'monthly', 
    label: 'Monthly',
    icon: Calendar,
    description: 'Flexible maintenance cleaning'
  },
  { 
    id: 'one-time', 
    label: 'One-time',
    icon: Clock,
    description: 'Single deep cleaning service'
  }
];

export default function FrequencyPicker({ selectedFrequency, onChange }: FrequencyPickerProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        <div className="flex items-center">
          <Repeat className="w-5 h-5 mr-2 text-gray-400" />
          Cleaning Frequency
        </div>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {frequencies.map(({ id, label, icon: Icon, description }) => (
          <label
            key={id}
            className={`
              relative flex items-center p-3 cursor-pointer rounded-lg border-2 transition-all
              ${selectedFrequency === id 
                ? 'border-orange-600 bg-orange-50 ring-1 ring-orange-200' 
                : 'border-gray-200 hover:border-orange-200 hover:bg-orange-50/10'}
            `}
          >
            <input
              type="radio"
              name="frequency"
              value={id}
              checked={selectedFrequency === id}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />

            <div className={`
              p-2 rounded-lg mr-3 flex-shrink-0
              ${selectedFrequency === id ? 'bg-orange-100' : 'bg-gray-100'}
            `}>
              <Icon className={`w-5 h-5 ${
                selectedFrequency === id ? 'text-orange-600' : 'text-gray-500'
              }`} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-sm font-medium text-gray-900 truncate">{label}</span>
                {selectedFrequency === id && (
                  <div className="w-2 h-2 rounded-full bg-orange-600 ml-2 flex-shrink-0" />
                )}
              </div>
              <p className="text-xs text-gray-500 line-clamp-1">{description}</p>
            </div>
          </label>
        ))}
      </div>

      <p className="mt-3 text-xs text-gray-500 flex items-center">
        <Calendar className="w-4 h-4 mr-1.5" />
        You can modify or cancel your cleaning schedule anytime
      </p>
    </div>
  );
}