'use client';

import React from 'react';
import { ShieldCheck, Award, Droplet, Trees, HeartHandshake } from 'lucide-react';

export const TrustSignals: React.FC = () => {
  const pillars = [
    {
      stat: '100%',
      label: 'Wooden Mill Pressed',
      sublabel: 'Mara Ghaana (<38°C)',
      icon: <Trees size={20} color="var(--primary-forest)" />,
    },
    {
      stat: '0%',
      label: 'Chemicals & Solvents',
      sublabel: 'Pure Unrefined Extract',
      icon: <Droplet size={20} color="var(--primary-emerald)" />,
    },
    {
      stat: 'Pure',
      label: 'Easy to Digest',
      sublabel: 'Zero Acidity or Heaviness',
      icon: <ShieldCheck size={20} color="var(--wood-brown)" />,
    },
    {
      stat: 'Fresh',
      label: 'Natural Aroma',
      sublabel: 'Small-Batch Crushed',
      icon: <Award size={20} color="var(--primary-forest)" />,
    },
    {
      stat: 'Direct',
      label: 'Karnataka Farmers',
      sublabel: 'Fair Trade & Honest',
      icon: <HeartHandshake size={20} color="var(--primary-emerald)" />,
    },
  ];

  return (
    <section className="trust-signals-section" style={{ background: '#ffffff', borderTop: '1px solid var(--border-ultra-light)', borderBottom: '1px solid var(--border-ultra-light)', padding: '32px 0' }} aria-label="Trust & Quality Pillars">
      <div className="container-luxe">
        <div className="trust-proof-grid" style={{ gap: '16px' }}>
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '16px 12px',
                background: 'var(--bg-main)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-ultra-light)',
                transition: 'all 0.25s var(--ease-spring)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = 'var(--border-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-ultra-light)';
              }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', boxShadow: 'var(--shadow-subtle)' }}>
                {p.icon}
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-forest-dark)', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>
                {p.stat}
              </div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-forest-dark)', marginBottom: '2px' }}>
                {p.label}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {p.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
