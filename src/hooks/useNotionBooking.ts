import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { createNotionBooking } from '../utils/notion';

export const useNotionBooking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitToNotion = async (formData: any) => {
    setIsSubmitting(true);
    try {
      await createNotionBooking(formData);
      return true;
    } catch (error) {
      console.error('Failed to submit to Notion:', error);
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