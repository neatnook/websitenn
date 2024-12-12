import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  service: z.string(),
  stage: z.string(),
  notes: z.string().optional()
});

export type LeadFormData = z.infer<typeof leadFormSchema>;