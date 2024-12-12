import React from 'react';
import { CalendarCheck, Sparkles, Coffee } from 'lucide-react';
import Step from './Step';

const steps = [
  {
    icon: CalendarCheck,
    title: 'BOOK',
    description: 'Choose your ideal time and service.',
    color: 'bg-blue-50 text-blue-600',
    iconBg: 'bg-blue-600'
  },
  {
    icon: Sparkles,
    title: 'CLEAN',
    description: 'Once confirmed, we will arrive ready to clean with all supplies!',
    color: 'bg-orange-50 text-orange-600',
    iconBg: 'bg-orange-600'
  },
  {
    icon: Coffee,
    title: 'SIT BACK & RELAX',
    description: 'Enjoy your clean home backed by our 100% satisfaction guarantee!',
    color: 'bg-green-50 text-green-600',
    iconBg: 'bg-green-600'
  }
];

export default function StepsList() {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <Step
          key={index}
          {...step}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}