'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileText, Scale, ShieldAlert, CreditCard } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 text-slate-900">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-700">Terms of Service</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">Terms of Service</h1>
          <p className="text-sm text-slate-500 font-medium">Last updated: January 2026</p>
        </div>

        {/* Content sections */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8 text-sm leading-relaxed text-slate-600 font-medium">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-red-600" /> 1. Agreement to Terms
            </h2>
            <p>
              By accessing TechVerse store features, ordering hardware engineering products, or purchasing digital Bitdefender security license keys, you agree to bound compliance with these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-red-600" /> 2. License Activation & Fulfilment
            </h2>
            <p>
              Digital license activation strings purchased via TechVerse are issued upon completed payment verification. License keys are single-tenant cryptographic activation tokens intended exclusively for authorization on your target devices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-600" /> 3. Hardware Warranty & Returns
            </h2>
            <p>
              All hardware systems (Laptops, Smartphones, Audio, Smartwatches) include standard manufacturer warranty coverage alongside TechVerse verified quality control checks. Software digital key redemptions are non-refundable once activated on Bitdefender Central.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-600" /> 4. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with standard consumer protection laws and digital distribution commerce regulations.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
