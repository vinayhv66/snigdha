'use client';

import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  variant?: 'rectangular' | 'circular' | 'rounded';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  borderRadius,
  variant = 'rounded',
  style,
  ...props
}) => {
  const getRadius = () => {
    if (borderRadius) return borderRadius;
    switch (variant) {
      case 'circular':
        return '50%';
      case 'rounded':
        return '12px';
      case 'rectangular':
      default:
        return '4px';
    }
  };

  return (
    <div
      className={`snigdha-skeleton ${className}`}
      style={{
        width: width || '100%',
        height: height || '20px',
        borderRadius: getRadius(),
        background: 'linear-gradient(90deg, #f2ece1 0%, #ebe2d3 50%, #f2ece1 100%)',
        backgroundSize: '200% 100%',
        animation: 'snigdhaShimmer 1.6s infinite ease-in-out',
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
};

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '18px',
        padding: '16px',
        border: '1px solid rgba(18, 36, 26, 0.06)',
        boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <Skeleton height="180px" borderRadius="14px" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Skeleton width="70%" height="22px" borderRadius="6px" />
        <Skeleton width="45%" height="14px" borderRadius="4px" />
        <Skeleton width="30%" height="16px" borderRadius="4px" style={{ marginTop: '4px' }} />
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
        <Skeleton width="48%" height="28px" borderRadius="9999px" />
        <Skeleton width="48%" height="28px" borderRadius="9999px" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
        <Skeleton width="35%" height="24px" borderRadius="6px" />
      </div>
      <Skeleton width="100%" height="38px" borderRadius="9999px" style={{ marginTop: '4px' }} />
    </div>
  );
};

export const HeroSkeleton: React.FC = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
      <Skeleton height="380px" borderRadius="20px" style={{ marginBottom: '24px' }} />
      <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Skeleton width="80%" height="40px" borderRadius="8px" />
        <Skeleton width="40%" height="18px" borderRadius="6px" />
        <Skeleton width="30%" height="24px" borderRadius="9999px" />
        <Skeleton width="60%" height="44px" borderRadius="9999px" style={{ marginTop: '8px' }} />
      </div>
    </div>
  );
};
