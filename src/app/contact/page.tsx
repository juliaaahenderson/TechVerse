'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle,
  Lock
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Hardware Support',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-700">Contact & Support</span>
        </div>

        {/* Page Title & Intro */}
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            We&apos;re Here to Help You <span className="text-red-600">Secure & Build</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
            Have questions regarding hardware compatibility, order status, or Bitdefender activation licenses? Connect directly with our support team.
          </p>
        </div>

        {/* Main Grid: Form & Support Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
          
          {/* Left Column: Interactive Working Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm relative">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-1">Send Us a Direct Message</h2>
              <p className="text-xs text-slate-500 font-medium">Our support specialists typically respond within 2 hours.</p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 my-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-extrabold text-slate-900">Message Delivered Successfully</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-emerald-700 font-bold">{formData.name}</strong>. Your inquiry regarding <span className="text-slate-900 font-bold">{formData.category}</span> has been logged. A support specialist will respond to <span className="text-slate-900 underline font-semibold">{formData.email}</span> shortly.
                </p>
                <button 
                  onClick={() => {
                    setFormData({ name: '', email: '', category: 'Hardware Support', subject: '', message: '' });
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold rounded-xl transition-all shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Your Full Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Email Address</label>
                    <input 
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Inquiry Category */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Inquiry Category</label>
                    <select
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all font-medium"
                    >
                      <option value="Hardware Support">Hardware Support & Warranty</option>
                      <option value="Bitdefender License">Bitdefender License Activation</option>
                      <option value="Order Inquiries">Order Status & Shipping</option>
                      <option value="Corporate Sales">Corporate Bulk Sales</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Subject (Optional)</label>
                    <input 
                      type="text"
                      placeholder="Brief topic summary"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Detailed Message</label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="Describe your question, order details, or device specs..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all placeholder:text-slate-400 font-medium resize-none"
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /> Submit Support Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Quick Help (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Assistance Cards */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-950 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-4">
                <ShieldCheck className="w-5 h-5 text-red-600" /> Direct Assistance Channels
              </h3>

              <div className="space-y-4">
                {/* Email Support */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-150 hover:border-red-500/40 transition-colors">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Email Dispatch</h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">support@techverse.com</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Monitored for technical and billing requests.</p>
                  </div>
                </div>

                {/* Technical Hotline */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-150 hover:border-red-500/40 transition-colors">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Customer Support Hotline</h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">+1 (800) 832-4837</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Mon - Fri, 8:00 AM - 8:00 PM EST</p>
                  </div>
                </div>

                {/* Headquarters Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-150 hover:border-red-500/40 transition-colors">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Corporate Headquarters</h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">TechVerse Headquarters</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">100 Cyber Shield Way, Tech District, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-md">
              <h4 className="text-sm font-extrabold text-white tracking-tight flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-red-500" /> Need Immediate Activation Help?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Check our step-by-step installation guides or activate software licenses directly.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Link 
                  href="/bitdefender/guides"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold rounded-xl transition-all border border-slate-700 flex items-center gap-1.5"
                >
                  Installation Guides <ChevronRight className="w-3.5 h-3.5 text-red-500" />
                </Link>
                <Link 
                  href="/bitdefender#activation"
                  className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs font-extrabold rounded-xl transition-all border border-red-500/30 flex items-center gap-1.5"
                >
                  Activate License <Lock className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
