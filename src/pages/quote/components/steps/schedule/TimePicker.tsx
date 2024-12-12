import React from 'react';
import { Clock } from 'lucide-react';

interface TimePickerProps {
  selectedTime: string;
  onChange: (time: string) => void;
}

const timeSlots = [
  { value: '09:00', label: '9:00 AM', period: 'Morning' },
  { value: '10:00', label: '10:00 AM', period: 'Morning' },
  { value: '11:00', label: '11:00 AM', period: 'Morning' },
  { value: '12:00', label: '12:00 PM', period: 'Afternoon' },
  { value: '13:00', label: '1:00 PM', period: 'Afternoon' },
  { value: '14:00', label: '2:00 PM', period: 'Afternoon' },
  { value: '15:00', label: '3:00 PM', period: 'Afternoon' },
  { value: '16:00', label: '4:00 PM', period: 'Afternoon' },
  { value: '17:00', label: '5:00 PM', period: 'Afternoon' }
];

const periods = ['Morning', 'Afternoon'];

export default function TimePicker({ selectedTime, onChange }: TimePickerProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-gray-400" />
          Preferred Time
        </div>
      </label>

      <div className="space-y-4">
        {periods.map(period => (
          <div key={period}>
            <h4 className="text-sm font-medium text-gray-500 mb-2">{period}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots
                .filter(slot => slot.period === period)
                .map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => onChange(value)}
                    className={`
                      py-3 px-4 rounded-lg text-sm font-medium transition-colors relative
                      ${selectedTime === value
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}
                    `}
                  >
                    {label}
                    {selectedTime === value && (
                      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                        <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      </div>
                    )}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500 flex items-center">
        <Clock className="w-4 h-4 mr-1" />
        All times are in local time (GMT/BST)
      </div>
    </div>
  );
}