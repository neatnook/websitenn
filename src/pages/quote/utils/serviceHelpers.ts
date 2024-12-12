export const getServiceLabel = (service: string): string => {
  const labels: Record<string, string> = {
    regular: 'Regular House Cleaning',
    deep: 'Deep Cleaning',
    'end-of-tenancy': 'End of Tenancy Cleaning',
    oven: 'Oven Cleaning'
  };
  return labels[service] || service;
};

export const getOvenType = (additionalServices: Record<string, boolean> | undefined): string => {
  if (!additionalServices) return 'Not Selected';
  if (additionalServices.singleOven) return 'Single Oven';
  if (additionalServices.doubleOven) return 'Double Oven';
  if (additionalServices.rangeOven) return 'Range Oven';
  return 'Not Selected';
};