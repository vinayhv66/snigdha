'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JewelryHeader } from '@/components/JewelryHeader';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Trees, ShieldCheck, Heart, Sparkles, MapPin, Award, ArrowRight } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="snigdha-app">
      <JewelryHeader />

      <main style={{ padding: '3.5rem 0 6rem', background: 'var(--bg-main)' }}>
        <div className="container-luxe" style={{ maxWidth: '960px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Heart size={14} color="var(--wood-brown)" />
              <span>Karnataka Roots & Farmer Mission</span>
            </span>
            <h1 style={{ fontSize: '3.2rem', color: 'var(--primary-forest-dark)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Preserving Traditional Mara Ghaana <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--wood-brown)' }}>With Karnataka Western Ghats Farmers.</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Snigdha was founded on a pure mission: the cooking oil in our mother’s kitchen should never be a petrochemical byproduct of high-heat factory expellers and hexane solvents.
            </p>
          </div>

          {/* Story Section 1: The Western Ghats Biosphere */}
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '3rem', marginBottom: '3rem', boxShadow: 'var(--shadow-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-forest)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              <MapPin size={16} /> Single-Origin Karnataka Soil
            </div>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-forest-dark)', marginBottom: '1rem' }}>
              Nourished by the Soil of Tiptur, Chamarajanagar & Sahyadri Foothills
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Our coconuts, groundnuts (shenga), sesame seeds (ellu), and safflower (kusube) are grown organically by smallholder farming families along the lush slopes of Karnataka’s Western Ghats (Tiptur, Chamarajanagar, Chitradurga, and Shivamogga). Grown without synthetic fertilizers or chemical pesticides, each seed absorbs rich volcanic soil minerals and pristine monsoon rain.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', borderTop: '1px solid var(--border-ultra-light)', paddingTop: '1.5rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--wood-brown)', fontFamily: 'Cormorant Garamond, serif' }}>100%</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Sulfur-Free Sun Drying</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-forest)', fontFamily: 'Cormorant Garamond, serif' }}>34 Karnataka</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Farming Families Empowered</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold-accent)', fontFamily: 'Cormorant Garamond, serif' }}>&lt; 38°C</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Strict Mara Ghaana Milling</div>
              </div>
            </div>
          </div>

          {/* Story Section 2: Why Vaagai Wood Ghani */}
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '3rem', marginBottom: '3.5rem', boxShadow: 'var(--shadow-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--wood-brown)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              <Trees size={16} /> Heritage Craftsmanship
            </div>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-forest-dark)', marginBottom: '1rem' }}>
              The Living Science of the Vaagai Mara Ghaana (ಮರದ ಗಾಣ)
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              Our ancestors in Karnataka never used steel expellers. They crafted mortars from indigenous <em>Albizia Lebbeck</em> (Vaagai Wood / Bage Mara). Wood is a natural thermal insulator—when rotating at 14 RPM, it absorbs friction warmth, keeping the oil room-temperature.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.8' }}>
              Because there is zero high heat, the delicate living fatty acid matrix (such as Lauric Acid in Thengina Enne and Sesamol in Ellu Enne) remains 100% active and unburnt.
            </p>
          </div>

          {/* Sourcing Call to Action */}
          <div style={{ textAlign: 'center' }}>
            <Link href="/shop" className="btn-luxe-primary" style={{ padding: '1rem 2.5rem', fontSize: '0.95rem' }}>
              <span>Explore Our Pure Karnataka Harvest Collection</span>
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
