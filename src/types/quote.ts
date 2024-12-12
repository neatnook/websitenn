export interface QuoteFormData {
  // Service details
  service: string;
  propertyType: string;
  
  // Room counts
  kitchen: number;
  bedrooms: number;
  bathrooms: number;
  toilets: number;
  livingRooms: number;
  stairs: number;
  
  // Scheduling
  date: string;
  time: string;
  frequency: string;
  
  // Contact details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  city: string;
  postcode: string;
  
  // Additional options
  additionalServices: Record<string, boolean>;
  notes?: string;
}