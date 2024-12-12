import React from 'react';
import { Lead } from '../../../../types/lead';
import LeadForm from './LeadForm';

interface LeadModalProps {
  lead?: Lead | null;
  onSubmit: (data: Omit<Lead, 'id' | 'createdAt'>) => void;
  onClose: () => void;
}

export default function LeadModal({ lead, onSubmit, onClose }: LeadModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-semibold mb-4">
          {lead ? 'Edit Lead' : 'Add New Lead'}
        </h2>
        <LeadForm
          lead={lead}
          onSubmit={onSubmit}
          onCancel={onClose}
        />
      </div>
    </div>
  );
}