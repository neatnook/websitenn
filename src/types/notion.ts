export interface NotionBookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  frequency?: string;
  addressLine1: string;
  city: string;
  postcode: string;
  bedrooms?: number;
  bathrooms?: number;
  additionalServices?: Record<string, boolean>;
  notes?: string;
}

export interface NotionResponse {
  success: boolean;
  error?: string;
}