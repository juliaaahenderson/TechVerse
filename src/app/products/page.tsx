'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { PRODUCTS, Product } from '@/data/mockData';
import { 
  Search, Heart, Star, ShoppingBag, Eye, SlidersHorizontal, Check, 
  ArrowRight, ChevronDown, ChevronUp, Laptop, Phone, 
  Headphones, Watch, ShieldAlert
} from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat');

  const { addToCart, toggleWishlist, wishlist } = useApp();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [priceRange, setPriceRange] = useState<number>(4000);
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Sync category state when URL query parameter changes
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  // Filter expand states
  const [expandBrands, setExpandBrands] = useState(true);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      // Handle search matching name or description
      const matchSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prod.description.toLowerCase().includes(searchTerm.toLowerCase());
      // Handle category filtering
      const matchCat = selectedCategory === 'All' || prod.category === selectedCategory;
      // Handle price filtering
      const matchPrice = prod.price <= priceRange;
      // Handle brand filtering
      const matchBrand = selectedBrands.length === 0 || selectedBrands.some(brand => 
        prod.name.toLowerCase().includes(brand.toLowerCase())
      );
      return matchSearch && matchCat && matchPrice && matchBrand;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.rating - a.rating;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [searchTerm, selectedCategory, priceRange, sortBy, selectedBrands]);

  // Categories list matching standard mock data
  const categoriesList = [
    { name: 'All', count: PRODUCTS.length },
    { name: 'Laptops', count: PRODUCTS.filter(p => p.category === 'Laptops').length },
    { name: 'Smartphones', count: PRODUCTS.filter(p => p.category === 'Smartphones').length },
    { name: 'Headphones', count: PRODUCTS.filter(p => p.category === 'Headphones').length },
    { name: 'Smartwatches', count: PRODUCTS.filter(p => p.category === 'Smartwatches').length },
    { name: 'Tablets', count: PRODUCTS.filter(p => p.category === 'Tablets').length },
    { name: 'Accessories', count: PRODUCTS.filter(p => p.category === 'Accessories').length }
  ];

  // Helper to map visual images for premium isolated look
  const getProductImage = (id: string, defaultImg: string) => {
    if (id === 'macbook-air-m3') return '/prod_macbook.png';
    if (id === 'rog-zephyrus-g14') return '/prod_rog.png';
    if (id === 'iphone-15-pro') return '/prod_iphone.png';
    if (id === 'galaxy-s24-ultra') return '/prod_s24.png';
    if (id === 'sony-wh1000xm5') return '/prod_sony.png';
    if (id === 'ipad-pro-m4') return '/prod_ipad.png';
    if (id === 'dell-xps-16') return '/prod_dell.png';
    if (id === 'bose-qc-ultra') return '/prod_bose.png';
    return defaultImg;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Dark Banner Header */}
      <div className="relative bg-slate-950 text-white overflow-hidden py-16 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Futuristic Tech Showcase with Neon Shield.jpeg" 
            alt="All Products Banner Background"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent z-10" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-xs text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white">Shop</span>
            <span>&gt;</span>
            <span className="text-white">All Products</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">All Products</h1>
          <p className="text-slate-400 text-sm max-w-xl">
            Explore our complete range of premium tech products. Equipped with elite digital shield recommendations.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Filters (Lcol: 3 cols) */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
              
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="font-extrabold text-slate-950 text-sm flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-slate-950" /> Filters
                </span>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setPriceRange(4000);
                    setSelectedBrands([]);
                  }}
                  className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Search Bar */}
              <div>
                <label className="text-xs uppercase font-extrabold text-slate-900 tracking-wider mb-2.5 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search product models..."
                    className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-950 font-medium"
                  />
                </div>
              </div>

              {/* Categories collapsible block */}
              <div>
                <div className="flex justify-between items-center text-xs uppercase font-extrabold text-slate-900 tracking-wider mb-3 cursor-pointer">
                  <span>Categories</span>
                  <ChevronDown className="w-4.5 h-4.5 text-slate-400" />
                </div>
                
                <div className="space-y-1.5 mt-2">
                  {categoriesList.map(cat => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex justify-between items-center text-xs py-1.5 px-2 rounded-lg font-medium transition-all ${
                        selectedCategory === cat.name 
                          ? 'bg-slate-900 text-white font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedCategory === cat.name ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands collapsible */}
              <div className="border-t border-slate-100 pt-4">
                <button 
                  onClick={() => setExpandBrands(!expandBrands)}
                  className="w-full flex justify-between items-center text-xs uppercase font-extrabold text-slate-900 tracking-wider"
                >
                  <span>Brands</span>
                  {expandBrands ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandBrands && (
                  <div className="space-y-2 mt-3">
                    {['Apple', 'ASUS', 'Samsung', 'Sony', 'Microsoft'].map(brand => (
                      <label key={brand} className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={selectedBrands.includes(brand)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBrands(prev => [...prev, brand]);
                            } else {
                              setSelectedBrands(prev => prev.filter(b => b !== brand));
                            }
                          }}
                          className="rounded text-red-600 accent-red-600" 
                        />
                        {brand}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range Slider */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex justify-between items-center text-xs uppercase font-extrabold text-slate-900 tracking-wider mb-2">
                  <span>Price Range</span>
                  <ChevronDown className="w-4.5 h-4.5 text-slate-400" />
                </div>
                <div className="text-xs text-slate-600 font-bold mb-3">
                  $100 — ${priceRange.toLocaleString()}
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="4000" 
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
              </div>

            </div>
          </aside>

          {/* Grid Panel (Rcol: 9 cols) */}
          <section className="lg:col-span-9 space-y-6">
            
            {/* Grid Header Controls */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
              <span className="text-xs font-bold text-slate-800">
                {filteredProducts.length} Products Found
              </span>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                  <span>Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e: any) => setSortBy(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-slate-800 focus:outline-none text-xs font-bold cursor-pointer"
                  >
                    <option value="popular">Popular</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>


              </div>
            </div>

            {/* Grid layout containing actual product model cards */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-slate-200/85 rounded-2xl shadow-sm">
                <ShieldAlert className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-500 text-sm font-semibold">No products found matching those filters.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setPriceRange(4000); }}
                  className="mt-4 px-5 py-2.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => (
                  <div 
                    key={prod.id} 
                    className="bg-white border border-slate-150 hover:border-slate-300 shadow-sm hover:shadow-md rounded-2xl p-5 flex flex-col justify-between group transition-all duration-300 relative"
                  >
                    <div>
                      {/* Image container sits directly on the white card background */}
                      <Link href={`/products/${prod.id}`} className="relative flex items-center justify-center h-48 mb-3 block group">
                        <img 
                          src={getProductImage(prod.id, prod.image)} 
                          alt={prod.name} 
                          className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500" 
                        />
                      </Link>
                      
                      <button 
                        onClick={() => toggleWishlist(prod.id)}
                        className="absolute top-4 right-4 p-1.5 bg-white/80 hover:bg-white rounded-full shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10"
                      >
                        <Heart className={`w-4 h-4 ${wishlist.includes(prod.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>

                      {/* Ratings stars underneath the image */}
                      <div className="flex items-center text-amber-500 mb-1 text-[11px] font-bold">
                        <span className="text-amber-500 mr-1 text-sm">★</span>
                        <span className="text-slate-800">{prod.rating}</span>
                        <span className="text-slate-400 font-normal ml-0.5">(128)</span>
                      </div>

                      <Link href={`/products/${prod.id}`} className="block group">
                        <h3 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1 text-sm line-clamp-1">
                          {prod.name}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-500 font-medium line-clamp-2 mb-4 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-950 text-base">
                          ${prod.price.toLocaleString()}
                        </span>
                        
                        {/* Shopping Bag Button in Light Gray Square Box */}
                        <button 
                          onClick={() => addToCart(prod)}
                          title="Add to Cart"
                          className="p-2 bg-slate-50 border border-slate-150 hover:bg-slate-100 rounded-xl text-slate-800 hover:text-red-600 transition-colors flex items-center justify-center shadow-sm"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Direct Buy Now CTA */}
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
            )}

          </section>

        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="text-slate-500 text-lg">Loading products store...</p>
      </div>
    }>
      <Suspense fallback={<div>Loading content...</div>}>
        <ProductsContent />
      </Suspense>
    </Suspense>
  );
}
