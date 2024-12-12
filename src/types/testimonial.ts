import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: string;
  clientName: string;
  position?: string;
  company?: string;
  image?: string;
  content: string;
  rating: number;
  service: string;
  featured: boolean;
  date: string;
  location: string;
}

export interface TestimonialFormData {
  clientName: string;
  position?: string;
  company?: string;
  image?: string;
  content: string;
  rating: number;
  service: string;
  featured: boolean;
  location: string;
}