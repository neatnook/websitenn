import React from 'react';
import { CleaningRequest } from '../../../../../types/request';

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

interface BookingStatusBadgeProps {
  status: CleaningRequest['status'];
}

export default function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}