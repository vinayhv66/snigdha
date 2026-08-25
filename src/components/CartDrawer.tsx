'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import confetti from 'canvas-confetti';
import { ShoppingBag, X, Plus, Minus, Trash2, CheckCircle2, ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discount,
    couponCode,
    applyCoupon,
    freeShippingThreshold,
    shippingRemaining,
    total,
    totalCount,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPincode, setCustomerPincode] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#244d36', '#8f5e39', '#108448', '#ffffff'],
      });
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      clearCart();
    }, 1500);
  };

  const shippingProgressPct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  if (!isOpen && !checkoutModalOpen) return null;

  return (
    <>
      {/* ── Slide-out Drawer Backdrop Overlay ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 30, 21, 0.65)',
          zIndex: 1000,
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.2s ease',
        }}
        onClick={closeCart}
      />

      {/* ── Fixed Slide-out Drawer Container ── */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '400px',
          background: '#ffffff',
          zIndex: 1010,
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-label="Shopping Bag"
      >
        {/* ── Top Header ── */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(18, 36, 26, 0.08)',
            background: '#f8f5ee',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShoppingBag size={18} color="#244d36" />
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#121e17',
              }}>
                Your Bag
              </span>
              <span style={{
                fontSize: '11px',
                fontWeight: 800,
                background: '#244d36',
                color: '#ffffff',
                padding: '2px 8px',
                borderRadius: '9999px',
              }}>
                {totalCount}
              </span>
            </div>

            <button
              onClick={closeCart}
              aria-label="Close bag"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#121e17',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* ── Free Express Shipping Meter ── */}
          <div style={{ padding: '12px 20px', background: '#ffffff', borderBottom: '1px solid rgba(18, 36, 26, 0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#121e17', marginBottom: '6px', fontWeight: 600 }}>
              <Truck size={14} color="#244d36" />
              {shippingRemaining > 0 ? (
                <span>Add <strong>₹{shippingRemaining}</strong> more for <strong>FREE Express Shipping</strong></span>
              ) : (
                <span style={{ color: '#108448', fontWeight: 700 }}>✓ You unlocked FREE Express Delivery!</span>
              )}
            </div>
            <div style={{ height: '4px', width: '100%', background: '#eee7da', borderRadius: '9999px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${shippingProgressPct}%`, background: '#244d36', borderRadius: '9999px', transition: 'width 0.3s ease' }} />
            </div>
          </div>
        </div>

        {/* ── Cart Items List (Scrollable) ── */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#536158' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#f8f5ee', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <ShoppingBag size={24} color="#7a4f2d" />
              </div>
              <h4 style={{ color: '#121e17', margin: '0 0 6px', fontSize: '1.1rem' }}>Your bag is empty</h4>
              <p style={{ fontSize: '13px', margin: '0 0 16px' }}>Add our cold wood-pressed oils to experience true purity.</p>
              <button
                onClick={closeCart}
                style={{
                  background: '#244d36',
                  color: '#ffffff',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant.sku}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr auto',
                  gap: '12px',
                  alignItems: 'center',
                  padding: '10px',
                  background: '#f8f5ee',
                  borderRadius: '12px',
                  border: '1px solid rgba(18, 36, 26, 0.06)',
                }}
              >
                {/* Thumbnail */}
                <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
                  <Image src={item.product.image} alt={item.product.name} fill style={{ objectFit: 'contain', padding: '4px' }} />
                </div>

                {/* Details */}
                <div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#121e17', lineHeight: 1.2 }}>
                    {item.product.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#7a4f2d', fontWeight: 600, marginTop: '2px' }}>
                    {item.variant.volume}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#121e17', marginTop: '3px' }}>
                    ₹{item.variant.price * item.quantity}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', borderRadius: '9999px', padding: '2px 6px', border: '1px solid #e0d8cc' }}>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.variant.sku, item.quantity - 1)}
                      style={{ padding: '2px', color: '#121e17', display: 'flex', alignItems: 'center' }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '12px', fontWeight: 800, minWidth: '14px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.variant.sku, item.quantity + 1)}
                      style={{ padding: '2px', color: '#121e17', display: 'flex', alignItems: 'center' }}
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id, item.variant.sku)}
                    style={{ fontSize: '10px', color: '#839188', cursor: 'pointer', background: 'none', border: 'none' }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── Bottom Checkout Section ── */}
        {items.length > 0 && (
          <div style={{
            padding: '16px 20px',
            borderTop: '1px solid rgba(18, 36, 26, 0.08)',
            background: '#ffffff',
          }}>
            {/* Coupon Code Row */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
              <input
                type="text"
                placeholder="Promo Code (e.g. PUREWOOD)"
                value={inputCoupon}
                onChange={(e) => setInputCoupon(e.target.value)}
                style={{
                  flex: 1,
                  padding: '7px 12px',
                  borderRadius: '9999px',
                  border: '1px solid #d8cfbf',
                  fontSize: '11.5px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#244d36',
                  color: '#ffffff',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 800,
                }}
              >
                Apply
              </button>
            </form>

            {couponFeedback && (
              <div style={{ fontSize: '11px', color: couponFeedback.success ? '#108448' : '#b3261e', marginBottom: '8px', fontWeight: 600 }}>
                {couponFeedback.message}
              </div>
            )}

            {/* Subtotal & Delivery */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#536158', marginBottom: '4px' }}>
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>

            {discount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#108448', marginBottom: '4px', fontWeight: 700 }}>
                <span>Discount ({couponCode}):</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#536158', marginBottom: '10px' }}>
              <span>Express Delivery:</span>
              <span style={{ color: '#108448', fontWeight: 700 }}>FREE</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 900, color: '#121e17', marginBottom: '14px', borderTop: '1px solid #eee7da', paddingTop: '8px' }}>
              <span>Total Payable:</span>
              <span>₹{total}</span>
            </div>

            {/* Checkout Trigger */}
            <button
              onClick={() => setCheckoutModalOpen(true)}
              style={{
                width: '100%',
                background: '#244d36',
                color: '#ffffff',
                padding: '13px',
                borderRadius: '9999px',
                fontSize: '12.5px',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(36, 77, 54, 0.25)',
              }}
            >
              <span>Proceed to Express Checkout</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </aside>

      {/* ── 1-Click Express Checkout Modal ── */}
      {checkoutModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 30, 21, 0.75)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            maxWidth: '440px',
            width: '100%',
            padding: '24px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
            position: 'relative',
          }}>
            <button
              onClick={() => { setCheckoutModalOpen(false); setOrderComplete(false); }}
              style={{ position: 'absolute', top: '16px', right: '16px', color: '#121e17' }}
            >
              <X size={20} />
            </button>

            {orderComplete ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#eaf5ee', color: '#108448', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#121e17', marginBottom: '6px' }}>Order Confirmed!</h3>
                <p style={{ fontSize: '13px', color: '#536158', marginBottom: '16px' }}>
                  Thank you, <strong>{customerName || 'Valued Patron'}</strong>! Your wood-pressed oils are being freshly packed in Tiptur and will dispatch within 24h.
                </p>
                <div style={{ background: '#f8f5ee', padding: '10px', borderRadius: '10px', fontSize: '12px', color: '#121e17', fontWeight: 700, marginBottom: '16px' }}>
                  Total Paid: ₹{total} (Cash on Delivery / UPI on Delivery)
                </div>
                <button
                  onClick={() => { setCheckoutModalOpen(false); closeCart(); }}
                  style={{ background: '#244d36', color: '#ffffff', padding: '10px 24px', borderRadius: '9999px', fontWeight: 800, fontSize: '12px' }}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit}>
                <h3 style={{ fontSize: '1.3rem', color: '#121e17', marginBottom: '4px' }}>Fast Express Delivery</h3>
                <p style={{ fontSize: '12px', color: '#536158', marginBottom: '16px' }}>Enter delivery details for 1-2 day delivery across Karnataka.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #d8cfbf', fontSize: '13px', outline: 'none' }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (for WhatsApp delivery updates)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #d8cfbf', fontSize: '13px', outline: 'none' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Delivery Street Address"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #d8cfbf', fontSize: '13px', outline: 'none' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Karnataka PIN Code (e.g. 560001)"
                    value={customerPincode}
                    onChange={(e) => setCustomerPincode(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #d8cfbf', fontSize: '13px', outline: 'none' }}
                  />
                </div>

                <div style={{ background: '#f8f5ee', padding: '10px 14px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 800, marginBottom: '16px' }}>
                  <span>Total Amount:</span>
                  <span>₹{total}</span>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#244d36',
                    color: '#ffffff',
                    padding: '12px',
                    borderRadius: '9999px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 16px rgba(36, 77, 54, 0.25)',
                  }}
                >
                  Place Order • Pay on Delivery
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};
