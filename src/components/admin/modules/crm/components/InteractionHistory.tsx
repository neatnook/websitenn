import React from 'react';
import { formatDateTime } from '../../../../../utils/dates';
import { Calendar, MessageSquare, Star, Headphones } from 'lucide-react';

const interactions = [
  {
    id: '1',
    customerId: '1',
    type: 'booking',
    date: '2024-03-15T10:00:00Z',
    details: 'Booked regular cleaning service'
  },
  {
    id: '2',
    customerId: '1',
    type: 'message',
    date: '2024-03-14T15:30:00Z',
    details: 'Inquired about deep cleaning services'
  }
];

const typeIcons = {
  booking: Calendar,
  message: MessageSquare,
  review: Star,
  support: Headphones
};

export default function InteractionHistory() {
  return (
    <div className="space-y-6">
      <div className="flow-root">
        <ul className="-mb-8">
          {interactions.map((interaction, idx) => {
            const Icon = typeIcons[interaction.type as keyof typeof typeIcons];
            return (
              <li key={interaction.id}>
                <div className="relative pb-8">
                  {idx !== interactions.length - 1 && (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-orange-600" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">{interaction.details}</p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        {formatDateTime(interaction.date)}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}