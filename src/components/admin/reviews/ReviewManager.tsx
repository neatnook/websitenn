import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Review } from '../../../types';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { Plus } from 'lucide-react';

// Mock data - replace with actual API calls in production
const initialReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    rating: 5,
    comment: 'Excellent service! My house has never been cleaner.',
    date: '2024-03-15',
    location: 'Cambridge City Centre'
  }
];

export default function ReviewManager() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isEditing, setIsEditing] = useState(false);
  const [currentReview, setCurrentReview] = useState<Review | undefined>();

  const handleCreate = (formData: Omit<Review, 'id'>) => {
    const newReview: Review = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([newReview, ...reviews]);
    setIsEditing(false);
    toast.success('Review added successfully!');
  };

  const handleUpdate = (formData: Omit<Review, 'id'>) => {
    if (!currentReview) return;
    const updatedReview: Review = {
      ...currentReview,
      ...formData
    };
    setReviews(reviews.map(review => 
      review.id === currentReview.id ? updatedReview : review
    ));
    setIsEditing(false);
    setCurrentReview(undefined);
    toast.success('Review updated successfully!');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews(reviews.filter(review => review.id !== id));
      toast.success('Review deleted successfully!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Review
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            {currentReview ? 'Edit Review' : 'Add New Review'}
          </h3>
          <ReviewForm
            review={currentReview}
            onSubmit={currentReview ? handleUpdate : handleCreate}
            onCancel={() => {
              setIsEditing(false);
              setCurrentReview(undefined);
            }}
          />
        </div>
      ) : (
        <ReviewList
          reviews={reviews}
          onEdit={(review) => {
            setCurrentReview(review);
            setIsEditing(true);
          }}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}