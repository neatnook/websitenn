import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import LeadCard from './LeadCard';
import { Lead } from '../../../types/lead';

interface KanbanColumnProps {
  stage: {
    id: string;
    label: string;
    color: string;
  };
  leads: Lead[];
  provided: any;
  onEdit: (lead: Lead) => void;
  onDelete: (id: string) => void;
}

export default function KanbanColumn({ 
  stage, 
  leads, 
  provided, 
  onEdit, 
  onDelete 
}: KanbanColumnProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-900">{stage.label}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${stage.color}`}>
          {leads.length}
        </span>
      </div>
      
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="space-y-4"
      >
        {leads.map((lead, index) => (
          <Draggable key={lead.id} draggableId={lead.id} index={index}>
            {(provided) => (
              <LeadCard
                lead={lead}
                provided={provided}
                onEdit={() => onEdit(lead)}
                onDelete={() => onDelete(lead.id)}
              />
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    </div>
  );
}