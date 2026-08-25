'use client';

import React, { useState } from 'react';
import { Sun, Trees, Droplet, ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Farmer Harvest',
      subtitle: 'From Karnataka Farms',
      tag: 'Fresh Harvest',
      desc: 'Handpicked organic coconuts and seeds from local Karnataka farmers in Tiptur, Chamarajanagar & Shivamogga.',
      icon: <Sparkles size={24} color="var(--primary-forest)" />,
      metric: '100% Traceable',
    },
    {
      num: '02',
      title: 'Natural Sun Drying',
      subtitle: 'Zero Sulfur or Chemicals',
      tag: 'Sun Cured',
      desc: 'Naturally dried under warm sunlight for 7 days. Never treated with chemical smoke or sulfur.',
      icon: <Sun size={24} color="var(--wood-brown)" />,
      metric: '0% Chemicals',
    },
    {
      num: '03',
      title: 'Traditional Wooden Press',
      subtitle: 'Slow Crushing with No Heat',
      tag: 'Mara Ghaana',
      desc: 'Crushed slowly in wooden mills (ಮರ ಗಾಣ). Zero machine heat means all natural vitamins and aroma stay fresh.',
      icon: <Trees size={24} color="var(--primary-forest)" />,
      metric: 'Zero Heat Damage',
    },
    {
      num: '04',
      title: 'Cotton Cloth Filter',
      subtitle: 'Pure Natural Clarity',
      tag: 'Natural Filter',
      desc: 'Rested naturally and filtered only through clean cotton cloth. Zero bleaching earth or chemical filters.',
      icon: <Droplet size={24} color="var(--primary-emerald)" />,
      metric: '100% Pure Oil',
    },
    {
      num: '05',
      title: 'Fresh Glass Bottle Pack',
      subtitle: 'No Plastic Chemicals',
      tag: 'Glass Packed',
      desc: 'Packed in clean glass bottles so the oil stays fresh, tasty, and chemical-free for your kitchen.',
      icon: <ShieldCheck size={24} color="var(--primary-forest)" />,
      metric: 'Zero Plastic',
    },
  ];

  return (
    <section id="process" className="process-timeline-section" style={{ padding: '6.5rem 0', background: 'var(--bg-main)', borderTop: '1px solid var(--border-ultra-light)' }} aria-label="Seed-to-Bottle Storytelling">
      <div className="container-luxe">
        {/* Editorial Section Header (PlantBee Style) */}
        <div className="gallery-header" style={{ marginBottom: '3.5rem' }}>
          <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Trees size={14} color="var(--wood-brown)" />
            <span>Seed to Bottle Storytelling</span>
          </span>
          <h2 className="gallery-title" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
            The 5-Step Wood-Pressed Ritual
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', maxWidth: '620px', margin: '0.5rem auto 0' }}>
            Unlike industrial supermarket oils extracted in seconds with 200°C steam and petrochemical solvents, Snigdha takes 9 days of slow natural craftsmanship.
          </p>
        </div>

        {/* Step Navigation Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {steps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                background: activeStep === idx ? 'var(--primary-forest)' : '#ffffff',
                color: activeStep === idx ? '#ffffff' : 'var(--text-dark)',
                border: `1.5px solid ${activeStep === idx ? 'var(--primary-forest)' : 'var(--border-refined)'}`,
                boxShadow: activeStep === idx ? 'var(--shadow-subtle)' : 'none',
                transition: 'all 0.25s var(--ease-spring)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span>{step.num}</span>
              <span>•</span>
              <span>{step.title.split(' ')[0]} {step.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Featured Step Story Spotlight Card */}
        <div 
          style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--border-refined)',
            padding: '2rem',
            boxShadow: 'var(--shadow-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {/* Left Column: Story & Data */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond, serif', fontWeight: 800, color: 'var(--wood-brown)' }}>
                Step {steps[activeStep].num}
              </span>
              <span style={{ background: 'var(--primary-forest-surface)', color: 'var(--primary-forest)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase' }}>
                {steps[activeStep].tag}
              </span>
            </div>

            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-forest-dark)', marginBottom: '0.4rem' }}>
              {steps[activeStep].title}
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--wood-brown)', fontWeight: 600, marginBottom: '1rem' }}>
              {steps[activeStep].subtitle}
            </p>

            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {steps[activeStep].desc}
            </p>

            {/* Performance Pillar Metric */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'var(--gold-subtle)', border: '1px solid var(--border-gold)', padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-md)' }}>
              <Check size={18} color="var(--gold-accent)" />
              <span style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--wood-brown-dark)' }}>
                Quality Standard: {steps[activeStep].metric}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Pillar Box */}
          <div style={{ background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', padding: '2.5rem', textAlign: 'center', border: '1px solid var(--border-ultra-light)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ffffff', border: '2px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: 'var(--shadow-subtle)' }}>
              {steps[activeStep].icon}
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-forest-dark)', marginBottom: '0.4rem', fontFamily: 'Cormorant Garamond, serif' }}>
              Western Ghats Standards
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', maxWidth: '240px' }}>
              FSSAI Lic. 12423008000492 batch tested before daily dispatch.
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
              {steps.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    width: activeStep === i ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    background: activeStep === i ? 'var(--primary-forest)' : 'var(--border-refined)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
