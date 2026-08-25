'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Droplet, Sun, Trees, ShieldCheck, Sparkles } from 'lucide-react';

export const PlantBeeBotanicalShowcase: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState(0);

  const hotspots = [
    {
      id: 0,
      title: 'Sun-Dried Coastal Copra',
      subtitle: 'Western Ghats Single Origin',
      desc: 'Naturally solar-cured on raised bamboo platforms without toxic sulfur fumigation, preserving raw coconut flesh enzymes.',
      icon: <Sun size={18} color="var(--gold-accent)" />,
      badge: 'Zero Sulfur',
    },
    {
      id: 1,
      title: 'Vaagai Hardwood Mortar',
      subtitle: 'Albizia Lebbeck Living Wood',
      desc: 'Indigenous hardwood absorbs natural ambient warmth, preventing destructive steel friction and heat generation during crushing.',
      icon: <Trees size={18} color="var(--wood-brown)" />,
      badge: 'Zero Steel Friction',
    },
    {
      id: 2,
      title: 'Cold Stream Extraction (<38°C)',
      subtitle: 'Living Nutrient Integrity',
      desc: 'Slowly dripped at ambient temperature without solvent chemicals or industrial bleaching earth, maintaining 47% Lauric acid.',
      icon: <Droplet size={18} color="var(--primary-forest)" />,
      badge: '47% Lauric Acid',
    },
    {
      id: 3,
      title: 'Cellar-Grade Flint Glass',
      subtitle: 'Pure Food Contact Safety',
      desc: 'Bottled in heavy UV-shielded flint glass to prevent microplastic leaching and preserve fresh culinary aroma for 18 months.',
      icon: <ShieldCheck size={18} color="var(--primary-forest)" />,
      badge: 'Zero Microplastics',
    },
  ];

  return (
    <section className="botanical-showcase-section" style={{ padding: '6rem 0', background: 'var(--bg-main)' }} aria-label="Botanical Craftsmanship Architecture">
      <div className="container-luxe">
        <div className="gallery-header" style={{ marginBottom: '3.5rem' }}>
          <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={14} color="var(--gold-accent)" />
            <span>Botanical Anatomy (PlantBee Inspired)</span>
          </span>
          <h2 className="gallery-title" style={{ fontSize: '2.5rem' }}>The Anatomy of Pure Living Oil</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem' }}>
            Every step of our process is engineered to protect delicate lipid bonds, natural fatty acid chains, and authentic aroma.
          </p>
        </div>

        {/* 4 Interactive Process Pillar Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {hotspots.map((spot, idx) => (
            <div
              key={spot.id}
              onClick={() => setActiveHotspot(idx)}
              style={{
                background: '#ffffff',
                border: `1.5px solid ${activeHotspot === idx ? 'var(--primary-forest)' : 'var(--border-refined)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeHotspot === idx ? 'var(--shadow-card)' : 'var(--shadow-subtle)',
                transform: activeHotspot === idx ? 'translateY(-4px)' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {spot.icon}
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'var(--primary-forest-surface)', color: 'var(--primary-forest)', padding: '0.2rem 0.5rem', borderRadius: '9999px' }}>
                  {spot.badge}
                </span>
              </div>

              <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-forest-dark)', fontWeight: 700, marginBottom: '0.25rem' }}>
                {spot.title}
              </h4>
              <div style={{ fontSize: '0.78rem', color: 'var(--wood-brown)', fontWeight: 600, marginBottom: '0.6rem' }}>
                {spot.subtitle}
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {spot.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
