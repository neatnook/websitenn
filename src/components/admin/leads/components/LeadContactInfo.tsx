import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface LeadContactInfoProps {
  email: string;
  phone: string;
}

export default function LeadContactInfo({ email, phone }: LeadContactInfoProps) {
  return (
    <div className="space-y-1">
      <a
        href={`mailto:${email}`}
        className="flex items-center text-sm text-gray-600 hover:text-orange-600"
      >
        <Mail className="w-4 h-4 mr-1" />
        {email}
      </a>
      <a
        href={`tel:${phone}`}
        className="flex items-center text-sm text-gray-600 hover:text-orange-600"
      >
        <Phone className="w-4 h-4 mr-1" />
        {phone}
      </a>
    </div>
  );
}