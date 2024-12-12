export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image?: string;
}