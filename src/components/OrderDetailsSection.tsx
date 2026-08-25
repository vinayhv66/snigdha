'use client';

import React, { useState } from 'react';
import { Truck, ShieldCheck, Clock, FileText, CheckCircle2, Search, ArrowRight, PackageCheck } from 'lucide-react';
import { WoodenMillIcon, PdfDocumentStitchIcon } from '@/components/ui/StitchIcons';

export const OrderDetailsSection: React.FC = () => {
  const [trackingInput, setTrackingInput] = useState('');
  const [trackedStatus, setTrackedStatus] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingInput.trim()) return;
    setTrackedStatus(`Order #${trackingInput.toUpperCase()} • Status: Dispatched from Tiptur Wooden Mill via BlueDart Express (Expected Delivery: Tomorrow, by 5:00 PM). Live WhatsApp updates active.`);
  };

  const details = [
    {
      icon: <Clock size={20} color="#244d36" />,
      badge: '24-48 HR PRESSING',
      title: 'Freshly Pressed On Order',
      desc: 'Extracted in small farmer-owned wooden mills within 48 hours of your dispatch. Never stored in bulk plastic silos.',
    },
    {
      icon: <ShieldCheck size={20} color="#108448" />,
      badge: 'ZERO-PLASTIC GLASS',
      title: 'Cushioned Glass Packaging',
      desc: 'Heavy-grade dark glass bottles protected by 5-ply honeycomb corrugated padding. 100% free instant replacement if damaged.',
    },
    {
      icon: <Truck size={20} color="#7a4f2d" />,
      badge: 'EXPRESS DISPATCH',
      title: 'Karnataka & Pan-India Timelines',
      desc: 'Bengaluru & Mysuru: 24–48 Hours. Rest of Karnataka: 2–3 Days. Free delivery over ₹499 with COD & UPI accepted.',
    },
    {
      icon: <FileText size={20} color="#244d36" />,
      badge: 'PRINTED IN BOX',
      title: 'Physical Batch Certificate',
      desc: 'Each package includes a printed authenticity card showing the farmer family, village, and certified 0% adulteration lab test.',
    },
  ];

  return (
    <section
      id="order-details"
      aria-label="Order and Delivery Details"
      style={{
        padding: '32px 16px 24px',
        maxWidth: '1160px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{
          display: 'inline-block',
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#244d36',
          background: '#e8f4ed',
          padding: '4px 14px',
          borderRadius: '9999px',
          marginBottom: '8px',
        }}>
          TRANSPARENT FULFILLMENT
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.8rem, 4.5vw, 2.4rem)',
          fontWeight: 700,
          color: '#121e17',
          lineHeight: 1.2,
          margin: 0,
        }}>
          Order &amp; Delivery Details
        </h2>
        <p style={{ color: '#536158', fontSize: '13.5px', maxWidth: '520px', margin: '6px auto 0' }}>
          From authentic wooden extraction at our Tiptur farms to zero-leak delivery in your kitchen.
        </p>
      </div>

      {/* 4 Detail Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {details.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '18px 16px',
              border: '1px solid rgba(18, 36, 26, 0.08)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#f6f2e9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {item.icon}
                </div>
                <span style={{
                  fontSize: '9.5px',
                  fontWeight: 800,
                  color: '#7a4f2d',
                  background: '#f8f5ee',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  letterSpacing: '0.04em',
                }}>
                  {item.badge}
                </span>
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '18px',
                fontWeight: 700,
                color: '#121e17',
                marginBottom: '6px',
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '12.5px', color: '#536158', lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Live Order Tracker Bar */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid rgba(18, 36, 26, 0.08)',
        padding: '16px 20px',
        maxWidth: '680px',
        margin: '0 auto',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <PackageCheck size={18} color="#108448" />
          <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#121e17', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Track Existing Dispatch Status
          </span>
        </div>

        <form onSubmit={handleTrack} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Enter Order ID (e.g. SNG-8492) or Phone"
            value={trackingInput}
            onChange={(e) => setTrackingInput(e.target.value)}
            style={{
              flex: '1 1 220px',
              padding: '10px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(18, 36, 26, 0.15)',
              fontSize: '13px',
              fontFamily: 'inherit',
            }}
          />
          <button
            type="submit"
            style={{
              background: '#244d36',
              color: '#ffffff',
              padding: '10px 18px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <span>Track Order</span>
            <ArrowRight size={14} />
          </button>
        </form>

        {trackedStatus && (
          <div style={{
            marginTop: '12px',
            padding: '10px 14px',
            background: '#f2f8f4',
            border: '1px solid rgba(16, 132, 72, 0.2)',
            borderRadius: '10px',
            fontSize: '12px',
            color: '#12241a',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
          }}>
            <CheckCircle2 size={16} color="#108448" style={{ marginTop: '2px', flexShrink: 0 }} />
            <span>{trackedStatus}</span>
          </div>
        )}
      </div>
    </section>
  );
};
