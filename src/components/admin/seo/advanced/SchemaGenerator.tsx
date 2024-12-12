import React, { useState } from 'react';
import { Code } from 'lucide-react';

interface SchemaGeneratorProps {
  value: string;
  onChange: (schema: string) => void;
}

const schemaTemplates = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NeatNook",
    "image": "https://neatnook.co.uk/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street",
      "addressLocality": "Cambridge",
      "postalCode": "CB1 1AB",
      "addressCountry": "UK"
    },
    "priceRange": "££"
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "NeatNook"
    },
    "areaServed": "Cambridge"
  }
};

export default function SchemaGenerator({ value, onChange }: SchemaGeneratorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [customSchema, setCustomSchema] = useState(value || '');

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
    if (template) {
      const schemaString = JSON.stringify(schemaTemplates[template as keyof typeof schemaTemplates], null, 2);
      setCustomSchema(schemaString);
      onChange(schemaString);
    }
  };

  const handleCustomSchemaChange = (newValue: string) => {
    setCustomSchema(newValue);
    try {
      JSON.parse(newValue); // Validate JSON
      onChange(newValue);
    } catch (e) {
      // Invalid JSON - don't update parent
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Schema Template
        </label>
        <select
          value={selectedTemplate}
          onChange={(e) => handleTemplateChange(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        >
          <option value="">Select a template...</option>
          <option value="localBusiness">Local Business</option>
          <option value="service">Service</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center">
            <Code className="w-4 h-4 mr-2" />
            JSON-LD Schema
          </div>
        </label>
        <textarea
          value={customSchema}
          onChange={(e) => handleCustomSchemaChange(e.target.value)}
          rows={10}
          className="w-full font-mono text-sm rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          placeholder='{"@context": "https://schema.org", "@type": "WebPage"}'
        />
      </div>
    </div>
  );
}