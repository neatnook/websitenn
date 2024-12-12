import React, { useState } from 'react';
import { CleaningRequest } from '../../../types/request';
import RequestList from './RequestList';
import RequestDetails from './RequestDetails';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';
import ActionCard from '../actions/ActionCard';

const mockRequests: CleaningRequest[] = [
  {
    id: '1',
    serviceType: 'regular',
    status: 'pending',
    date: '2024-03-25',
    time: '09:00',
    client: {
      name: 'John Smith',
      email: 'john@example.com',
      phone: '07123456789',
      address: '123 Main St',
      postcode: 'CB1 1AB'
    },
    propertyDetails: {
      bedrooms: 2,
      bathrooms: 1
    },
    notes: 'Please pay special attention to the kitchen',
    createdAt: '2024-03-20T10:00:00Z',
    updatedAt: '2024-03-20T10:00:00Z'
  }
];

export default function RequestManager() {
  const [requests] = useState<CleaningRequest[]>(mockRequests);
  const [selectedRequest, setSelectedRequest] = useState<CleaningRequest | null>(null);

  const stats = [
    {
      icon: Calendar,
      title: 'Upcoming Requests',
      value: requests.filter(r => r.status === 'confirmed').length
    },
    {
      icon: Clock,
      title: 'Pending Requests',
      value: requests.filter(r => r.status === 'pending').length
    },
    {
      icon: CheckCircle,
      title: 'Completed Today',
      value: requests.filter(r => r.status === 'completed').length
    },
    {
      icon: XCircle,
      title: 'Cancelled',
      value: requests.filter(r => r.status === 'cancelled').length
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Service Requests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <ActionCard
            key={stat.title}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          <RequestList
            requests={requests}
            onSelectRequest={setSelectedRequest}
            selectedRequestId={selectedRequest?.id}
          />
        </div>
        {selectedRequest && (
          <div className="w-96">
            <RequestDetails request={selectedRequest} />
          </div>
        )}
      </div>
    </div>
  );
}