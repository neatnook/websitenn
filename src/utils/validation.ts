import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export const bookingFormSchema = z.object({
  serviceType: z.string(),
  date: z.string(),
  time: z.string(),
  frequency: z.string(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  notes: z.string().optional()
});