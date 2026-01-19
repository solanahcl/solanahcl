import { useLayoutEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
}: SEOProps) {
  // useLayoutEffect runs synchronously before paint, ensuring SEO tags are set immediately
  // Only updates when props change (i.e., when navigating to a new page)
  useLayoutEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or update meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set basic meta tags
    setMetaTag('description', description);

    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', window.location.href, true);
    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    }
  }, [title, description, keywords, ogImage]); // Update when SEO props change (page navigation)

  return null;
}
