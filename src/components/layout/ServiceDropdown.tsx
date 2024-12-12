import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Home, Sparkles, Calendar, Timer } from 'lucide-react';

const services = [
  { 
    icon: Home,
    name: 'House Cleaning', 
    path: '/services/house-cleaning',
    description: 'Regular domestic cleaning service'
  },
  { 
    icon: Sparkles,
    name: 'Deep Cleaning', 
    path: '/services/deep-cleaning',
    description: 'Thorough deep cleaning service'
  },
  { 
    icon: Calendar,
    name: 'End of Tenancy', 
    path: '/services/end-of-tenancy',
    description: 'Professional end of tenancy cleaning'
  },
  { 
    icon: Timer,
    name: 'Oven Cleaning', 
    path: '/services/oven-cleaning',
    description: 'Specialist oven cleaning service'
  }
];

export default function ServiceDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200"
      >
        <span>Services</span>
        <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div 
        className={`
          absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50
          transition-all duration-200 origin-top
          ${isOpen 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-95 pointer-events-none'}
        `}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.path}
              to={service.path}
              className="flex items-start px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Icon className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">{service.name}</div>
                <div className="text-xs text-gray-500">{service.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}