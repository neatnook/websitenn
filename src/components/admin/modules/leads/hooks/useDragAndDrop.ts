import { DropResult } from 'react-beautiful-dnd';
import { LeadStage } from '../../../../../types/lead';

export function useDragAndDrop(updateLeadStage: (id: string, stage: LeadStage) => void) {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || result.type !== 'LEAD') return;

    const { draggableId, destination } = result;
    const newStage = destination.droppableId as LeadStage;
    
    updateLeadStage(draggableId, newStage);
  };

  return { handleDragEnd };
}