interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const updateMetaTags = ({
  title = 'NeatNook - Professional Cleaning Services in Cambridge',
  description = 'Expert cleaning services in Cambridge. House cleaning, deep cleaning, end of tenancy & more. Book your professional cleaners today!',
  image = 'https://neatnook.co.uk/og-image.jpg',
  url = 'https://neatnook.co.uk'
}: SEOProps) => {
  // Update title
  document.title = title;

  // Update meta tags
  const metaTags = {
    'description': description,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:url': url,
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    // Update existing meta tags
    const existingTag = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
    if (existingTag) {
      existingTag.setAttribute('content', content);
    }
  });
};