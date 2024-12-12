import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import Services from './components/home/services';
import AdminDashboard from './components/admin/AdminDashboard';
import Login from './components/admin/Login';
import BookingPage from './pages/BookingPage';
import QuotePage from './pages/quote/QuotePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import HouseCleaning from './pages/services/HouseCleaning';
import DeepCleaning from './pages/services/DeepCleaning';
import EndOfTenancy from './pages/services/EndOfTenancy';
import OvenCleaning from './pages/services/OvenCleaning';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/dashboard/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quote"
            element={
              <Layout>
                <QuotePage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/services/house-cleaning"
            element={
              <Layout>
                <HouseCleaning />
              </Layout>
            }
          />
          <Route
            path="/services/deep-cleaning"
            element={
              <Layout>
                <DeepCleaning />
              </Layout>
            }
          />
          <Route
            path="/services/end-of-tenancy"
            element={
              <Layout>
                <EndOfTenancy />
              </Layout>
            }
          />
          <Route
            path="/services/oven-cleaning"
            element={
              <Layout>
                <OvenCleaning />
              </Layout>
            }
          />
          <Route
            path="/book"
            element={
              <Layout>
                <BookingPage />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
                <Services />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}