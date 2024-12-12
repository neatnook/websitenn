import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import KanbanBoard from './KanbanBoard';
import LeadForm from './LeadForm';
import { Lead, LeadStage } from '../../../types/lead';
import { toast } from 'react-hot-toast';

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

export default function LeadsManager() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(leads);
    const [reorderedItem] = items.splice(result.source.index, 1);
    
    // Update the stage
    const updatedLead = {
      ...reorderedItem,
      stage: result.destination.droppableId as LeadStage
    };
    
    items.splice(result.destination.index, 0, updatedLead);
    setLeads(items);
    toast.success('Lead status updated');
  };

  const handleAddLead = (leadData: Omit<Lead, 'id' | 'createdAt'>) => {
    const newLead: Lead = {
      id: Date.now().toString(),
      ...leadData,
      createdAt: new Date().toISOString()
    };
    setLeads([newLead, ...leads]);
    setIsFormOpen(false);
    toast.success('Lead added successfully');
  };

  const handleUpdateLead = (leadData: Omit<Lead, 'id' | 'createdAt'>) => {
    if (!editingLead) return;
    
    const updatedLeads = leads.map(lead => 
      lead.id === editingLead.id 
        ? { ...editingLead, ...leadData }
        : lead
    );
    
    setLeads(updatedLeads);
    setEditingLead(null);
    setIsFormOpen(false);
    toast.success('Lead updated successfully');
  };

  const handleDeleteLead = (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads(leads.filter(lead => lead.id !== id));
      toast.success('Lead deleted successfully');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Leads Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Lead
        </button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <LeadForm
              lead={editingLead}
              onSubmit={editingLead ? handleUpdateLead : handleAddLead}
              onCancel={() => {
                setIsFormOpen(false);
                setEditingLead(null);
              }}
            />
          </div>
        </div>
      )}

      <KanbanBoard
        leads={leads}
        onDragEnd={handleDragEnd}
        onEdit={(lead) => {
          setEditingLead(lead);
          setIsFormOpen(true);
        }}
        onDelete={handleDeleteLead}
      />
    </div>
  );
}