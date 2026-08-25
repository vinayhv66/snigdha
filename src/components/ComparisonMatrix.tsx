import React from 'react';
import { CheckCircle2, XCircle, Sparkles, Scale, Info } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'How It Is Made',
      snigdha: 'Traditional Wooden Mill (ಮರ ಗಾಣ)',
      machineCold: 'Modern Metal Machine Press',
      refined: 'Factory Chemical & High Heat Processing',
    },
    {
      feature: 'Heat During Crushing',
      snigdha: 'Zero Machine Heat (Natural Room Temperature)',
      machineCold: 'Warm friction heat from metal screws',
      refined: 'Boiled above 200°C with chemical steam',
    },
    {
      feature: 'Chemicals & Solvents',
      snigdha: 'Zero (0%) Chemicals. Filtered through cotton cloth',
      machineCold: 'No added chemicals',
      refined: 'Caustic soda, chemical bleaches & artificial deodorants',
    },
    {
      feature: 'Taste & Aroma in Cooking',
      snigdha: 'Fresh real aroma of natural coconuts, peanuts & sesame',
      machineCold: 'Mild taste, sometimes slightly burnt from metal',
      refined: 'No natural smell or taste left at all',
    },
    {
      feature: 'Digestive Feel After Meals',
      snigdha: 'Light & easy to digest. No greasy heaviness or acidity',
      machineCold: 'Moderately light',
      refined: 'Heavy sticky feeling in the stomach; prone to burning',
    },
    {
      feature: 'How Much Oil You Need',
      snigdha: 'Uses 25% to 30% less oil because it is thick & pure',
      machineCold: 'Average quantity',
      refined: 'Very watery thin—needs large quantity while cooking',
    },
  ];

  return (
    <section id="comparison" className="comparison-section" style={{ padding: '4rem 0', background: 'var(--bg-main)' }} aria-label="Oil Comparison Matrix">
      <div className="container-luxe">
        <div className="gallery-header" style={{ marginBottom: '2.5rem' }}>
          <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Scale size={14} color="var(--wood-brown)" />
            <span>Honest Difference</span>
          </span>
          <h2 className="gallery-title" style={{ fontSize: '2.4rem', marginTop: '0.5rem' }}>
            Pure Wood Press vs Refined Packet Oil
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '640px', margin: '0.5rem auto 0' }}>
            Cooking oil makes up a big part of your daily meals. See how pure wooden-mill oil compares to factory processed packet oils.
          </p>
        </div>

        <div className="comparison-table-wrapper" style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', overflowX: 'auto', boxShadow: 'var(--shadow-card)' }}>
          <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg-subtle)' }}>
                <th style={{ width: '25%', padding: '1.25rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  What You Consume
                </th>
                <th className="col-snigdha" style={{ width: '35%', padding: '1.25rem 1.5rem', textAlign: 'center', background: 'var(--primary-forest-surface)', color: 'var(--primary-forest)', fontSize: '0.92rem', fontWeight: 800 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', justifyContent: 'center' }}>
                    <Sparkles size={16} color="var(--gold-accent)" /> Snigdha Mara Ghaana (ಮರ ಗಾಣ)
                  </span>
                </th>
                <th style={{ width: '20%', padding: '1.25rem 1rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-dark)', fontWeight: 700 }}>
                  Steel Cold-Pressed
                </th>
                <th style={{ width: '20%', padding: '1.25rem 1rem', textAlign: 'center', fontSize: '0.85rem', color: '#a03b30', fontWeight: 700 }}>
                  Commercial Refined Pouches
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: idx !== comparisonRows.length - 1 ? '1px solid var(--border-ultra-light)' : 'none' }}>
                  <td style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-forest-dark)' }}>
                    {row.feature}
                  </td>
                  <td className="col-snigdha" style={{ padding: '1.2rem 1.5rem', background: 'rgba(237, 243, 238, 0.45)', textAlign: 'left', fontSize: '0.86rem', color: 'var(--text-dark)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} color="var(--veg-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontWeight: 600 }}>{row.snigdha}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1.2rem 1rem', textAlign: 'center', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {row.machineCold}
                  </td>
                  <td style={{ padding: '1.2rem 1rem', textAlign: 'center', fontSize: '0.84rem', color: '#c94436', background: 'rgba(201, 68, 54, 0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', justifyContent: 'center' }}>
                      <XCircle size={15} color="#c94436" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.refined}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Helpful Karnataka Kitchen Tip Banner */}
        <div style={{ marginTop: '2rem', background: 'var(--gold-subtle)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-md)', padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Info size={24} color="var(--gold-accent)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.88rem', color: 'var(--wood-brown-dark)', margin: 0, lineHeight: '1.6' }}>
            <strong>The Karnataka Kitchen Rule of Thumb:</strong> Because Mara Ghaana oils are dense with natural viscosity and unstripped lipids, you need <strong>25% to 30% less oil</strong> per dish compared to refined water-thin oils. One spoon of Snigdha goes much further in your daily oggarane and palya.
          </p>
        </div>
      </div>
    </section>
  );
};
