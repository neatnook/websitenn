import React from 'react';

interface FrequencySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const frequencies = [
  { id: 'one-time', label: 'One-time' },
  { id: 'weekly', label: 'Weekly' },
  { id: 'biweekly', label: 'Bi-weekly' },
  { id: 'monthly', label: 'Monthly' },
];

export default function FrequencySelect({ value, onChange }: FrequencySelectProps) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Cleaning Frequency</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {frequencies.map(({ id, label }) => (
          <label
            key={id}
            className={`relative flex items-center justify-center p-4 cursor-pointer rounded-lg border-2 
              ${value === id 
                ? 'border-orange-600 bg-orange-50' 
                : 'border-gray-200 hover:border-orange-200'}`}
          >
            <input
              type="radio"
              name="frequency"
              value={id}
              checked={value === id}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <span className="font-medium text-gray-900">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}