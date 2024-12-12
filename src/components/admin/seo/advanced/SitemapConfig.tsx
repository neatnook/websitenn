import React from 'react';
import { SitemapConfig } from '../../../../types/seo';
import { Plus, Trash2 } from 'lucide-react';

interface SitemapConfigProps {
  config: SitemapConfig;
  onChange: (config: SitemapConfig) => void;
}

export default function SitemapConfiguration({ config, onChange }: SitemapConfigProps) {
  const handleAddExcludePath = () => {
    onChange({
      ...config,
      excludePaths: [...config.excludePaths, '']
    });
  };

  const handleAddAdditionalUrl = () => {
    onChange({
      ...config,
      additionalUrls: [...config.additionalUrls, '']
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="sitemapEnabled"
          checked={config.enabled}
          onChange={(e) => onChange({ ...config, enabled: e.target.checked })}
          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
        />
        <label htmlFor="sitemapEnabled" className="ml-2 block text-sm text-gray-900">
          Enable Sitemap Generation
        </label>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Excluded Paths</h3>
        <div className="space-y-2">
          {config.excludePaths.map((path, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                value={path}
                onChange={(e) => {
                  const newPaths = [...config.excludePaths];
                  newPaths[index] = e.target.value;
                  onChange({ ...config, excludePaths: newPaths });
                }}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="/admin/*"
              />
              <button
                onClick={() => {
                  const newPaths = config.excludePaths.filter((_, i) => i !== index);
                  onChange({ ...config, excludePaths: newPaths });
                }}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            onClick={handleAddExcludePath}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Excluded Path
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Additional URLs</h3>
        <div className="space-y-2">
          {config.additionalUrls.map((url, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="url"
                value={url}
                onChange={(e) => {
                  const newUrls = [...config.additionalUrls];
                  newUrls[index] = e.target.value;
                  onChange({ ...config, additionalUrls: newUrls });
                }}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="https://neatnook.co.uk/special-page"
              />
              <button
                onClick={() => {
                  const newUrls = config.additionalUrls.filter((_, i) => i !== index);
                  onChange({ ...config, additionalUrls: newUrls });
                }}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            onClick={handleAddAdditionalUrl}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Additional URL
          </button>
        </div>
      </div>
    </div>
  );
}