'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, ArrowRight, Truck } from 'lucide-react';
import { WoodenMillIcon } from '@/components/ui/StitchIcons';
import { DirectOrderModal } from '@/components/DirectOrderModal';

export const LuxeProductHero: React.FC = () => {
  const [directOrderOpen, setDirectOrderOpen] = useState(false);

  return (
    <>
      <section
        id="showcase"
        aria-label="Hero Showcase"
        style={{
          padding: '0 0 32px',
          width: '100%',
          position: 'relative',
          marginTop: '-72px', /* Natural offset behind navbar */
          overflowX: 'clip',
        }}
      >
        {/* ── 100% Full-Width Edge-to-Edge Landscape Stage (No side cutoffs) with Skeleton Shimmer ── */}
        <div
          className="snigdha-skeleton"
          style={{
            position: 'relative',
            width: '100vw',
            left: '50%',
            transform: 'translateX(-50%)',
            height: 'clamp(360px, 50vw, 560px)',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 98%)',
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/assets/images/snigdha_landscape_hero.jpg"
            alt="Snigdha Pure Wood-Pressed Coconut Oil landscape studio stage with traditional wooden mill, split coconuts, and copper vessel"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
            priority
            quality={92}
            sizes="100vw"
          />
        </div>

        {/* ── Hero Typography & 1-Click Direct Order Action ── */}
        <div style={{
          maxWidth: '720px',
          margin: '-120px auto 0',
          padding: '20px 24px 16px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Main Headline */}
          <h1 style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 6vw, 4.8rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#7a4f2d',
            margin: '0 auto 6px',
            letterSpacing: '-0.01em',
            fontStyle: 'italic',
          }}>
            Pure Wood-Pressed<br />
            Healthy Cooking Oils
          </h1>

          {/* Location Matching Label */}
          <div style={{
            fontSize: '11px',
            fontWeight: 300,
            color: '#108448',
            fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
            marginBottom: '6px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            BY THE FARMERS OF WESTERN GHAT
          </div>

          {/* 100% PURE & FRESH Solid Green Pill */}
          <div style={{ marginBottom: '10px' }}>
            <span style={{
              display: 'inline-block',
              background: '#244d36',
              color: '#ffffff',
              padding: '4px 14px',
              borderRadius: '9999px',
              fontSize: '10.5px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: '0 2px 10px rgba(36, 77, 54, 0.2)',
            }}>
              100% PURE &amp; FRESH
            </span>
          </div>

          {/* ── Direct 1-Click Order Button ── */}
          <div style={{ maxWidth: '360px', margin: '0 auto 16px' }}>
            <button
              onClick={() => setDirectOrderOpen(true)}
              style={{
                width: '100%',
                background: '#244d36',
                color: '#ffffff',
                padding: '13px 20px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '13.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                boxShadow: '0 6px 20px rgba(36, 77, 54, 0.35)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'transform 0.15s ease',
              }}
            >
              <Zap size={16} fill="#ffffff" />
              <span>DIRECT ORDER NOW — ₹649</span>
              <ArrowRight size={16} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '6px', fontSize: '11px', color: '#536158', fontWeight: 600 }}>
              <Truck size={12} color="#108448" />
              <span>Free Express Delivery • COD &amp; UPI Available</span>
            </div>
          </div>

          {/* Two Trust Proof Items Inline */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(12px, 3vw, 24px)',
            flexWrap: 'wrap',
            fontSize: '12.5px',
            fontWeight: 600,
            color: '#121e17',
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#108448" />
              <span>100% Pure Karnataka Harvest</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <WoodenMillIcon size={16} color="#7a4f2d" />
              <span>Freshly pressed in wooden mills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Direct 1-Click Order Modal */}
      <DirectOrderModal
        isOpen={directOrderOpen}
        onClose={() => setDirectOrderOpen(false)}
      />
    </>
  );
};
