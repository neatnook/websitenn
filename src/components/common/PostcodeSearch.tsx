import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface PostcodeSearchProps {
  className?: string;
  buttonText?: string;
  showIcon?: boolean;
  onSubmit?: (postcode: string) => void;
}

export default function PostcodeSearch({ 
  className = '',
  buttonText = 'Get Quote',
  showIcon = false,
  onSubmit
}: PostcodeSearchProps) {
  const [postcode, setPostcode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedPostcode = postcode.trim().toUpperCase();
    
    if (trimmedPostcode) {
      if (onSubmit) {
        onSubmit(trimmedPostcode);
      } else {
        navigate(`/quote?postcode=${encodeURIComponent(trimmedPostcode)}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex h-12 sm:h-14">
        <input
          type="text"
          placeholder="Enter your postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className="flex-1 px-4 sm:px-6 text-base sm:text-lg rounded-l-lg border-2 border-r-0 border-orange-200 
            focus:border-orange-500 focus:ring-orange-500 focus:outline-none placeholder-gray-400
            disabled:bg-gray-50 disabled:text-gray-500"
          aria-label="Postcode"
        />
        <button
          type="submit"
          className="px-4 sm:px-8 bg-orange-600 text-white rounded-r-lg hover:bg-orange-700 
            transition-colors duration-200 font-medium text-base sm:text-lg whitespace-nowrap
            disabled:bg-orange-300 flex items-center justify-center gap-2"
          disabled={!postcode.trim()}
        >
          {showIcon && <Search className="w-5 h-5" />}
          {buttonText}
        </button>
      </div>
    </form>
  );
}