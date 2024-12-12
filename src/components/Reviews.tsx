import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Thompson',
    rating: 5,
    comment: 'Excellent service! My house has never been cleaner. The attention to detail is impressive.',
    location: 'Cambridge City Centre',
  },
  {
    id: 2,
    name: 'James Wilson',
    rating: 5,
    comment: 'Reliable and professional. They always go above and beyond what's expected.',
    location: 'Cherry Hinton',
  },
  {
    id: 3,
    name: 'Emma Roberts',
    rating: 5,
    comment: 'Very thorough and efficient. Great communication and fantastic results.',
    location: 'Chesterton',
  },
];

export default function Reviews() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <div>
                <div className="flex items-center gap-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="mt-6 text-lg leading-8 text-gray-600">
                  "{review.comment}"
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="text-base font-semibold text-gray-900">{review.name}</div>
                <div className="mt-1 text-sm text-gray-500">{review.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}