import React from 'react';
import { NavigationProps } from './types';
import NavLink from './NavLink';
import NavButton from './NavButton';
import ServiceDropdown from '../ServiceDropdown';

export default function DesktopNav({ items }: NavigationProps) {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {items.map((item) => {
        if (item.type === 'dropdown') {
          return <ServiceDropdown key={item.name} />;
        }

        if (item.type === 'button') {
          return <NavButton key={item.name} item={item} />;
        }

        return (
          <NavLink key={item.name} to={item.path} highlight={item.highlight}>
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
}