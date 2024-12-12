import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Plus } from 'lucide-react';
import { Testimonial, TestimonialFormData } from '../../../types/testimonial';
import TestimonialList from './TestimonialList';
import TestimonialForm from './TestimonialForm';

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Emma Roberts',
    position: 'Homeowner',
    company: '',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'The deep cleaning service transformed my home. The attention to detail was remarkable.',
    rating: 5,
    service: 'Deep Cleaning',
    featured: true,
    date: '2024-03-15',
    location: 'Cambridge'
  }
];

export default function TestimonialManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | undefined>();

  const handleCreate = (formData: TestimonialFormData) => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };
    setTestimonials([newTestimonial, ...testimonials]);
    setIsEditing(false);
    toast.success('Testimonial added successfully!');
  };

  const handleUpdate = (formData: TestimonialFormData) => {
    if (!currentTestimonial) return;
    const updatedTestimonial: Testimonial = {
      ...currentTestimonial,
      ...formData
    };
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === currentTestimonial.id ? updatedTestimonial : testimonial
    ));
    setIsEditing(false);
    setCurrentTestimonial(undefined);
    toast.success('Testimonial updated successfully!');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
      toast.success('Testimonial deleted successfully!');
    }
  };

  const handleToggleFeatured = (id: string) => {
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === id 
        ? { ...testimonial, featured: !testimonial.featured }
        : testimonial
    ));
    toast.success('Featured status updated!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Testimonial
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            {currentTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
          </h3>
          <TestimonialForm
            testimonial={currentTestimonial}
            onSubmit={currentTestimonial ? handleUpdate : handleCreate}
            onCancel={() => {
              setIsEditing(false);
              setCurrentTestimonial(undefined);
            }}
          />
        </div>
      ) : (
        <TestimonialList
          testimonials={testimonials}
          onEdit={(testimonial) => {
            setCurrentTestimonial(testimonial);
            setIsEditing(true);
          }}
          onDelete={handleDelete}
          onToggleFeatured={handleToggleFeatured}
        />
      )}
    </div>
  );
}