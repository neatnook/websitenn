import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  path: string;
  type?: 'dropdown' | 'button';
  variant?: 'primary' | 'outline';
  highlight?: boolean;
  icon?: LucideIcon;
  items?: Array<{
    name: string;
    path: string;
  }>;
}

export interface NavigationProps {
  items: NavigationItem[];
}