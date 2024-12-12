import React from 'react';
import PostcodeSearch from '../../../../components/common/PostcodeSearch';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          NeatNook
          <span className="block text-orange-600">Professional House Cleaning</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Experience the comfort of a professionally cleaned home with our trusted regular cleaning service. 
          Let us take care of the cleaning while you focus on what matters most.
        </p>
        <div className="max-w-md mx-auto">
          <PostcodeSearch buttonText="Get Quote" />
        </div>
      </div>
    </div>
  );
}