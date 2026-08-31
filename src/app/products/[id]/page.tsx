'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { PRODUCTS } from '@/data/mockData';
import { 
  ShoppingBag, Heart, Star, ShieldCheck, CheckCircle2, 
  ArrowLeft, ArrowRight, Laptop, Phone, HelpCircle 
} from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { addToCart, toggleWishlist, wishlist } = useApp();
  
  const product = PRODUCTS.find(p => p.id === resolvedParams.id);
  if (!product) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<'specs' | 'features'>('specs');
  const isWishlisted = wishlist.includes(product.id);

  // Cross sell items
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Back button */}
      <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Store
      </Link>

      {/* Main product configuration view */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Left Side: Image Gallery */}
        <div className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl p-8 flex items-center justify-center h-[420px] shadow-sm relative overflow-hidden">
          <img src={product.image} alt={product.name} className="max-h-full object-contain" />
          <button 
            onClick={() => toggleWishlist(product.id)}
            className="absolute top-6 right-6 p-3 bg-slate-50 hover:bg-slate-100 rounded-full shadow-md text-slate-500 hover:text-red-600 transition-colors"
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs text-red-600 uppercase tracking-widest font-bold">{product.category}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1 mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center text-amber-500"><Star className="w-4.5 h-4.5 fill-current" /> <span className="text-sm font-bold ml-1 text-slate-700">{product.rating}</span></div>
              <span className="h-4 w-px bg-slate-200" />
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">In Stock</span>
            </div>
          </div>

          <div className="text-3xl font-extrabold text-slate-950">${product.price}</div>
          <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 min-w-[180px] py-3.5 bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              Add to Cart <ShoppingBag className="w-4 h-4" />
            </button>
            <Link
              href="/checkout"
              onClick={() => addToCart(product)}
              className="flex-1 min-w-[180px] py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-center"
            >
              Buy Now
            </Link>
          </div>

          {/* Specs & Features Tab switcher */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="flex border-b border-slate-100">
              <button 
                onClick={() => setActiveTab('specs')}
                className={`pb-3 text-sm font-bold border-b-2 px-4 transition-colors ${activeTab === 'specs' ? 'border-red-600 text-red-600' : 'border-transparent text-slate-400'}`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setActiveTab('features')}
                className={`pb-3 text-sm font-bold border-b-2 px-4 transition-colors ${activeTab === 'features' ? 'border-red-600 text-red-600' : 'border-transparent text-slate-400'}`}
              >
                Features
              </button>
            </div>

            <div>
              {activeTab === 'specs' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="p-3.5 bg-slate-50 rounded-xl">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{key}</div>
                      <div className="text-xs font-bold text-slate-800">{val}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* SECURITY RECOMMENDATIONS BENTO CARD */}
      <section className="mb-16 bg-slate-950 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-slate-800 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-[#1e0404] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="p-3 bg-red-500/10 text-red-500 rounded-xl w-fit mb-4 border border-red-500/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-3">Security Recommended For This Device</h2>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Modern microprocessors and operating systems require dedicated hardware-level firewall layers. Ensure your active setup processes follow best security standards.
            </p>
            <Link 
              href="/bitdefender#plans" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-white transition-colors"
            >
              Get Shield Software Protection Suite <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="font-bold text-sm text-slate-200 mb-4">Recommended Hardening Steps</h3>
            <ul className="space-y-4">
              {product.securityRecs.map((rec, index) => (
                <li key={index} className="flex gap-3 text-xs text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center flex-shrink-0 font-bold text-[10px]">{index + 1}</span>
                  <span className="leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended Products List */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h4 className="text-xl font-extrabold text-slate-950 tracking-tight">Recommended Products</h4>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">Explore similar high-performance devices crafted for your workflow.</p>
          </div>
          <Link href="/products" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1">
            View All Store <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map(prod => (
            <div key={prod.id} className="bg-white border border-slate-150 hover:border-slate-300 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <Link href={`/products/${prod.id}`} className="bg-slate-50 rounded-xl p-4 flex items-center justify-center h-40 mb-3 block">
                  <img src={prod.image} alt={prod.name} className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <span className="text-[10px] text-red-600 uppercase tracking-wider font-extrabold">{prod.category}</span>
                <Link href={`/products/${prod.id}`} className="block">
                  <h5 className="font-extrabold text-sm text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-1">{prod.name}</h5>
                </Link>
                <p className="text-xs text-slate-500 font-medium line-clamp-2 mb-3 leading-relaxed">
                  {prod.description}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-950">${prod.price}</span>
                  <button
                    onClick={() => addToCart(prod)}
                    className="p-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-xl text-slate-800 hover:text-red-600 transition-colors"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                </div>
                <Link 
                  href="/checkout"
                  onClick={() => addToCart(prod)}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
