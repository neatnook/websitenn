import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

export default function ActionButton({ 
  icon: Icon, 
  label, 
  onClick, 
  variant = 'primary' 
}: ActionButtonProps) {
  const baseStyles = "inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors";
  const variantStyles = {
    primary: "border-transparent text-white bg-orange-600 hover:bg-orange-700",
    secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
    danger: "border-transparent text-white bg-red-600 hover:bg-red-700"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </button>
  );
}