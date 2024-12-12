import React from 'react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Emma Williams',
    role: 'Customer Service Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

export default function Team() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals is committed to delivering exceptional 
            service and ensuring your complete satisfaction.
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {team.map(({ name, role, image }) => (
            <div key={name} className="text-center">
              <div className="relative">
                <img
                  className="mx-auto h-48 w-48 rounded-full object-cover"
                  src={image}
                  alt={name}
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-orange-600/20" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-orange-600">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}