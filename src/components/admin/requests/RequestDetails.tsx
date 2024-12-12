import React from 'react';
import { CleaningRequest } from '../../../types/request';
import { 
  User, Mail, Phone, MapPin, Home, Calendar, Clock, MessageSquare 
} from 'lucide-react';

interface RequestDetailsProps {
  request: CleaningRequest;
}

export default function RequestDetails({ request }: RequestDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Request Details</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Date & Time</div>
              <div className="text-sm text-gray-500">
                {new Date(request.date).toLocaleDateString()} at {request.time}
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <Home className="w-5 h-5 text-gray-400 mt-0.5" />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Service Type</div>
              <div className="text-sm text-gray-500">
                {request.serviceType.replace('-', ' ')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Client Information</h4>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <User className="w-5 h-5 text-gray-400 mt-0.5" />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Name</div>
              <div className="text-sm text-gray-500">{request.client.name}</div>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Email</div>
              <div className="text-sm text-gray-500">{request.client.email}</div>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Phone</div>
              <div className="text-sm text-gray-500">{request.client.phone}</div>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Address</div>
              <div className="text-sm text-gray-500">
                {request.client.address}
                <br />
                {request.client.postcode}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Property Details</h4>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-900">Bedrooms</div>
            <div className="text-sm text-gray-500">{request.propertyDetails.bedrooms}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">Bathrooms</div>
            <div className="text-sm text-gray-500">{request.propertyDetails.bathrooms}</div>
          </div>
        </div>
      </div>

      {request.notes && (
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-start">
            <MessageSquare className="w-5 h-5 text-gray-400 mt-0.5" />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Notes</div>
              <div className="text-sm text-gray-500">{request.notes}</div>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel Request
          </button>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700">
            Confirm Request
          </button>
        </div>
      </div>
    </div>
  );
}