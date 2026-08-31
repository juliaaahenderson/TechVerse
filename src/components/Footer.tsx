'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const [subEmail, setSubEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t transition-colors duration-300 bg-slate-950 text-white border-slate-900">
      {/* Newsletter signup */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-300 bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/20 border border-slate-800">
          {/* Subtle glow effect */}
          <div className="absolute -right-24 -top-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight text-white">
                Subscribe to cybersecurity threat intelligence
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                Get the latest malware analytics, product patches, and tech deals directly inside your inbox.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
              {subscribed ? (
                <div className="flex items-center gap-2.5 px-5 py-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl w-full">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-emerald-300">You&apos;re subscribed! Check your inbox.</span>
                </div>
              ) : (
                <>
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder="Enter your security-cleared email"
                      value={subEmail}
                      onChange={(e) => setSubEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 transition-all bg-slate-950/80 border-slate-800 text-white focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <button 
                    onClick={() => {
                      if (subEmail && subEmail.includes('@') && subEmail.includes('.')) {
                        setSubscribed(true);
                      }
                    }}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-red-500/20 active:scale-[0.98]"
                  >
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation columns */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/Futuristic TECHVERSE Monogram Logo.png"
              alt="TechVerse Logo"
              width={260}
              height={70}
              className="h-24 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            <strong className="text-white font-bold">Disclaimer:</strong> TechVerse is an independent provider of technology products and software licenses. All brand names, trademarks, logos, and product designations referenced herein belong to their respective owners and are used strictly for identification and descriptive purposes.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-red-500 mb-4">Shop Products</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><Link href="/products?cat=Laptops" className="hover:text-red-500 transition-colors">Laptops</Link></li>
            <li><Link href="/products?cat=Smartphones" className="hover:text-red-500 transition-colors">Smartphones</Link></li>
            <li><Link href="/products?cat=Headphones" className="hover:text-red-500 transition-colors">Audio & Headphones</Link></li>
            <li><Link href="/products?cat=Smartwatches" className="hover:text-red-500 transition-colors">Smartwatches</Link></li>
            <li><Link href="/products" className="hover:text-red-500 transition-colors">All Hardware</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-red-500 mb-4">Bitdefender Hub</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><Link href="/bitdefender#plans" className="hover:text-red-500 transition-colors">Antivirus & Security Plans</Link></li>
            <li><Link href="/bitdefender#compare" className="hover:text-red-500 transition-colors">Compare Products</Link></li>
            <li><Link href="/bitdefender/guides" className="hover:text-red-500 transition-colors">Installation Guides</Link></li>
            <li><Link href="/bitdefender#setup" className="hover:text-red-500 transition-colors">Device configuration</Link></li>
            <li><Link href="/bitdefender#troubleshoot" className="hover:text-red-500 transition-colors">Troubleshooting Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-red-500 mb-4">Corporate Info</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><Link href="/bitdefender/blog" className="hover:text-red-500 transition-colors">Intelligence Blog</Link></li>
            <li><Link href="/bitdefender/guides" className="hover:text-red-500 transition-colors">Software Compatibility</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-red-500 transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-red-500 transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-slate-900 text-center">
        <div className="text-xs sm:text-sm text-slate-400 font-semibold">
          &copy; {new Date().getFullYear()} TechVerse Inc. All rights reserved. Bitdefender is a registered trademark of Bitdefender SRL.
        </div>
      </div>
    </footer>
  );
}
