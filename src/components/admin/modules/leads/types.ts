import { Lead, LeadStage } from '../../../../types/lead';

export interface KanbanBoardProps {
  leads: Lead[];
  onDragEnd: (result: any) => void;
  onEdit: (lead: Lead) => void;
  onDelete: (id: string) => void;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  stage: LeadStage;
  notes: string;
}