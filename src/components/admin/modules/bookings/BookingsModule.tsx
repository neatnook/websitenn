import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useBookings } from './hooks/useBookings';
import BookingList from './components/BookingList';
import BookingDetails from './components/BookingDetails';
import BookingFilters from './components/BookingFilters';
import { Calendar } from 'lucide-react';

export default function BookingsModule() {
  const { setActiveTab } = useAdmin();
  const {
    bookings,
    selectedBooking,
    setSelectedBooking,
    updateBookingStatus,
    filters,
    setFilters
  } = useBookings();

  React.useEffect(() => {
    setActiveTab('bookings');
  }, [setActiveTab]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Booking Management</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track all cleaning service bookings
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-orange-600" />
          <span className="text-sm font-medium text-gray-600">
            {bookings.filter(b => b.status === 'pending').length} Pending Bookings
          </span>
        </div>
      </div>

      <BookingFilters filters={filters} onFilterChange={setFilters} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <BookingList
            bookings={bookings}
            selectedBookingId={selectedBooking?.id}
            onSelectBooking={setSelectedBooking}
            filters={filters}
          />
        </div>
        
        <div className="lg:col-span-2">
          {selectedBooking ? (
            <BookingDetails
              booking={selectedBooking}
              onStatusChange={updateBookingStatus}
              onClose={() => setSelectedBooking(null)}
            />
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Select a booking to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}