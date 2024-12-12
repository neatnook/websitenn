import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { QuoteFormData } from '../../types';
import AddressFields from './sections/AddressFields';

interface ContactStepProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

export default function ContactStep({ formData, onChange }: ContactStepProps) {
  const isOvenCleaning = formData.service === 'oven';
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith('+44')) {
      value = '+44' + value.replace(/^\+44/, '');
    }
    onChange({ phone: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          {isOvenCleaning ? 'Your Contact Details' : 'Your Details'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-400" />
                First Name
              </div>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-400" />
                Last Name
              </div>
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-gray-400" />
              Email Address
            </div>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-gray-400" />
              Phone Number
            </div>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>
      </div>

      <AddressFields formData={formData} onChange={onChange} />

      {isOvenCleaning && (
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">
            Our oven cleaning specialist will contact you to confirm the appointment and discuss any specific requirements.
          </p>
        </div>
      )}
    </div>
  );
}