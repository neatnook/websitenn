import { Lead, LeadStage } from '../../../../types/lead';

export function handleDragEnd(
  result: any,
  leads: Lead[],
  updateLeadStage: (id: string, stage: LeadStage) => void
) {
  if (!result.destination) return;

  const { draggableId, destination } = result;
  const newStage = destination.droppableId as LeadStage;
  
  updateLeadStage(draggableId, newStage);
}