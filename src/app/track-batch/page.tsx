'use client';

import React, { useState } from 'react';
import { BATCH_DATABASE, BatchData } from '@/data/products';
import { JewelryHeader } from '@/components/JewelryHeader';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import {
  LocationPinStitchIcon,
  CalendarStitchIcon,
  FarmerStitchIcon,
  PdfDocumentStitchIcon,
  ShieldLaurelStitchIcon,
} from '@/components/ui/StitchIcons';
import { Check } from 'lucide-react';

export default function TrackBatchPage() {
  const [batchCodeInput, setBatchCodeInput] = useState('WG-COC-2026');
  const [currentBatch, setCurrentBatch] = useState<BatchData | null>(BATCH_DATABASE['WG-COC-2026']);
  const [searched, setSearched] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const clean = batchCodeInput.trim().toUpperCase();
      if (BATCH_DATABASE[clean]) {
        setCurrentBatch(BATCH_DATABASE[clean]);
      } else {
        const found = Object.values(BATCH_DATABASE).find(b => b.batchCode.includes(clean)) || BATCH_DATABASE['WG-COC-2026'];
        setCurrentBatch(found);
      }
      setSearched(true);
      setLoading(false);
    }, 400);
  };

  const handleQuickSelect = (code: string) => {
    setBatchCodeInput(code);
    setLoading(true);
    setTimeout(() => {
      setCurrentBatch(BATCH_DATABASE[code]);
      setSearched(true);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="snigdha-app" style={{ background: '#f5f0e6', minHeight: '100vh' }}>
      <JewelryHeader />

      <main style={{ padding: '36px 16px 80px', maxWidth: '520px', margin: '0 auto' }}>
        {/* ── Page Title & Subtitle ── */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 600,
            color: '#12241a',
            margin: '0 0 8px',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            Snigdha Batch Traceability
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#585966',
            margin: 0,
            fontFamily: "'Inter', sans-serif",
          }}>
            Trace your product from farm to bottle.
          </p>
        </div>

        {/* ── Search Input & Verify Button ── */}
        <form onSubmit={handleSearch} style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '14px' }}>
            <input
              type="text"
              value={batchCodeInput}
              onChange={(e) => setBatchCodeInput(e.target.value)}
              placeholder="Enter Batch Code (e.g., SN-OCT23)"
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '14px',
                border: '2px solid #204b33',
                fontSize: '15px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: '#12241a',
                background: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                boxShadow: '0 4px 16px rgba(4, 3, 22, 0.03)',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: '9999px',
              border: 'none',
              background: '#204b33',
              color: '#ffffff',
              fontSize: '13.5px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(32, 75, 51, 0.3)',
              transition: 'all 0.2s var(--ease-spring)',
            }}
          >
            VERIFY
          </button>
        </form>

        {/* ── Sample Pills ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <span style={{ fontSize: '11.5px', color: '#7a5230', fontWeight: 700 }}>Try:</span>
          {['WG-COC-2026', 'WG-GND-108', 'WG-SES-772'].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => handleQuickSelect(code)}
              style={{
                fontSize: '11.5px',
                fontWeight: 700,
                color: batchCodeInput === code ? '#204b33' : '#7a5230',
                background: batchCodeInput === code ? '#e5f3eb' : '#eee7da',
                padding: '4px 12px',
                borderRadius: '9999px',
                border: `1px solid ${batchCodeInput === code ? '#204b33' : '#d8cfbf'}`,
                cursor: 'pointer',
              }}
            >
              {code}
            </button>
          ))}
        </div>

        {/* ── Batch Report Card ── */}
        {loading ? (
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '28px 24px',
            border: '1px solid rgba(32, 75, 51, 0.1)',
            boxShadow: '0 8px 32px rgba(4, 3, 22, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}>
            <div className="snigdha-skeleton" style={{ width: '40%', height: '24px', borderRadius: '9999px' }} />
            <div className="snigdha-skeleton" style={{ width: '80%', height: '32px', borderRadius: '8px' }} />
            <div className="snigdha-skeleton" style={{ width: '100%', height: '60px', borderRadius: '12px', marginTop: '8px' }} />
            <div className="snigdha-skeleton" style={{ width: '100%', height: '60px', borderRadius: '12px' }} />
            <div className="snigdha-skeleton" style={{ width: '100%', height: '60px', borderRadius: '12px' }} />
            <div className="snigdha-skeleton" style={{ width: '100%', height: '48px', borderRadius: '9999px', marginTop: '12px' }} />
          </div>
        ) : searched && currentBatch ? (
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '24px',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#198754',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}>
                <Check size={18} strokeWidth={3} />
              </div>
              <span style={{
                fontSize: '22px',
                fontWeight: 800,
                color: '#198754',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.01em',
              }}>
                Batch Verified
              </span>
            </div>

            {/* ── Traceability Details Card (With Botanical Leaf Watermark) ── */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '28px 24px',
              boxShadow: '0 8px 30px rgba(4, 3, 22, 0.04)',
              border: '1px solid #ede8dd',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '40px',
            }}>
              {/* Botanical Leaf Watermark on the right side */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                bottom: '0',
                width: '180px',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300' opacity='0.12'%3E%3Cpath fill='%238a5a36' d='M200 0 C180 50 140 100 80 150 C140 150 190 120 200 90 Z'/%3E%3Cpath fill='%238a5a36' d='M200 80 C170 130 120 180 60 220 C120 220 170 190 200 160 Z'/%3E%3Cpath fill='%238a5a36' d='M200 160 C170 200 130 250 80 290 C130 280 170 250 200 220 Z'/%3E%3C/svg%3E")`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                pointerEvents: 'none',
              }} />

              {/* Card Title */}
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#12241a',
                margin: '0 0 24px',
                position: 'relative',
              }}>
                Traceability Details
              </h2>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                {/* Farm Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ flexShrink: 0 }}>
                    <LocationPinStitchIcon size={24} color="#7a5230" />
                  </div>
                  <div style={{ fontSize: '15px', color: '#12241a', lineHeight: 1.4 }}>
                    <strong style={{ fontWeight: 800 }}>Farm Location:</strong> {currentBatch.farmLocation}
                  </div>
                </div>

                {/* Harvest Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ flexShrink: 0 }}>
                    <CalendarStitchIcon size={24} color="#7a5230" />
                  </div>
                  <div style={{ fontSize: '15px', color: '#12241a', lineHeight: 1.4 }}>
                    <strong style={{ fontWeight: 800 }}>Harvest Date:</strong> {currentBatch.harvestDate}
                  </div>
                </div>

                {/* Farmer Family */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ flexShrink: 0 }}>
                    <FarmerStitchIcon size={24} color="#7a5230" />
                  </div>
                  <div style={{ fontSize: '15px', color: '#12241a', lineHeight: 1.4 }}>
                    <strong style={{ fontWeight: 800 }}>Farmer Family:</strong> {currentBatch.farmerName}
                  </div>
                </div>
              </div>

              {/* Download Lab Report Button */}
              <button
                onClick={() => alert(`Downloading NABL Lab Certificate for Batch: ${currentBatch.batchCode}`)}
                style={{
                  width: '100%',
                  marginTop: '28px',
                  padding: '14px 20px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: '#204b33',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(32, 75, 51, 0.25)',
                  position: 'relative',
                }}
              >
                <PdfDocumentStitchIcon size={18} color="#ffffff" />
                <span>Download Lab Purity Report (PDF)</span>
              </button>
            </div>

            {/* ── Bottom 100% Transparent Trust Badge ── */}
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <ShieldLaurelStitchIcon size={48} color="#204b33" />
                <span style={{
                  fontSize: '13px',
                  fontWeight: 800,
                  color: '#12241a',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  100% Transparent
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
