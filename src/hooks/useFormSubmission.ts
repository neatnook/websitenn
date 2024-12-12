import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { sendEmail } from '../utils/email';
import { createNotionBooking } from '../utils/notion';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: any) => {
    setIsSubmitting(true);
    try {
      // Submit to both services in parallel
      const [emailSuccess, notionSuccess] = await Promise.all([
        sendEmail(formData),
        createNotionBooking(formData)
      ]);

      if (emailSuccess && notionSuccess) {
        toast.success('Booking request received! We\'ll contact you shortly.');
        return true;
      } else {
        toast.error('There was an issue processing your request. Please try again.');
        return false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit booking request. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting
  };
};