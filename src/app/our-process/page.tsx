'use client';

import React from 'react';
import Link from 'next/link';
import { JewelryHeader } from '@/components/JewelryHeader';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Trees, Sun, Droplet, ShieldCheck, Flame, Award, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export default function OurProcessPage() {
  return (
    <div className="snigdha-app">
      <JewelryHeader />

      <main style={{ padding: '3.5rem 0 6rem', background: 'var(--bg-main)' }}>
        <div className="container-luxe" style={{ maxWidth: '980px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Trees size={14} color="var(--wood-brown)" />
              <span>Karnataka Mara Ghaana Science</span>
            </span>
            <h1 style={{ fontSize: '3rem', color: 'var(--primary-forest-dark)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
              The Science of Vaagai Mara Ghaana Pressing
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: '680px', margin: '0 auto', lineHeight: '1.75' }}>
              How we extract 100% pure living oils using traditional wooden Mara Ghaana (ಮರ ಗಾಣ) without petrochemical solvents, bleaching earth, or friction heat.
            </p>
          </div>

          {/* 4 Pillars of Scientific Craftsmanship */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-forest-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Trees size={22} color="var(--primary-forest)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-forest-dark)', marginBottom: '0.5rem' }}>
                1. Native Vaagai Hardwood (ಮರದ ಗಾಣ)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Metal screw expellers generate intense heat (65°C–85°C) from friction. Vaagai wood acts as a natural thermal buffer—absorbing warmth and preventing thermal degradation of delicate fatty acid chains.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--gold-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Flame size={22} color="var(--gold-accent)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-forest-dark)', marginBottom: '0.5rem' }}>
                2. Strictly Below 38°C (Cold-Matrix)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Our wooden pestles rotate slowly at only 14 RPM. By keeping extraction below 38°C, the oil retains 100% of its native enzymes, Vitamin E, Lauric Acid, and authentic aroma.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Sun size={22} color="var(--wood-brown)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-forest-dark)', marginBottom: '0.5rem' }}>
                3. Solar Bamboo Curing (Zero Sulfur)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Supermarket copra and seeds are often fumigated with sulfur dioxide to prevent fungal growth. Snigdha seeds are naturally solar-cured on raised bamboo platforms for 7 days with zero chemicals.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-forest-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Droplet size={22} color="var(--veg-green)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-forest-dark)', marginBottom: '0.5rem' }}>
                4. Muslin Cloth & Gravity Filtration
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Refined oils use caustic soda, phosphoric acid, and bleaching earth. Snigdha rests in stainless tanks for 48 hours and is clarified only through unbleached cotton muslin cloth.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ textAlign: 'center', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '3rem', boxShadow: 'var(--shadow-subtle)' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-forest-dark)', marginBottom: '0.5rem' }}>
              Taste the Living Difference in Your Cooking
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', maxWidth: '520px', margin: '0 auto 1.75rem' }}>
              Order freshly milled wood-pressed oils delivered in heavy UV-shielded glass bottles directly from Western Ghats farms.
            </p>
            <Link href="/shop" className="btn-luxe-primary" style={{ padding: '1rem 2.5rem', fontSize: '0.95rem' }}>
              <span>Shop Pure Wood-Pressed Oils</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
