'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, Product, ProductVariant } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { JewelryHeader } from '@/components/JewelryHeader';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ShoppingBag, Check, Star } from 'lucide-react';

export default function ShopPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const [selectedVariants, setSelectedVariants] = useState<Record<string, ProductVariant>>(() => {
    const init: Record<string, ProductVariant> = {};
    PRODUCTS.forEach((p) => {
      init[p.id] = p.variants[1] || p.variants[0];
    });
    return init;
  });

  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleVariantChange = (productId: string, variant: ProductVariant) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variant }));
  };

  const handleAdd = (product: Product) => {
    const variant = selectedVariants[product.id] || product.variants[0];
    addToCart(product, variant, 1);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  const categories = [
    { id: 'all', label: 'All Pure Oils' },
    { id: 'coconut', label: 'Coconut' },
    { id: 'groundnut', label: 'Groundnut' },
    { id: 'sesame', label: 'Sesame' },
    { id: 'mustard', label: 'Mustard' },
    { id: 'safflower', label: 'Safflower' },
    { id: 'bundles', label: 'Combos' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="snigdha-app" style={{ background: '#f6f2e9', minHeight: '100vh' }}>
      <JewelryHeader />

      <main style={{ padding: '24px 12px 60px', maxWidth: '1160px', margin: '0 auto' }}>
        {/* ── Minimalist Shop Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            fontWeight: 700,
            color: '#121e17',
            margin: '0 0 6px',
          }}>
            Our Pure Botanical Oils
          </h1>
          <p style={{ color: '#536158', fontSize: '13px', margin: 0 }}>
            Cold Wood-Pressed below 38°C in traditional Mara Ghaana
          </p>
        </div>

        {/* ── Category Filter Pills ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 700,
                border: `1px solid ${activeCategory === cat.id ? '#1e4530' : 'rgba(18, 36, 26, 0.12)'}`,
                background: activeCategory === cat.id ? '#1e4530' : '#ffffff',
                color: activeCategory === cat.id ? '#ffffff' : '#121e17',
                transition: 'all 0.18s ease',
                cursor: 'pointer',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Minimalist Product Cards (Only Quantity, Price & Add to Bag) ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {filteredProducts.map((prod) => {
            const currentVariant = selectedVariants[prod.id] || prod.variants[0];
            const isAdded = !!addedIds[prod.id];

            const isAyurvedic = prod.category === 'sesame';
            const isBundle = prod.category === 'bundles';
            const badgeBg = isAyurvedic ? '#eaf5ee' : isBundle ? '#eaf5ee' : '#f7f1e7';
            const badgeColor = isAyurvedic ? '#108448' : isBundle ? '#108448' : '#7a4f2d';

            return (
              <div 
                key={prod.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1px solid rgba(18, 36, 26, 0.08)',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 18px rgba(18, 36, 26, 0.04)',
                  transition: 'transform 0.2s var(--ease-spring), box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(18, 36, 26, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(18, 36, 26, 0.04)';
                }}
              >
                <div>
                  {/* Image Frame */}
                  <div style={{
                    width: '100%',
                    height: '180px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#f6f0e4',
                    marginBottom: '12px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Image 
                      src={prod.image} 
                      alt={prod.name} 
                      fill
                      style={{ objectFit: 'contain', padding: '10px' }}
                      sizes="(max-width: 768px) 100vw, 340px"
                    />
                    <span style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: badgeBg,
                      color: badgeColor,
                      fontSize: '9.5px',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                    }}>
                      {prod.badge}
                    </span>
                  </div>

                  {/* Title & Rating */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: '#121e17',
                      fontWeight: 700,
                      margin: 0,
                    }}>
                      {prod.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#108448', fontSize: '11px', fontWeight: 700 }}>
                      <Star size={11} fill="currentColor" />
                      <span>{prod.rating}</span>
                    </div>
                  </div>

                  {/* Quantity / Volume Selection Pills */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                    {prod.variants.map((v) => {
                      const isSelected = currentVariant.sku === v.sku;
                      return (
                        <button
                          key={v.sku}
                          onClick={() => handleVariantChange(prod.id, v)}
                          style={{
                            padding: '5px 10px',
                            borderRadius: '9999px',
                            fontSize: '11px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            border: isSelected ? '1px solid #1e4530' : '1px solid #e0d8cc',
                            background: isSelected ? '#1e4530' : '#f7f2ea',
                            color: isSelected ? '#ffffff' : '#121e17',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {v.volume}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price & Add to Bag */}
                <div style={{
                  borderTop: '1px solid rgba(18, 36, 26, 0.06)',
                  paddingTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <span style={{ fontSize: '21px', fontWeight: 900, color: '#121e17', fontFamily: "'Inter', sans-serif" }}>
                      ₹{currentVariant.price}
                    </span>
                    <span style={{ fontSize: '11.5px', color: '#839188', textDecoration: 'line-through', marginLeft: '6px', fontWeight: 500 }}>
                      ₹{currentVariant.originalPrice}
                    </span>
                  </div>

                  <button 
                    style={{
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 800,
                      fontSize: '11.5px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      background: isAdded ? '#108448' : '#1e4530',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s var(--ease-spring)',
                      boxShadow: '0 3px 12px rgba(30, 69, 48, 0.2)',
                    }}
                    onClick={() => handleAdd(prod)}
                  >
                    {isAdded ? (
                      <>
                        <Check size={14} />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <span>ADD TO BAG</span>
                        <ShoppingBag size={13} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
