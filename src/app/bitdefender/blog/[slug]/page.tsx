'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BLOG_POSTS } from '@/data/mockData';
import { Clock, ArrowLeft, ArrowRight, Share2, Bookmark, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = BLOG_POSTS.find(p => p.id === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-sans">
      {/* Header / Breadcrumb */}
      <section className="bg-white border-b border-slate-200/80 pt-10 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/bitdefender/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog & Research
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
                {post.category}
              </span>
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="text-xs text-slate-400 font-medium">• {post.date}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-[1.2]">
              {post.title}
            </h1>

            <p className="text-base text-slate-600 font-medium leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 mb-12 h-[350px] sm:h-[450px] relative"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="prose prose-slate lg:prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                {post.content}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 pt-4">Understanding the Modern Cyber Threat Landscape</h2>
              <p className="text-slate-600">
                As digital environments become more interconnected, security measures must evolve beyond traditional static firewalls. Cybercriminals rely on sophisticated evasion techniques, obfuscation scripts, and targeted social engineering schemes to bypass default browser defenses.
              </p>

              <div className="bg-slate-100/80 border-l-4 border-red-500 p-6 rounded-r-2xl my-6">
                <p className="text-sm font-semibold text-slate-800 italic">
                  "Proactive security isn't about building higher walls; it's about real-time threat intelligence and behavioral analytics acting before damage occurs."
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-900">Key Protection Strategies</h3>
              <ul className="space-y-3 pl-0 list-none">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Maintain multi-layered endpoint security with real-time ransomware shielding.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Enforce zero-trust principles and multi-factor authentication across all active accounts.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Regularly verify offline or immutable cloud backups to recover seamlessly from unexpected data breaches.</span>
                </li>
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-3xl p-8 shadow-xl mt-12 border border-slate-800">
              <h3 className="text-xl font-bold mb-2">Safeguard Your Digital Assets</h3>
              <p className="text-sm text-slate-300 mb-6">
                Protect your PC, Mac, Android, and iOS devices with Bitdefender's multi-award-winning security suite.
              </p>
              <Link 
                href="/bitdefender#plans" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all shadow-md"
              >
                Explore Protection Plans <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">


            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Related Articles</h4>
              <div className="space-y-4">
                {relatedPosts.map(rel => (
                  <Link key={rel.id} href={`/bitdefender/blog/${rel.id}`} className="block group">
                    <h5 className="font-bold text-xs text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2">
                      {rel.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 font-medium mt-1 block">{rel.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
