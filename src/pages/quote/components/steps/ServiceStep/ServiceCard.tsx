import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function ServiceCard({ 
  id, 
  title, 
  description, 
  icon: Icon, 
  isSelected, 
  onSelect 
}: ServiceCardProps) {
  return (
    <label
      className={`relative flex flex-col p-4 cursor-pointer rounded-lg border-2 
        transition-all duration-300
        ${isSelected 
          ? 'border-orange-600 bg-orange-50 transform scale-[0.98]' 
          : 'border-gray-200 hover:border-orange-200 hover:bg-orange-50/10'}`}
    >
      <input
        type="radio"
        name="service"
        value={id}
        checked={isSelected}
        onChange={() => onSelect(id)}
        className="sr-only"
      />
      <div className="flex items-center mb-2">
        <Icon className={`w-6 h-6 ${isSelected ? 'text-orange-600' : 'text-gray-400'}`} />
        <span className="ml-3 font-medium text-gray-900">{title}</span>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </label>
  );
}