'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, X } from 'lucide-react';

const RECENT_PURCHASES = [
  { name: 'Dr. Nandini K.', location: 'Indiranagar, Bengaluru', item: '1000ml Thengina Enne', time: '2m ago', image: '/assets/images/authentic_coconut.jpg' },
  { name: 'Raghavendra Rao', location: 'Jayalakshmipuram, Mysuru', item: '5000ml Shenga Enne Can', time: '5m ago', image: '/assets/images/authentic_groundnut.jpg' },
  { name: 'Deepa Hegde', location: 'Koramangala, Bengaluru', item: '1000ml Shenga Enne', time: '8m ago', image: '/assets/images/authentic_groundnut.jpg' },
  { name: 'Prashanth K.', location: 'Vidyanagar, Hubballi', item: '1000ml Ellu Enne with Jaggery', time: '12m ago', image: '/assets/images/authentic_sesame.jpg' },
];

export const SocialProofToast: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const timer1 = setTimeout(() => {
      setVisible(true);
    }, 6000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setVisible(true);
      }, 800);
    }, 20000);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = RECENT_PURCHASES[currentIdx];

  return (
    <div 
      className="social-proof-toast-desktop"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 850,
        background: '#ffffff',
        border: '1px solid rgba(18, 36, 26, 0.12)',
        borderRadius: '12px',
        padding: '10px 14px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        maxWidth: '300px',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f6f0e4', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
        <Image 
          src={current.image} 
          alt={current.name} 
          fill
          style={{ objectFit: 'contain', padding: '2px' }}
        />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '10.5px', color: '#108448', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
          <ShoppingBag size={10} />
          <span>Verified Dispatch • {current.time}</span>
        </div>
        <div style={{ fontSize: '12px', fontWeight: 800, color: '#121e17', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {current.name} ({current.location.split(',')[0]})
        </div>
        <div style={{ fontSize: '11px', color: '#536158', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Bought {current.item}
        </div>
      </div>

      <button 
        onClick={() => setDismissed(true)} 
        aria-label="Dismiss toast"
        style={{ color: '#839188', padding: '2px', cursor: 'pointer', background: 'none', border: 'none' }}
      >
        <X size={13} />
      </button>

      <style>{`
        @media (max-width: 768px) {
          .social-proof-toast-desktop { display: none !important; }
        }
      `}</style>
    </div>
  );
};
