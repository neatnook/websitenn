import React from 'react';
import Select from 'react-select';

interface TagSelectorProps {
  value: string[];
  onChange: (tags: string[]) => void;
}

const commonTags = [
  { value: 'cleaning-tips', label: 'Cleaning Tips' },
  { value: 'home-maintenance', label: 'Home Maintenance' },
  { value: 'eco-friendly', label: 'Eco-Friendly' },
  { value: 'organization', label: 'Organization' },
  { value: 'deep-cleaning', label: 'Deep Cleaning' },
  { value: 'seasonal', label: 'Seasonal' }
];

export default function TagSelector({ value, onChange }: TagSelectorProps) {
  const selectedOptions = value.map(tag => ({
    value: tag,
    label: tag.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));

  return (
    <Select
      isMulti
      options={commonTags}
      value={selectedOptions}
      onChange={(newValue) => {
        onChange(newValue.map(option => option.value));
      }}
      className="react-select-container"
      classNamePrefix="react-select"
      placeholder="Select or create tags..."
      isClearable
      isCreatable
    />
  );
}