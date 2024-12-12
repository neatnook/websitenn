import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { BlogPost, BlogFormData } from '../../../types/blog';
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import { toast } from 'react-hot-toast';

// Mock data - replace with actual API calls in production
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Spring Cleaning Tips',
    slug: 'spring-cleaning-tips',
    content: 'Content here...',
    excerpt: 'Essential tips for spring cleaning your home',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    author: 'Sarah Johnson',
    publishDate: '2024-03-19',
    status: 'published',
    tags: ['cleaning', 'tips', 'spring']
  }
];

export default function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>(mockPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | undefined>();

  const handleCreate = (formData: BlogFormData) => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      author: 'Admin', // Replace with actual user in production
      publishDate: new Date().toISOString(),
      status: 'draft',
      ...formData
    };
    setPosts([newPost, ...posts]);
    setIsEditing(false);
    toast.success('Blog post created successfully!');
  };

  const handleUpdate = (formData: BlogFormData) => {
    if (!currentPost) return;
    const updatedPost: BlogPost = {
      ...currentPost,
      ...formData,
      slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    };
    setPosts(posts.map(post => post.id === currentPost.id ? updatedPost : post));
    setIsEditing(false);
    setCurrentPost(undefined);
    toast.success('Blog post updated successfully!');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
      toast.success('Blog post deleted successfully!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Post
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            {currentPost ? 'Edit Post' : 'Create New Post'}
          </h3>
          <BlogForm
            post={currentPost}
            onSubmit={currentPost ? handleUpdate : handleCreate}
            onCancel={() => {
              setIsEditing(false);
              setCurrentPost(undefined);
            }}
          />
        </div>
      ) : (
        <BlogList
          posts={posts}
          onEdit={(post) => {
            setCurrentPost(post);
            setIsEditing(true);
          }}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}