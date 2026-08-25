import React from 'react';

export const ArtisanalDistinctions: React.FC = () => {
  const distinctions = [
    {
      num: '01',
      title: 'Vaagai Hardwood Crushing',
      desc: 'Crushed slowly in native Vaagai (Albizia lebbeck) wood mortars. Prevents steel friction heat and preserves live enzymes and natural aroma.',
    },
    {
      num: '02',
      title: 'True Cold-Press (<38°C)',
      desc: 'Extracted strictly below body temperature. Retains 47% natural Lauric Acid in Coconut Oil and plant sterols in Groundnut & Sesame oils.',
    },
    {
      num: '03',
      title: 'Zero Chemical Refining',
      desc: '100% free from hexane solvents, argemone oil, chemical bleaching earth, and artificial anti-foaming agents. Naturally sedimented and bottled.',
    },
  ];

  return (
    <section id="distinctions" className="distinctions-section" aria-label="Oil Craftsmanship Distinctions">
      <div className="container-luxe">
        <div className="distinctions-grid">
          {distinctions.map((d) => (
            <div key={d.num} className="distinction-card">
              <div className="distinction-num">{d.num}</div>
              <h3 className="distinction-title">{d.title}</h3>
              <p className="distinction-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
