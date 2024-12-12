import { useState } from 'react';
import { Customer } from '../../../../../types/crm';

const initialCustomers: Customer[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    email: 'sarah@example.com',
    phone: '07123456789',
    address: '123 Main St',
    postcode: 'CB1 1AB',
    totalBookings: 5,
    totalSpent: 450,
    lastBooking: '2024-03-15',
    status: 'active',
    notes: 'Prefers morning appointments'
  }
];

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);

  const addCustomer = (customerData: Omit<Customer, 'id'>) => {
    const newCustomer: Customer = {
      id: Date.now().toString(),
      ...customerData
    };
    setCustomers([newCustomer, ...customers]);
  };

  const updateCustomer = (id: string, customerData: Partial<Customer>) => {
    setCustomers(customers.map(customer =>
      customer.id === id ? { ...customer, ...customerData } : customer
    ));
  };

  const deleteCustomer = (id: string) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return {
    customers,
    addCustomer,
    updateCustomer,
    deleteCustomer
  };
}