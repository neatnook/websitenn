import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

export default function SocialLinks({ 
  className = '', 
  iconSize = 5,
  iconColor = 'text-gray-400 hover:text-orange-500'
}: SocialLinksProps) {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/neatnook', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/neatnook', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/neatnook', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/neatnook', label: 'LinkedIn' }
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`transition-colors ${iconColor}`}
        >
          <Icon className={`w-${iconSize} h-${iconSize}`} />
        </a>
      ))}
    </div>
  );
}