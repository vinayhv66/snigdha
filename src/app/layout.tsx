import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#244d36',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://snigdhaoils.com'),
  title: 'Snigdha | 100% Pure Mara Ghaana Wood-Pressed Cooking Oils from Karnataka Farmers',
  description: 'Shop authentic cold wood-pressed Coconut Oil (Thengina Enne), Groundnut Oil (Shenga Enne), and Sesame Oil (Ellu Enne). Artisanal Mara Ghaana extraction below 38°C by Karnataka farmers in Western Ghats & Tiptur. 100% pure, unrefined, lab-tested in glass bottles.',
  keywords: [
    'wood pressed oil karnataka',
    'mara ghaana coconut oil',
    'tiptur pure coconut oil',
    'thengina enne online',
    'shenga enne karnataka',
    'wood pressed groundnut oil',
    'ellu enne bella',
    'wood pressed sesame oil',
    'snigdha oils',
    'shuddha mara gaana cooking oil',
    'cold pressed edible oils bangalore'
  ],
  authors: [{ name: 'Snigdha Agro Naturals', url: 'https://snigdhaoils.com' }],
  creator: 'Snigdha Agro Naturals',
  publisher: 'Snigdha Agro Naturals',
  applicationName: 'Snigdha Pure Oils',
  alternates: {
    canonical: 'https://snigdhaoils.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Snigdha | 100% Pure Wood-Pressed Cooking Oils by Western Ghats Farmers',
    description: 'Zero heat, zero chemical solvents, 100% live nutrients. Artisanal Mara Ghaana wood cold-pressed oils delivered fresh in cushioned glass bottles.',
    url: 'https://snigdhaoils.com',
    siteName: 'Snigdha Pure Oils',
    images: [
      {
        url: '/assets/images/authentic_coconut.jpg',
        width: 1200,
        height: 1200,
        alt: 'Snigdha Wood-Pressed Coconut Oil - 100% Pure Mara Ghaana Extraction',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snigdha | 100% Pure Wood-Pressed Cooking Oils',
    description: 'Freshly extracted in wooden mills by Karnataka farmers. Unrefined, chemical-free, lab-certified pure.',
    images: ['/assets/images/authentic_coconut.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google Rich Snippets (Schema.org JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://snigdhaoils.com/#organization',
        'name': 'Snigdha Agro Naturals',
        'url': 'https://snigdhaoils.com',
        'logo': 'https://snigdhaoils.com/assets/images/user_emblem_tight.png',
        'description': 'Producers of 100% pure artisanal wood-pressed edible oils by Western Ghats & Tiptur farmer families.',
        'telephone': '+91-9845012492',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+91-9845012492',
          'contactType': 'Customer Service',
          'areaServed': 'IN',
          'availableLanguage': ['English', 'Kannada', 'Hindi'],
        },
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Tiptur & Western Ghats',
          'addressRegion': 'Karnataka',
          'addressCountry': 'IN',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://snigdhaoils.com/#website',
        'url': 'https://snigdhaoils.com',
        'name': 'Snigdha Pure Wood-Pressed Oils',
        'publisher': {
          '@id': 'https://snigdhaoils.com/#organization',
        },
      },
      {
        '@type': 'Product',
        'name': 'Snigdha Wood-Pressed Coconut Oil (1000ml)',
        'image': 'https://snigdhaoils.com/assets/images/authentic_coconut.jpg',
        'description': '100% Pure Virgin Cold Wood-Pressed Coconut Oil extracted in traditional Vaagai Mara Ghaana below 38°C from Tiptur coconuts.',
        'brand': {
          '@type': 'Brand',
          'name': 'Snigdha',
        },
        'offers': {
          '@type': 'Offer',
          'price': '649',
          'priceCurrency': 'INR',
          'priceValidUntil': '2027-12-31',
          'itemCondition': 'https://schema.org/NewCondition',
          'availability': 'https://schema.org/InStock',
          'seller': {
            '@type': 'Organization',
            'name': 'Snigdha Agro Naturals',
          },
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.96',
          'reviewCount': '384',
          'bestRating': '5',
          'worstRating': '1',
        },
      },
      {
        '@type': 'Product',
        'name': 'Snigdha Wood-Pressed Groundnut Oil (1000ml)',
        'image': 'https://snigdhaoils.com/assets/images/authentic_groundnut.jpg',
        'description': '100% Pure Cold Wood-Pressed Groundnut Oil (Shenga Enne) extracted from native Chitradurga peanuts.',
        'brand': {
          '@type': 'Brand',
          'name': 'Snigdha',
        },
        'offers': {
          '@type': 'Offer',
          'price': '549',
          'priceCurrency': 'INR',
          'priceValidUntil': '2027-12-31',
          'itemCondition': 'https://schema.org/NewCondition',
          'availability': 'https://schema.org/InStock',
          'seller': {
            '@type': 'Organization',
            'name': 'Snigdha Agro Naturals',
          },
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.92',
          'reviewCount': '260',
          'bestRating': '5',
          'worstRating': '1',
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the difference between Mara Ghaana (Wood-Pressed) and Cold-Pressed oil?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Snigdha oils are crushed in traditional Vaagai Mara Ghaana (ಮರ ಗಾಣ) where temperatures remain strictly below 38°C, preserving 100% of live nutrients and enzymes without friction heat.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Why does Snigdha Coconut Oil solidify in winter?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Pure unrefined coconut oil naturally solidifies below 24°C (75°F). This is natural proof of zero adulteration and does not affect product quality.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What are your delivery timelines across Karnataka?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We dispatch freshly pressed oils within 24 hours. Delivery takes 1–2 days for Bengaluru & Mysuru, and 2–3 days for the rest of Karnataka. Free express shipping on all orders over ₹499.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/images/user_emblem_tight.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
