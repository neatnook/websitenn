import { Phone, Calculator } from 'lucide-react';

export const navigationItems = [
  { 
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    type: 'dropdown',
    items: [
      { name: 'House Cleaning', path: '/services/house-cleaning' },
      { name: 'Deep Cleaning', path: '/services/deep-cleaning' },
      { name: 'End of Tenancy', path: '/services/end-of-tenancy' },
      { name: 'Oven Cleaning', path: '/services/oven-cleaning' }
    ]
  },
  { 
    name: 'About',
    path: '/about',
  },
  { 
    name: 'Contact',
    path: '/contact',
  },
  {
    name: '01234 567890',
    path: 'tel:+441234567890',
    icon: Phone,
    type: 'button',
    variant: 'outline'
  },
  {
    name: 'Get a Quote',
    path: '/quote',
    icon: Calculator,
    type: 'button',
    variant: 'primary',
    highlight: true
  }
];