import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

interface LeadActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function LeadActions({ onEdit, onDelete }: LeadActionsProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onEdit}
        className="text-blue-600 hover:text-blue-700"
        aria-label="Edit lead"
      >
        <Edit2 className="w-4 h-4" />
      </button>
      <button
        onClick={onDelete}
        className="text-red-600 hover:text-red-700"
        aria-label="Delete lead"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}