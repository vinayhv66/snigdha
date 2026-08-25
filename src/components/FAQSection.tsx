'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the real difference between traditional Mara Ghaana (ಮರ ಗಾಣ) and factory oil?',
      a: 'Factory oils use high-speed metal expellers that heat up to 85°C and chemical solvents (Hexane) to squeeze extra yield, destroying vitamins and natural taste. Snigdha uses traditional wooden mortars rotating slowly at 14 RPM. The wood absorbs friction warmth so temperatures stay strictly below 38°C (room temperature). All natural aroma, enzymes, and nutrients remain 100% alive.'
    },
    {
      q: 'Why does Snigdha Coconut Oil (Thengina Enne) solidify or turn white in winter?',
      a: '100% pure virgin coconut oil naturally solidifies below 24°C into creamy white butter—this is physical proof of zero mineral oil or chemical adulteration. If solidified during winter in Bengaluru or Mysuru, simply place the glass bottle in warm water for 2 minutes.'
    },
    {
      q: 'Can we use Snigdha Groundnut Oil (Shenga Enne) for deep frying puris, bajjis, and dosas?',
      a: 'Yes! Snigdha Wood-Pressed Shenga Enne has a high natural smoke point of 225°C. It handles high-heat deep frying exceptionally well, giving you crispier bajjis and dosas with zero oily heaviness or heartburn.'
    },
    {
      q: 'Why do you add organic Palm Jaggery (Taati Bella) while pressing Sesame (Ellu) oil?',
      a: 'This is the authentic Karnataka Mara Ghaana tradition. Adding a small touch of organic Taati Bella (palm jaggery) during wood crushing rounds off natural seed bitterness, releases deeper nutty aromas, and acts as a natural antioxidant preservative.'
    },
    {
      q: 'Is Snigdha Virgin Oil safe for baby skin massage and hair application?',
      a: 'Yes, 100%. Because we use zero hexane chemicals, zero synthetic perfumes, and zero bleaching earth, Snigdha Virgin Thengina Enne and Ellu Enne are edible grade and safe for baby massage and hair care.'
    },
    {
      q: 'What are your delivery timelines across Karnataka?',
      a: 'We offer Free Express Courier Delivery across all pincodes on orders above ₹499. Orders are packed freshly from our Karnataka facility and delivered within 1 to 2 days across Bengaluru, Mysuru, Hubballi, and Mangaluru.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section" style={{ padding: '32px 0 40px', background: 'var(--bg-main)' }} aria-label="Frequently Asked Questions">
      <div className="container-luxe">
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1e4530', background: 'rgba(30,69,48,0.08)', borderRadius: '9999px' }}>
            <HelpCircle size={13} color="#1e4530" />
            <span>Complete Transparency</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: '8px 0', color: '#121e17' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#536158', fontSize: '13.5px', maxWidth: '520px', margin: '0 auto', lineHeight: '1.5' }}>
            Clear, honest answers about our wood pressing, winter solidification, cooking temperatures, and delivery.
          </p>
        </div>

        <div className="faq-list" style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                style={{
                  background: '#ffffff',
                  border: `1.5px solid ${isOpen ? 'var(--primary-emerald)' : 'var(--border-refined)'}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'all 0.25s var(--ease-spring)',
                  boxShadow: isOpen ? 'var(--shadow-card)' : 'var(--shadow-subtle)',
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '12px',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-forest-dark)', lineHeight: '1.4' }}>
                    {faq.q}
                  </span>
                  <div 
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s var(--ease-spring)',
                      color: isOpen ? 'var(--primary-emerald)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 20px 18px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.65', borderTop: '1px solid var(--border-ultra-light)', paddingTop: '12px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
