'use client';

import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919XXXXXXXXX'; // ← Replace with your WhatsApp number (91 + 10-digit mobile)
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi Snigdha! I want to know more about your wood-pressed oils. 🌿'
);

export const WhatsAppFloat: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-float"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
      }}
    >
      {/* Tooltip label */}
      <span
        style={{
          background: '#121e17',
          color: '#ffffff',
          fontSize: '12px',
          fontWeight: 700,
          padding: '6px 12px',
          borderRadius: '9999px',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(8px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          pointerEvents: 'none',
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          letterSpacing: '0.01em',
          boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
        }}
      >
        Order on WhatsApp
      </span>

      {/* WhatsApp circle button */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 8px 24px rgba(37, 211, 102, 0.5)'
            : '0 4px 16px rgba(37, 211, 102, 0.35)',
          transition: 'box-shadow 0.2s ease',
          flexShrink: 0,
        }}
      >
        {/* Official WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="#ffffff"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.64 4.73 1.76 6.72L2 30l7.52-1.72A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4a11.4 11.4 0 0 1-5.8-1.58l-.42-.25-4.46 1.02 1.06-4.34-.28-.44A11.37 11.37 0 0 1 4.6 16C4.6 9.72 9.72 4.6 16 4.6S27.4 9.72 27.4 16 22.28 27.4 16 27.4zm6.24-8.52c-.34-.17-2.02-1-2.33-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59H10.6c-.2 0-.54.07-.82.37-.28.3-1.08 1.06-1.08 2.58s1.1 2.99 1.26 3.2c.17.23 2.18 3.33 5.28 4.67.74.32 1.32.51 1.77.65.74.23 1.42.2 1.96.12.6-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.14-.28-.2-.62-.37z" />
        </svg>
      </div>
    </a>
  );
};
