import { QuoteFormData } from '../types';

export function useQuoteValidation() {
  const validateStep = (step: number, formData: QuoteFormData): boolean => {
    const isOvenCleaning = formData.service === 'oven';

    switch (step) {
      case 0: // Service Selection
        return !!formData.service;
      
      case 1: // Property Details
        if (isOvenCleaning) {
          return Object.entries(formData.additionalServices || {}).some(
            ([key, value]) => ['singleOven', 'doubleOven', 'rangeOven'].includes(key) && value
          );
        }
        return validateRoomSelection(formData);
      
      case 2: // Schedule
        if (isOvenCleaning) {
          return !!formData.date && !!formData.time;
        }
        return !!formData.date && !!formData.time && !!formData.frequency;
      
      case 3: // Contact
        return validateContactDetails(formData);
      
      default:
        return false;
    }
  };

  const validateRoomSelection = (formData: QuoteFormData): boolean => {
    const totalRooms = (
      (formData.kitchen || 0) +
      (formData.bedrooms || 0) +
      (formData.bathrooms || 0) +
      (formData.toilets || 0) +
      (formData.livingRooms || 0) +
      (formData.stairs || 0)
    );
    return totalRooms > 0;
  };

  const validateContactDetails = (formData: QuoteFormData): boolean => {
    return !!(
      formData.firstName?.trim() &&
      formData.lastName?.trim() &&
      formData.email?.trim() &&
      formData.phone?.trim() &&
      formData.addressLine1?.trim() &&
      formData.city?.trim() &&
      formData.postcode?.trim()
    );
  };

  return { validateStep };
}