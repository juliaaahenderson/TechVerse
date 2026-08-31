'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '@/data/mockData';
import { Clock, ArrowRight, ChevronRight, Search, BookOpen, TrendingUp } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Security News', 'Guides', 'Threat Alerts', 'Safe Habits'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[3] || BLOG_POSTS[0];
  const latestPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id);

  const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
    'Security News': { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
    'Guides': { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    'Threat Alerts': { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
    'Safe Habits': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-sans">

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <Link href="/bitdefender" className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors">Bitdefender Hub</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-xs font-bold text-slate-700">Blog</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-slate-950 tracking-tight leading-[1.12]">
                Blog & Research
              </h1>
              <p className="text-base text-slate-500 font-medium leading-relaxed">
                Expert analysis on ransomware, phishing, and digital security best practices.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-300 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Featured Post Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 mb-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto overflow-hidden relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-black bg-white/95 backdrop-blur-sm text-slate-900 px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 text-blue-600" />
                  Featured Article
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-3">
                {(() => {
                  const catStyle = categoryColors[featuredPost.category] || { bg: 'bg-slate-100', text: 'text-slate-700', dot: 'bg-slate-500' };
                  return (
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 ${catStyle.bg} ${catStyle.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
                      {featuredPost.category}
                    </span>
                  );
                })()}
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight tracking-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 font-bold">{featuredPost.date}</span>
                <Link 
                  href={`/bitdefender/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs font-bold text-slate-400 mr-2 shrink-0">Filter:</span>
          {categories.map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 font-bold text-sm">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.map((post, idx) => {
              const catStyle = categoryColors[post.category] || { bg: 'bg-slate-100', text: 'text-slate-700', dot: 'bg-slate-500' };
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    {/* Category overlay badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 ${catStyle.bg} ${catStyle.text} shadow-sm backdrop-blur-sm`}>
                        <span className={`w-1 h-1 rounded-full ${catStyle.dot}`} />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>

                    <h3 className="text-[15px] font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 mb-5 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="pt-4 border-t border-slate-100">
                      <Link 
                        href={`/bitdefender/blog/${post.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-800 transition-colors group/btn"
                      >
                        Read Full Article <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
