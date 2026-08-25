'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Search, ShoppingCart, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const JewelryHeader: React.FC = () => {
  const { totalCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ── Top Announcement Banner ── */}
      <div style={{
        background: '#244d36',
        color: '#ffffff',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '6px 16px',
        textAlign: 'center',
        zIndex: 101,
        position: 'relative',
        fontFamily: "'Inter', sans-serif",
      }}>
        FREE EXPRESS SHIPPING OVER ₹499 • USE CODE: <span style={{ fontWeight: 800 }}>PUREWOOD</span>
      </div>

      {/* ── Compact Floating Pill Header for Both Mobile & Laptop ── */}
      <div style={{
        position: 'sticky',
        top: '10px',
        zIndex: 100,
        padding: '0 16px',
        maxWidth: '860px', /* Compact width prevents huge empty gaps on laptop */
        margin: '0 auto',
      }}>
        <header style={{
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '9999px', /* Sleek pill shape */
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(18, 36, 26, 0.08)',
          padding: '0 18px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* ── Brand Logo ── */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BrandLogo size="md" />
          </div>

          {/* ── Desktop Navigation Links (Cohesive, perfectly spaced) ── */}
          <nav className="stitch-desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '1.6rem' }}>
            <Link href="/shop" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#121e17', textDecoration: 'none', transition: 'color 0.15s' }}>
              Our Oils
            </Link>
            <Link href="/our-story" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#121e17', textDecoration: 'none', transition: 'color 0.15s' }}>
              Our Story
            </Link>
            <Link href="/our-process" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#121e17', textDecoration: 'none', transition: 'color 0.15s' }}>
              Process
            </Link>
            <Link href="/track-batch" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#121e17', textDecoration: 'none', transition: 'color 0.15s' }}>
              Verify Batch
            </Link>
          </nav>

          {/* ── Right Actions: Search, Cart, Hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              aria-label="Search"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#121e17', display: 'flex', alignItems: 'center' }}
            >
              <Search size={18} strokeWidth={2.2} />
            </button>

            <button
              onClick={openCart}
              aria-label={`Shopping cart with ${totalCount} items`}
              style={{
                background: '#244d36',
                border: 'none',
                cursor: 'pointer',
                padding: '6px 14px',
                borderRadius: '9999px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700,
                fontSize: '12px',
                boxShadow: '0 2px 8px rgba(36, 77, 54, 0.25)',
              }}
            >
              <ShoppingCart size={15} strokeWidth={2.2} />
              <span className="cart-text-btn">{totalCount > 0 ? `Bag (${totalCount})` : 'Bag'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="mobile-hamburger-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#121e17', display: 'flex', alignItems: 'center' }}
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
            </button>
          </div>
        </header>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 30, 21, 0.6)',
            zIndex: 950,
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '82%',
        maxWidth: '320px',
        background: '#f8f5ee',
        zIndex: 1000,
        boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.2)',
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <BrandLogo size="md" />
            <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#121e17' }}>
              <X size={22} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/shop', label: 'Our Signature Oils' },
              { href: '/our-story', label: 'Farmers & Heritage' },
              { href: '/our-process', label: 'The Wooden Mill Process' },
              { href: '/track-batch', label: 'Verify Batch Traceability' },
              { href: '/contact', label: 'Customer Care & WhatsApp' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 0',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#121e17',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(18, 36, 26, 0.06)',
                }}
              >
                <span>{item.label}</span>
                <ArrowRight size={15} color="#7a4f2d" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Link
            href="/#collection"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              background: '#244d36',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              marginBottom: '0.75rem',
            }}
          >
            Explore Collection
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center', fontSize: '11px', color: '#536158' }}>
            <ShieldCheck size={13} color="#108448" />
            <span>FSSAI Lic: 12423008000492</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stitch-desktop-nav { display: flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
};
