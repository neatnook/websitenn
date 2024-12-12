import { Sparkles, Home, Calendar, Timer } from 'lucide-react';

export const services = [
  {
    id: 'regular',
    title: 'Regular Cleaning',
    description: 'Recurring cleaning service',
    icon: Home
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    description: 'Thorough deep clean',
    icon: Sparkles
  },
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy',
    description: 'Moving in/out cleaning',
    icon: Calendar
  },
  {
    id: 'oven',
    title: 'Oven Cleaning',
    description: 'Professional oven clean',
    icon: Timer
  }
];