import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/constants';

export const sendEmail = async (formData: any) => {
  try {
    const templateParams = {
      service_type: formData.service,
      date: formData.date,
      time: formData.time,
      frequency: formData.frequency || 'One-time',
      customer_name: `${formData.firstName} ${formData.lastName}`,
      customer_email: formData.email,
      customer_phone: formData.phone,
      customer_address: `${formData.addressLine1}, ${formData.city}, ${formData.postcode}`,
      property_details: formData.service === 'oven' 
        ? `Oven Type: ${getOvenType(formData.additionalServices)}`
        : `Bedrooms: ${formData.bedrooms}, Bathrooms: ${formData.bathrooms}`,
      additional_notes: formData.notes || 'None'
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

function getOvenType(additionalServices: any) {
  if (additionalServices?.singleOven) return 'Single Oven';
  if (additionalServices?.doubleOven) return 'Double Oven';
  if (additionalServices?.rangeOven) return 'Range Oven';
  return 'Not specified';
}