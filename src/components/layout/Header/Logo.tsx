import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-white" />
      </div>
      <div>
        <span className="text-2xl font-bold text-gray-900">NeatNook</span>
        <span className="hidden sm:block text-sm text-gray-500">Professional Cleaning</span>
      </div>
    </Link>
  );
}