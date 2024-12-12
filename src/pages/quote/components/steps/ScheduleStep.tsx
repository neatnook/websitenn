import React from 'react';
import { QuoteFormData } from '../../types';
import DatePicker from './schedule/DatePicker';
import TimePicker from './schedule/TimePicker';
import FrequencyPicker from './schedule/FrequencyPicker';
import AdditionalQuestions from './schedule/AdditionalQuestions';
import OvenScheduleStep from './schedule/OvenScheduleStep';

interface ScheduleStepProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

export default function ScheduleStep({ formData, onChange }: ScheduleStepProps) {
  const isOvenCleaning = formData.service === 'oven';

  if (isOvenCleaning) {
    return <OvenScheduleStep formData={formData} onChange={onChange} />;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Schedule Your Clean</h2>

      <FrequencyPicker
        selectedFrequency={formData.frequency}
        onChange={(frequency) => onChange({ frequency })}
      />

      <DatePicker
        selectedDate={formData.date}
        onChange={(date) => onChange({ date })}
      />

      <TimePicker
        selectedTime={formData.time}
        onChange={(time) => onChange({ time })}
      />

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
        <AdditionalQuestions
          formData={formData}
          onChange={onChange}
        />
      </div>
    </div>
  );
}