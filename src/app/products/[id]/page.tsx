'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { PRODUCTS, Product, ProductVariant } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { JewelryHeader } from '@/components/JewelryHeader';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Star, ShieldCheck, Sparkles, Droplet, Trees, Flame, Check, ArrowRight, Award, ChevronLeft, MapPin, Heart } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link href="/shop" style={{ color: 'var(--wood-brown)', textDecoration: 'underline', marginTop: '1rem', display: 'inline-block' }}>
          Back to Shop Catalog
        </Link>
      </div>
    );
  }

  return <ProductDetailContent product={product} />;
}

function ProductDetailContent({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [qty, setQty] = useState(1);
  const [isSubscribe, setIsSubscribe] = useState(false);

  const price = isSubscribe 
    ? Math.round(selectedVariant.price * 0.85) 
    : selectedVariant.price;

  const handleAdd = () => {
    addToCart(product, selectedVariant, qty);
  };

  return (
    <div className="snigdha-app">
      <JewelryHeader />

      <main style={{ padding: '2rem 0 6rem', background: 'var(--bg-main)' }}>
        <div className="container-luxe">
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/shop">Our Oils</Link>
            <span>/</span>
            <span style={{ color: 'var(--primary-forest-dark)', fontWeight: 700 }}>{product.name}</span>
          </div>

          {/* Product Showcase Grid (2-Column PDP) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '4rem', alignItems: 'flex-start', marginBottom: '5rem' }}>
            {/* Left Column: Contained Media Card */}
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '2.5rem', position: 'sticky', top: '100px', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '380px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--bg-subtle)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={340}
                  height={340}
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', padding: '1rem' }}
                  priority
                />
              </div>

              {/* Official Seals */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'var(--primary-forest-surface)', padding: '0.45rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-forest)' }}>
                  <Award size={15} />
                  <span>100% Organic Western Ghats</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'var(--bg-subtle)', padding: '0.45rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--veg-green)' }}>
                  <ShieldCheck size={15} />
                  <span>100% Vegetarian Dot</span>
                </div>
              </div>
            </div>

            {/* Right Column: PDP Conversion Funnel */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <span className="luxe-tag">{product.badge}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--gold-accent)', fontWeight: 700, fontSize: '0.88rem' }}>
                  <Star size={14} fill="currentColor" />
                  <span>{product.rating}</span>
                  <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>({product.reviewsCount} Verified Reviews)</span>
                </div>
              </div>

              <h1 style={{ fontSize: '2.6rem', color: 'var(--primary-forest-dark)', marginBottom: '0.4rem' }}>
                {product.name}
              </h1>

              <p style={{ fontSize: '1rem', color: 'var(--wood-brown)', fontWeight: 700, marginBottom: '1.25rem' }}>
                {product.subtitle}
              </p>

              <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                {product.longDesc}
              </p>

              {/* Volume Selection Pills */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--wood-brown)', marginBottom: '0.6rem' }}>
                  Select Net Bottle Volume:
                </label>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {product.variants.map((v) => (
                    <button
                      key={v.sku}
                      className={`volume-pill ${selectedVariant.sku === v.sku ? 'active' : ''}`}
                      onClick={() => setSelectedVariant(v)}
                      style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
                    >
                      {v.volume} — ₹{v.price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subscribe & Save Switcher (Hims/Anveshan Model) */}
              <div style={{ background: '#ffffff', border: '1.5px solid var(--border-refined)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2rem', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                  <button
                    onClick={() => setIsSubscribe(false)}
                    style={{
                      flex: 1,
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: `1.5px solid ${!isSubscribe ? 'var(--primary-forest)' : 'var(--border-ultra-light)'}`,
                      background: !isSubscribe ? 'var(--primary-forest-surface)' : '#ffffff',
                      color: !isSubscribe ? 'var(--primary-forest)' : 'var(--text-dark)',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                    }}
                  >
                    One-Time Purchase (₹{selectedVariant.price})
                  </button>

                  <button
                    onClick={() => setIsSubscribe(true)}
                    style={{
                      flex: 1,
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: `1.5px solid ${isSubscribe ? 'var(--primary-forest)' : 'var(--border-ultra-light)'}`,
                      background: isSubscribe ? 'var(--primary-forest-surface)' : '#ffffff',
                      color: isSubscribe ? 'var(--primary-forest)' : 'var(--text-dark)',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                    }}
                  >
                    ⚡ Subscribe & Save 15% (₹{Math.round(selectedVariant.price * 0.85)})
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-forest-dark)', fontFamily: 'Cormorant Garamond, serif' }}>
                    ₹{price * qty}
                  </span>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                    ₹{selectedVariant.originalPrice * qty}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--veg-green)', fontWeight: 800 }}>
                    {isSubscribe ? 'Includes 15% Monthly Subscriber Discount' : 'Standard Fresh Dispatch'}
                  </span>
                </div>
              </div>

              {/* Quantity & Buy Button */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
                <div className="qty-control" style={{ padding: '0.4rem 0.8rem' }}>
                  <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                  <span className="qty-num" style={{ fontSize: '1rem' }}>{qty}</span>
                  <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
                </div>

                <button 
                  className="btn-luxe-primary"
                  style={{ flex: 1, padding: '1rem 2rem', fontSize: '0.95rem' }}
                  onClick={handleAdd}
                >
                  <span>Add to Bag • ₹{price * qty}</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Trust Specs Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-ultra-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem' }}>
                  <Trees size={16} color="var(--wood-brown)" />
                  <span><strong>Extraction:</strong> {product.extractionMethod}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem' }}>
                  <Flame size={16} color="var(--gold-accent)" />
                  <span><strong>Smoke Point:</strong> {product.smokePoint.split(' ')[0]}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem' }}>
                  <MapPin size={16} color="var(--primary-forest)" />
                  <span><strong>Origin:</strong> {product.origin}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem' }}>
                  <ShieldCheck size={16} color="var(--veg-green)" />
                  <span><strong>FSSAI Lic:</strong> 12423008000492</span>
                </div>
              </div>
            </div>
          </div>

          {/* Label Nutrition Breakdown Table (Exact as on physical label) */}
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-refined)', padding: '3rem', marginBottom: '4rem', boxShadow: 'var(--shadow-subtle)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-forest-dark)', marginBottom: '0.5rem' }}>
              Official Nutritional Information (Per 100ml)
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Tested as per ICMR Guidelines. 100% pure, unrefined & free of synthetic additives. Serving size: 5ml (1 tsp).
            </p>

            <table className="nutrition-table" style={{ fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg-subtle)' }}>
                  <th style={{ padding: '0.8rem 1rem' }}>Nutrient</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Quantity per 100ml</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Nutrient</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Quantity per 100ml</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Energy</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>{product.nutrition.energyKcal} Kcal</td>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Dietary Fibre</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>0.00 g</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Protein</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>0.00 g</td>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Added Sugars</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>0.00 g</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Total Fat</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>{product.nutrition.totalFatG} g</td>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Lauric Acid</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>{product.nutrition.lauricAcidPct ? `${product.nutrition.lauricAcidPct}%` : 'Natural'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Saturated Fat</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>{product.nutrition.saturatedFatG} g</td>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Trans Fat</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>0.00 g (Zero)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Unsaturated Fat</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>{product.nutrition.unsaturatedFatG} g</td>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>Cholesterol</strong></td>
                  <td style={{ padding: '0.8rem 1rem' }}>0.00 g (Zero)</td>
                </tr>
              </tbody>
            </table>

            {/* Storage Advice */}
            <div style={{ marginTop: '2rem', background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-refined)' }}>
              <strong style={{ color: 'var(--wood-brown)', fontSize: '0.9rem' }}>Storage Instructions:</strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                {product.storageInstructions}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
