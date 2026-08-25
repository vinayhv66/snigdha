'use client';

import React, { useState } from 'react';
import { JewelryHeader } from '@/components/JewelryHeader';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Phone, Mail, MapPin, ShieldCheck, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="snigdha-app">
      <JewelryHeader />

      <main style={{ padding: '3.5rem 0 6rem', background: 'var(--bg-main)' }}>
        <div className="container-luxe" style={{ maxWidth: '980px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="luxe-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <MessageSquare size={14} color="var(--wood-brown)" />
              <span>We Are Here For You</span>
            </span>
            <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-forest-dark)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              Contact Snigdha Customer Care
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '600px', margin: '0 auto' }}>
              Have questions regarding our milling schedule, batch reports, bulk wholesale 5L tins, or family subscriptions? Reach out directly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'flex-start' }}>
            {/* Left Column: Direct Helplines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* WhatsApp Support Card */}
              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2rem', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--veg-green)', fontWeight: 800, fontSize: '0.86rem', marginBottom: '0.5rem' }}>
                  <Phone size={18} />
                  <span>WhatsApp & Call Support</span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-forest-dark)', fontFamily: 'Cormorant Garamond, serif' }}>
                  +91 98450 12492
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  Mon to Sat: 9:00 AM – 7:00 PM IST (Instant WhatsApp Assistance)
                </p>
              </div>

              {/* Email Support */}
              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2rem', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--wood-brown)', fontWeight: 800, fontSize: '0.86rem', marginBottom: '0.5rem' }}>
                  <Mail size={18} />
                  <span>Official Email Inquiries</span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-forest-dark)' }}>
                  care@snigdhaoils.com
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  For corporate gifting, bulk kitchen orders & harvest updates.
                </p>
              </div>

              {/* Facility & FSSAI */}
              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2rem', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-forest)', fontWeight: 800, fontSize: '0.86rem', marginBottom: '0.5rem' }}>
                  <MapPin size={18} />
                  <span>Pressing & Bottling Facility</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                  Snigdha Agro Naturals, Karnataka Western Ghats Cluster,<br />
                  Chamarajanagar Organic Belt, Karnataka – 571313, India.
                </div>
                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-ultra-light)', fontSize: '0.82rem', color: 'var(--primary-forest)', fontWeight: 700 }}>
                  <ShieldCheck size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  FSSAI Central Lic. No: 12423008000492
                </div>
              </div>
            </div>

            {/* Right Column: Send a Message Form */}
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2.5rem', boxShadow: 'var(--shadow-card)' }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-forest-dark)', marginBottom: '0.4rem' }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                We respond within 2 to 4 business hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={48} color="var(--veg-green)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-forest-dark)' }}>Thank you for reaching out!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Our Western Ghats care specialist will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-forest-dark)', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Ramesh Iyer"
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-refined)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-forest-dark)', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp Number *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. +91 98765 43210"
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-refined)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-forest-dark)', marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. ramesh@example.com"
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-refined)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-forest-dark)', marginBottom: '0.35rem' }}>
                      Your Query or Bulk Order Requirement *
                    </label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder="Tell us what you need..."
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-refined)', fontSize: '0.9rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-luxe-primary"
                    style={{ padding: '0.95rem 1.5rem', width: '100%', marginTop: '0.5rem' }}
                  >
                    <span>Send Message to Snigdha</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
