'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/mockData';

interface CartItem {
  product: Product;
  quantity: number;
}

interface AppContextType {
  cart: CartItem[];
  wishlist: string[];
  compareList: string[];
  activeExperience: 'shop' | 'security';
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  toggleCompare: (productId: string) => void;
  clearCart: () => void;
  setExperience: (exp: 'shop' | 'security') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [activeExperience, setActiveExperience] = useState<'shop' | 'security'>('shop');

  // Sync state from client storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tech_cart');
    const savedWishlist = localStorage.getItem('tech_wishlist');
    const savedCompare = localStorage.getItem('tech_compare');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedCompare) setCompareList(JSON.parse(savedCompare));
  }, []);

  // Persist state updates
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('tech_cart', JSON.stringify(newCart));
  };

  const saveWishlist = (newWishlist: string[]) => {
    setWishlist(newWishlist);
    localStorage.setItem('tech_wishlist', JSON.stringify(newWishlist));
  };

  const saveCompare = (newCompare: string[]) => {
    setCompareList(newCompare);
    localStorage.setItem('tech_compare', JSON.stringify(newCompare));
  };

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.product.id === product.id);
    if (existing) {
      saveCart(cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      saveCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    saveCart(cart.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart(cart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const toggleWishlist = (productId: string) => {
    if (wishlist.includes(productId)) {
      saveWishlist(wishlist.filter(id => id !== productId));
    } else {
      saveWishlist([...wishlist, productId]);
    }
  };

  const toggleCompare = (productId: string) => {
    if (compareList.includes(productId)) {
      saveCompare(compareList.filter(id => id !== productId));
    } else {
      if (compareList.length >= 4) {
        alert("You can compare up to 4 products at once.");
        return;
      }
      saveCompare([...compareList, productId]);
    }
  };

  const clearCart = () => {
    saveCart([]);
  };

  const setExperience = (exp: 'shop' | 'security') => {
    setActiveExperience(exp);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        compareList,
        activeExperience,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleWishlist,
        toggleCompare,
        clearCart,
        setExperience,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
