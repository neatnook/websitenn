import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import KanbanColumn from './KanbanColumn';
import { Lead } from '../../../types/lead';

interface KanbanBoardProps {
  leads: Lead[];
  onDragEnd: (result: any) => void;
  onEdit: (lead: Lead) => void;
  onDelete: (id: string) => void;
}

const stages = [
  { id: 'intake', label: 'Intake', color: 'bg-blue-100 text-blue-800' },
  { id: 'contacted', label: 'Contacted', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'scheduled', label: 'Scheduled', color: 'bg-green-100 text-green-800' },
  { id: 'converted', label: 'Converted', color: 'bg-purple-100 text-purple-800' }
] as const;

export default function KanbanBoard({ leads, onDragEnd, onEdit, onDelete }: KanbanBoardProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((stage) => (
          <Droppable key={stage.id} droppableId={stage.id}>
            {(provided) => (
              <KanbanColumn
                stage={stage}
                leads={leads.filter(lead => lead.stage === stage.id)}
                provided={provided}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}