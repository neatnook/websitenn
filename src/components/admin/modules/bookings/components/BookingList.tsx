import React from 'react';
import { formatDateTime } from '../../../../../utils/dates';
import { CleaningRequest } from '../../../../../types/request';
import { BookingFilters } from '../types';
import BookingStatusBadge from './BookingStatusBadge';

interface BookingListProps {
  bookings: CleaningRequest[];
  selectedBookingId?: string;
  onSelectBooking: (booking: CleaningRequest) => void;
  filters: BookingFilters;
}

export default function BookingList({
  bookings,
  selectedBookingId,
  onSelectBooking,
  filters
}: BookingListProps) {
  const filteredBookings = React.useMemo(() => {
    return bookings.filter(booking => {
      if (filters.status !== 'all' && booking.status !== filters.status) return false;
      if (filters.serviceType !== 'all' && booking.serviceType !== filters.serviceType) return false;
      
      const bookingDate = new Date(booking.date);
      const today = new Date();
      
      if (filters.dateRange === 'today') {
        return bookingDate.toDateString() === today.toDateString();
      } else if (filters.dateRange === 'upcoming') {
        return bookingDate >= today;
      }
      
      return true;
    });
  }, [bookings, filters]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="divide-y divide-gray-200">
        {filteredBookings.map((booking) => (
          <button
            key={booking.id}
            onClick={() => onSelectBooking(booking)}
            className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
              selectedBookingId === booking.id ? 'bg-orange-50' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">{booking.client.name}</h4>
                <p className="text-sm text-gray-500">{booking.client.postcode}</p>
              </div>
              <BookingStatusBadge status={booking.status} />
            </div>
            
            <div className="mt-2">
              <div className="text-sm text-gray-900">
                {formatDateTime(booking.date + 'T' + booking.time)}
              </div>
              <div className="text-sm text-gray-500">
                {booking.serviceType.replace('-', ' ')}
              </div>
            </div>
          </button>
        ))}

        {filteredBookings.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No bookings found matching your filters
          </div>
        )}
      </div>
    </div>
  );
}