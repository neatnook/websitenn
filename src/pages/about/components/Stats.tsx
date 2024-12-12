import React from 'react';

const stats = [
  { label: 'Happy Clients', value: '1000+' },
  { label: 'Cleanings Completed', value: '5000+' },
  { label: 'Team Members', value: '25+' },
  { label: 'Years in Business', value: '4+' }
];

export default function Stats() {
  return (
    <div className="bg-orange-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-bold text-white">{value}</div>
              <div className="mt-2 text-sm text-orange-100">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}