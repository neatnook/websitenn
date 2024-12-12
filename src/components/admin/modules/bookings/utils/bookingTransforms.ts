import { CleaningRequest } from '../../../../../types/request';
import { BookingListItem } from '../../../../../types/booking';

export function transformBookingToListItem(booking: CleaningRequest): BookingListItem {
  return {
    id: booking.id,
    clientName: booking.client.name,
    postcode: booking.client.postcode,
    status: booking.status,
    date: booking.date,
    time: booking.time,
    serviceType: booking.serviceType
  };
}

export function filterBookings(
  bookings: CleaningRequest[],
  filters: {
    status: string;
    serviceType: string;
    dateRange: string;
  }
): CleaningRequest[] {
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
}