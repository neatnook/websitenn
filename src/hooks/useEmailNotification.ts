import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { sendEmail } from '../utils/email';

export const useEmailNotification = () => {
  const [isSending, setIsSending] = useState(false);

  const sendNotification = async (formData: any) => {
    setIsSending(true);
    try {
      await sendEmail(formData);
      toast.success('Booking request received! We\'ll contact you shortly.');
      return true;
    } catch (error) {
      toast.error('Failed to send booking request. Please try again.');
      return false;
    } finally {
      setIsSending(false);
    }
  };

  return {
    sendNotification,
    isSending
  };
};