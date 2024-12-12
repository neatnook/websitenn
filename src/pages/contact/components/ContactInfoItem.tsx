import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

export function ContactInfoItem({ icon: Icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-start">
      <Icon className="w-6 h-6 text-orange-600 mt-1" />
      <div className="ml-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="mt-1">{content}</div>
      </div>
    </div>
  );
}