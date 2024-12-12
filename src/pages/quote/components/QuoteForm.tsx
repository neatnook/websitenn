import React from 'react';
import { useQuoteForm } from '../../../hooks/useQuoteForm';
import { useNotionSubmission } from '../../../hooks/useNotionSubmission';
import ServiceStep from './steps/ServiceStep';
import RoomSelection from './steps/RoomSelection';
import ScheduleStep from './steps/ScheduleStep';
import ContactStep from './steps/ContactStep';
import StepIndicator from './StepIndicator';
import StepNavigation from './StepNavigation';
import QuoteSummary from './QuoteSummary';
import HowItWorks from './HowItWorks';

export default function QuoteForm() {
  const { 
    currentStep,
    formData,
    isValid,
    handleNext,
    handlePrevious,
    updateFormData,
    resetForm
  } = useQuoteForm();

  const { submitToNotion, isSubmitting } = useNotionSubmission();

  const steps = [
    { component: ServiceStep, label: 'Service' },
    { component: RoomSelection, label: 'Details' },
    { component: ScheduleStep, label: 'Schedule' },
    { component: ContactStep, label: 'Contact' }
  ];

  const CurrentStepComponent = steps[currentStep].component;

  const handleSubmit = async () => {
    if (currentStep === steps.length - 1 && isValid) {
      const success = await submitToNotion(formData);
      if (success) {
        resetForm();
      }
    } else {
      handleNext();
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
          <div className="hidden sm:block px-8 pt-8">
            <StepIndicator 
              steps={steps.map(s => s.label)} 
              currentStep={currentStep} 
            />
          </div>

          <div className="p-8">
            <CurrentStepComponent
              formData={formData}
              onChange={updateFormData}
              onComplete={handleNext}
            />

            <div className="mt-8 pt-6 border-t border-gray-100">
              <StepNavigation
                currentStep={currentStep}
                totalSteps={steps.length}
                isValid={isValid}
                onNext={handleSubmit}
                onPrevious={handlePrevious}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block space-y-6">
        {currentStep === 0 ? (
          <HowItWorks />
        ) : (
          <QuoteSummary formData={formData} currentStep={currentStep} />
        )}
      </div>

      <div className="lg:hidden mt-6">
        {currentStep === 0 ? (
          <HowItWorks />
        ) : (
          <QuoteSummary formData={formData} currentStep={currentStep} />
        )}
      </div>
    </div>
  );
}