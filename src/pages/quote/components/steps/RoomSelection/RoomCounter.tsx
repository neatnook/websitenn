import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RoomCounterProps {
  id: string;
  label: string;
  icon: LucideIcon;
  count: number;
  onChange: (value: number) => void;
  max?: number;
}

export default function RoomCounter({
  id,
  label,
  icon: Icon,
  count,
  onChange,
  max = 10
}: RoomCounterProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Icon className="w-5 h-5 text-gray-400 mr-2" />
          <span className="font-medium text-gray-900">{label}</span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => onChange(Math.max(0, count - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
              text-gray-500 hover:bg-gray-50"
            disabled={count <= 0}
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{count}</span>
          <button
            type="button"
            onClick={() => onChange(Math.min(max, count + 1))}
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