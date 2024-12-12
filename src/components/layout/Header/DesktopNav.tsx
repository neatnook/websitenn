import React from 'react';
import { Link } from 'react-router-dom';
import ServiceDropdown from './ServiceDropdown';
import { mainNavigation } from './navigation';

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {mainNavigation.map((item) => {
        if (item.type === 'dropdown') {
          return <ServiceDropdown key={item.name} />;
        }

        if (item.highlight) {
          return (
            <Link
              key={item.name}
              to={item.path}
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {item.name}
            </Link>
          );
        }

        return (
          <Link
            key={item.name}
            to={item.path}
            className="text-gray-700 hover:text-orange-600"
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}