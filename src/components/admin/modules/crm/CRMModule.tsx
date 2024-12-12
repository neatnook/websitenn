import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../ui/Tabs';
import { Users, TrendingUp, Calendar, MessageSquare } from 'lucide-react';
import CustomerList from './components/CustomerList';
import CustomerAnalytics from './components/CustomerAnalytics';
import InteractionHistory from './components/InteractionHistory';
import CommunicationLog from './components/CommunicationLog';

export default function CRMModule() {
  const { setActiveTab } = useAdmin();

  React.useEffect(() => {
    setActiveTab('crm');
  }, [setActiveTab]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Customer Relationship Management</h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage customer relationships, track interactions, and analyze customer data
        </p>
      </div>

      <Tabs defaultValue="customers">
        <TabsList>
          <TabsTrigger value="customers" className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Customers
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="interactions" className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Interactions
          </TabsTrigger>
          <TabsTrigger value="communications" className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            Communications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="customers">
          <CustomerList />
        </TabsContent>

        <TabsContent value="analytics">
          <CustomerAnalytics />
        </TabsContent>

        <TabsContent value="interactions">
          <InteractionHistory />
        </TabsContent>

        <TabsContent value="communications">
          <CommunicationLog />
        </TabsContent>
      </Tabs>
    </div>
  );
}