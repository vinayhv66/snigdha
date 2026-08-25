'use client';

import React from 'react';
import { Star, ShieldCheck, Award } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Dr. Ananya Natarajan',
      location: 'Malleswaram, Bengaluru',
      product: 'Virgin Coconut Oil (Thengina Enne)',
      rating: 5,
      date: '3 days ago',
      title: 'Real Tiptur Mara Ghaana oil that naturally solidifies in winter.',
      quote: 'As a nutritionist, I look for genuine Lauric acid retention. Snigdha’s Thengina Enne is distinct: the raw aroma of fresh Tiptur copra without burnt expeller notes. It solidifies naturally below 24°C, proving zero adulteration.',
    },
    {
      name: 'Raghavendra & Suma Rao',
      location: 'Jayalakshmipuram, Mysuru',
      product: 'Wood-Pressed Groundnut Oil (Shenga Enne)',
      rating: 5,
      date: '1 week ago',
      title: 'Our daily oggarane and dosas never feel heavy anymore.',
      quote: 'We switched our household cooking from refined oil to Snigdha Shenga Enne. High smoke point makes daily bajjis and saaru oggarane aromatic with no lingering oiliness or heartburn.',
    },
    {
      name: 'Prashanth Kulkarni',
      location: 'Vidyanagar, Hubballi',
      product: 'Sesame Oil with Palm Jaggery (Ellu Enne)',
      rating: 5,
      date: '2 weeks ago',
      title: 'The authentic Taati Bella aroma for chutney pudi.',
      quote: 'Reminds me of our ancestral home. The organic palm jaggery (Taati Bella) balances the pungency of black sesame seeds beautifully. Perfect for our daily chutney pudi, dose, and body massage.',
    },
  ];

  return (
    <section id="reviews" className="reviews-section" style={{ padding: '32px 0 24px', background: '#ffffff', borderTop: '1px solid rgba(18, 36, 26, 0.06)' }} aria-label="Customer Reviews & Testimonials">
      <div className="container-luxe">
        {/* Header with Aggregate Rating */}
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#108448', background: '#eaf5ee', borderRadius: '9999px' }}>
            <Award size={13} color="#108448" />
            <span>Verified Customer Voice</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: '8px 0', color: '#121e17' }}>
            Trusted in 2,400+ Karnataka Kitchens
          </h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--bg-subtle)', padding: '6px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-ultra-light)' }}>
            <div style={{ display: 'flex', color: 'var(--primary-emerald)' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <strong style={{ fontSize: '13px', color: 'var(--primary-forest-dark)' }}>4.9 out of 5</strong>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>• 240+ Verified Karnataka Dispatches</span>
          </div>
        </div>

        {/* 3 Verified Customer Review Cards */}
        <div className="reviews-responsive-grid" style={{ gap: '24px' }}>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-main)',
                border: '1.5px solid var(--border-refined)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)',
                height: '100%',
                transition: 'all 0.25s var(--ease-spring)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--primary-emerald)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-refined)';
              }}
            >
              <div>
                {/* Rating Stars & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', color: 'var(--primary-emerald)', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: 600 }}>
                    {rev.date}
                  </span>
                </div>

                {/* Review Title */}
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-forest-dark)', lineHeight: '1.4', marginBottom: '8px' }}>
                  "{rev.title}"
                </h4>

                {/* Review Quote */}
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '18px', fontStyle: 'normal' }}>
                  {rev.quote}
                </p>
              </div>

              {/* Reviewer Meta */}
              <div style={{ borderTop: '1px solid var(--border-ultra-light)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary-forest-dark)' }}>
                    {rev.name}
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    {rev.location}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--primary-emerald)', fontWeight: 700, background: 'var(--primary-emerald-surface)', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>
                  <ShieldCheck size={12} />
                  <span>Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
