import React, { useState } from 'react';
import { PageSEO, PageSEOFormData } from '../../../types/seo';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../ui/Tabs';
import { Globe, Code, Settings2, FileJson } from 'lucide-react';
import BasicSEOForm from './BasicSEOForm';
import SchemaGenerator from './advanced/SchemaGenerator';
import RobotsManager from './advanced/RobotsManager';
import SitemapConfig from './advanced/SitemapConfig';

interface SEOFormProps {
  page?: PageSEO;
  onSubmit: (data: PageSEOFormData) => void;
  onCancel: () => void;
}

export default function SEOForm({ page, onSubmit, onCancel }: SEOFormProps) {
  const [formData, setFormData] = useState<PageSEOFormData>({
    path: page?.path || '',
    title: page?.title || '',
    description: page?.description || '',
    keywords: page?.keywords || [],
    ogImage: page?.ogImage || '',
    canonicalUrl: page?.canonicalUrl || '',
    noIndex: page?.noIndex || false,
    schema: page?.schema || '',
    alternateUrls: page?.alternateUrls || {},
    metaRobots: page?.metaRobots || ['index', 'follow'],
    priority: page?.priority || 0.5,
    changeFreq: page?.changeFreq || 'monthly',
    breadcrumbs: page?.breadcrumbs || [],
    structuredData: page?.structuredData || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic" className="flex items-center">
            <Globe className="w-4 h-4 mr-2" />
            Basic SEO
          </TabsTrigger>
          <TabsTrigger value="schema" className="flex items-center">
            <Code className="w-4 h-4 mr-2" />
            Schema
          </TabsTrigger>
          <TabsTrigger value="robots" className="flex items-center">
            <Settings2 className="w-4 h-4 mr-2" />
            Robots
          </TabsTrigger>
          <TabsTrigger value="sitemap" className="flex items-center">
            <FileJson className="w-4 h-4 mr-2" />
            Sitemap
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <BasicSEOForm formData={formData} onChange={setFormData} />
        </TabsContent>

        <TabsContent value="schema">
          <SchemaGenerator
            value={formData.schema || ''}
            onChange={(schema) => setFormData({ ...formData, schema })}
          />
        </TabsContent>

        <TabsContent value="robots">
          <RobotsManager
            config={{
              defaultPolicy: formData.metaRobots || [],
              customRules: []
            }}
            onChange={(config) => setFormData({
              ...formData,
              metaRobots: config.defaultPolicy
            })}
          />
        </TabsContent>

        <TabsContent value="sitemap">
          <SitemapConfig
            config={{
              enabled: true,
              excludePaths: [],
              additionalUrls: []
            }}
            onChange={() => {}}
          />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4 pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
        >
          {page ? 'Update SEO Settings' : 'Add SEO Settings'}
        </button>
      </div>
    </form>
  );
}