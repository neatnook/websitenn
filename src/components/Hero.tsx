import React from 'react';
import PostcodeSearch from './common/PostcodeSearch';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-50 to-white min-h-[70vh]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600 mb-6">
              Cambridge's Most Trusted Cleaners
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Professional Home
              <span className="block text-orange-600">Cleaning Services</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the finest home cleaning service in Cambridge. Get your instant quote today.
            </p>

            <div className="max-w-md mx-auto lg:mx-0">
              <PostcodeSearch buttonText="Get Quote" />
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">4.9/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">5000+</div>
                <div className="text-sm text-gray-600">Cleanings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block relative mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional cleaning service"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            className="w-8 h-8 rounded-full border-2 border-white"
                            src={`https://i.pravatar.cc/100?img=${i}`}
                            alt=""
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">+1.2k bookings this month</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="text-sm font-semibold">Get Quote →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}