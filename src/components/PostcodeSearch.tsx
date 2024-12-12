import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PostcodeSearch() {
  const [postcode, setPostcode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postcode.trim()) {
      navigate(`/book?postcode=${encodeURIComponent(postcode.trim().toUpperCase())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter your postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className="w-48 px-4 py-2 rounded-l-md border border-gray-300 focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}