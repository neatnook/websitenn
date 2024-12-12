export const navigationItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Services',
    children: [
      { name: 'House Cleaning', href: '/services/house-cleaning' },
      { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
      { name: 'End of Tenancy', href: '/services/end-of-tenancy' },
      { name: 'Oven Cleaning', href: '/services/oven-cleaning' }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];