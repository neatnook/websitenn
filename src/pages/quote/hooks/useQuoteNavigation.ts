import { useState } from 'react';
import { QuoteFormData } from '../types';
import { useQuoteValidation } from './useQuoteValidation';

export function useQuoteNavigation() {
  const [currentStep, setCurrentStep] = useState(0);
  const { validateStep } = useQuoteValidation();

  const canNavigateNext = (formData: QuoteFormData): boolean => {
    return validateStep(currentStep, formData);
  };

  const handleNext = (formData: QuoteFormData) => {
    if (canNavigateNext(formData) && currentStep < 3) {
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
    handleNext,
    handlePrevious,
    canNavigateNext
  };
}