import React from 'react';

interface AdditionalNotesProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AdditionalNotes({ value, onChange }: AdditionalNotesProps) {
  return (
    <div>
      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
        Additional Notes
      </label>
      <textarea
        id="notes"
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        placeholder="Any special requirements or instructions..."
      />
    </div>
  );
}