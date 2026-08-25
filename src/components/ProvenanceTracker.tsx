'use client';

import React, { useState } from 'react';
import { BATCH_DATABASE, BatchData } from '@/data/products';
import { Search, CheckCircle2, MapPin, Calendar, Thermometer, ShieldCheck, Award, Droplet } from 'lucide-react';

export const ProvenanceTracker: React.FC = () => {
  const [inputCode, setInputCode] = useState('WG-COC-2026');
  const [searchedBatch, setSearchedBatch] = useState<BatchData | null>(BATCH_DATABASE['WG-COC-2026']);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLookup = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = inputCode.trim().toUpperCase();
    if (BATCH_DATABASE[clean]) {
      setSearchedBatch(BATCH_DATABASE[clean]);
      setErrorMsg('');
    } else {
      setErrorMsg(`Batch "${clean}" not found in current harvest registry. Try sample batch: WG-COC-2026, WG-GND-108, or WG-SES-772`);
    }
  };

  const setSampleBatch = (code: string) => {
    setInputCode(code);
    setSearchedBatch(BATCH_DATABASE[code]);
    setErrorMsg('');
  };

  return (
    <section id="provenance" className="provenance-section" aria-label="Farm-to-Bottle Traceability">
      <div className="container-luxe">
        <div className="batch-card-sleek">
          {/* Left Column: Story & Western Ghats Mission */}
          <div>
            <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={14} color="var(--wood-brown)" />
              <span>100% Transparent Sourcing</span>
            </span>
            
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: 'var(--primary-forest-dark)' }}>
              From Western Ghats Soil <br />
              <span style={{ color: 'var(--wood-brown)', fontStyle: 'italic' }}>Direct to Your Kitchen</span>
            </h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              We partner directly with smallholder farming families across the pristine Western Ghats biosphere. Every seed and copra is sustainably cultivated, sun-dried without toxic fumigants, and crushed in traditional Vaagai wood churners.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div>
                <h4 style={{ color: 'var(--primary-forest)', fontSize: '1.6rem', fontWeight: 800 }}>100%</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Direct Fair-Trade to Farmers</p>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-refined)', paddingLeft: '1.5rem' }}>
                <h4 style={{ color: 'var(--wood-brown)', fontSize: '1.6rem', fontWeight: 800 }}>&lt; 38°C</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Room Temperature Crushing</p>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-refined)', paddingLeft: '1.5rem' }}>
                <h4 style={{ color: 'var(--gold-accent)', fontSize: '1.6rem', fontWeight: 800 }}>0%</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Hexane / Chemical Solvents</p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Batch Authenticator */}
          <div className="batch-tracker-box">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-forest-dark)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={18} color="var(--primary-forest)" />
              <span>Farm-to-Bottle Authenticator</span>
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Check your bottle’s label for the Batch code or select a verified batch below:
            </p>

            {/* Sample Batch Selection with Lucide Icons */}
            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.8rem', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={() => setSampleBatch('WG-COC-2026')}
                style={{ fontSize: '0.78rem', background: 'var(--bg-main)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-refined)', color: 'var(--primary-forest)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <Droplet size={12} /> WG-COC-2026 (Coconut)
              </button>
              <button 
                type="button" 
                onClick={() => setSampleBatch('WG-GND-108')}
                style={{ fontSize: '0.78rem', background: 'var(--bg-main)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-refined)', color: 'var(--wood-brown)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <Droplet size={12} /> WG-GND-108 (Groundnut)
              </button>
              <button 
                type="button" 
                onClick={() => setSampleBatch('WG-SES-772')}
                style={{ fontSize: '0.78rem', background: 'var(--bg-main)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-refined)', color: 'var(--gold-accent)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <Droplet size={12} /> WG-SES-772 (Sesame)
              </button>
            </div>

            {/* Search Input Form */}
            <form onSubmit={handleLookup} className="batch-input-row" style={{ marginTop: '1.2rem' }}>
              <input
                type="text"
                className="batch-input"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Enter Batch No. (e.g. WG-COC-2026)"
                aria-label="Batch Code"
              />
              <button type="submit" className="btn btn-wood" style={{ padding: '0.85rem 1.4rem' }}>
                Verify
              </button>
            </form>

            {errorMsg && (
              <p style={{ color: '#c94436', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: 600 }}>
                {errorMsg}
              </p>
            )}

            {/* Verified Batch Certificate Box */}
            {searchedBatch && (
              <div className="batch-result-display active" style={{ marginTop: '1.5rem', background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid var(--border-green)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-ultra-light)', paddingBottom: '0.6rem', marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 800, color: 'var(--primary-forest)', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--veg-green)" />
                    <span>AUTHENTIC BATCH: {searchedBatch.batchCode}</span>
                  </span>
                  <span style={{ fontSize: '0.75rem', background: 'var(--primary-forest-surface)', color: 'var(--primary-forest)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-pill)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Award size={12} /> NABL Verified
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
                  <div>
                    <strong style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.15rem' }}>
                      <MapPin size={13} color="var(--wood-brown)" /> Farmer Partner:
                    </strong>
                    <span style={{ color: 'var(--text-muted)' }}>{searchedBatch.farmerName}</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.15rem' }}>
                      <Calendar size={13} color="var(--wood-brown)" /> Pressing Date:
                    </strong>
                    <span style={{ color: 'var(--text-muted)' }}>{searchedBatch.pressingDate}</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.15rem' }}>
                      <Thermometer size={13} color="var(--primary-forest)" /> Extraction Temp:
                    </strong>
                    <span style={{ color: 'var(--primary-forest)', fontWeight: 700 }}>{searchedBatch.pressingTemp}</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.15rem' }}>
                      <ShieldCheck size={13} color="var(--gold-accent)" /> Lab Purity:
                    </strong>
                    <span style={{ color: 'var(--gold-accent)', fontWeight: 700 }}>{searchedBatch.purityPct}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
