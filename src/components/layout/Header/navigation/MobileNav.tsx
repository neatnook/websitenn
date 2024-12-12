import React from 'react';
import { NavigationProps } from './types';
import NavLink from './NavLink';
import NavButton from './NavButton';

interface MobileNavProps extends NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-100">
      <div className="px-4 pt-2 pb-3 space-y-3">
        {items.map((item) => {
          if (item.type === 'dropdown') {
            return (
              <div key={item.name} className="px-3 py-2">
                <div className="font-medium text-gray-900">Services</div>
                {item.items?.map((subItem) => (
                  <NavLink
                    key={subItem.path}
                    to={subItem.path}
                    onClick={onClose}
                  >
                    <span className="block pl-4 py-2">{subItem.name}</span>
                  </NavLink>
                ))}
              </div>
            );
          }

          if (item.type === 'button') {
            return (
              <div key={item.name} className="px-3 py-1">
                <NavButton item={item} />
              </div>
            );
          }

          return (
            <NavLink
              key={item.name}
              to={item.path}
              highlight={item.highlight}
              onClick={onClose}
            >
              <span className="block px-3 py-2">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}