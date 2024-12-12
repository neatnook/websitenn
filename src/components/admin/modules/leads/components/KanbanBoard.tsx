import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import KanbanStage from './KanbanStage';
import { Lead } from '../../../../../types/lead';
import { LEAD_STAGES } from '../constants';

interface KanbanBoardProps {
  leads: Lead[];
  onDragEnd: (result: DropResult) => void;
  onEdit: (lead: Lead) => void;
  onDelete: (id: string) => void;
}

export default React.memo(function KanbanBoard({ leads, onDragEnd, onEdit, onDelete }: KanbanBoardProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {LEAD_STAGES.map((stage) => {
          const columnLeads = leads.filter(lead => lead.stage === stage.id);
          
          return (
            <KanbanStage
              key={stage.id}
              stageId={stage.id}
              stageLabel={stage.label}
              stageColor={stage.color}
              leads={columnLeads}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
});