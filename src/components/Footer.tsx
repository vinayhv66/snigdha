'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ShieldCheck, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#152b1e',
      color: '#d1ded7',
      padding: '40px 16px 52px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', textAlign: 'center' }}>
        {/* ── Official Emblem + Wordmark (Uncropped & Centered) ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
          <BrandLogo variant="light" size="lg" />
        </div>

        {/* ── Official Tagline Matching Label ── */}
        <p style={{
          color: '#9bb0a5',
          fontSize: '13.5px',
          maxWidth: '520px',
          margin: '0 auto 20px',
          lineHeight: 1.5,
        }}>
          100% Pure Mara Ghaana Wood-Pressed Edible Oils crafted by the farmer families of Western Ghats in Tiptur &amp; Chamarajanagar.
        </p>

        {/* ── Quick Links ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '18px',
          flexWrap: 'wrap',
          fontSize: '12.5px',
          fontWeight: 600,
          marginBottom: '20px',
        }}>
          <Link href="/shop" style={{ color: '#d1ded7', textDecoration: 'none' }}>Our Oils</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
          <Link href="/our-story" style={{ color: '#d1ded7', textDecoration: 'none' }}>Our Story</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
          <Link href="/our-process" style={{ color: '#d1ded7', textDecoration: 'none' }}>The Process</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
          <Link href="/track-batch" style={{ color: '#d1ded7', textDecoration: 'none' }}>Verify Batch</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
          <a
            href="https://wa.me/919845012492?text=Hi%20Snigdha"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#9ff0c2',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            <MessageCircle size={14} />
            <span>WhatsApp Support</span>
          </a>
        </div>

        {/* ── FSSAI & Legal ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          fontSize: '11px',
          color: '#83968c',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          flexWrap: 'wrap',
        }}>
          <ShieldCheck size={13} color="#108448" />
          <span>FSSAI Central Lic: 12423008000492</span>
          <span>•</span>
          <span>ORIGIN OF COUNTRY: INDIA</span>
          <span>•</span>
          <span>© 2026 Snigdha Agro Naturals. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
