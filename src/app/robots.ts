import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/checkout', '/admin'],
    },
    sitemap: 'https://snigdhaoils.com/sitemap.xml',
    host: 'https://snigdhaoils.com',
  };
}
