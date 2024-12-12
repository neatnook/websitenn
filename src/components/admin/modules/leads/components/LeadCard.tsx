import React from 'react';
import { Lead } from '../../../../../types/lead';
import LeadCardContent from './LeadCardContent';
import LeadCardActions from './LeadCardActions';

interface LeadCardProps {
  lead: Lead;
  provided: any;
  onEdit: () => void;
  onDelete: () => void;
}

export default React.memo(function LeadCard({ lead, provided, onEdit, onDelete }: LeadCardProps) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-gray-900">{lead.name}</h4>
        <LeadCardActions onEdit={onEdit} onDelete={onDelete} />
      </div>
      <LeadCardContent lead={lead} />
    </div>
  );
});