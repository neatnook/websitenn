import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface ActionStatusProps {
  type: 'success' | 'error' | 'warning';
  message: string;
}

export default function ActionStatus({ type, message }: ActionStatusProps) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle
  };

  const styles = {
    success: 'bg-green-50 text-green-800',
    error: 'bg-red-50 text-red-800',
    warning: 'bg-yellow-50 text-yellow-800'
  };

  const Icon = icons[type];

  return (
    <div className={`rounded-md p-4 ${styles[type]}`}>
      <div className="flex">
        <Icon className="h-5 w-5 mr-3" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}