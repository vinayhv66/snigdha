'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const config = {
    sm: { emblemH: 30, emblemW: 39, wordmarkH: 20, wordmarkW: 62, gap: 6 },
    md: { emblemH: 40, emblemW: 52, wordmarkH: 26, wordmarkW: 80, gap: 8 },
    lg: { emblemH: 50, emblemW: 65, wordmarkH: 32, wordmarkW: 99, gap: 10 },
  }[size];

  return (
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${config.gap}px`,
        textDecoration: 'none',
      }}
      aria-label="Snigdha Home"
    >
      {/* ── Exact Official User Emblem (Zero Padding, 100% Uncropped) ── */}
      <div
        style={{
          position: 'relative',
          width: `${config.emblemW}px`,
          height: `${config.emblemH}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Image
          src="/assets/images/user_emblem_tight.png"
          alt="Snigdha Elephant Emblem"
          width={config.emblemW * 2}
          height={config.emblemH * 2}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: isLight ? 'brightness(0) invert(1)' : 'none',
          }}
          priority
        />
      </div>

      {/* ── Exact Official User Wordmark (Zero Padding, 100% Uncropped) ── */}
      <div
        style={{
          position: 'relative',
          width: `${config.wordmarkW}px`,
          height: `${config.wordmarkH}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Image
          src="/assets/images/user_wordmark_tight.png"
          alt="Snigdha"
          width={config.wordmarkW * 2}
          height={config.wordmarkH * 2}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: isLight ? 'brightness(0) invert(1)' : 'none',
          }}
          priority
        />
      </div>
    </Link>
  );
};
