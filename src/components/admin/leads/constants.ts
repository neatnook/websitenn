export const LEAD_STAGES = [
  { id: 'intake', label: 'Intake', color: 'bg-blue-100 text-blue-800' },
  { id: 'contacted', label: 'Contacted', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'scheduled', label: 'Scheduled', color: 'bg-green-100 text-green-800' },
  { id: 'converted', label: 'Converted', color: 'bg-purple-100 text-purple-800' }
] as const;

export const SERVICE_OPTIONS = [
  { value: 'house-cleaning', label: 'House Cleaning' },
  { value: 'deep-cleaning', label: 'Deep Cleaning' },
  { value: 'end-of-tenancy', label: 'End of Tenancy' },
  { value: 'oven-cleaning', label: 'Oven Cleaning' }
] as const;