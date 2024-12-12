import React, { useState } from 'react';
import { useCustomers } from '../hooks/useCustomers';
import CustomerCard from './CustomerCard';
import CustomerFilters from './CustomerFilters';
import { Plus } from 'lucide-react';
import CustomerModal from './CustomerModal';

export default function CustomerList() {
  const { customers, addCustomer, updateCustomer, deleteCustomer } = useCustomers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <CustomerFilters />
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Customer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            onEdit={() => {
              setSelectedCustomer(customer);
              setIsModalOpen(true);
            }}
            onDelete={() => deleteCustomer(customer.id)}
          />
        ))}
      </div>

      {isModalOpen && (
        <CustomerModal
          customer={selectedCustomer}
          onSubmit={(data) => {
            if (selectedCustomer) {
              updateCustomer(selectedCustomer.id, data);
            } else {
              addCustomer(data);
            }
            setIsModalOpen(false);
            setSelectedCustomer(null);
          }}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCustomer(null);
          }}
        />
      )}
    </div>
  );
}