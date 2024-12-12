import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface AdminContextState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  navigateToTab: (tab: string) => void;
}

const AdminContext = createContext<AdminContextState | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const navigateToTab = useCallback((tab: string) => {
    setActiveTab(tab);
    navigate(`/admin/dashboard/${tab === 'overview' ? '' : tab}`);
  }, [navigate]);

  return (
    <AdminContext.Provider value={{ activeTab, setActiveTab, navigateToTab }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}