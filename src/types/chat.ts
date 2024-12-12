export interface Chat {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  messages: Message[];
  status: 'active' | 'closed';
  createdAt: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'customer' | 'admin';
  timestamp: string;
}