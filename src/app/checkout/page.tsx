'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { ShoppingBag, Trash2, ShieldCheck, HelpCircle, ArrowRight, Check } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useApp();
  
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNum: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const cartTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const securityBundleCost = cartTotal > 0 ? 29.99 : 0; // Simulate automatic Bitdefender discount offer
  const grandTotal = cartTotal + securityBundleCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      alert("Order submitted successfully! (Demo sandbox mode triggered)");
      clearCart();
      window.location.href = "/";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10 text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Shopping Cart & Checkout</h1>
        <p className="text-slate-500 text-sm">Review your technology hardware selections and configure checkout deployment credentials.</p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white border border-slate-100 rounded-2xl shadow-sm">
          <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500 text-lg">Your shopping cart is currently empty.</p>
          <Link href="/products" className="mt-4 inline-block px-6 py-3 bg-slate-950 text-white font-bold text-xs rounded-lg">
            Shop Hardware Catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Cart items or Address Form (8cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step progress bar */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-xs font-bold">
              <span className={`px-3 py-1 rounded-full ${step === 1 ? 'bg-red-600 text-white' : 'bg-emerald-500 text-white'}`}>
                1. Review Items
              </span>
              <span className="w-16 h-0.5 bg-slate-200" />
              <span className={`px-3 py-1 rounded-full ${step === 2 ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                2. Shipping & Security Details
              </span>
            </div>

            {step === 1 ? (
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm divide-y divide-slate-100">
                {cart.map(item => (
                  <div key={item.product.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-100">
                        <img src={item.product.image} alt={item.product.name} className="max-h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{item.product.name}</h4>
                        <span className="text-xs text-slate-400 uppercase tracking-wider">{item.product.category}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start">
                      <div className="flex items-center gap-2 border border-slate-200 rounded-lg p-1">
                        <button 
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 hover:bg-slate-50 text-slate-600 font-bold"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-slate-800 w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 hover:bg-slate-50 text-slate-600 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-extrabold text-slate-950">${item.product.price * item.quantity}</span>
                      
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-3 text-base">Contact & Security Delivery Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 block">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Alexis Carter"
                      className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 block">Email Address (central account)</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. alexis@secure.com"
                      className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 block">Shipping Address</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="e.g. 104 Security Parkway, Silicon Valley, CA"
                    className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm">Hardware Payment Details</h4>
                  
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 block">Credit Card Number</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.cardNum}
                      onChange={(e) => setFormData({...formData, cardNum: e.target.value})}
                      placeholder="e.g. 4111 2222 3333 4444"
                      className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 block">Expiration Date</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({...formData, cardExpiry: e.target.value})}
                        placeholder="MM/YY"
                        className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 block">CVC Security Code</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({...formData, cardCvc: e.target.value})}
                        placeholder="123"
                        className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 py-2.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs rounded-lg transition-colors shadow-md"
                  >
                    Authorize Order Processing
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right panel: Order Summary (5cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-3 text-base">Order Calculations</h3>
            
            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Hardware Subtotal</span>
                <span className="font-extrabold text-slate-950">${cartTotal}</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 bg-red-50/50 p-2.5 rounded-lg border border-red-500/10">
                <div className="flex items-center gap-1.5 text-red-600">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Bitdefender Bundle</span>
                    Total Security license (1yr / 5 devices)
                  </div>
                </div>
                <span className="font-extrabold text-slate-950 text-xs">${securityBundleCost}</span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-4 text-sm font-bold">
                <span>Total Amount Due</span>
                <span className="font-extrabold text-slate-950">${grandTotal}</span>
              </div>
            </div>

            {step === 1 && (
              <button 
                onClick={() => setStep(2)}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                Proceed to Checkout Details <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <div className="bg-slate-50 rounded-xl p-4 flex gap-3 text-[10px] text-slate-500 leading-relaxed border border-slate-200/60">
              <ShieldCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-700 block">End-to-End Secure Processing</span>
                Checkout forms are sandboxed and simulated client-side. No authentic personal data values are stored.
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
