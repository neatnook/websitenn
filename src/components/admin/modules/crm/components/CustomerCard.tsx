import React from 'react';
import { Edit2, Trash2, Phone, Mail, Calendar, CreditCard } from 'lucide-react';
import { Customer } from '../../../../../types/crm';
import { formatDateTime } from '../../../../../utils/dates';

interface CustomerCardProps {
  customer: Customer;
  onEdit: () => void;
  onDelete: () => void;
}

export default function CustomerCard({ customer, onEdit, onDelete }: CustomerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{customer.name}</h3>
          <span className={`inline-block px-2 py-1 mt-1 text-xs font-medium rounded-full ${
            customer.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {customer.status}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="text-blue-600 hover:text-blue-700"
            aria-label="Edit customer"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-700"
            aria-label="Delete customer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <a
          href={`mailto:${customer.email}`}
          className="flex items-center text-sm text-gray-600 hover:text-orange-600"
        >
          <Mail className="w-4 h-4 mr-2" />
          {customer.email}
        </a>
        <a
          href={`tel:${customer.phone}`}
          className="flex items-center text-sm text-gray-600 hover:text-orange-600"
        >
          <Phone className="w-4 h-4 mr-2" />
          {customer.phone}
        </a>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
            <div className="text-sm">
              <p className="text-gray-500">Last Booking</p>
              <p className="font-medium">{formatDateTime(customer.lastBooking)}</p>
            </div>
          </div>
          <div className="flex items-center">
            <CreditCard className="w-4 h-4 text-gray-400 mr-2" />
            <div className="text-sm">
              <p className="text-gray-500">Total Spent</p>
              <p className="font-medium">£{customer.totalSpent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}