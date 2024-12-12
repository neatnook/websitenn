import React from 'react';
import { Sparkles } from 'lucide-react';
import StepsList from './StepsList';

export default function HowItWorks() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-[#fdba74] px-6 py-4">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          How It Works
        </h2>
      </div>

      {/* Content */}
      <div className="p-6">
        <StepsList />
      </div>
    </div>
  );
}