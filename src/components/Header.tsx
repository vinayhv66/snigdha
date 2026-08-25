'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export const Header: React.FC = () => {
  const { openCart, totalCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Hook Announcement Bar */}
      <aside className="announcement-bar" aria-label="Announcement">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>🌿 <strong>100% Wood Cold-Pressed by Western Ghats Farmers</strong> | Zero Heat • Zero Chemicals</span>
          <span className="badge-highlight">Use Code: <strong>PURE100</strong> for 10% OFF</span>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo & Twin-Elephant Emblem */}
          <Link href="/" className="brand-wrapper" aria-label="Snigdha Pure Oils Home">
            <div style={{ position: 'relative', width: '52px', height: '42px' }}>
              <Image 
                src="/assets/icons/emblem.svg" 
                alt="Snigdha Twin Elephants Emblem" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div style={{ position: 'relative', width: '130px', height: '36px' }}>
              <Image 
                src="/assets/icons/logo.svg" 
                alt="snigdha brand name" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <a href="#products" className="nav-link">Our Oils</a>
            <a href="#provenance" className="nav-link">Farm Traceability</a>
            <a href="#comparison" className="nav-link">Why Wood-Pressed</a>
            <a href="#oil-finder" className="nav-link">Oil Selector Quiz</a>
            <a href="#reviews" className="nav-link">Verified Reviews</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>

          {/* Nav Actions / Cart Trigger */}
          <div className="nav-actions">
            <a 
              href="#oil-finder" 
              className="search-btn"
              title="Find the right oil for your health goal"
            >
              <span>✨ Oil Finder</span>
            </a>

            <button 
              className="cart-trigger-btn"
              onClick={openCart}
              aria-label={`View Cart with ${totalCount} items`}
              id="cart-drawer-trigger"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span style={{ fontWeight: 700 }}>Cart</span>
              {totalCount > 0 && <span className="cart-count-badge">{totalCount}</span>}
            </button>

            {/* Mobile Nav Hamburger */}
            <button 
              className="mobile-nav-toggle"
              style={{ display: 'none', fontSize: '1.5rem', color: 'var(--primary-forest)' }}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
