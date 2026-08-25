import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'gold' | 'wood' | 'subtle';
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  pulse = false,
  children,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-[var(--primary-forest)] text-white border-transparent',
    outline: 'border border-[var(--border-refined)] text-[var(--primary-forest)] bg-transparent',
    gold: 'bg-[var(--gold-subtle)] text-[var(--gold-accent)] border border-[var(--border-gold)]',
    wood: 'bg-[var(--wood-brown-surface)] text-[var(--wood-brown-dark)] border border-[var(--wood-brown-subtle)]',
    subtle: 'bg-[var(--primary-forest-surface)] text-[var(--primary-forest-dark)] border border-[var(--border-green)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-all',
        variantStyles[variant],
        className
      )}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
      {...props}
    >
      {pulse && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'currentColor',
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }}
        />
      )}
      {children}
    </span>
  );
};
