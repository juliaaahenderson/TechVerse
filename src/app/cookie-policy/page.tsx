'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Cookie, Shield, Check, Settings } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 text-slate-900">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-700">Cookie Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">Cookie Policy</h1>
          <p className="text-sm text-slate-500 font-medium">Last updated: January 2026</p>
        </div>

        {/* Content sections */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8 text-sm leading-relaxed text-slate-600 font-medium">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Cookie className="w-5 h-5 text-red-600" /> 1. How We Use Cookies
            </h2>
            <p>
              TechVerse uses essential browser storage cookies to remember your shopping cart items, preserve your active experience settings (Hardware vs Security Hub views), and maintain active session security state.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-600" /> 2. Types of Cookies We Deploy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 space-y-2">
                <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" /> Essential Store Cookies
                </div>
                <p className="text-xs text-slate-500">Required for checkout operations, shopping cart item persistence, and security verification.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 space-y-2">
                <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-500" /> Performance Analytics
                </div>
                <p className="text-xs text-slate-500">Anonymous page view measurements helping us optimize product page load times and shield guides.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Settings className="w-5 h-5 text-red-600" /> 3. Managing Cookie Preferences
            </h2>
            <p>
              You can control or clear cookie tokens at any time through your web browser preferences settings. Disabling essential cookies may interrupt shopping cart functionality.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
