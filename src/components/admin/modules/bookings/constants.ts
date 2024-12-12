export const STATUS_OPTIONS = [
  { value: 'all', label: 'All Statuses' },
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' }
] as const;

export const SERVICE_OPTIONS = [
  { value: 'all', label: 'All Services' },
  { value: 'regular', label: 'Regular Cleaning' },
  { value: 'deep', label: 'Deep Cleaning' },
  { value: 'end-of-tenancy', label: 'End of Tenancy' },
  { value: 'oven', label: 'Oven Cleaning' }
] as const;

export const DATE_RANGE_OPTIONS = [
  { value: 'all', label: 'All Dates' },
  { value: 'today', label: 'Today' },
  { value: 'upcoming', label: 'Upcoming' }
] as const;