import { Lead, LeadStage } from '../../../../../types/lead';
import { LeadFormData } from '../types';

export function createLead(formData: LeadFormData): Omit<Lead, 'id'> {
  return {
    ...formData,
    createdAt: new Date().toISOString()
  };
}

export function updateLeadStageInList(
  leads: Lead[],
  leadId: string,
  newStage: LeadStage
): Lead[] {
  return leads.map(lead =>
    lead.id === leadId ? { ...lead, stage: newStage } : lead
  );
}