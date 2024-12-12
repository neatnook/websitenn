import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { formatRelativeTime } from '../../../../../utils/dates';
import { Lead } from '../../../../../types/lead';

interface LeadCardContentProps {
  lead: Lead;
}

export default React.memo(function LeadCardContent({ lead }: LeadCardContentProps) {
  return (
    <>
      <div className="mt-2 space-y-1">
        <a
          href={`mailto:${lead.email}`}
          className="flex items-center text-sm text-gray-600 hover:text-orange-600"
        >
          <Mail className="w-4 h-4 mr-1" />
          {lead.email}
        </a>
        <a
          href={`tel:${lead.phone}`}
          className="flex items-center text-sm text-gray-600 hover:text-orange-600"
        >
          <Phone className="w-4 h-4 mr-1" />
          {lead.phone}
        </a>
      </div>
      
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {formatRelativeTime(lead.createdAt)}
        </span>
        <span className="text-xs font-medium text-orange-600">
          {lead.service.replace('-', ' ')}
        </span>
      </div>
    </>
  );
});