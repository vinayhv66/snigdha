'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Check } from 'lucide-react';

export const StickyQuickBuyDock: React.FC = () => {
  const { addToCart, openCart } = useCart();
  const [visible, setVisible] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const rafRef = useRef<number | null>(null);

  const trioPack = PRODUCTS.find((p) => p.id === 'western-ghats-trio-pack') || PRODUCTS[0];
  const trioVariant = trioPack?.variants?.[0] || {
    volume: '3 x 1000ml',
    volumeMl: 3000,
    price: 1699,
    originalPrice: 2049,
    inStock: true,
    sku: 'SNG-TRIO-3000',
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        
        // Hysteresis threshold to prevent rapid flickering around border
        if (currentY > 320) {
          setVisible(true);
        } else if (currentY < 180) {
          setVisible(false);
        }

        lastScrollY = currentY;
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleBuy = () => {
    addToCart(trioPack, trioVariant, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      openCart();
    }, 450);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(24px)',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s',
        zIndex: 900,
        width: 'calc(100% - 32px)',
        maxWidth: '440px',
        willChange: 'transform, opacity',
      }}
    >
      <button
        onClick={handleBuy}
        aria-label="Quick buy Trio Pack for ₹1699"
        style={{
          width: '100%',
          background: justAdded ? '#108448' : '#244d36',
          color: '#ffffff',
          border: 'none',
          borderRadius: '9999px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer',
          fontWeight: 800,
          fontSize: '12.5px',
          letterSpacing: '0.04em',
          boxShadow: '0 8px 24px rgba(18, 36, 26, 0.35)',
          transition: 'background-color 0.2s ease, transform 0.15s ease',
        }}
      >
        {justAdded ? (
          <>
            <Check size={16} strokeWidth={3} />
            <span>Added Trio Pack to Bag!</span>
          </>
        ) : (
          <span>QUICK BUY: 3 x 1L Trio Pack — ₹1699</span>
        )}
      </button>
    </div>
  );
};
