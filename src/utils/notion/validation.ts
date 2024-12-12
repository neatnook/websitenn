import { NotionBookingData } from '../../types/notion';

export const validateBookingData = (data: NotionBookingData): string | null => {
  // Required fields for all bookings
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'service',
    'date',
    'time',
    'addressLine1',
    'city',
    'postcode'
  ] as const;

  // Check required fields
  for (const field of requiredFields) {
    if (!data[field]) {
      return `Missing required field: ${field}`;
    }
  }

  // Service-specific validation
  if (data.service === 'oven') {
    // Check if an oven type is selected
    const hasOvenType = Object.entries(data.additionalServices || {}).some(
      ([key, value]) => ['singleOven', 'doubleOven', 'rangeOven'].includes(key) && value
    );
    if (!hasOvenType) {
      return 'Please select an oven type';
    }
  } else {
    // For non-oven services, validate room counts
    if (!data.bedrooms && !data.bathrooms) {
      return 'Please specify at least one room';
    }
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Invalid email format';
  }

  // Phone format validation
  const phoneRegex = /^\+?[0-9\s-]{10,}$/;
  if (!phoneRegex.test(data.phone)) {
    return 'Invalid phone number format';
  }

  // Postcode format validation (UK)
  const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
  if (!postcodeRegex.test(data.postcode)) {
    return 'Invalid UK postcode format';
  }

  return null;
};