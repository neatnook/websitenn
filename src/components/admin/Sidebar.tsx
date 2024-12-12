import React from 'react';
import { 
  Settings, Users, MessageSquare, FileText, LayoutDashboard, 
  ClipboardList, Shield, UserPlus, MessageCircle 
} from 'lucide-react';

// ... rest of the imports ...

const navItems = [
  { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
  { id: 'leads', icon: UserPlus, label: 'Leads' },
  { id: 'chat', icon: MessageCircle, label: 'Live Chat' },
  { id: 'requests', icon: ClipboardList, label: 'Requests' },
  { id: 'reviews', icon: MessageSquare, label: 'Reviews' },
  { id: 'blog', icon: FileText, label: 'Blog Posts' },
  { id: 'testimonials', icon: Users, label: 'Testimonials' },
  { id: 'seo', icon: Settings, label: 'SEO Settings' },
  { id: 'profile', icon: Shield, label: 'Profile' }
];

// ... rest of the component remains the same ...