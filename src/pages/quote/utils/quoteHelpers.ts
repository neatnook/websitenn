import { calculateOvenPrice, calculateRoomBasedPrice } from './priceHelpers';
export { getServiceLabel, getOvenType } from './serviceHelpers';

export const calculateEstimatedPrice = (formData: any): number => {
  if (!formData.service) return 0;

  if (formData.service === 'oven') {
    return calculateOvenPrice(formData.additionalServices || {});
  }

  return calculateRoomBasedPrice(formData.service, {
    bedrooms: formData.bedrooms || 0,
    bathrooms: formData.bathrooms || 0,
    livingRooms: formData.livingRooms || 0,
    kitchen: formData.kitchen || 0
  });
};