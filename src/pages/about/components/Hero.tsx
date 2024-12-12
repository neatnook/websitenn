import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Cleaning team"
        />
        <div className="absolute inset-0 bg-orange-600 mix-blend-multiply opacity-40" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">About NeatNook</h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-100">
          Transforming homes across Cambridge with professional cleaning services since 2020. 
          Our commitment to excellence and attention to detail sets us apart.
        </p>
      </div>
    </div>
  );
}