import React, { useState } from 'react';
import { BlogFormData, BlogPost } from '../../../types/blog';
import RichTextEditor from './RichTextEditor';
import TagSelector from './TagSelector';
import { Image } from 'lucide-react';

interface BlogFormProps {
  post?: BlogPost;
  onSubmit: (data: BlogFormData) => void;
  onCancel: () => void;
}

export default function BlogForm({ post, onSubmit, onCancel }: BlogFormProps) {
  const [formData, setFormData] = useState<BlogFormData>({
    title: post?.title || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
    coverImage: post?.coverImage || '',
    tags: post?.tags || [],
  });

  const [previewImage, setPreviewImage] = useState(formData.coverImage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <RichTextEditor
          value={formData.content}
          onChange={(content) => setFormData({ ...formData, content })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cover Image
        </label>
        <div className="flex items-start space-x-4">
          <div className="flex-1">
            <input
              type="url"
              value={formData.coverImage}
              onChange={(e) => {
                setFormData({ ...formData, coverImage: e.target.value });
                setPreviewImage(e.target.value);
              }}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="Enter image URL"
              required
            />
          </div>
          {previewImage && (
            <div className="relative w-24 h-24">
              <img
                src={previewImage}
                alt="Cover preview"
                className="w-full h-full object-cover rounded-md"
                onError={() => setPreviewImage('')}
              />
            </div>
          )}
          {!previewImage && (
            <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
              <Image className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>
        <TagSelector
          value={formData.tags}
          onChange={(tags) => setFormData({ ...formData, tags })}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
        >
          {post ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
}