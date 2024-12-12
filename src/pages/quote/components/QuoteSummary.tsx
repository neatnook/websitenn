import React from 'react';
import { QuoteFormData } from '../types';
import { ClipboardList, Clock, MapPin, User } from 'lucide-react';
import { getServiceLabel, getOvenType } from '../utils/serviceHelpers';

interface QuoteSummaryProps {
  formData: QuoteFormData;
  currentStep: number;
}

export default function QuoteSummary({ formData, currentStep }: QuoteSummaryProps) {
  const isOvenCleaning = formData.service === 'oven';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Booking Summary</h2>
          <div className="text-sm text-gray-600">
            Step {currentStep + 1} of 4
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Service Type */}
        {formData.service && (
          <div className="flex items-start">
            <ClipboardList className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Selected Service</h3>
              <p className="mt-1 text-base font-medium text-gray-900">
                {getServiceLabel(formData.service)}
              </p>
            </div>
          </div>
        )}

        {/* Oven Type */}
        {isOvenCleaning && formData.additionalServices && (
          <div className="flex items-start">
            <ClipboardList className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Oven Type</h3>
              <p className="mt-1 text-base font-medium text-gray-900">
                {getOvenType(formData.additionalServices)}
              </p>
            </div>
          </div>
        )}

        {/* Property Details */}
        {!isOvenCleaning && currentStep > 0 && (formData.bedrooms > 0 || formData.bathrooms > 0) && (
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Property Details</h3>
              <div className="mt-1 space-y-1 text-base text-gray-900">
                {formData.bedrooms > 0 && (
                  <p>{formData.bedrooms} Bedroom{formData.bedrooms !== 1 && 's'}</p>
                )}
                {formData.bathrooms > 0 && (
                  <p>{formData.bathrooms} Bathroom{formData.bathrooms !== 1 && 's'}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Schedule */}
        {currentStep > 1 && formData.date && formData.time && (
          <div className="flex items-start">
            <Clock className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Schedule</h3>
              <div className="mt-1 space-y-1 text-base text-gray-900">
                <p>{new Date(formData.date).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</p>
                <p>{formData.time}</p>
                {!isOvenCleaning && formData.frequency && (
                  <p className="capitalize">{formData.frequency.replace('-', ' ')} Service</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Contact Details */}
        {currentStep > 2 && formData.firstName && (
          <div className="flex items-start">
            <User className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Contact Details</h3>
              <div className="mt-1 space-y-1 text-base text-gray-900">
                <p>{formData.firstName} {formData.lastName}</p>
                <p className="text-gray-600">{formData.email}</p>
                <p className="text-gray-600">{formData.phone}</p>
                <p className="text-gray-600">{formData.addressLine1}</p>
                <p className="text-gray-600">{formData.city}, {formData.postcode}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}