import { Sparkles, Calendar, Home, Clock, Shield, Star } from 'lucide-react';
import { Service } from '../types/services';

export const services: Service[] = [
  {
    id: 'regular-cleaning',
    title: 'Regular Cleaning',
    description: 'Weekly or bi-weekly cleaning services tailored to your needs',
    icon: Home,
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of every nook and cranny',
    icon: Sparkles,
  },
  {
    id: 'flexible-scheduling',
    title: 'Flexible Scheduling',
    description: 'Book cleanings at times that suit your schedule',
    icon: Calendar,
  },
  {
    id: 'same-day-service',
    title: 'Same-Day Service',
    description: 'Available for urgent cleaning needs',
    icon: Clock,
  },
  {
    id: 'insured-bonded',
    title: 'Insured & Bonded',
    description: 'Your property is protected while we work',
    icon: Shield,
  },
  {
    id: 'satisfaction-guaranteed',
    title: 'Satisfaction Guaranteed',
    description: '100% satisfaction or we\'ll re-clean for free',
    icon: Star,
  },
];