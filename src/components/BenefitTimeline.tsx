import React from 'react';
import { Droplet, Heart, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BenefitTimeline: React.FC = () => {
  const steps = [
    {
      period: 'Day 1',
      title: 'Zero Chemical Burden',
      desc: 'Immediate elimination of hexane solvents, mineral argemone contaminants, and toxic trans fats from your meal preparation.',
      icon: <Droplet size={20} color="var(--primary-forest)" />,
    },
    {
      period: 'Week 2',
      title: 'Cellular Gut & Energy Absorption',
      desc: 'Medium-Chain Fatty Acids (MCTs) and Lauric Acid (47%) convert directly into clean cellular fuel without sluggish hepatic load.',
      icon: <Heart size={20} color="var(--wood-brown)" />,
    },
    {
      period: 'Month 1 & Beyond',
      title: 'Cardiovascular & Vital Balance',
      desc: 'High natural Monounsaturated Fats (MUFA) and Sesamol antioxidants promote optimal arterial elasticity and lipid balance.',
      icon: <ShieldCheck size={20} color="var(--gold-accent)" />,
    },
  ];

  return (
    <section className="timeline-section" style={{ padding: '6rem 0', background: '#ffffff', borderTop: '1px solid var(--border-refined)', borderBottom: '1px solid var(--border-refined)' }} aria-label="Transformation Timeline">
      <div className="container-luxe">
        <div className="gallery-header" style={{ marginBottom: '4rem' }}>
          <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={14} color="var(--gold-accent)" />
            <span>The Cellular Shift</span>
          </span>
          <h2 className="gallery-title" style={{ fontSize: '2.5rem' }}>What Happens When You Switch</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem' }}>
            The physiological progression when you replace hydrogenated supermarket cooking oils with single-origin, living wood-pressed botanicals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              style={{
                background: 'var(--bg-main)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-refined)',
                padding: '2.25rem',
                position: 'relative',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--wood-brown)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {step.period}
                </span>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffffff', border: '1px solid var(--border-refined)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {step.icon}
                </div>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-forest-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>
                {step.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
