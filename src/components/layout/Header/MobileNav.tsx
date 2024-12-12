import React from 'react';
import { Link } from 'react-router-dom';
import { mainNavigation } from './navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-100">
      <div className="px-4 pt-2 pb-3 space-y-1">
        {mainNavigation.map((item) => {
          if (item.type === 'dropdown') {
            return (
              <div key={item.name} className="px-3 py-2">
                <div className="font-medium text-gray-900">Services</div>
                {item.items?.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className="block pl-4 py-2 text-gray-600 hover:text-orange-600"
                    onClick={onClose}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 ${
                item.highlight
                  ? 'text-orange-600 hover:text-orange-700 font-medium'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
              onClick={onClose}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}