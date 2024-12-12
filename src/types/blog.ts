export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishDate: string;
  status: 'draft' | 'published';
  tags: string[];
}

export interface BlogFormData {
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
}