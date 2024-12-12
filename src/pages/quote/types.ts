export interface QuoteFormData {
  service: string;
  propertyType: string;
  furnishingStatus: string;
  kitchen: number;
  bedrooms: number;
  bathrooms: number;
  toilets: number;
  livingRooms: number;
  stairs: number;
  otherRooms: number;
  date: string;
  time: string;
  frequency: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Updated address fields
  addressLine1: string;
  city: string;
  postcode: string;
  additionalServices?: {
    [key: string]: boolean;
  };
  windowCount?: number;
  blindCount?: number;
  doorCount?: number;
  needsCarpetCleaning?: boolean;
  carpetCleaning?: {
    [key: string]: number;
  };
  hasPets?: boolean;
  needsInspection?: boolean;
  needsProducts?: boolean;
  parking?: 'free' | 'paid' | 'permit' | 'none';
}