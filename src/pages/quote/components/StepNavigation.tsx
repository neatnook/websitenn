import React from 'react';
import { ArrowLeft, ArrowRight, Loader } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  isValid: boolean;
  onNext: () => void;
  onPrevious: () => void;
  isSubmitting?: boolean;
}

export default function StepNavigation({
  currentStep,
  totalSteps,
  isValid,
  onNext,
  onPrevious,
  isSubmitting = false
}: StepNavigationProps) {
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex justify-between items-center">
      {currentStep > 0 ? (
        <button
          type="button"
          onClick={onPrevious}
          disabled={isSubmitting}
          className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg
            text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 
            transition-all duration-300 hover:border-gray-300 hover:shadow-sm
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Previous
        </button>
      ) : (
        <div></div>
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={!isValid || isSubmitting}
        className={`inline-flex items-center px-6 py-3 border border-transparent rounded-lg
          shadow-sm text-sm font-medium text-white transition-all duration-300
          ${isValid && !isSubmitting
            ? 'bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-100' 
            : 'bg-gray-300 cursor-not-allowed'}`}
      >
        {isSubmitting ? (
          <>
            <Loader className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {isLastStep ? 'Submit Request' : 'Next'}
            {!isLastStep && <ArrowRight className="w-5 h-5 ml-2" />}
          </>
        )}
      </button>
    </div>
  );
}