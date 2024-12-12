import React from 'react';
import { 
  BedDouble, Bath, DoorClosed, Sofa, 
  ArrowUpDown, ChefHat 
} from 'lucide-react';
import { QuoteFormData } from '../../../types';
import RoomCounter from '../RoomCounter';

interface RoomsSectionProps {
  formData: QuoteFormData;
  onChange: (data: Partial<QuoteFormData>) => void;
}

const rooms = [
  {
    id: 'kitchen',
    label: 'Kitchen',
    icon: ChefHat,
    max: 3
  },
  {
    id: 'bedrooms',
    label: 'Bedrooms',
    icon: BedDouble,
    max: 10
  },
  {
    id: 'bathrooms',
    label: 'Bathrooms',
    icon: Bath,
    max: 5
  },
  {
    id: 'toilets',
    label: 'Toilets',
    icon: DoorClosed,
    max: 5
  },
  {
    id: 'livingRooms',
    label: 'Living Rooms',
    icon: Sofa,
    max: 4
  },
  {
    id: 'stairs',
    label: 'Stairs',
    icon: ArrowUpDown,
    max: 3
  }
] as const;

export default function RoomsSection({ formData, onChange }: RoomsSectionProps) {
  const handleRoomChange = (roomId: string, value: number) => {
    onChange({ [roomId]: value });
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Please choose the rooms to clean</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {rooms.map(({ id, label, icon, max }) => (
          <RoomCounter
            key={id}
            id={id}
            label={label}
            icon={icon}
            count={formData[id as keyof QuoteFormData] as number || 0}
            onChange={(value) => handleRoomChange(id, value)}
            max={max}
          />
        ))}
      </div>
    </div>
  );
}