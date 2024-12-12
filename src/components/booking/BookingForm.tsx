import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ServiceTypeSelect from './ServiceTypeSelect';
import DateTimePicker from './DateTimePicker';
import FrequencySelect from './FrequencySelect';
import PropertyDetails from './PropertyDetails';
import ContactDetails from './ContactDetails';
import AdditionalNotes from './AdditionalNotes';

interface BookingFormProps {
  postcode: string;
}

export default function BookingForm({ postcode }: BookingFormProps) {
  const [formData, setFormData] = useState({
    serviceType: 'regular',
    date: '',
    time: '',
    frequency: 'one-time',
    bedrooms: 1,
    bathrooms: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking submitted successfully!');
    console.log('Form submitted:', { ...formData, postcode });
  };

  const updateFormData = (updates: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <ServiceTypeSelect
        value={formData.serviceType}
        onChange={(value) => updateFormData({ serviceType: value })}
      />

      <DateTimePicker
        selectedDate={formData.date}
        selectedTime={formData.time}
        onDateChange={(date) => updateFormData({ date })}
        onTimeChange={(time) => updateFormData({ time })}
      />

      <FrequencySelect
        value={formData.frequency}
        onChange={(value) => updateFormData({ frequency: value })}
      />

      <PropertyDetails
        bedrooms={formData.bedrooms}
        bathrooms={formData.bathrooms}
        onBedroomsChange={(value) => updateFormData({ bedrooms: value })}
        onBathroomsChange={(value) => updateFormData({ bathrooms: value })}
      />

      <ContactDetails
        formData={{
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
        }}
        onChange={updateFormData}
        postcode={postcode}
      />

      <AdditionalNotes
        value={formData.notes}
        onChange={(notes) => updateFormData({ notes })}
      />

      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 
          transition-colors duration-200 font-medium text-lg"
      >
        Book Now
      </button>
    </form>
  );
}