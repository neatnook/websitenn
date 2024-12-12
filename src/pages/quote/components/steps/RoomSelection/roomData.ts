import { BedDouble, Bath, DoorClosed, Sofa, ArrowUpDown, ChefHat } from 'lucide-react';

export const roomTypes = [
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
];