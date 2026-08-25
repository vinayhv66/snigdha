'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductVariant } from '@/data/products';

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  updateQuantity: (productId: string, sku: string, quantity: number) => void;
  removeFromCart: (productId: string, sku: string) => void;
  clearCart: () => void;
  subtotal: number;
  discount: number;
  couponCode: string;
  applyCoupon: (code: string) => { success: boolean; message: string };
  freeShippingThreshold: number;
  shippingRemaining: number;
  total: number;
  totalCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountPct, setDiscountPct] = useState(0);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('snigdha_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem('snigdha_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
    setItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.variant.sku === variant.sku
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, variant, quantity }];
    });
    setIsOpen(true);
  };

  const updateQuantity = (productId: string, sku: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, sku);
      return;
    }
    setItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.variant.sku === sku) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId: string, sku: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.variant.sku === sku))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'PURE100' || clean === 'FIRST10') {
      setCouponCode(clean);
      setDiscountPct(10);
      return { success: true, message: '🎉 Coupon Applied! You get 10% Extra OFF!' };
    }
    if (clean === 'SNIGDHA15') {
      setCouponCode(clean);
      setDiscountPct(15);
      return { success: true, message: '🌿 Festive Harvest Offer! 15% OFF applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try PURE100 or FIRST10' };
  };

  const subtotal = items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
  const discount = Math.round((subtotal * discountPct) / 100);
  const freeShippingThreshold = 499;
  const shippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const total = subtotal - discount;
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
