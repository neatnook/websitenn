import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  isLast: boolean;
}

export default function Step({
  icon: Icon,
  title,
  description,
  color,
  iconBg,
  isLast
}: StepProps) {
  return (
    <div className="relative group">
      <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50">
        {/* Icon Circle with Animation */}
        <div className={`relative flex-shrink-0 w-14 h-14 rounded-xl ${color} 
          transition-all duration-300 group-hover:scale-105 group-hover:rotate-3`}>
          <div className={`absolute inset-0 ${iconBg} rounded-xl opacity-0 
            group-hover:opacity-100 transition-opacity duration-300`} />
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Icon className="w-7 h-7 text-current group-hover:text-white transition-colors duration-300" />
          </div>
        </div>

        {/* Content with Hover Effect */}
        <div className="flex-grow transform transition-all duration-300 group-hover:translate-x-2">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}