import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem } from './types';

interface NavButtonProps {
  item: NavigationItem;
}

export default function NavButton({ item }: NavButtonProps) {
  const Icon = item.icon;
  
  const baseStyles = "inline-flex items-center px-4 py-2 rounded-md transition-colors text-sm font-medium";
  const variants = {
    primary: "bg-orange-600 text-white border border-orange-600 hover:bg-orange-700 hover:border-orange-700",
    outline: "border border-orange-600 text-orange-600 hover:bg-orange-50"
  };

  return (
    <Link
      to={item.path}
      className={`${baseStyles} ${variants[item.variant || 'primary']}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {item.name}
    </Link>
  );
}