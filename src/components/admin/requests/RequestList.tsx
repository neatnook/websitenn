import React from 'react';
import { CleaningRequest } from '../../../types/request';
import { formatRelativeTime } from '../../../utils/dates';

interface RequestListProps {
  requests: CleaningRequest[];
  onSelectRequest: (request: CleaningRequest) => void;
  selectedRequestId?: string;
}

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

export default function RequestList({ 
  requests, 
  onSelectRequest,
  selectedRequestId 
}: RequestListProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="divide-y divide-gray-200">
        {requests.map((request) => (
          <button
            key={request.id}
            onClick={() => onSelectRequest(request)}
            className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
              selectedRequestId === request.id ? 'bg-orange-50' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-gray-900">{request.client.name}</div>
                <div className="text-sm text-gray-500">{request.client.postcode}</div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                statusStyles[request.status]
              }`}>
                {request.status}
              </span>
            </div>
            <div className="mt-2">
              <div className="text-sm text-gray-900">
                {new Date(request.date).toLocaleDateString()} at {request.time}
              </div>
              <div className="text-sm text-gray-500">
                {request.serviceType.replace('-', ' ')}
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Requested {formatRelativeTime(request.createdAt)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}