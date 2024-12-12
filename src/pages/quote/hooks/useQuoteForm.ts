import { useState } from 'react';
import { QuoteFormData } from '../types';
import { useQuoteNavigation } from './useQuoteNavigation';
import { useQuoteValidation } from './useQuoteValidation';

const initialFormData: QuoteFormData = {
  service: '',
  propertyType: 'house',
  furnishingStatus: '',
  kitchen: 0,
  bedrooms: 0,
  bathrooms: 0,
  toilets: 0,
  livingRooms: 0,
  stairs: 0,
  otherRooms: 0,
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
  windowCount: 0,
  blindCount: 0,
  doorCount: 0,
  needsCarpetCleaning: false,
  carpetCleaning: {},
  hasPets: false,
  needsInspection: false,
  needsProducts: false,
  parking: 'free'
};

export function useQuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const { currentStep, handleNext, handlePrevious, canNavigateNext } = useQuoteNavigation();
  const { validateStep } = useQuoteValidation();

  const updateFormData = (updates: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  return {
    currentStep,
    formData,
    isValid: validateStep(currentStep, formData),
    handleNext: () => handleNext(formData),
    handlePrevious,
    updateFormData
  };
}