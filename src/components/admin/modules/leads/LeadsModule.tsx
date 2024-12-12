import React from 'react';
import { Plus } from 'lucide-react';
import { useLeads } from './hooks/useLeads';
import { useDragAndDrop } from './hooks/useDragAndDrop';
import KanbanBoard from './components/KanbanBoard';
import LeadModal from './components/LeadModal';
import { useAdmin } from '../../context/AdminContext';

export default function LeadsModule() {
  const { setActiveTab } = useAdmin();
  const { 
    leads,
    addLead,
    updateLead,
    deleteLead,
    updateLeadStage,
    isModalOpen,
    setIsModalOpen,
    selectedLead,
    setSelectedLead
  } = useLeads();

  const { handleDragEnd } = useDragAndDrop(updateLeadStage);

  React.useEffect(() => {
    setActiveTab('leads');
  }, [setActiveTab]);

  const handleSubmit = React.useCallback((data: any) => {
    if (selectedLead) {
      updateLead(selectedLead.id, data);
    } else {
      addLead(data);
    }
    setIsModalOpen(false);
    setSelectedLead(null);
  }, [selectedLead, updateLead, addLead, setIsModalOpen, setSelectedLead]);

  const handleClose = React.useCallback(() => {
    setIsModalOpen(false);
    setSelectedLead(null);
  }, [setIsModalOpen, setSelectedLead]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Leads Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Lead
        </button>
      </div>

      <KanbanBoard
        leads={leads}
        onDragEnd={handleDragEnd}
        onEdit={setSelectedLead}
        onDelete={deleteLead}
      />

      {isModalOpen && (
        <LeadModal
          lead={selectedLead}
          onSubmit={handleSubmit}
          onClose={handleClose}
        />
      )}
    </div>
  );
}