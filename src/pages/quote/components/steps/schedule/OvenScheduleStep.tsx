import React from 'react';
import { QuoteFormData } from '../../../types';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

interface OvenScheduleStepProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

export default function OvenScheduleStep({ formData, onChange }: OvenScheduleStepProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Schedule Your Oven Clean</h2>

      <DatePicker
        selectedDate={formData.date}
        onChange={(date) => onChange({ date })}
      />

      <TimePicker
        selectedTime={formData.time}
        onChange={(time) => onChange({ time })}
      />

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Notes</h3>
        <textarea
          value={formData.notes || ''}
          onChange={(e) => onChange({ notes: e.target.value })}
          placeholder="Any specific instructions about your oven or access requirements..."
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          rows={4}
        />
        <p className="mt-2 text-sm text-gray-500">
          Our oven cleaning specialist will contact you to confirm the appointment details.
        </p>
      </div>
    </div>
  );
}