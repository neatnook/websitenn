import React from 'react';
import { Edit2, Trash2, Phone, Mail } from 'lucide-react';
import { formatRelativeTime } from '../../../utils/dates';
import { Lead } from '../../../types/lead';

interface LeadCardProps {
  lead: Lead;
  provided: any;
  onEdit: () => void;
  onDelete: () => void;
}

export default function LeadCard({ lead, provided, onEdit, onDelete }: LeadCardProps) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-gray-900">{lead.name}</h4>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="text-blue-600 hover:text-blue-700"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="mt-2 space-y-1">
        <a
          href={`mailto:${lead.email}`}
          className="flex items-center text-sm text-gray-600 hover:text-orange-600"
        >
          <Mail className="w-4 h-4 mr-1" />
          {lead.email}
        </a>
        <a
          href={`tel:${lead.phone}`}
          className="flex items-center text-sm text-gray-600 hover:text-orange-600"
        >
          <Phone className="w-4 h-4 mr-1" />
          {lead.phone}
        </a>
      </div>
      
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {formatRelativeTime(lead.createdAt)}
        </span>
        <span className="text-xs font-medium text-orange-600">
          {lead.service.replace('-', ' ')}
        </span>
      </div>
    </div>
  );
}