'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export const OilRecommender: React.FC = () => {
  const { addToCart } = useCart();
  const [step, setStep] = useState<number>(1);
  const [purpose, setPurpose] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [matchedProduct, setMatchedProduct] = useState<Product | null>(null);

  const handlePurposeSelect = (selected: string) => {
    setPurpose(selected);
    setStep(2);
  };

  const handlePrioritySelect = (selectedPriority: string) => {
    setPriority(selectedPriority);
    
    // Recommendation algorithm
    let matched: Product;
    if (purpose === 'cooking') {
      if (selectedPriority === 'high-heat') {
        matched = PRODUCTS.find((p) => p.id === 'wood-pressed-groundnut-oil') || PRODUCTS[0];
      } else if (selectedPriority === 'traditional') {
        matched = PRODUCTS.find((p) => p.id === 'wood-pressed-sesame-oil') || PRODUCTS[0];
      } else {
        matched = PRODUCTS.find((p) => p.id === 'western-ghats-trio-pack') || PRODUCTS[0];
      }
    } else if (purpose === 'wellness') {
      if (selectedPriority === 'immunity') {
        matched = PRODUCTS.find((p) => p.id === 'wood-pressed-coconut-oil') || PRODUCTS[0];
      } else {
        matched = PRODUCTS.find((p) => p.id === 'wood-pressed-sesame-oil') || PRODUCTS[0];
      }
    } else {
      matched = PRODUCTS.find((p) => p.id === 'wood-pressed-coconut-oil') || PRODUCTS[0];
    }

    setMatchedProduct(matched);
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setPurpose('');
    setPriority('');
    setMatchedProduct(null);
  };

  return (
    <section id="oil-finder" className="oil-finder-section" aria-label="Interactive Oil Finder Quiz">
      <div className="container">
        <div className="finder-card">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-label">Personalized Match</span>
            <h2 className="section-title">Find Your Ideal Wood-Pressed Oil</h2>
            <p className="section-subtitle">
              Answer 2 quick questions to discover the healthiest oil for your family’s culinary habits and wellness goals.
            </p>
          </div>

          {/* Step 1: Main Purpose */}
          {step === 1 && (
            <div>
              <h3 style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary-forest-dark)' }}>
                Step 1: What is your primary intended use?
              </h3>
              <div className="finder-step-grid">
                <div 
                  className="finder-option-card"
                  onClick={() => handlePurposeSelect('cooking')}
                >
                  <div className="finder-option-icon">🍳</div>
                  <div className="finder-option-title">Daily Indian Cooking</div>
                  <p style={{ fontSize: '0.85rem' }}>Curries, deep frying, rotis, sambar & daily tempering</p>
                </div>

                <div 
                  className="finder-option-card"
                  onClick={() => handlePurposeSelect('wellness')}
                >
                  <div className="finder-option-icon">🌿</div>
                  <div className="finder-option-title">Ayurveda & Longevity</div>
                  <p style={{ fontSize: '0.85rem' }}>Oil pulling, Abhyanga massage, heart health & joint vitality</p>
                </div>

                <div 
                  className="finder-option-card"
                  onClick={() => handlePurposeSelect('beauty')}
                >
                  <div className="finder-option-icon">✨</div>
                  <div className="finder-option-title">Hair & Skin Nutrition</div>
                  <p style={{ fontSize: '0.85rem' }}>Deep hair conditioning, glowing skin & baby gentle care</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Specific Goal */}
          {step === 2 && (
            <div>
              <h3 style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary-forest-dark)' }}>
                Step 2: What matters most to you?
              </h3>
              <div className="finder-step-grid">
                {purpose === 'cooking' && (
                  <>
                    <div 
                      className="finder-option-card"
                      onClick={() => handlePrioritySelect('high-heat')}
                    >
                      <div className="finder-option-icon">🔥</div>
                      <div className="finder-option-title">High Smoke Point</div>
                      <p style={{ fontSize: '0.85rem' }}>Crisp pakoras, puris, and rich nutty flavor (Groundnut)</p>
                    </div>
                    <div 
                      className="finder-option-card"
                      onClick={() => handlePrioritySelect('traditional')}
                    >
                      <div className="finder-option-icon">🏺</div>
                      <div className="finder-option-title">Heritage South Indian</div>
                      <p style={{ fontSize: '0.85rem' }}>Chettinad gravies, idli podi & authentic aroma (Sesame)</p>
                    </div>
                    <div 
                      className="finder-option-card"
                      onClick={() => handlePrioritySelect('all-round')}
                    >
                      <div className="finder-option-icon">📦</div>
                      <div className="finder-option-title">Complete Kitchen Upgrade</div>
                      <p style={{ fontSize: '0.85rem' }}>All 3 traditional oils in one value pack (Trio Bundle)</p>
                    </div>
                  </>
                )}

                {purpose === 'wellness' && (
                  <>
                    <div 
                      className="finder-option-card"
                      onClick={() => handlePrioritySelect('immunity')}
                    >
                      <div className="finder-option-icon">🥥</div>
                      <div className="finder-option-title">Immunity & MCT Energy</div>
                      <p style={{ fontSize: '0.85rem' }}>Lauric acid, gut metabolism & keto coffee (Coconut Oil)</p>
                    </div>
                    <div 
                      className="finder-option-card"
                      onClick={() => handlePrioritySelect('joint')}
                    >
                      <div className="finder-option-icon">🌱</div>
                      <div className="finder-option-title">Joint & Cellular Health</div>
                      <p style={{ fontSize: '0.85rem' }}>Sesamol antioxidants & traditional body oiling (Sesame)</p>
                    </div>
                  </>
                )}

                {purpose === 'beauty' && (
                  <>
                    <div 
                      className="finder-option-card"
                      onClick={() => handlePrioritySelect('hair')}
                    >
                      <div className="finder-option-icon">🥥</div>
                      <div className="finder-option-title">Scalp & Hair Shine</div>
                      <p style={{ fontSize: '0.85rem' }}>Pure virgin coconut oil with natural vitamin E</p>
                    </div>
                  </>
                )}
              </div>

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button 
                  onClick={() => setStep(1)}
                  style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'underline' }}
                >
                  ← Back to Step 1
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Match Result */}
          {step === 3 && matchedProduct && (
            <div style={{ textAlign: 'center', animation: 'fadeIn 0.4s ease' }}>
              <span style={{ background: 'var(--gold-accent-subtle)', color: 'var(--gold-accent)', padding: '0.3rem 0.9rem', borderRadius: 'var(--radius-pill)', fontWeight: 800, fontSize: '0.85rem', border: '1px solid var(--gold-accent)' }}>
                ✨ 100% PERFECT MATCH FOR YOU
              </span>

              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-forest-dark)', margin: '1rem 0 0.5rem' }}>
                {matchedProduct.name}
              </h3>
              <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem', color: 'var(--text-muted)' }}>
                {matchedProduct.shortDesc}
              </p>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', background: 'var(--bg-main)', padding: '1.25rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', margin: '0 auto 1.5rem' }}>
                <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                  <Image 
                    src={matchedProduct.image} 
                    alt={matchedProduct.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--primary-forest)' }}>
                    ₹{matchedProduct.variants[0].price} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>({matchedProduct.variants[0].volume})</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--wood-brown)', fontWeight: 700 }}>
                    {matchedProduct.tagline}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => addToCart(matchedProduct, matchedProduct.variants[0], 1)}
                >
                  Add Matched Oil to Cart
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={resetQuiz}
                >
                  Restart Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
