import { useState } from 'react';
import { QuoteFormData } from '../types/quote';

const initialFormData: QuoteFormData = {
  service: '',
  propertyType: 'house',
  kitchen: 0,
  bedrooms: 0,
  bathrooms: 0,
  toilets: 0,
  livingRooms: 0,
  stairs: 0,
  date: '',
  time: '',
  frequency: 'one-time',
  firstName: '',
  lastName: '',
  email: '',
  phone: '+44',
  addressLine1: '',
  city: 'Cambridge',
  postcode: '',
  additionalServices: {},
  notes: ''
};

export function useQuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);

  const updateFormData = (updates: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
  };

  const validateStep = (step: number): boolean => {
    const isOvenCleaning = formData.service === 'oven';

    switch (step) {
      case 0: // Service Selection
        return Boolean(formData.service);
      
      case 1: // Property Details
        if (isOvenCleaning) {
          return Object.entries(formData.additionalServices || {}).some(
            ([key, value]) => ['singleOven', 'doubleOven', 'rangeOven'].includes(key) && value
          );
        }
        return Boolean(
          formData.kitchen > 0 ||
          formData.bedrooms > 0 ||
          formData.bathrooms > 0 ||
          formData.livingRooms > 0
        );
      
      case 2: // Schedule
        return Boolean(formData.date && formData.time);
      
      case 3: // Contact
        return Boolean(
          formData.firstName?.trim() &&
          formData.lastName?.trim() &&
          formData.email?.trim() &&
          formData.phone?.trim() &&
          formData.addressLine1?.trim() &&
          formData.city?.trim() &&
          formData.postcode?.trim()
        );
      
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 3 && validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      return true;
    }
    return false;
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      return true;
    }
    return false;
  };

  return {
    currentStep,
    formData,
    isValid: validateStep(currentStep),
    handleNext,
    handlePrevious,
    updateFormData,
    resetForm
  };
}