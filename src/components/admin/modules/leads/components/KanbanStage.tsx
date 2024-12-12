import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import KanbanColumn from './KanbanColumn';
import { Lead } from '../../../../../types/lead';

interface KanbanStageProps {
  stageId: string;
  stageLabel: string;
  stageColor: string;
  leads: Lead[];
  onEdit: (lead: Lead) => void;
  onDelete: (id: string) => void;
}

const KanbanStage = React.memo(function KanbanStage({ 
  stageId, 
  stageLabel, 
  stageColor, 
  leads, 
  onEdit, 
  onDelete 
}: KanbanStageProps) {
  return (
    <Droppable droppableId={stageId} type="LEAD">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-gray-50 rounded-lg p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">{stageLabel}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${stageColor}`}>
              {leads.length}
            </span>
          </div>
          
          <div className="space-y-4">
            {leads.map((lead, index) => (
              <KanbanColumn
                key={lead.id}
                lead={lead}
                index={index}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
});

export default KanbanStage;