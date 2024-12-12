import { useState } from 'react';
import { CleaningRequest } from '../../../../../types/request';
import { BookingFilters } from '../../../../../types/booking';
import { filterBookings } from '../utils/bookingTransforms';

const initialBookings: CleaningRequest[] = [
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

const initialFilters: BookingFilters = {
  status: 'all',
  serviceType: 'all',
  dateRange: 'upcoming'
};

export function useBookings() {
  const [bookings, setBookings] = useState<CleaningRequest[]>(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState<CleaningRequest | null>(null);
  const [filters, setFilters] = useState<BookingFilters>(initialFilters);

  const filteredBookings = filterBookings(bookings, filters);

  const updateBookingStatus = (id: string, status: CleaningRequest['status']) => {
    setBookings(bookings.map(booking => 
      booking.id === id 
        ? { ...booking, status, updatedAt: new Date().toISOString() }
        : booking
    ));
  };

  return {
    bookings: filteredBookings,
    selectedBooking,
    setSelectedBooking,
    updateBookingStatus,
    filters,
    setFilters
  };
}