import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { createBooking } from '../utils/notion/api';
import { NotionBookingData } from '../types/notion';

export const useNotionSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitToNotion = async (formData: NotionBookingData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      const result = await createBooking(formData);
      
      if (result.success) {
        toast.success('Booking request received! We\'ll contact you shortly.');
        return true;
      } else {
        toast.error(result.error || 'Failed to submit booking');
        console.error('Notion submission error:', result.error);
        return false;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      toast.error('Failed to submit booking. Please try again.');
      console.error('Notion submission error:', errorMessage);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitToNotion,
    isSubmitting
  };
};