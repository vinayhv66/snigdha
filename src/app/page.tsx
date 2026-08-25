'use client';

import React, { useState } from 'react';
import { JewelryHeader } from '@/components/JewelryHeader';
import { LuxeProductHero } from '@/components/LuxeProductHero';
import { SignatureCollection } from '@/components/SignatureCollection';
import { OrderDetailsSection } from '@/components/OrderDetailsSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { StickyQuickBuyDock } from '@/components/StickyQuickBuyDock';
import { SocialProofToast } from '@/components/SocialProofToast';
import { Product } from '@/data/products';

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="snigdha-app">
      {/* Clean Brand Navigation */}
      <JewelryHeader />

      <main>
        {/* Spotlight Hero: Instant Product Selector & 1-Click Buy */}
        <LuxeProductHero />

        {/* Complete Signature Product Range */}
        <SignatureCollection onQuickView={(prod) => setQuickViewProduct(prod)} />

        {/* Transparent Fulfillment, Packaging & Delivery Details */}
        <OrderDetailsSection />

        {/* Customer Reviews & Social Proof */}
        <ReviewsSection />

        {/* Brand & Storage FAQs */}
        <FAQSection />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Sticky Bottom Quick Buy Dock */}
      <StickyQuickBuyDock />

      {/* Live Dispatch Ticker */}
      <SocialProofToast />

      {/* Clean Product Details Modal */}
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}
    </div>
  );
}
