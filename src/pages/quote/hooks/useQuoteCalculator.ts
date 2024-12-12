import { QuoteFormData } from '../types';
import { calculateEstimatedPrice } from '../utils/quoteHelpers';

export function useQuoteCalculator(formData: QuoteFormData) {
  const basePrice = calculateEstimatedPrice(formData);
  
  // Calculate frequency discount
  const getFrequencyDiscount = () => {
    switch (formData.frequency) {
      case 'weekly':
        return 0.15; // 15% discount
      case 'biweekly':
        return 0.10; // 10% discount
      case 'monthly':
        return 0.05; // 5% discount
      default:
        return 0;
    }
  };

  // Calculate additional services cost
  const getAdditionalServicesCost = () => {
    let cost = 0;
    const services = formData.additionalServices || {};

    // Add costs for each additional service
    if (services.singleOven) cost += 65;
    if (services.doubleOven) cost += 95;
    if (services.rangeOven) cost += 120;
    if (services.fridge) cost += 30;
    if (services.washingMachine) cost += 25;
    if (services.dishwasher) cost += 25;

    return cost;
  };

  // Calculate final price
  const calculateFinalPrice = () => {
    const frequencyDiscount = getFrequencyDiscount();
    const additionalCost = getAdditionalServicesCost();
    const discountedBasePrice = basePrice * (1 - frequencyDiscount);
    
    return discountedBasePrice + additionalCost;
  };

  return {
    basePrice,
    finalPrice: calculateFinalPrice(),
    hasDiscount: getFrequencyDiscount() > 0,
    discountPercentage: getFrequencyDiscount() * 100
  };
}