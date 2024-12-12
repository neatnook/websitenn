import React from 'react';
import { formatDateTime } from '../../../../../utils/dates';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const communications = [
  {
    id: '1',
    customerId: '1',
    type: 'email',
    direction: 'outbound',
    date: '2024-03-15T10:00:00Z',
    subject: 'Booking Confirmation',
    content: 'Your cleaning service has been confirmed for March 20th.',
    status: 'sent'
  }
];

const typeIcons = {
  email: Mail,
  sms: MessageSquare,
  call: Phone
};

export default function CommunicationLog() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {communications.map((comm) => {
            const Icon = typeIcons[comm.type as keyof typeof typeIcons];
            return (
              <li key={comm.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon className="h-5 w-5 text-gray-400" />
                      <p className="ml-2 text-sm font-medium text-gray-900">{comm.subject}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        comm.status === 'sent' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {comm.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="text-sm text-gray-500">{comm.content}</p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>{formatDateTime(comm.date)}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}