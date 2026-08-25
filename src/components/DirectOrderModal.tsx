'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { X, CheckCircle2, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

interface DirectOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectOrderModal: React.FC<DirectOrderModalProps> = ({ isOpen, onClose }) => {
  const { addToCart, openCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]); // Default Coconut Oil
  const [selectedVolume, setSelectedVolume] = useState<'500ml' | '1000ml'>('1000ml');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi'>('upi');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const selectedVariant = selectedProduct?.variants?.find(
    (v) => v.volume.toLowerCase() === selectedVolume.toLowerCase()
  ) || selectedProduct?.variants?.[0];

  const currentPrice = selectedVariant?.price || 649;
  const originalPrice = selectedVariant?.originalPrice || 799;
  const totalPrice = currentPrice * quantity;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert('Please fill in your name, phone number, and address to place your order.');
      return;
    }
    // Simulate order placement
    setOrderPlaced(true);
  };

  const handleWhatsAppQuickOrder = () => {
    const msg = `Hi Snigdha! I want to directly order:
Product: ${selectedProduct.name} (${selectedVolume})
Quantity: ${quantity}
Total: ₹${totalPrice}
Name: ${name || 'Customer'}
Phone: ${phone || 'N/A'}
Address: ${address || 'Please prompt for address'}`;
    window.open(`https://wa.me/919845012492?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(15, 30, 21, 0.65)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        maxWidth: '460px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
        border: '1px solid rgba(0,0,0,0.08)',
        position: 'relative',
        animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid rgba(18, 36, 26, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#fcfaf6',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              background: '#244d36',
              color: '#ffffff',
              fontSize: '10.5px',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '9999px',
              letterSpacing: '0.06em',
            }}>
              ⚡ DIRECT 1-CLICK ORDER
            </span>
          </div>
          <button onClick={onClose} style={{ color: '#536158', padding: '4px', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {orderPlaced ? (
          /* Confirmation Screen */
          <div style={{ padding: '36px 24px', textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#e7f7ed',
              color: '#108448',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', color: '#121e17', marginBottom: '8px' }}>
              Order Confirmed!
            </h3>
            <p style={{ fontSize: '13px', color: '#536158', marginBottom: '20px' }}>
              Thank you, <strong>{name}</strong>! Your freshly pressed oil is being prepared for dispatch from Tiptur. We will send live tracking updates to <strong>{phone}</strong>.
            </p>
            <div style={{
              background: '#f8f5ee',
              padding: '14px',
              borderRadius: '12px',
              textAlign: 'left',
              fontSize: '12px',
              marginBottom: '20px',
            }}>
              <div style={{ fontWeight: 700, color: '#121e17', marginBottom: '4px' }}>
                {selectedProduct.name} ({selectedVolume}) x {quantity}
              </div>
              <div style={{ color: '#536158' }}>Total Payable: <strong>₹{totalPrice}</strong> ({paymentMethod === 'cod' ? 'Cash on Delivery' : 'Instant UPI'})</div>
              <div style={{ color: '#536158', marginTop: '4px' }}>Delivery Address: {address}</div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: '100%',
                background: '#244d36',
                color: '#ffffff',
                padding: '12px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Done
            </button>
          </div>
        ) : (
          /* Order Form */
          <form onSubmit={handlePlaceOrder} style={{ padding: '20px' }}>
            {/* Product Selector Bar */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#536158', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                1. Select Pure Wood-Pressed Oil
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {PRODUCTS.slice(0, 3).map((p) => {
                  const isSelected = selectedProduct.id === p.id;
                  const price1L = p.variants?.find(v => v.volume === '1000ml')?.price || 649;
                  return (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setSelectedProduct(p)}
                      style={{
                        border: isSelected ? '2px solid #244d36' : '1px solid rgba(0,0,0,0.1)',
                        background: isSelected ? '#f2f8f4' : '#fafafa',
                        borderRadius: '12px',
                        padding: '8px 4px',
                        textAlign: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ position: 'relative', width: '38px', height: '38px', margin: '0 auto 4px' }}>
                        <Image src={p.image} alt={p.name} fill style={{ objectFit: 'contain' }} sizes="38px" />
                      </div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#121e17', lineHeight: 1.2 }}>
                        {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
                      </div>
                      <div style={{ fontSize: '10px', color: '#7a4f2d', fontWeight: 600 }}>
                        ₹{price1L}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Volume & Quantity Selection */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#536158', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  2. Bottle Size
                </label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {(['500ml', '1000ml'] as const).map((vol) => {
                    const isSelected = selectedVolume === vol;
                    return (
                      <button
                        type="button"
                        key={vol}
                        onClick={() => setSelectedVolume(vol)}
                        style={{
                          background: isSelected ? '#244d36' : '#ffffff',
                          color: isSelected ? '#ffffff' : '#121e17',
                          border: isSelected ? '1.5px solid #244d36' : '1px solid rgba(0,0,0,0.15)',
                          borderRadius: '9999px',
                          padding: '6px 12px',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        {vol === '500ml' ? '500 ml' : '1000 ml'}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#536158', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Quantity
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid rgba(0,0,0,0.15)',
                  borderRadius: '9999px',
                  padding: '2px',
                  background: '#ffffff',
                }}>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#121e17' }}
                  >
                    −
                  </button>
                  <span style={{ fontSize: '12px', fontWeight: 800, padding: '0 8px' }}>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#121e17' }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Delivery Details */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#536158', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                3. Delivery Details
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.15)',
                    fontSize: '13px',
                    fontFamily: 'inherit',
                  }}
                />
                <input
                  type="tel"
                  placeholder="Mobile / WhatsApp Number *"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.15)',
                    fontSize: '13px',
                    fontFamily: 'inherit',
                  }}
                />
                <textarea
                  placeholder="Delivery Address (House/Flat, Street, Area, City, Pincode) *"
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.15)',
                    fontSize: '13px',
                    fontFamily: 'inherit',
                    resize: 'none',
                  }}
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#536158', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                4. Payment Mode
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  style={{
                    border: paymentMethod === 'upi' ? '2px solid #244d36' : '1px solid rgba(0,0,0,0.12)',
                    background: paymentMethod === 'upi' ? '#f2f8f4' : '#ffffff',
                    borderRadius: '10px',
                    padding: '8px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: '#121e17',
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  ⚡ UPI / GPay / PhonePe
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  style={{
                    border: paymentMethod === 'cod' ? '2px solid #244d36' : '1px solid rgba(0,0,0,0.12)',
                    background: paymentMethod === 'cod' ? '#f2f8f4' : '#ffffff',
                    borderRadius: '10px',
                    padding: '8px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: '#121e17',
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  📦 Cash on Delivery (COD)
                </button>
              </div>
            </div>

            {/* Summary & Place Order Button */}
            <div style={{
              background: '#fcfaf6',
              border: '1px solid rgba(18, 36, 26, 0.08)',
              borderRadius: '14px',
              padding: '12px 16px',
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: '11px', color: '#536158' }}>Total Amount (Free Shipping):</div>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#121e17' }}>
                  ₹{totalPrice}{' '}
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#839188', textDecoration: 'line-through' }}>
                    ₹{originalPrice * quantity}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#108448', fontWeight: 700 }}>
                <Truck size={14} />
                <span>Express Dispatch</span>
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: '#244d36',
                color: '#ffffff',
                padding: '14px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                boxShadow: '0 4px 16px rgba(36, 77, 54, 0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '10px',
              }}
            >
              <span>CONFIRM &amp; PLACE DIRECT ORDER (₹{totalPrice})</span>
              <ArrowRight size={16} />
            </button>

            {/* Alternative 1-Tap WhatsApp Order */}
            <button
              type="button"
              onClick={handleWhatsAppQuickOrder}
              style={{
                width: '100%',
                background: '#e7f7ed',
                color: '#108448',
                padding: '10px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '12px',
                border: '1px solid rgba(16, 132, 72, 0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <MessageCircle size={15} />
              <span>Or Order in 1-Click via WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
