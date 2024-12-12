import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    content: 'Absolutely fantastic service! The attention to detail was remarkable. My house hasn\'t been this clean since we moved in. Highly recommend their deep cleaning service.',
    rating: 5,
    location: 'Cambridge City Centre'
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    content: 'Professional, punctual, and thorough. They transformed our office space and now our employees love coming to work even more. The best commercial cleaning service in Cambridge!',
    rating: 5,
    location: 'Cherry Hinton'
  },
  {
    id: 3,
    name: 'Emma Roberts',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    content: 'Their end of tenancy cleaning service is exceptional. Every property they clean passes inspection with flying colors. Reliable, efficient, and worth every penny.',
    rating: 5,
    location: 'Chesterton'
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(goToNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div className="relative">
              {/* Quote Icon Background */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4">
                <Quote className="w-16 h-16 text-orange-100 transform rotate-12" />
              </div>

              {/* Testimonial Card */}
              <div 
                className="bg-white rounded-xl shadow-lg p-6 transition-opacity duration-500"
                style={{ opacity: isAnimating ? 0 : 1 }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  {/* Author Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-orange-100"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow text-center sm:text-left">
                    {/* Rating */}
                    <div className="flex justify-center sm:justify-start mb-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-base text-gray-900 font-medium mb-3">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between -mx-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-orange-600 
                transition-all duration-200 hover:scale-110 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-orange-600 
                transition-all duration-200 hover:scale-110 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${index === currentIndex 
                    ? 'bg-orange-600 w-6' 
                    : 'bg-orange-200 hover:bg-orange-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}