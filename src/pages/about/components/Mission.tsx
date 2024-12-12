import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

export default function Mission() {
  return (
    <div className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              At NeatNook, we believe every home deserves to be a sanctuary of cleanliness and comfort. 
              Our mission is to provide exceptional cleaning services that transform houses into 
              welcoming homes, giving our clients more time to focus on what matters most to them.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Target, text: 'Deliver outstanding service quality' },
                { icon: Heart, text: 'Create healthy living spaces' },
                { icon: Users, text: 'Build lasting client relationships' }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center">
                  <Icon className="h-5 w-5 text-orange-600" />
                  <span className="ml-3 text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Clean living room"
            />
          </div>
        </div>
      </div>
    </div>
  );
}