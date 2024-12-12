import React from 'react';
import Select from 'react-select';
import { PageSEOFormData } from '../../../types/seo';

interface BasicSEOFormProps {
  formData: PageSEOFormData;
  onChange: (data: PageSEOFormData) => void;
}

const commonKeywords = [
  { value: 'cleaning-services', label: 'Cleaning Services' },
  { value: 'house-cleaning', label: 'House Cleaning' },
  { value: 'deep-cleaning', label: 'Deep Cleaning' },
  { value: 'end-of-tenancy', label: 'End of Tenancy' },
  { value: 'cambridge-cleaners', label: 'Cambridge Cleaners' },
  { value: 'professional-cleaning', label: 'Professional Cleaning' }
];

export default function BasicSEOForm({ formData, onChange }: BasicSEOFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="path" className="block text-sm font-medium text-gray-700">
          Page Path
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            neatnook.co.uk
          </span>
          <input
            type="text"
            id="path"
            value={formData.path}
            onChange={(e) => onChange({ ...formData, path: e.target.value })}
            className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            placeholder="/services/house-cleaning"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Meta Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => onChange({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Meta Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => onChange({ ...formData, description: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Keywords
        </label>
        <Select
          isMulti
          options={commonKeywords}
          value={formData.keywords.map(keyword => ({
            value: keyword,
            label: keyword.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')
          }))}
          onChange={(newValue) => {
            onChange({
              ...formData,
              keywords: newValue.map(option => option.value)
            });
          }}
          className="mt-1"
          classNamePrefix="react-select"
        />
      </div>

      <div>
        <label htmlFor="ogImage" className="block text-sm font-medium text-gray-700">
          OG Image URL
        </label>
        <input
          type="url"
          id="ogImage"
          value={formData.ogImage}
          onChange={(e) => onChange({ ...formData, ogImage: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
        />
      </div>

      <div>
        <label htmlFor="canonicalUrl" className="block text-sm font-medium text-gray-700">
          Canonical URL
        </label>
        <input
          type="url"
          id="canonicalUrl"
          value={formData.canonicalUrl}
          onChange={(e) => onChange({ ...formData, canonicalUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="noIndex"
          checked={formData.noIndex}
          onChange={(e) => onChange({ ...formData, noIndex: e.target.checked })}
          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
        />
        <label htmlFor="noIndex" className="ml-2 block text-sm text-gray-900">
          No Index
        </label>
      </div>
    </div>
  );
}