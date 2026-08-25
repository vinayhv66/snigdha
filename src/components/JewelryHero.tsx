'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, ProductVariant } from '@/data/products';
import { useCart } from '@/context/CartContext';

export const JewelryHero: React.FC = () => {
  const { addToCart } = useCart();
  const signatureOil = PRODUCTS[0]; // Coconut Oil
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(signatureOil.variants[1]); // 1000ml

  const handleAcquire = () => {
    addToCart(signatureOil, selectedVariant, 1);
  };

  return (
    <section id="showcase" className="jewelry-hero" aria-label="Signature Product Showcase">
      <div className="container-luxe">
        <div className="jewelry-hero-grid">
          {/* Left Column: Editorial Statement */}
          <div className="hero-meta-col-left">
            <span className="luxe-tag">Haute Botanical Edition</span>
            <h1 className="hero-statement">
              The Pure Gold <br />
              of <em>Western Ghats</em>.
            </h1>
            <p className="hero-caption">
              A singular extraction of sun-dried coastal copra, cold-crushed in ancient Vaagai hardwood mortars without friction or heat.
            </p>
          </div>

          {/* Center Column: Lit Showcase Pedestal */}
          <div className="hero-pedestal-center">
            <div className="pedestal-halo" />

            <div className="bottle-showcase-box">
              <Image 
                src="/assets/images/coconut_oil.jpg" 
                alt="Snigdha Cold Wood-Pressed Pure Virgin Coconut Oil"
                fill
                style={{ objectFit: 'contain' }}
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>

            {/* Gold Purity Seal */}
            <div className="gold-purity-seal">
              <span style={{ fontSize: '0.9rem', color: 'var(--gold-accent)' }}>✦</span>
              <span>100%</span>
              <span style={{ fontSize: '0.55rem', color: 'var(--wood-brown)' }}>Virgin</span>
            </div>
          </div>

          {/* Right Column: Purity Specifications & Instant Acquisition */}
          <div className="hero-meta-col-right">
            <div className="jewelry-spec-item">
              <div className="jewelry-spec-label">Artisanal Extraction</div>
              <div className="jewelry-spec-val">Native Vaagai Wood Mortar</div>
            </div>

            <div className="jewelry-spec-item">
              <div className="jewelry-spec-label">Living Nutrient Signature</div>
              <div className="jewelry-spec-val">47% Natural Lauric Acid</div>
            </div>

            <div className="jewelry-spec-item">
              <div className="jewelry-spec-label">Extraction Temperature</div>
              <div className="jewelry-spec-val">&lt; 38°C (Zero Friction Heat)</div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="jewelry-spec-label" style={{ marginBottom: '0.5rem' }}>Select Format</div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {signatureOil.variants.map((v) => (
                  <button
                    key={v.sku}
                    onClick={() => setSelectedVariant(v)}
                    style={{
                      padding: '0.4rem 0.8rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-pill)',
                      border: `1px solid ${selectedVariant.sku === v.sku ? 'var(--primary-forest)' : 'var(--border-refined)'}`,
                      background: selectedVariant.sku === v.sku ? 'var(--primary-forest)' : 'transparent',
                      color: selectedVariant.sku === v.sku ? '#ffffff' : 'var(--text-dark)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {v.volume}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Action */}
            <div>
              <div className="luxe-price-row">
                <span className="luxe-price-amount">₹{selectedVariant.price}</span>
                {selectedVariant.originalPrice > selectedVariant.price && (
                  <span className="luxe-price-strike">₹{selectedVariant.originalPrice}</span>
                )}
              </div>

              <div style={{ marginTop: '1rem' }}>
                <button 
                  className="btn-luxe-primary"
                  style={{ width: '100%' }}
                  onClick={handleAcquire}
                  id="btn-acquire-signature"
                >
                  <span>Acquire Bottle • {selectedVariant.volume}</span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', fontSize: '0.78rem', color: 'var(--wood-brown)', fontWeight: 600 }}>
                <span>✓ Origin: Western Ghats</span>
                <span>•</span>
                <span>FSSAI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
