import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-x-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <Quote className="h-8 w-8 text-orange-200 group-hover:text-orange-300 transition-colors" />
        </div>
        <div className="mt-6 text-lg leading-8 text-gray-600 italic">
          "{review.comment}"
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="text-base font-semibold text-gray-900">{review.name}</div>
        <div className="mt-1 text-sm text-orange-600">{review.location}</div>
      </div>
    </div>
  );
}