'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Lock, Eye, FileText, Server } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 text-slate-900">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-700">Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-500 font-medium">Last updated: January 2026</p>
        </div>

        {/* Content sections */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8 text-sm leading-relaxed text-slate-600 font-medium">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-red-600" /> 1. Data Encryption & Security Standards
            </h2>
            <p>
              At TechVerse, we adhere to high-assurance data privacy protocols. All customer communications, order data, and hardware diagnostic queries are transmitted over encrypted TLS 1.3 tunnels and processed in zero-trust sandboxed cloud clusters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-red-600" /> 2. Information We Collect
            </h2>
            <p>
              We collect minimal telemetry data required to complete order fulfilment, manage license key activations, and prevent software distribution abuse:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-500">
              <li>Account identification & contact details (email address, billing info).</li>
              <li>Software activation hashes for Bitdefender license binding.</li>
              <li>Device configuration hardware specs submitted for protection compatibility scans.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Server className="w-5 h-5 text-red-600" /> 3. Third-Party Software Integrations
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. License activation strings are securely routed to Bitdefender SRL servers solely to bind user device licenses to central account profiles.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-600" /> 4. User Rights & Contact
            </h2>
            <p>
              You reserve the right to request deletion or export of your store profile data at any time by contacting our security compliance team at <span className="text-slate-900 font-bold">privacy@techverse.com</span>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
