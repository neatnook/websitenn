import React from 'react';
import { Dog, CheckCircle2, Car, Sparkles } from 'lucide-react';
import { QuoteFormData } from '../../../types';

interface AdditionalQuestionsProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

const questions = [
  {
    id: 'needsProducts',
    label: 'Do you provide cleaning products and equipment?',
    icon: Sparkles,
    tooltip: 'We can bring our own professional cleaning supplies if needed',
    showFor: ['regular'] // Only show for regular (house) cleaning
  },
  {
    id: 'hasPets',
    label: 'Do you have pets in your home?',
    icon: Dog,
    tooltip: 'This helps us prepare the right cleaning supplies',
    showFor: 'all'
  },
  {
    id: 'needsInspection',
    label: 'Would you like to check the job at the end?',
    icon: CheckCircle2,
    tooltip: 'We can do a walkthrough after cleaning',
    showFor: 'all'
  }
];

const parkingOptions = [
  { id: 'free', label: 'Free parking available' },
  { id: 'paid', label: 'Paid parking nearby' },
  { id: 'permit', label: 'Permit will be provided' },
  { id: 'none', label: 'No parking available' }
];

export default function AdditionalQuestions({ formData, onChange }: AdditionalQuestionsProps) {
  // Filter questions based on service type
  const visibleQuestions = questions.filter(question => 
    question.showFor === 'all' || 
    (Array.isArray(question.showFor) && question.showFor.includes(formData.service))
  );

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {visibleQuestions.map(({ id, label, icon: Icon, tooltip }) => (
          <div key={id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-orange-200 transition-colors">
            <div className="flex items-center">
              <Icon className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <span className="text-sm font-medium text-gray-900">{label}</span>
                <p className="text-xs text-gray-500 mt-0.5">{tooltip}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className={`
                inline-flex items-center px-3 py-1 rounded-full cursor-pointer transition-colors
                ${formData[id] === true ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}>
                <input
                  type="radio"
                  name={id}
                  value="yes"
                  checked={formData[id] === true}
                  onChange={() => onChange({ [id]: true })}
                  className="sr-only"
                />
                Yes
              </label>
              <label className={`
                inline-flex items-center px-3 py-1 rounded-full cursor-pointer transition-colors
                ${formData[id] === false ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}>
                <input
                  type="radio"
                  name={id}
                  value="no"
                  checked={formData[id] === false}
                  onChange={() => onChange({ [id]: false })}
                  className="sr-only"
                />
                No
              </label>
            </div>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          <div className="flex items-center">
            <Car className="w-5 h-5 mr-2 text-gray-400" />
            Parking Preference
          </div>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {parkingOptions.map(({ id, label }) => (
            <label
              key={id}
              className={`
                flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all
                ${formData.parking === id 
                  ? 'border-orange-600 bg-orange-50 ring-1 ring-orange-200' 
                  : 'border-gray-200 hover:border-orange-200 hover:bg-orange-50/10'}
              `}
            >
              <input
                type="radio"
                name="parking"
                value={id}
                checked={formData.parking === id}
                onChange={(e) => onChange({ parking: e.target.value })}
                className="sr-only"
              />
              <span className="text-sm font-medium text-gray-900">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}