'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Flame, ShieldCheck, Sparkles, Droplet, Wind, UtensilsCrossed, Star, Plus, Check } from 'lucide-react';

export const InteractiveSensoryRadar: React.FC = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState(0);
  const [added, setAdded] = useState(false);

  const sensoryData = [
    {
      product: PRODUCTS[0], // Coconut
      aroma: 'Subtle Tropical Sun-Dried Tiptur Copra',
      flavor: 'Buttery, Sweet, Clean Finish',
      color: 'Crystal Clear (Pure Virgin Thengina Enne)',
      smokeTemp: 177,
      bestPairing: 'Neer Dose, Coastal Saaru, Daily Oggarane, Hair Care & Baby Massage',
      keyActive: '47% Lauric Acid + Natural Vitamin E',
      viscosity: 'Light & Silky',
    },
    {
      product: PRODUCTS[1], // Groundnut
      aroma: 'Fresh Roasted Karnataka Shenga (Peanut)',
      flavor: 'Rich, Nutty, Earthy Depth',
      color: 'Luminous Golden Amber',
      smokeTemp: 225,
      bestPairing: 'Daily Huli & Saaru Oggarane, Crispy Benne Dose, Maddur Vade, Deep Frying',
      keyActive: 'High Monounsaturated MUFA + Resveratrol',
      viscosity: 'Smooth & Full-Bodied',
    },
    {
      product: PRODUCTS[2], // Sesame
      aroma: 'Toasted Black Sesame & Taati Bella (Palm Jaggery)',
      flavor: 'Complex, Deep Umami, Mellow Caramel Tone',
      color: 'Deep Dark Amber Honey',
      smokeTemp: 210,
      bestPairing: 'Shenga & Ellu Chutney Pudi, Uppinakai (Pickles), Abhyanga Body Massage',
      keyActive: 'Sesamol & Sesamin Antioxidant Complex',
      viscosity: 'Rich & Velvety',
    },
  ];

  const current = sensoryData[activeTab];

  const handleAdd = () => {
    addToCart(current.product, current.product.variants[1], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="sensory" className="sensory-section" style={{ padding: '6rem 0', background: 'var(--bg-main)' }} aria-label="Interactive Sensory & Smoke Point Profile">
      <div className="container-luxe">
        <div className="gallery-header" style={{ marginBottom: '3rem' }}>
          <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} color="var(--wood-brown)" />
            <span>Culinary Sensory Profile</span>
          </span>
          <h2 className="gallery-title" style={{ fontSize: '2.4rem' }}>Thermal & Sensory Architecture</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem' }}>
            Compare smoke points, aroma notes, and natural fatty acid signatures to select the exact botanical oil for your culinary style.
          </p>
        </div>

        {/* Sensory Navigation Tabs with Lucide Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {sensoryData.map((item, idx) => (
            <button
              key={item.product.id}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: '0.75rem 1.6rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.9rem',
                fontWeight: 700,
                border: `1.5px solid ${activeTab === idx ? 'var(--primary-forest)' : 'var(--border-refined)'}`,
                background: activeTab === idx ? 'var(--primary-forest)' : '#ffffff',
                color: activeTab === idx ? '#ffffff' : 'var(--text-dark)',
                boxShadow: activeTab === idx ? 'var(--shadow-md)' : 'none',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Droplet size={16} color={activeTab === idx ? '#ffffff' : 'var(--wood-brown)'} />
              <span>{idx === 0 ? 'Virgin Coconut' : idx === 1 ? 'Cold Groundnut' : 'Sesame & Jaggery'}</span>
            </button>
          ))}
        </div>

        {/* Sensory Showcase Card */}
        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-refined)', padding: '2rem', boxShadow: 'var(--shadow-card)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          {/* Left: Interactive Specs */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--wood-brown)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Single-Origin Extraction
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', color: 'var(--gold-accent)', fontSize: '0.85rem', fontWeight: 700 }}>
                <Star size={14} fill="currentColor" /> 4.96 Rating
              </span>
            </div>

            <h3 style={{ fontSize: '2rem', color: 'var(--primary-forest-dark)', marginBottom: '1.25rem' }}>
              {current.product.name}
            </h3>

            {/* Smoke Point Gauge */}
            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-ultra-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-forest)' }}>
                  <Flame size={16} color="var(--gold-accent)" /> Smoke Point Rating:
                </span>
                <strong style={{ fontSize: '1.1rem', color: 'var(--primary-forest-dark)' }}>
                  {current.smokeTemp}°C ({Math.round((current.smokeTemp * 9) / 5 + 32)}°F)
                </strong>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(35, 70, 51, 0.15)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    height: '100%', 
                    width: `${(current.smokeTemp / 260) * 100}%`, 
                    background: 'linear-gradient(90deg, var(--primary-forest) 0%, var(--gold-accent) 100%)',
                    borderRadius: 'var(--radius-pill)',
                    transition: 'width 0.4s ease',
                  }} 
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>
                <span>100°C (Low Sauté)</span>
                <span>180°C (Medium Heat)</span>
                <span>250°C (Deep Fry)</span>
              </div>
            </div>

            {/* Tasting & Sensory Grid with Lucide Icons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Wind size={18} color="var(--wood-brown)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-dark)' }}>Aroma:</strong>
                  <span style={{ color: 'var(--text-muted)' }}>{current.aroma}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Sparkles size={18} color="var(--wood-brown)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-dark)' }}>Palate:</strong>
                  <span style={{ color: 'var(--text-muted)' }}>{current.flavor}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Droplet size={18} color="var(--wood-brown)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-dark)' }}>Viscosity:</strong>
                  <span style={{ color: 'var(--text-muted)' }}>{current.viscosity}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <ShieldCheck size={18} color="var(--primary-forest)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-dark)' }}>Living Active:</strong>
                  <span style={{ color: 'var(--primary-forest)', fontWeight: 700 }}>{current.keyActive}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Culinary Pairing & Quick Add */}
          <div style={{ background: 'var(--bg-main)', padding: '2.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-refined)', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--wood-brown)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              <UtensilsCrossed size={14} />
              <span>Recommended Culinary Pairing</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', fontWeight: 600, marginBottom: '1.5rem', lineHeight: '1.6' }}>
              &ldquo;{current.bestPairing}&rdquo;
            </p>

            <div style={{ borderTop: '1px solid var(--border-refined)', paddingTop: '1.25rem', marginTop: '1.25rem' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-forest-dark)', fontFamily: 'Cormorant Garamond, serif', marginBottom: '0.8rem' }}>
                ₹{current.product.variants[1].price} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500 }}>({current.product.variants[1].volume})</span>
              </div>

              <button
                className="btn-luxe-primary"
                style={{ width: '100%', padding: '0.9rem' }}
                onClick={handleAdd}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <Plus size={16} />
                    <span>Add {current.product.name.split(' ')[1]} to Bag</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
