import React from 'react';
import { Search } from 'lucide-react';

export default function CustomerFilters() {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search customers..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      
      <select className="border border-gray-300 rounded-md py-2 px-4 focus:ring-orange-500 focus:border-orange-500">
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <select className="border border-gray-300 rounded-md py-2 px-4 focus:ring-orange-500 focus:border-orange-500">
        <option value="recent">Most Recent</option>
        <option value="spending">Highest Spending</option>
        <option value="bookings">Most Bookings</option>
      </select>
    </div>
  );
}