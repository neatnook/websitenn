import { Home, Calculator, Users, MessageSquare } from 'lucide-react';

export const mainNavigation = [
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
    name: 'Get a Quote',
    path: '/quote',
    highlight: true
  },
  { 
    name: 'About',
    path: '/about',
  },
  { 
    name: 'Contact',
    path: '/contact',
  }
];