import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Plus } from 'lucide-react';
import { PageSEO, PageSEOFormData } from '../../../types/seo';
import SEOList from './SEOList';
import SEOForm from './SEOForm';

const initialPages: PageSEO[] = [
  {
    id: '1',
    path: '/',
    title: 'NeatNook - Professional Cleaning Services in Cambridge',
    description: 'Expert cleaning services in Cambridge. House cleaning, deep cleaning, end of tenancy & more. Book your professional cleaners today!',
    keywords: ['cleaning services', 'house cleaning', 'Cambridge cleaners'],
    ogImage: 'https://neatnook.co.uk/og-image.jpg',
    canonicalUrl: 'https://neatnook.co.uk',
    noIndex: false,
    lastModified: new Date().toISOString()
  }
];

export default function SEOManager() {
  const [pages, setPages] = useState<PageSEO[]>(initialPages);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageSEO | undefined>();

  const handleCreate = (formData: PageSEOFormData) => {
    const newPage: PageSEO = {
      id: Date.now().toString(),
      ...formData,
      lastModified: new Date().toISOString()
    };
    setPages([newPage, ...pages]);
    setIsEditing(false);
    toast.success('Page SEO settings added successfully!');
  };

  const handleUpdate = (formData: PageSEOFormData) => {
    if (!currentPage) return;
    const updatedPage: PageSEO = {
      ...currentPage,
      ...formData,
      lastModified: new Date().toISOString()
    };
    setPages(pages.map(page => 
      page.id === currentPage.id ? updatedPage : page
    ));
    setIsEditing(false);
    setCurrentPage(undefined);
    toast.success('Page SEO settings updated successfully!');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete these SEO settings?')) {
      setPages(pages.filter(page => page.id !== id));
      toast.success('Page SEO settings deleted successfully!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">SEO Settings</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Page SEO
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            {currentPage ? 'Edit Page SEO' : 'Add New Page SEO'}
          </h3>
          <SEOForm
            page={currentPage}
            onSubmit={currentPage ? handleUpdate : handleCreate}
            onCancel={() => {
              setIsEditing(false);
              setCurrentPage(undefined);
            }}
          />
        </div>
      ) : (
        <SEOList
          pages={pages}
          onEdit={(page) => {
            setCurrentPage(page);
            setIsEditing(true);
          }}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}