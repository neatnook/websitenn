import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast: boolean;
}

export default function ProcessStep({ icon: Icon, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-600 text-white mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <ArrowRight className="w-6 h-6 text-orange-600" />
        </div>
      )}
    </div>
  );
}