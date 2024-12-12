export interface PageSEO {
  id: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  lastModified: string;
  schema?: string;
  alternateUrls?: { [key: string]: string };
  metaRobots?: string[];
  priority?: number;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageSEOFormData extends Omit<PageSEO, 'id' | 'lastModified'> {}

export interface SitemapConfig {
  enabled: boolean;
  excludePaths: string[];
  additionalUrls: string[];
}

export interface RobotsConfig {
  defaultPolicy: string[];
  customRules: RobotsRule[];
}

export interface RobotsRule {
  userAgent: string;
  rules: string[];
  paths?: string[];
}