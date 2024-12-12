import React from 'react';
import { LucideIcon } from 'lucide-react';
import ActionButton from './ActionButton';

interface ActionHeaderProps {
  title: string;
  icon?: LucideIcon;
  actionLabel?: string;
  onAction?: () => void;
}

export default function ActionHeader({ 
  title, 
  icon: Icon, 
  actionLabel, 
  onAction 
}: ActionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        {Icon && <Icon className="w-6 h-6 text-orange-600 mr-2" />}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {actionLabel && onAction && (
        <ActionButton
          icon={Icon || (() => null)}
          label={actionLabel}
          onClick={onAction}
        />
      )}
    </div>
  );
}