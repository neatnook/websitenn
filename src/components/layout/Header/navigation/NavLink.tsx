import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  highlight?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ to, highlight, children, onClick }: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        transition-colors duration-200
        ${highlight 
          ? 'text-orange-600 hover:text-orange-700 font-medium' 
          : 'text-gray-700 hover:text-orange-600'}
      `}
    >
      {children}
    </Link>
  );
}