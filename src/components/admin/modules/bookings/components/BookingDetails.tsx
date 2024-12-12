import React from 'react';
import { CleaningRequest } from '../../../../../types/request';
import { formatDateTime } from '../../../../../utils/dates';
import { User, Mail, Phone, MapPin, Home, Calendar, Clock, MessageSquare } from 'lucide-react';
import BookingStatusBadge from './BookingStatusBadge';
import BookingActions from './BookingActions';

interface BookingDetailsProps {
  booking: CleaningRequest;
  onStatusChange: (id: string, status: CleaningRequest['status']) => void;
  onClose: () => void;
}

export default function BookingDetails({
  booking,
  onStatusChange,
  onClose
}: BookingDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Booking Details</h3>
            <p className="mt-1 text-sm text-gray-500">ID: {booking.id}</p>
          </div>
          <BookingStatusBadge status={booking.status} />
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Client Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <span>{booking.client.name}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <a href={`mailto:${booking.client.email}`} className="text-orange-600 hover:text-orange-700">
                  {booking.client.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <a href={`tel:${booking.client.phone}`} className="text-orange-600 hover:text-orange-700">
                  {booking.client.phone}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                <div>
                  <div>{booking.client.address}</div>
                  <div className="text-sm text-gray-500">{booking.client.postcode}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Service Details</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Home className="w-5 h-5 text-gray-400 mr-3" />
                <span>
                  {booking.propertyDetails.bedrooms} bedrooms, {booking.propertyDetails.bathrooms} bathrooms
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                <span>{formatDateTime(booking.date + 'T' + booking.time)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-400 mr-3" />
                <span>{booking.serviceType.replace('-', ' ')}</span>
              </div>
              {booking.notes && (
                <div className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                  <p className="text-gray-600">{booking.notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <BookingActions
          bookingId={booking.id}
          currentStatus={booking.status}
          onStatusChange={onStatusChange}
          onClose={onClose}
        />
      </div>
    </div>
  );
}