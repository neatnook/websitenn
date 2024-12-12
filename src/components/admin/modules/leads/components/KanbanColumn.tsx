import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import LeadCard from './LeadCard';
import { Lead } from '../../../../../types/lead';

interface KanbanColumnProps {
  lead: Lead;
  index: number;
  onEdit: (lead: Lead) => void;
  onDelete: (id: string) => void;
}

export default function KanbanColumn({ lead, index, onEdit, onDelete }: KanbanColumnProps) {
  return (
    <Draggable draggableId={lead.id} index={index}>
      {(provided) => (
        <LeadCard
          lead={lead}
          provided={provided}
          onEdit={() => onEdit(lead)}
          onDelete={() => onDelete(lead.id)}
        />
      )}
    </Draggable>
  );
}