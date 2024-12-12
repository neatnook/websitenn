import React from 'react';
import { Lead } from '../../../../../types/lead';
import { SERVICE_OPTIONS, LEAD_STAGES } from '../constants';
import { useLeadForm } from '../hooks/useLeadForm';
import FormField from '../../../../common/FormField';

interface LeadFormProps {
  lead?: Lead | null;
  onSubmit: (data: Omit<Lead, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

export default function LeadForm({ lead, onSubmit, onCancel }: LeadFormProps) {
  const { formData, handleSubmit, handleChange } = useLeadForm(lead, onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Name"
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        required
      />

      <FormField
        label="Email"
        type="email"
        id="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        required
      />

      <FormField
        label="Phone"
        type="tel"
        id="phone"
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        required
      />

      <FormField
        label="Service"
        type="select"
        id="service"
        value={formData.service}
        onChange={(e) => handleChange('service', e.target.value)}
        options={SERVICE_OPTIONS}
      />

      <FormField
        label="Stage"
        type="select"
        id="stage"
        value={formData.stage}
        onChange={(e) => handleChange('stage', e.target.value)}
        options={LEAD_STAGES.map(stage => ({
          value: stage.id,
          label: stage.label
        }))}
      />

      <FormField
        label="Notes"
        type="textarea"
        id="notes"
        value={formData.notes}
        onChange={(e) => handleChange('notes', e.target.value)}
        rows={3}
      />

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
        >
          {lead ? 'Update Lead' : 'Add Lead'}
        </button>
      </div>
    </form>
  );
}