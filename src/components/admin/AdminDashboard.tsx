import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import DashboardOverview from './DashboardOverview';
import ChatModule from './modules/chat/ChatModule';
import CRMModule from './modules/crm/CRMModule';
import BookingsModule from './modules/bookings/BookingsModule';
import ReviewManager from './reviews/ReviewManager';
import TestimonialManager from './testimonials/TestimonialManager';
import BlogManager from './blog/BlogManager';
import SEOManager from './seo/SEOManager';
import RequestManager from './requests/RequestManager';
import ProfileManager from './profile/ProfileManager';

export default function AdminDashboard() {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
            <div className="bg-white rounded-xl shadow-sm p-6 min-h-[calc(100vh-8rem)]">
              <Routes>
                <Route path="/" element={<DashboardOverview />} />
                <Route path="crm" element={<CRMModule />} />
                <Route path="chat" element={<ChatModule />} />
                <Route path="bookings" element={<BookingsModule />} />
                <Route path="reviews" element={<ReviewManager />} />
                <Route path="testimonials" element={<TestimonialManager />} />
                <Route path="blog" element={<BlogManager />} />
                <Route path="seo" element={<SEOManager />} />
                <Route path="requests" element={<RequestManager />} />
                <Route path="profile" element={<ProfileManager />} />
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </AdminProvider>
  );
}