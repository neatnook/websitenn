import { useState, useCallback } from 'react';
import { Lead } from '../../../../../types/lead';
import { LeadFormData } from '../types';

export function useLeadForm(lead: Lead | null | undefined, onSubmit: (data: LeadFormData) => void) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: lead?.name || '',
    email: lead?.email || '',
    phone: lead?.phone || '',
    service: lead?.service || 'house-cleaning',
    stage: lead?.stage || 'intake',
    notes: lead?.notes || ''
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  }, [formData, onSubmit]);

  const handleChange = useCallback((field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  return {
    formData,
    handleSubmit,
    handleChange
  };
}