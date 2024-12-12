const BASE_PRICES = {
  regular: 18,
  deep: 25,
  'end-of-tenancy': 20
} as const;

const OVEN_PRICES = {
  singleOven: 65,
  doubleOven: 95,
  rangeOven: 120
} as const;

export const calculateOvenPrice = (additionalServices: Record<string, boolean>): number => {
  if (additionalServices.singleOven) return OVEN_PRICES.singleOven;
  if (additionalServices.doubleOven) return OVEN_PRICES.doubleOven;
  if (additionalServices.rangeOven) return OVEN_PRICES.rangeOven;
  return 0;
};

export const calculateRoomBasedPrice = (
  service: string,
  rooms: { bedrooms: number; bathrooms: number; livingRooms: number; kitchen: number }
): number => {
  const basePrice = BASE_PRICES[service as keyof typeof BASE_PRICES] || 0;
  
  const totalRooms = (
    (rooms.bedrooms || 0) + 
    (rooms.bathrooms || 0) + 
    (rooms.livingRooms || 0) + 
    (rooms.kitchen || 0)
  );

  if (totalRooms === 0) return 0;

  // Estimate hours needed based on service type and rooms
  let estimatedHours = Math.max(3, Math.ceil(totalRooms * 1.5));
  
  if (service === 'deep') {
    estimatedHours = Math.ceil(estimatedHours * 1.5);
  } else if (service === 'end-of-tenancy') {
    estimatedHours = Math.ceil(estimatedHours * 1.75);
  }

  return basePrice * estimatedHours;
};