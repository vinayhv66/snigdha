'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { PRODUCTS, Product } from '@/data/products';
import { Check } from 'lucide-react';

interface SignatureCollectionProps {
  onQuickView?: (product: Product) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({ onQuickView }) => {
  const { addToCart, openCart } = useCart();
  const [selectedVolumes, setSelectedVolumes] = useState<Record<string, string>>({
    'wood-pressed-coconut-oil': '1000ml',
    'wood-pressed-groundnut-oil': '1000ml',
    'wood-pressed-sesame-oil': '1000ml',
  });
  const [addedId, setAddedId] = useState<string | null>(null);

  const mainProducts = PRODUCTS.slice(0, 3);

  const handleVolumeSelect = (productId: string, vol: string) => {
    setSelectedVolumes((prev) => ({ ...prev, [productId]: vol }));
  };

  const handleAddToCart = (product: Product) => {
    const vol = selectedVolumes[product.id] || '1000ml';
    const variant = product.variants.find((v) => v.volume === vol) || product.variants[0];
    addToCart(product, variant, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
      openCart();
    }, 450);
  };

  return (
    <section
      id="collection"
      aria-label="Signature Collection"
      style={{
        padding: '24px 16px 36px',
        maxWidth: '1040px',
        margin: '0 auto',
      }}
    >
      {/* ── Section Title ── */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{
          fontSize: '12px',
          fontWeight: 800,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#121e17',
          fontFamily: "'Inter', sans-serif",
          margin: 0,
        }}>
          SIGNATURE COLLECTION
        </h2>
      </div>

      {/* ── Product Cards Container: Horizontal on Mobile, 3-Column Grid on Laptop ── */}
      <div className="product-cards-responsive-container">
        {mainProducts.map((product) => {
          const currentVol = selectedVolumes[product.id] || '1000ml';
          const variant = product.variants.find((v) => v.volume === currentVol) || product.variants[0];
          const isAdded = addedId === product.id;

          return (
            <article
              key={product.id}
              className="stitch-product-card"
            >
              {/* ── Image Thumbnail / Top Stage with Shimmer Skeleton ── */}
              <div
                className="stitch-card-image-wrap snigdha-skeleton"
                onClick={() => onQuickView?.(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 110px, 300px"
                />
              </div>

              {/* ── Card Content ── */}
              <div className="stitch-card-content">
                <div>
                  <h3
                    onClick={() => onQuickView?.(product)}
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      color: '#121e17',
                      margin: '0 0 2px',
                      cursor: 'pointer',
                    }}
                  >
                    {product.name}
                  </h3>

                  <div style={{ fontSize: '11.5px', color: '#536158', marginBottom: '6px' }}>
                    {product.kannadaName}
                  </div>

                  <span style={{
                    display: 'inline-block',
                    fontSize: '9.5px',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#7a4f2d',
                    background: '#f6f0e4',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    marginBottom: '10px',
                  }}>
                    {product.badge}
                  </span>
                </div>

                <div>
                  {/* ── Volume Selector Pills ── */}
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    {product.variants.slice(0, 2).map((v) => {
                      const isSelected = currentVol === v.volume;
                      const label = v.volume === '500ml' ? `500 ml — ₹${v.price}` : `1000 ml — ₹${v.price}`;

                      return (
                        <button
                          key={v.volume}
                          type="button"
                          onClick={() => handleVolumeSelect(product.id, v.volume)}
                          style={{
                            background: isSelected ? '#244d36' : '#ffffff',
                            color: isSelected ? '#ffffff' : '#121e17',
                            border: isSelected ? '1.5px solid #244d36' : '1px solid rgba(18, 36, 26, 0.2)',
                            borderRadius: '9999px',
                            padding: '4px 10px',
                            fontSize: '11px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>

                  {/* ── Price Row ── */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#121e17' }}>
                      ₹{variant.price}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#839188', textDecoration: 'line-through' }}>
                      ₹{variant.originalPrice}
                    </span>
                  </div>

                  {/* ── Full-Width ADD TO BAG ── */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    style={{
                      width: '100%',
                      background: isAdded ? '#108448' : '#244d36',
                      color: '#ffffff',
                      padding: '10px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    {isAdded ? (
                      <>
                        <Check size={14} strokeWidth={3} />
                        <span>ADDED TO BAG</span>
                      </>
                    ) : (
                      <span>ADD TO BAG</span>
                    )}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        /* Mobile Layout: Compact Horizontal Card */
        .product-cards-responsive-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .stitch-product-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(18, 36, 26, 0.06);
        }
        .stitch-card-image-wrap {
          position: relative;
          width: 105px;
          height: 125px;
          background: #f6f0e4;
          border-radius: 14px;
          flex-shrink: 0;
          cursor: pointer;
        }
        .stitch-card-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        /* Laptop / Tablet Grid Layout */
        @media (min-width: 768px) {
          .product-cards-responsive-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .stitch-product-card {
            flex-direction: column;
            align-items: stretch;
            padding: 18px 16px;
            gap: 14px;
            text-align: center;
          }
          .stitch-card-image-wrap {
            width: 100%;
            height: 200px;
            margin: 0 auto;
          }
          .stitch-product-card .stitch-card-content {
            align-items: center;
          }
          .stitch-product-card .stitch-card-content > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .stitch-product-card .stitch-card-content > div:last-child {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .stitch-product-card .stitch-card-content div[style*="justifyContent"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
