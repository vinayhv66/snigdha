'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

export const Hero: React.FC = () => {
  const { addToCart } = useCart();
  const heroProduct = PRODUCTS[0]; // Coconut Oil 1000ml

  const handleHeroQuickBuy = () => {
    addToCart(heroProduct, heroProduct.variants[1], 1); // 1000ml default
  };

  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Conversion Copy & Value Hooks */}
          <div className="hero-content">
            <div className="hero-tag">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>Single-Origin • Vaagai Wood Pressed</span>
            </div>

            <h1 className="hero-title">
              Pure Wood-Pressed Oil, <br />
              <span className="highlight-wood">Cold Crafted</span> by Western Ghats Farmers.
            </h1>

            <p className="hero-subtitle">
              Crushed slowly in native Vaagai hardwood mortars below 38°C. Zero friction heat, zero chemical solvents, and 100% live cellular nutrients preserved for your family.
            </p>

            {/* High-Converting Primary CTAs */}
            <div className="hero-ctas">
              <button 
                className="btn btn-primary"
                onClick={handleHeroQuickBuy}
                id="hero-buy-now-cta"
              >
                <span>Shop 1000ml Coconut Oil (₹649)</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <a href="#products" className="btn btn-outline-wood">
                <span>Explore All Oils</span>
              </a>
            </div>

            {/* Trust Proof Points */}
            <div className="hero-stats-row">
              <div className="hero-stat">
                <h4>0%</h4>
                <p>Heat / Solvents Added</p>
              </div>
              <div className="hero-stat">
                <h4>47%</h4>
                <p>Natural Lauric Acid</p>
              </div>
              <div className="hero-stat">
                <h4>4.96 ★</h4>
                <p>Over 1,200+ Verified Homes</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Point (Temperature Signature) */}
          <div className="hero-visual-wrapper">
            <div className="hero-visual-card">
              {/* Product Badge */}
              <div style={{ position: 'relative', width: '100%', height: '360px' }}>
                <Image 
                  src="/assets/images/coconut_oil.jpg" 
                  alt="Snigdha Cold Wood Pressed Virgin Coconut Oil bottle with fresh halved coconut"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  sizes="(max-width: 768px) 100vw, 460px"
                />
              </div>

              {/* Instant Conversion Quick Bar below Product */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--wood-brown)', fontWeight: 700, textTransform: 'uppercase' }}>
                    1000 ml Bottle
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-forest)' }}>
                    ₹649 <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: 'var(--text-light)', fontWeight: 500 }}>₹799</span>
                  </div>
                </div>

                <button 
                  onClick={handleHeroQuickBuy}
                  className="quick-add-btn"
                  style={{ padding: '0.6rem 1.1rem' }}
                >
                  ⚡ Quick Add
                </button>
              </div>

              {/* Floating Purity Badge (Left) */}
              <div className="floating-badge badge-top-left">
                <div className="badge-icon-box">
                  <Image 
                    src="/assets/icons/organic-seal.svg" 
                    alt="100% Natural Organic Seal" 
                    width={28} 
                    height={28} 
                  />
                </div>
                <div>
                  <div className="badge-text-primary">100% Organic</div>
                  <div className="badge-text-sub">FSSAI & NABL Tested</div>
                </div>
              </div>

              {/* Floating Origin Badge (Right) */}
              <div className="floating-badge badge-bottom-right">
                <div className="badge-icon-box wood">
                  <Image 
                    src="/assets/icons/veg-symbol.svg" 
                    alt="Vegetarian Certified" 
                    width={24} 
                    height={24} 
                  />
                </div>
                <div>
                  <div className="badge-text-primary">Western Ghats</div>
                  <div className="badge-text-sub">Direct Farmer Sourced</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
