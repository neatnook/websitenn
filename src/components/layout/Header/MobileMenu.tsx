import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { navigationItems } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />

      {/* Menu panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">NeatNook</span>
              </div>
              <button
                onClick={onClose}
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-6">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.children ? (
                    <>
                      <div className="px-3 py-2 text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={onClose}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 
                            hover:text-orange-600 rounded-md"
                        >
                          <div className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            {child.name}
                          </div>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="block px-3 py-2 text-base font-medium text-gray-900 
                        hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Book Now Button */}
          <div className="p-6 border-t border-gray-200">
            <Link
              to="/book"
              onClick={onClose}
              className="flex items-center justify-center w-full px-4 py-3 border border-transparent 
                rounded-lg shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}