import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function SEOHead({ title, description, image }: SEOHeadProps) {
  const location = useLocation();
  const url = `https://neatnook.co.uk${location.pathname}`;

  useEffect(() => {
    updateMetaTags({
      title,
      description,
      image,
      url,
    });
  }, [title, description, image, url]);

  return null;
}