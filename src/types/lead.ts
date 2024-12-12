export type LeadStage = 'intake' | 'contacted' | 'scheduled' | 'converted';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  stage: LeadStage;
  notes?: string;
  createdAt: string;
}