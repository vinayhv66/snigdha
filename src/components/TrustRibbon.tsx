import React from 'react';

export const TrustRibbon: React.FC = () => {
  const pillars = [
    {
      title: 'Vaagai Wood Ghani',
      desc: 'Pressed at <38°C in indigenous wood to prevent nutrient breakdown',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: 'Western Ghats Single Origin',
      desc: '100% traceably harvested by organic family farmers in the Ghats',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
    },
    {
      title: 'Zero Chemical Solvents',
      desc: 'No hexane, bleaching, argemone oil, or artificial deodorizers',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31"></path>
          <path d="M14 9.3V1.99"></path>
          <path d="M8.5 2h7"></path>
          <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
        </svg>
      ),
    },
    {
      title: 'FSSAI & Lab Tested',
      desc: 'Each batch is independently NABL tested with accessible reports',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section className="trust-ribbon-section" aria-label="Our Guarantees">
      <div className="container">
        <div className="trust-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="trust-item">
              <div className="trust-icon">{pillar.icon}</div>
              <div>
                <h3 className="trust-title">{pillar.title}</h3>
                <p className="trust-desc">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
