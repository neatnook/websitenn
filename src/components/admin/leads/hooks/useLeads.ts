import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Lead, LeadStage } from '../../../../types/lead';

const initialLeads: Lead[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    email: 'sarah@example.com',
    phone: '07123456789',
    service: 'house-cleaning',
    stage: 'intake',
    notes: 'Interested in weekly cleaning',
    createdAt: new Date().toISOString(),
  }
];

export function useLeads() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  const addLead = (leadData: Omit<Lead, 'id' | 'createdAt'>) => {
    const newLead: Lead = {
      id: Date.now().toString(),
      ...leadData,
      createdAt: new Date().toISOString()
    };
    setLeads([newLead, ...leads]);
    toast.success('Lead added successfully');
    return newLead;
  };

  const updateLead = (id: string, leadData: Partial<Lead>) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, ...leadData } : lead
    ));
    toast.success('Lead updated successfully');
  };

  const deleteLead = (id: string) => {
    setLeads(leads.filter(lead => lead.id !== id));
    toast.success('Lead deleted successfully');
  };

  const updateLeadStage = (id: string, stage: LeadStage) => {
    setLeads(leads.map(lead =>
      lead.id === id ? { ...lead, stage } : lead
    ));
    toast.success('Lead status updated');
  };

  return {
    leads,
    addLead,
    updateLead,
    deleteLead,
    updateLeadStage
  };
}