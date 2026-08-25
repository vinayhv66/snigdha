'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product, ProductVariant } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShieldCheck, Droplet, Star, Check, Award } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product ? product.variants[1] || product.variants[0] : null
  );
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const currentVar = selectedVariant || product.variants[0];

  const handleAddToCart = () => {
    addToCart(product, currentVar, qty);
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close product preview">
          <X size={18} />
        </button>

        <div className="modal-product-grid">
          {/* Left Column: Image & Badges */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '100%', height: '320px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                src={product.image} 
                alt={product.name} 
                width={300}
                height={300}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Official Label Seals with Lucide Icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'var(--primary-forest-surface)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-pill)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-forest)' }}>
                <Award size={14} color="var(--primary-forest)" />
                <span>100% Organic</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'var(--bg-subtle)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-pill)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--veg-green)' }}>
                <ShieldCheck size={14} color="var(--veg-green)" />
                <span>100% Vegetarian</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Nutrition Sheet, and Buy Button */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span className="product-origin" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <Droplet size={12} /> {product.origin}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', color: 'var(--gold-accent)', fontWeight: 700, fontSize: '0.85rem' }}>
                <Star size={13} fill="currentColor" /> {product.rating}
              </span>
            </div>

            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.4rem', color: 'var(--primary-forest-dark)' }}>
              {product.name}
            </h2>

            <p style={{ fontSize: '0.9rem', color: 'var(--wood-brown)', fontWeight: 600, marginBottom: '0.8rem' }}>
              {product.subtitle}
            </p>

            <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
              {product.longDesc}
            </p>

            {/* Volume Selection */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-forest-dark)', marginBottom: '0.4rem' }}>
                Select Net Volume:
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.variants.map((v) => (
                  <button
                    key={v.sku}
                    className={`volume-pill ${currentVar.sku === v.sku ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(v)}
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                  >
                    {v.volume} - ₹{v.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.75rem' }}>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">
                  <Minus size={13} />
                </button>
                <span className="qty-num">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(qty + 1)} aria-label="Increase">
                  <Plus size={13} />
                </button>
              </div>

              <button 
                className="btn btn-primary"
                style={{ flexGrow: 1, padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                onClick={handleAddToCart}
              >
                <span>Add {qty} to Bag • ₹{currentVar.price * qty}</span>
              </button>
            </div>

            {/* Official Label Nutritional Information Table */}
            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-refined)', paddingTop: '1.2rem' }}>
              <h4 style={{ fontSize: '0.92rem', color: 'var(--wood-brown-dark)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Nutritional Information (Serving size: 5ml / 1 tsp)
              </h4>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-light)', marginBottom: '0.6rem' }}>
                *Nutrient values tested as per ICMR Guidelines. 100% pure & unrefined.
              </p>

              <table className="nutrition-table">
                <thead>
                  <tr>
                    <th>Nutrient</th>
                    <th>Qty / 100ml</th>
                    <th>Nutrient</th>
                    <th>Qty / 100ml</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Energy</td>
                    <td>{product.nutrition.energyKcal} Kcal</td>
                    <td>Dietary Fibre</td>
                    <td>0.00 g</td>
                  </tr>
                  <tr>
                    <td>Protein</td>
                    <td>0.00 g</td>
                    <td>Sugar</td>
                    <td>0.37 g</td>
                  </tr>
                  <tr>
                    <td>Total Fat</td>
                    <td>{product.nutrition.totalFatG} g</td>
                    <td>Lauric Acid</td>
                    <td>{product.nutrition.lauricAcidPct ? `${product.nutrition.lauricAcidPct}%` : 'Natural'}</td>
                  </tr>
                  <tr>
                    <td>Saturated Fat</td>
                    <td>{product.nutrition.saturatedFatG} g</td>
                    <td>Trans Fat</td>
                    <td>0.00 g</td>
                  </tr>
                  <tr>
                    <td>Unsaturated Fat</td>
                    <td>{product.nutrition.unsaturatedFatG} g</td>
                    <td>Cholesterol</td>
                    <td>0.00 g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Storage Instructions as on Label */}
            <div style={{ marginTop: '1.2rem', background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-refined)' }}>
              <strong style={{ fontSize: '0.82rem', color: 'var(--wood-brown)' }}>Storage Instructions:</strong>
              <p style={{ fontSize: '0.8rem', marginTop: '0.2rem', color: 'var(--text-muted)' }}>
                {product.storageInstructions}
              </p>
              <div style={{ fontSize: '0.76rem', color: 'var(--primary-forest)', fontWeight: 700, marginTop: '0.4rem' }}>
                ORIGIN OF COUNTRY: INDIA • FSSAI Lic No: 12423008000492
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
