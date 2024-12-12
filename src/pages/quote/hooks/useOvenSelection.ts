import { QuoteFormData } from '../types';

export function useOvenSelection(
  formData: QuoteFormData,
  onChange: (data: Partial<QuoteFormData>) => void
) {
  const handleOvenSelect = (ovenId: string) => {
    // Reset all oven selections
    const newServices = { ...formData.additionalServices };
    ['singleOven', 'doubleOven', 'rangeOven'].forEach(type => {
      newServices[type] = false;
    });
    // Set the selected oven
    newServices[ovenId] = true;
    onChange({ additionalServices: newServices });
  };

  return { handleOvenSelect };
}