import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Settings, Users, MessageSquare, FileText, LayoutDashboard, 
  ClipboardList, Shield, MessageCircle, Calendar, UserCog 
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const navItems = [
  { id: 'overview', icon: LayoutDashboard, label: 'Overview', path: '/admin/dashboard' },
  { id: 'crm', icon: UserCog, label: 'CRM', path: '/admin/dashboard/crm' },
  { id: 'bookings', icon: Calendar, label: 'Bookings', path: '/admin/dashboard/bookings' },
  { id: 'chat', icon: MessageCircle, label: 'Live Chat', path: '/admin/dashboard/chat' },
  { id: 'requests', icon: ClipboardList, label: 'Requests', path: '/admin/dashboard/requests' },
  { id: 'reviews', icon: MessageSquare, label: 'Reviews', path: '/admin/dashboard/reviews' },
  { id: 'blog', icon: FileText, label: 'Blog Posts', path: '/admin/dashboard/blog' },
  { id: 'testimonials', icon: Users, label: 'Testimonials', path: '/admin/dashboard/testimonials' },
  { id: 'seo', icon: Settings, label: 'SEO Settings', path: '/admin/dashboard/seo' },
  { id: 'profile', icon: Shield, label: 'Profile', path: '/admin/dashboard/profile' }
] as const;

export default function Sidebar() {
  const location = useLocation();
  const { navigateToTab } = useAdmin();

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
      <div className="p-6">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Dashboard
        </h2>
      </div>
      <nav className="space-y-1 px-3">
        {navItems.map(({ id, icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={id}
              onClick={() => navigateToTab(id)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-orange-50 text-orange-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-orange-600' : 'text-gray-400'}`} />
              {label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}