'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, Smartphone, Monitor, Shield, 
  CheckCircle2, ChevronRight, ArrowRight, 
  Download, Settings, ScanLine, KeyRound, RotateCw, BookOpen
} from 'lucide-react';

export default function InstallationGuidesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'win' | 'mac' | 'mobile'>('win');

  const platforms = [
    { id: 'win' as const, name: 'Windows', fullName: 'Windows PC', icon: <Monitor className="w-5 h-5" />, color: 'blue', steps: 5 },
    { id: 'mac' as const, name: 'macOS', fullName: 'macOS Apple', icon: <Laptop className="w-5 h-5" />, color: 'slate', steps: 4 },
    { id: 'mobile' as const, name: 'Mobile', fullName: 'Android / iOS', icon: <Smartphone className="w-5 h-5" />, color: 'emerald', steps: 3 }
  ];

  const guides: Record<string, { step: string; title: string; detail: string; icon: React.ReactNode }[]> = {
    win: [
      { step: "1", title: "Download Installer", detail: "Log into Bitdefender Central web dashboard, click 'Install Protection' and select Windows client to download the setup file.", icon: <Download className="w-5 h-5" /> },
      { step: "2", title: "Run Executable Setup", detail: "Locate downloaded setup file (usually Bitdefender_Windows.exe), right-click and run as Administrator to begin installation.", icon: <Settings className="w-5 h-5" /> },
      { step: "3", title: "Pre-Installation Scan", detail: "Installer performs a brief memory pre-scan to verify no active malware blocks the installation process. Wait for completion.", icon: <ScanLine className="w-5 h-5" /> },
      { step: "4", title: "Bind Activation Code", detail: "Login to your Bitdefender Central Account within the app when prompted to link and activate your license keys.", icon: <KeyRound className="w-5 h-5" /> },
      { step: "5", title: "First System Scan", detail: "Complete installation configurations, restart Windows, and execute your first full system diagnostic scan to verify protection.", icon: <RotateCw className="w-5 h-5" /> }
    ],
    mac: [
      { step: "1", title: "Download Mac Installer", detail: "Select macOS under your Bitdefender Central dashboard to download the installation archive bundle for Apple devices.", icon: <Download className="w-5 h-5" /> },
      { step: "2", title: "Allow Kernel Extensions", detail: "Open System Settings → Privacy & Security and allow Bitdefender system extension access privileges for full protection.", icon: <Settings className="w-5 h-5" /> },
      { step: "3", title: "Grant Full Disk Access", detail: "Ensure Bitdefender is enabled under Full Disk Access in System Settings so it can scan all local files and folders.", icon: <ScanLine className="w-5 h-5" /> },
      { step: "4", title: "Bind Central Account", detail: "Sign in with your email credentials to inherit your active Total Security or other Bitdefender license policies.", icon: <KeyRound className="w-5 h-5" /> }
    ],
    mobile: [
      { step: "1", title: "Install from App Store", detail: "Search and install 'Bitdefender Mobile Security' from the Google Play Store or Apple App Store on your device.", icon: <Download className="w-5 h-5" /> },
      { step: "2", title: "Grant Permissions", detail: "Allow notification alerts, VPN proxy access, and background scanning permissions to enable full real-time protection.", icon: <Settings className="w-5 h-5" /> },
      { step: "3", title: "Run Device Scan", detail: "Execute a real-time security scan on internal storage and SD cards to verify your device is clean and fully protected.", icon: <ScanLine className="w-5 h-5" /> }
    ]
  };

  const activeSteps = guides[selectedPlatform];
  const activePlatform = platforms.find(p => p.id === selectedPlatform)!;

  const tips = [
    { title: 'Keep Auto-Update On', desc: 'Ensure Bitdefender auto-update is enabled for the latest threat definitions.' },
    { title: 'Schedule Weekly Scans', desc: 'Set up automated full scans during off-peak hours for continuous protection.' },
    { title: 'Enable Real-Time Shield', desc: 'Always keep real-time protection active to catch threats the moment they appear.' },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-sans">

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-6 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/bitdefender" className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors">Bitdefender Hub</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-xs font-bold text-slate-700">Installation Guides</span>
          </div>

          <div className="max-w-2xl space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-slate-950 tracking-tight leading-[1.12]">
              Installation Guides
            </h1>
            <p className="text-base text-slate-500 font-medium leading-relaxed max-w-lg">
              Follow our platform-specific walkthroughs to deploy Bitdefender protection across all your devices in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Platform Selector */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {platforms.map(plat => (
              <button
                key={plat.id}
                onClick={() => setSelectedPlatform(plat.id)}
                className={`flex-1 flex items-center gap-4 px-6 py-5 rounded-2xl border-2 text-left transition-all duration-200 group ${
                  selectedPlatform === plat.id 
                    ? 'bg-white border-red-500 shadow-lg shadow-red-500/8' 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                  selectedPlatform === plat.id 
                    ? 'bg-red-600 text-white' 
                    : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  {plat.icon}
                </div>
                <div>
                  <span className={`text-sm font-extrabold block ${selectedPlatform === plat.id ? 'text-slate-900' : 'text-slate-700'}`}>
                    {plat.fullName}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{plat.steps} steps</span>
                </div>
                {selectedPlatform === plat.id && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Steps Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Steps */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPlatform}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {activeSteps.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      className="flex gap-5 group"
                    >
                      {/* Step number + connector */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
                          {item.step}
                        </div>
                        {idx < activeSteps.length - 1 && (
                          <div className="w-0.5 flex-1 bg-gradient-to-b from-red-200 to-slate-200 mt-2 rounded-full min-h-[20px]" />
                        )}
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 mb-1">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                            {item.icon}
                          </div>
                          <div className="space-y-1.5">
                            <h3 className="text-base font-extrabold text-slate-900 leading-snug">{item.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Completion indicator */}
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1 bg-emerald-50 border border-emerald-200/60 rounded-2xl p-6">
                      <h3 className="text-base font-extrabold text-emerald-800">Setup Complete</h3>
                      <p className="text-sm text-emerald-600 font-medium mt-1">Your {activePlatform.fullName} device is now fully protected by Bitdefender.</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Tips Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm sticky top-24">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Pro Tips</h4>
                </div>
                <ul className="space-y-4">
                  {tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-slate-800 block">{tip.title}</span>
                        <span className="text-[11px] text-slate-400 font-medium leading-snug block mt-0.5">{tip.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <Link 
                    href="/bitdefender#troubleshoot"
                    className="flex items-center justify-between text-xs font-bold text-red-600 hover:text-red-800 transition-colors group"
                  >
                    Having issues? Visit Troubleshooting
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Quick link card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 rounded-2xl p-6 text-white shadow-xl border border-slate-800">
                <h4 className="text-sm font-extrabold mb-2">Need your activation code?</h4>
                <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                  Find your subscription key and manage your licenses from the activation center.
                </p>
                <Link 
                  href="/bitdefender#activation"
                  className="inline-flex items-center gap-1.5 text-[11px] font-black bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors shadow-md shadow-red-600/20"
                >
                  Activation Center <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
