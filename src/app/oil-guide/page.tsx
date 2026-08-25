'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { OIL_GUIDE_DATA } from '@/data/oilGuideData';
import { JewelryHeader } from '@/components/JewelryHeader';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Flame, Droplet, Sparkles, ShieldCheck, ArrowRight, Heart, UtensilsCrossed } from 'lucide-react';



export default function OilGuidePage() {
  return (
    <div className="snigdha-app">
      <JewelryHeader />

      <main style={{ padding: '3.5rem 0 6rem', background: 'var(--bg-main)' }}>
        <div className="container-luxe" style={{ maxWidth: '980px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Flame size={14} color="var(--wood-brown)" />
              <span>Karnataka Kitchen Oil Selector</span>
            </span>
            <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-forest-dark)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              The Karnataka Kitchen Cooking Oil Guide
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '680px', margin: '0 auto', lineHeight: '1.7' }}>
              Every traditional Karnataka recipe—from crispy Maddur vade and akki rotti to daily huli oggarane—demands a specific thermal smoke point. Use this guide to select the right Mara Ghaana oil.
            </p>
          </div>

          {/* Oil Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
            {OIL_GUIDE_DATA.map((oil, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid var(--border-refined)',
                  padding: '2.25rem',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '2.5rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, background: 'var(--primary-emerald-surface)', color: 'var(--primary-emerald)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-primary)' }}>
                      Smoke Point: {oil.smokePoint}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--veg-green)' }}>
                      ✓ {oil.stability}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-forest-dark)', marginBottom: '0.4rem' }}>
                    {oil.name}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <strong>Ideal Cooking Uses:</strong> {oil.bestFor}
                  </p>

                  <div style={{ fontSize: '0.84rem', color: 'var(--wood-brown-dark)', background: 'var(--bg-main)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-ultra-light)' }}>
                    <strong>Aroma & Taste:</strong> {oil.tasteProfile}
                  </div>
                </div>

                <div style={{ borderLeft: '1px solid var(--border-ultra-light)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-light)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Key Health Bio-Actives
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--primary-forest-dark)', fontWeight: 600, lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {oil.nutritionHighlight}
                    </p>
                  </div>

                  <Link 
                    href={`/products/${oil.slug}`} 
                    className="btn-luxe-primary"
                    style={{ padding: '0.75rem 1.4rem', fontSize: '0.84rem', display: 'inline-flex', width: 'fit-content' }}
                  >
                    <span>View Sizes & Buy</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick FAQ / Summary CTA */}
          <div style={{ textAlign: 'center', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-forest-dark)', marginBottom: '0.5rem' }}>
              Want a Personalized Recommendation?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Take our 45-second interactive kitchen diagnostic to match your family’s exact cooking routine.
            </p>
            <Link href="/#oil-consultation" className="btn-wood" style={{ padding: '0.9rem 2rem' }}>
              <span>Start 45-Sec Kitchen Assessment</span>
              <Sparkles size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
