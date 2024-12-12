export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  totalBookings: number;
  totalSpent: number;
  lastBooking: string;
  status: 'active' | 'inactive';
  notes?: string;
}

export interface CustomerAnalytics {
  metrics: {
    label: string;
    value: number | string;
    trend: number;
  }[];
  charts: {
    revenue: any;
    services: any;
    options: any;
  };
}

export interface CustomerInteraction {
  id: string;
  customerId: string;
  type: 'booking' | 'message' | 'review' | 'support';
  date: string;
  details: string;
}

export interface Communication {
  id: string;
  customerId: string;
  type: 'email' | 'sms' | 'call';
  direction: 'inbound' | 'outbound';
  date: string;
  subject: string;
  content: string;
  status: 'sent' | 'received' | 'failed';
}