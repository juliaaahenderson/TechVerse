'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { PRODUCTS, Product } from '@/data/mockData';
import { 
  ArrowRight, ShieldCheck, Star, ShoppingBag, Eye, Heart, 
  Laptop, Phone, Headphones, Watch, CheckCircle2, ChevronRight 
} from 'lucide-react';

export default function Home() {
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const [selectedExperience, setSelectedExperience] = useState<'work' | 'gaming' | 'entertainment' | 'travel'>('work');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Spotlight Product selection
  const spotlightProduct = PRODUCTS[1]; // Zephyrus G14
  const horizontalProducts = PRODUCTS.filter(p => p.id !== spotlightProduct.id);

  // Experience mapping
  const experienceData = {
    work: {
      title: "Work & High-Productivity",
      desc: "Optimized for seamless multitasking, software compilation, and spreadsheet architecture.",
      products: PRODUCTS.filter(p => p.category === 'Laptops' || p.id === 'sony-wh1000xm5'),
      bg: "bg-slate-900 text-white"
    },
    gaming: {
      title: "Hardcore Gaming & AI Simulation",
      desc: "Ultra-fast frame rates, liquid metal cooling systems, and advanced hardware processing power.",
      products: PRODUCTS.filter(p => p.id === 'rog-zephyrus-g14' || p.id === 'sony-wh1000xm5'),
      bg: "bg-red-950 text-white"
    },
    entertainment: {
      title: "Cinematic & Audio Entertainment",
      desc: "Premium OLED displays paired with intelligent ANC spatial noise cancellation.",
      products: PRODUCTS.filter(p => p.category === 'Headphones' || p.category === 'Smartphones'),
      bg: "bg-indigo-950 text-white"
    },
    travel: {
      title: "On-The-Go & Urban Travel",
      desc: "Lightweight, massive battery capacity, and rugged titanium cases to survive extreme elements.",
      products: PRODUCTS.filter(p => p.category === 'Smartwatches' || p.id === 'macbook-air-m3'),
      bg: "bg-emerald-950 text-white"
    }
  };

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO - Editorial Composition */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-white pt-12 pb-24 px-6 overflow-hidden">
        {/* Full-width Background Image (Original Color) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Futuristic Tech Shield Showcase.jpeg" 
            alt="Futuristic Tech Shield Showcase" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay only at the very edges to blend with layout and cyber-grid */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/10" />
          <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Hero Left Content - Rendered directly over background */}
          <div className="max-w-2xl flex flex-col items-start text-left">

            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Tech You Love. <br />
              <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Protection You Trust.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-300 mb-8 leading-relaxed"
            >
              Discover elite performance laptops, smartphones, and noise-cancelling acoustics. Automatically configure Bitdefender digital shields on every purchase to safeguard your identity.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/products"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all hover:translate-y-[-2px]"
              >
                Shop Technology <ShoppingBag className="w-5 h-5" />
              </Link>
              <Link 
                href="/bitdefender"
                className="px-8 py-4 bg-slate-900/90 hover:bg-slate-800 border border-slate-850 text-white font-semibold rounded-lg flex items-center gap-2 transition-all hover:translate-y-[-2px]"
              >
                Explore Security Hub <ArrowRight className="w-5 h-5 text-red-500" />
              </Link>
            </motion.div>

            {/* Sub-bar below Hero buttons */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-16 pt-8 border-t border-white/10 text-xs text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-red-500" /> 100% Genuine Products</span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Secure Payments
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><rect width="16" height="12" x="1" y="3" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
                Expert Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES - Asymmetric Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-end border-b border-slate-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Shop by <span className="text-red-600">Category</span>
            </h2>
            <Link href="/products" className="text-sm font-semibold text-slate-900 hover:text-red-600 flex items-center gap-1.5 transition-colors group">
              Explore all categories <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left column (Laptops) - md:col-span-7 */}
            <div className="md:col-span-7">
              <Link 
                href="/products?cat=Laptops"
                className="relative h-[480px] rounded-2xl overflow-hidden group shadow-md border border-slate-100 flex flex-col justify-end p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80" 
                  alt="Laptops category"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                />
                <div className="relative z-20 text-white">
                  <h3 className="text-3xl font-bold mb-1">Laptops</h3>
                  <p className="text-sm text-slate-300 mb-4">Powerful. Portable. Productive.</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-red-400 transition-colors">
                    Shop Now <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Right column (Phones + Audio/Watches grid) - md:col-span-5 */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6">
              {/* Smartphones */}
              <Link 
                href="/products?cat=Smartphones"
                className="relative h-[228px] rounded-2xl overflow-hidden group shadow-md border border-slate-100 flex flex-col justify-end p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                <img 
                  src="/category_smartphones.png" 
                  alt="Smartphones category"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                />
                <div className="relative z-20 text-white">
                  <h3 className="text-xl font-bold mb-1">Smartphones</h3>
                  <p className="text-xs text-slate-300 mb-3">Latest. Fastest. Built for you.</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-red-400 transition-colors">
                    Shop Now <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* Audio & Smartwatches side by side */}
              <div className="grid grid-cols-2 gap-6">
                {/* Audio */}
                <Link 
                  href="/products?cat=Headphones"
                  className="relative h-[228px] rounded-2xl overflow-hidden group shadow-md border border-slate-100 flex flex-col justify-end p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                  <img 
                    src="/category_audio.png" 
                    alt="Audio category"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                  />
                  <div className="relative z-20 text-white">
                    <h3 className="text-lg font-bold mb-1">Audio</h3>
                    <p className="text-xs text-slate-300 mb-3">Feel every beat.</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-red-400 transition-colors">
                      Shop Now <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>

                {/* Smartwatches */}
                <Link 
                  href="/products?cat=Smartwatches"
                  className="relative h-[228px] rounded-2xl overflow-hidden group shadow-md border border-slate-100 flex flex-col justify-end p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                  <img 
                    src="/category_smartwatches.png" 
                    alt="Smartwatches category"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                  />
                  <div className="relative z-20 text-white">
                    <h3 className="text-lg font-bold mb-1">Smartwatches</h3>
                    <p className="text-xs text-slate-300 mb-3">Smartest everyday.</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-red-400 transition-colors">
                      Shop Now <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Premium View All Banner */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <Link 
              href="/products" 
              className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-700/30"
            >
              {/* Subtle background animated gradient flare */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)] group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    Looking for something else?
                  </h3>
                  <p className="mt-1 text-sm text-slate-300 max-w-xl font-normal leading-relaxed">
                    Explore our complete directory of products, including premium components, accessories, tablets, gaming setups, and storage solutions.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    Explore Everything
                  </span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-slate-900 shadow-md group-hover:bg-red-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS Showcase */}
      <section className="py-20 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto relative">
          
          <div className="mb-12 flex justify-between items-end border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured <span className="text-red-600">Products</span>
            </h2>
            <Link href="/products" className="text-sm font-semibold text-slate-900 hover:text-red-600 flex items-center gap-1.5 transition-colors group">
              View all products <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Slider Container with absolute navigation buttons at edges */}
          <div className="relative group/slider">
            {/* Left Nav Button */}
            <button 
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
                }
              }}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-all z-25 opacity-0 group-hover/slider:opacity-100"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>

            {/* Right Nav Button */}
            <button 
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                }
              }}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-all z-25 opacity-0 group-hover/slider:opacity-100"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>

            {/* Scrolling Viewport */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
              {[
                {
                  id: 'macbook-air-m3',
                  name: 'MacBook Air M3',
                  price: '$1,099',
                  rating: '4.8',
                  reviews: 128,
                  image: '/prod_macbook.png',
                  category: 'Laptops'
                },
                {
                  id: 'rog-zephyrus-g14',
                  name: 'ASUS ROG Strix G16',
                  price: '$1,599',
                  rating: '4.6',
                  reviews: 85,
                  image: '/prod_rog.png',
                  category: 'Laptops'
                },
                {
                  id: 'iphone-15-pro',
                  name: 'iPhone 15 Pro Max',
                  price: '$1,199',
                  rating: '4.7',
                  reviews: 210,
                  image: '/prod_iphone.png',
                  category: 'Smartphones'
                },
                {
                  id: 'galaxy-s24-ultra',
                  name: 'Samsung Galaxy S24 Ultra',
                  price: '$1,299',
                  rating: '4.6',
                  reviews: 178,
                  image: '/prod_s24.png',
                  category: 'Smartphones'
                },
                {
                  id: 'sony-wh1000xm5',
                  name: 'Sony WH-1000XM5',
                  price: '$399',
                  rating: '4.5',
                  reviews: 86,
                  image: '/prod_sony.png',
                  category: 'Headphones'
                }
              ].map((prod) => {
                const originalProdObject = PRODUCTS.find(p => p.id === prod.id) || PRODUCTS[0];
                return (
                  <div 
                    key={prod.id}
                    className="flex-shrink-0 w-64 snap-start bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md rounded-2xl p-5 flex flex-col justify-between group relative transition-all duration-300"
                  >
                    <div>
                      {/* Image container sits directly in the white card background */}
                      <div className="relative flex items-center justify-center h-48 mb-4">
                        <img 
                          src={prod.image} 
                          alt={prod.name} 
                          className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                        />
                        <button 
                          onClick={() => toggleWishlist(prod.id)}
                          className="absolute top-0 right-0 p-1.5 bg-white/80 hover:bg-white rounded-full shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10"
                        >
                          <Heart className={`w-4 h-4 ${wishlist.includes(prod.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        </button>
                      </div>

                      {/* Ratings stars underneath the image */}
                      <div className="flex items-center text-amber-500 mb-1 text-[11px] font-bold">
                        <span className="text-amber-500 mr-1 text-sm">★</span>
                        <span className="text-slate-800">{prod.rating}</span>
                        <span className="text-slate-400 font-normal ml-0.5">({prod.reviews})</span>
                      </div>

                      <h5 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-3 text-sm">{prod.name}</h5>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-950 text-base">{prod.price}</span>
                        
                        {/* Shopping Bag Button in Light Gray Square Box */}
                        <button 
                          onClick={() => addToCart(originalProdObject)}
                          title="Add to Cart"
                          className="p-2 bg-slate-50 border border-slate-150 hover:bg-slate-100 rounded-xl text-slate-800 hover:text-red-600 transition-colors flex items-center justify-center shadow-sm"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Direct Buy Now CTA */}
                      <Link 
                        href="/checkout"
                        onClick={() => addToCart(originalProdObject)}
                        className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BITDEFENDER SHIELD BANNER */}
      <section className="relative py-24 px-6 bg-slate-950 text-white overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/neon_shield_laptop.jpeg" 
            alt="Neon Shield Laptop in Cosmic Tech Space"
            className="w-full h-full object-cover object-right lg:object-center"
          />
          {/* Subtle gradient overlay to make the text on the left readable and fade nicely to the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20">
          {/* Banner Left Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] mb-6">
              A New Device Deserves <br />
              More Than Just <span className="text-red-500">Great Specs.</span>
            </h2>
            
            <p className="text-base text-slate-300 mb-8 max-w-md leading-relaxed">
              Secure your digital life with Bitdefender. <br />Explore protection, install with confidence.
            </p>
            
            <Link 
              href="/bitdefender"
              className="px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 font-bold rounded-lg flex items-center gap-2.5 shadow-lg shadow-white/5 transition-all text-sm group"
            >
              Enter the Bitdefender Hub 
              <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Banner Right Content - Floating specs pills overlayed on background laptop */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[580px] h-[340px] flex items-center justify-center">
              
              {/* Floating Pills (Left Side) */}
              <div className="absolute left-[5%] top-[8%] z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white/90 shadow-xl hover:border-red-500/40 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Threat Prevention
              </div>
              <div className="absolute left-[1%] top-[45%] z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white/90 shadow-xl hover:border-red-500/40 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Secure Browsing
              </div>
              <div className="absolute left-[7%] bottom-[8%] z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white/90 shadow-xl hover:border-red-500/40 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                VPN Protection
              </div>

              {/* Floating Pills (Right Side) */}
              <div className="absolute right-[7%] top-[8%] z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white/90 shadow-xl hover:border-red-500/40 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Ransomware Protection
              </div>
              <div className="absolute right-[1%] top-[45%] z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white/90 shadow-xl hover:border-red-500/40 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Safe Online Banking
              </div>
              <div className="absolute right-[7%] bottom-[8%] z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white/90 shadow-xl hover:border-red-500/40 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Privacy Protection
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST BADGES ROW (Footer Features) */}
      <section className="py-8 bg-slate-50 border-y border-slate-200/60 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="group flex items-center gap-4 p-3.5 bg-white border border-slate-150 rounded-2xl shadow-[0_4px_12px_-6px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-300">
            <div className="p-3 bg-slate-50 rounded-full text-slate-600 group-hover:bg-red-50 group-hover:text-red-600 border border-slate-100 shadow-inner transition-colors duration-300">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 group-hover:text-red-600 transition-colors">Trusted by Thousands</h4>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5 leading-relaxed">Join thousands of happy customers across India.</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-3.5 bg-white border border-slate-150 rounded-2xl shadow-[0_4px_12px_-6px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-300">
            <div className="p-3 bg-slate-50 rounded-full text-slate-600 group-hover:bg-red-50 group-hover:text-red-600 border border-slate-100 shadow-inner transition-colors duration-300">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 group-hover:text-red-600 transition-colors">7 Days Easy Returns</h4>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5 leading-relaxed">Not satisfied? Return it within 7 days.</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-3.5 bg-white border border-slate-150 rounded-2xl shadow-[0_4px_12px_-6px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-300">
            <div className="p-3 bg-slate-50 rounded-full text-slate-600 group-hover:bg-red-50 group-hover:text-red-600 border border-slate-100 shadow-inner transition-colors duration-300">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 group-hover:text-red-600 transition-colors">Secure Checkout</h4>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5 leading-relaxed">Encrypted payments. Your data is safe.</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-3.5 bg-white border border-slate-150 rounded-2xl shadow-[0_4px_12px_-6px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-300">
            <div className="p-3 bg-slate-50 rounded-full text-slate-600 group-hover:bg-red-50 group-hover:text-red-600 border border-slate-100 shadow-inner transition-colors duration-300">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 group-hover:text-red-600 transition-colors">24/7 Support</h4>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5 leading-relaxed">We're here anytime you need us.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
