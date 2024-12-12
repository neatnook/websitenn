import React from 'react';
import { CleaningRequest } from '../../../../../types/request';
import { X } from 'lucide-react';

interface BookingActionsProps {
  bookingId: string;
  currentStatus: CleaningRequest['status'];
  onStatusChange: (id: string, status: CleaningRequest['status']) => void;
  onClose: () => void;
}

export default function BookingActions({
  bookingId,
  currentStatus,
  onStatusChange,
  onClose
}: BookingActionsProps) {
  return (
    <div className="flex justify-between items-center pt-6 border-t border-gray-200">
      <div className="space-x-3">
        {currentStatus === 'pending' && (
          <>
            <button
              onClick={() => onStatusChange(bookingId, 'confirmed')}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Confirm Booking
            </button>
            <button
              onClick={() => onStatusChange(bookingId, 'cancelled')}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Cancel Booking
            </button>
          </>
        )}
        {currentStatus === 'confirmed' && (
          <button
            onClick={() => onStatusChange(bookingId, 'completed')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Mark as Completed
          </button>
        )}
      </div>
      
      <button
        onClick={onClose}
        className="p-2 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}