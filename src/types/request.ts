import { z } from 'zod';

export interface CleaningRequest {
  id: string;
  serviceType: 'regular' | 'deep' | 'end-of-tenancy' | 'oven';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  date: string;
  time: string;
  client: {
    name: string;
    email: string;
    phone: string;
    address: string;
    postcode: string;
  };
  propertyDetails: {
    bedrooms: number;
    bathrooms: number;
  };
  notes?: string;
  price?: number;
  createdAt: string;
  updatedAt: string;
}

export const requestSchema = z.object({
  serviceType: z.enum(['regular', 'deep', 'end-of-tenancy', 'oven']),
  status: z.enum(['pending', 'confirmed', 'completed', 'cancelled']),
  date: z.string(),
  time: z.string(),
  client: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    postcode: z.string()
  }),
  propertyDetails: z.object({
    bedrooms: z.number().min(1),
    bathrooms: z.number().min(1)
  }),
  notes: z.string().optional(),
  price: z.number().optional()
});