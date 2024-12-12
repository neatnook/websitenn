import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { services } from './constants';

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Increased delay for better UX
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center text-gray-700 hover:text-orange-600">
        Services
        <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>
      
      <div className={`
        absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50
        transition-all duration-200 origin-top
        ${isOpen 
          ? 'opacity-100 transform scale-100' 
          : 'opacity-0 transform scale-95 pointer-events-none'}
      `}>
        {services.map((service) => (
          <Link
            key={service.path}
            to={service.path}
            className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
}