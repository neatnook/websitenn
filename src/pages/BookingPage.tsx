import React from 'react';
import { useSearchParams } from 'react-router-dom';
import BookingForm from '../components/booking/BookingForm';
import { Shield, Clock, CheckCircle } from 'lucide-react';

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const postcode = searchParams.get('postcode');

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Book Your Clean</h1>
              <p className="text-gray-600 mb-8">
                Booking for: <span className="font-semibold">{postcode}</span>
              </p>
              <BookingForm postcode={postcode || ''} />
            </div>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900">Booking Summary</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Fully Insured</h3>
                    <p className="text-sm text-gray-500">All our cleaners are fully insured and vetted</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Flexible Scheduling</h3>
                    <p className="text-sm text-gray-500">Choose a time that works for you</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Satisfaction Guaranteed</h3>
                    <p className="text-sm text-gray-500">Not happy? We'll re-clean for free</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-gray-900 mb-4">What's included:</h3>
                <ul className="space-y-2">
                  {[
                    'Professional cleaning equipment',
                    'Eco-friendly cleaning products',
                    'Trained & vetted cleaners',
                    'Public liability insurance',
                    'Satisfaction guarantee',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}