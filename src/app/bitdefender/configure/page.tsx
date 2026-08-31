'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Shield, Check, ArrowRight, Info, Globe, Lock, ExternalLink
} from 'lucide-react';

const productsData: { [key: string]: any } = {
  "family-pack": {
    name: "Bitdefender Family Pack",
    subtitle: "Complete digital safety for all your household devices",
    os: "Windows, macOS, iOS, Android",
    badge: "Best for Families",
    color: "purple",
    themeColor: "#7e22ce",
    bgGradient: "from-purple-50 to-white",
    borderColor: "border-purple-200",
    shadowColor: "shadow-purple-500/5",
    officialUrl: "https://www.bitdefender.com/solutions/family-pack.html",
    features: [
      "Advanced Parental Control for kids monitoring",
      "Protection against ransomware & multi-layer zero-day threats",
      "Adware and spyware scanning block",
      "Includes VPN with 200MB/day traffic per device",
      "Microphone and webcam protection suite"
    ],
    techSpecs: {
      "System Memory": "2 GB RAM or higher",
      "Hard Disk Space": "2.5 GB available space",
      "Supported Browsers": "Edge, Chrome, Firefox, Safari",
      "Management Console": "Bitdefender Central (Free account required)"
    }
  },
  "mac": {
    name: "Bitdefender Antivirus for Mac",
    subtitle: "Absolute protection designed specifically for macOS",
    os: "macOS only",
    badge: "Premium macOS Security",
    color: "blue",
    themeColor: "#2563eb",
    bgGradient: "from-blue-50 to-white",
    borderColor: "border-blue-200",
    shadowColor: "shadow-blue-500/5",
    officialUrl: "https://www.bitdefender.com/solutions/antivirus-for-mac.html",
    features: [
      "Time Machine protection vault from ransomware encryption",
      "Blocks adware and malicious popups in browsers",
      "Ultra-fast real-time scanning with no slowdowns",
      "Secure VPN with 200MB daily traffic limit",
      "Anti-phishing detection filters"
    ],
    techSpecs: {
      "Operating System": "macOS Yosemite (10.10) or higher",
      "Memory": "1 GB RAM",
      "Hard Disk Space": "600 MB free space",
      "Safari Extension": "Bitdefender TrafficLight support"
    }
  },
  "android": {
    name: "Bitdefender Mobile Security (Android)",
    subtitle: "Top-tier protection for your Android smartphones and tablets",
    os: "Android only",
    badge: "Smart Mobile Defense",
    color: "emerald",
    themeColor: "#059669",
    bgGradient: "from-emerald-50 to-white",
    borderColor: "border-emerald-200",
    shadowColor: "shadow-emerald-500/5",
    officialUrl: "https://www.bitdefender.com/solutions/mobile-security-android.html",
    features: [
      "App Lock with PIN or biometric fingerprint protection",
      "Real-time web security protection against scams",
      "WearON smart WearOS watch tracking alerts",
      "Anti-Theft remote lock, wipe, and location tracking",
      "Autopilot smart recommendation system"
    ],
    techSpecs: {
      "Operating System": "Android 5.0 (Lollipop) or higher",
      "Internet Connection": "Required for scanning databases",
      "Google Play Services": "Required for anti-theft tracking"
    }
  },
  "ios": {
    name: "Bitdefender Mobile Security (iOS)",
    subtitle: "Encrypted connection and leak protection for Apple iOS",
    os: "iOS / iPadOS",
    badge: "Apple iOS Security",
    color: "indigo",
    themeColor: "#4f46e5",
    bgGradient: "from-indigo-50 to-white",
    borderColor: "border-indigo-200",
    shadowColor: "shadow-indigo-500/5",
    officialUrl: "https://www.bitdefender.com/solutions/mobile-security-ios.html",
    features: [
      "Advanced Web Scan filter against malicious links",
      "Verifies iOS posture settings for security vulnerabilities",
      "Account privacy check scans for email database leaks",
      "Includes 200MB/day encrypted VPN tunnel traffic",
      "Extremely light battery consumption"
    ],
    techSpecs: {
      "Operating System": "iOS 12 or higher",
      "Compatible Devices": "iPhone, iPad, iPod Touch",
      "Apple ID Account": "Required for App Store installation"
    }
  },
  "office": {
    name: "Bitdefender Small Office Security",
    subtitle: "Complete threat protection and safe payments for offices",
    os: "Windows, macOS, iOS, Android",
    badge: "Business Workgroups",
    color: "red",
    themeColor: "#dc2626",
    bgGradient: "from-red-50 to-white",
    borderColor: "border-red-200",
    shadowColor: "shadow-red-500/5",
    officialUrl: "https://www.bitdefender.com/solutions/small-office-security.html",
    features: [
      "Centralized Cloud Management Console dashboard",
      "Zero slowdown on workgroup computers & endpoints",
      "Secures customer credit card payments and banking details",
      "Prevents data leaks and unauthorized network transfers",
      "Advanced ransomware recovery shield safeguards"
    ],
    techSpecs: {
      "Admin Portal": "Bitdefender GravityZone Centralized Management",
      "Windows Support": "Windows 7 SP1, 8, 8.1, 10, 11",
      "Server Support": "Zero server configurations required",
      "Support SLA": "Priority 24/7 technical assistance ticket routing"
    }
  },
  "vpn": {
    name: "Bitdefender Premium VPN",
    subtitle: "Unlimited encrypted network tunnel for digital privacy",
    os: "Windows, macOS, iOS, Android",
    badge: "Identity & Privacy",
    color: "amber",
    themeColor: "#d97706",
    bgGradient: "from-amber-50 to-white",
    borderColor: "border-amber-200",
    shadowColor: "shadow-amber-500/5",
    officialUrl: "https://www.bitdefender.com/solutions/vpn.html",
    features: [
      "Completely unlimited encrypted web traffic capabilities",
      "Ultra-fast connections via 4,000+ servers globally",
      "Unblocks restricted geo-streaming platforms",
      "Protects network transmissions over public Wi-Fi access points",
      "Kill-switch functionality stops traffic during drops"
    ],
    techSpecs: {
      "Encryption Grade": "256-bit AES military-grade protocol",
      "Protocol Support": "Hydra Catapult technology",
      "Simultaneous Connections": "Up to 10 endpoints simultaneously",
      "Server Geographies": "Over 50 countries globally represented"
    }
  }
};

function ConfigureContent() {
  const searchParams = useSearchParams();
  const productKey = searchParams.get('product') || 'family-pack';

  // Safely resolve product data or fall back to family pack
  const product = productsData[productKey] || productsData["family-pack"];

  return (
    <div className="bg-[#fcfdfd] min-h-screen text-slate-900 pb-20 font-sans">
      
      {/* 1. PREMIUM HEADER LIGHT THEME */}
      <section className="bg-gradient-to-b from-slate-50 to-white text-slate-900 border-b border-slate-200/60 relative py-12 overflow-hidden">
        <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-left">
          <div className="space-y-3">
            <Link href="/bitdefender" className="text-xs font-black uppercase text-blue-600 flex items-center gap-1.5 hover:text-blue-700 transition-colors">
              ← Back to Bitdefender Solutions
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 border border-slate-200/60 text-slate-700 px-3 py-1 rounded-full">
                {product.badge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 mt-1">{product.name}</h1>
            <p className="text-xs sm:text-sm text-slate-500 font-bold max-w-xl">{product.subtitle}</p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CONFIGURATION PANEL */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Product Overview & Core Features */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Visual Showcase Card */}
          <div className={`p-8 rounded-[32px] bg-gradient-to-b ${product.bgGradient} border ${product.borderColor} text-slate-950 relative overflow-hidden shadow-sm flex flex-col justify-between min-h-[260px]`}>
            {/* Background elements */}
            <div className="absolute right-6 bottom-6 w-32 h-32 text-blue-500/10 pointer-events-none">
              <Shield className="w-full h-full stroke-[1.5]" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Threat Defense Status: Active</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">Bitdefender Certified Shield</h2>
              <p className="text-xs text-slate-500 font-bold max-w-md">Multi-layered software validation ensures continuous background security checks.</p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-200/40">
              <div className="p-3.5 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Supported Architectures</span>
                <span className="text-xs font-extrabold text-slate-800 block mt-0.5">{product.os}</span>
              </div>
            </div>
          </div>

          {/* Detailed Features List */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm text-left">
            <h3 className="font-extrabold text-slate-900 text-lg mb-6 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" /> What's Included in {product.name}
            </h3>
            
            <ul className="space-y-4">
              {product.features.map((feat: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[4.5]" />
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right: Redirect to Official Website Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-150 p-8 shadow-sm text-left relative overflow-hidden">
            
            <h3 className="font-extrabold text-slate-900 text-lg mb-4">Official Product Portal</h3>
            <p className="text-xs text-slate-500 font-bold leading-relaxed mb-6">
              Pricing details, custom license packages, and purchases are processed directly on Bitdefender's secure official website for safety and genuine verification.
            </p>

            {/* Feature Checklist for Vendor Purchase */}
            <ul className="space-y-4.5 mb-8 border-t border-slate-100 pt-6">
              <li className="flex items-start gap-3 text-left">
                <div className="shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                </div>
                <span className="text-xs text-slate-700 font-bold">100% Secure Transaction & SSL encryption</span>
              </li>
              <li className="flex items-start gap-3 text-left">
                <div className="shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                </div>
                <span className="text-xs text-slate-700 font-bold">Automatic 24/7 client updates & definition database sync</span>
              </li>
              <li className="flex items-start gap-3 text-left">
                <div className="shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                </div>
                <span className="text-xs text-slate-700 font-bold">Official Bitdefender customer ticket support</span>
              </li>
            </ul>

            {/* Redirect Action Button */}
            <a
              href={product.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: product.themeColor }}
              className="w-full py-4 text-white font-extrabold text-xs tracking-wider rounded-2xl text-center flex items-center justify-center gap-2 shadow-lg hover:brightness-95 hover:scale-[1.01] transition-all uppercase"
            >
              Configure & Purchase on Official Site <ExternalLink className="w-4 h-4" />
            </a>

            <div className="mt-4 text-center">
              <span className="text-[10px] font-bold text-slate-400 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Direct Download via Official Bitdefender Repositories
              </span>
            </div>

          </div>
        </div>

      </section>

      {/* 3. TECHNICAL SPECIFICATIONS */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-[32px] border border-slate-150 p-8 shadow-sm text-left">
          <h3 className="font-extrabold text-slate-900 text-lg mb-6 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" /> Technical Specifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {Object.keys(product.techSpecs).map((key) => (
              <div key={key} className="flex justify-between border-b border-slate-50 pb-3">
                <span className="text-xs text-slate-500 font-bold">{key}</span>
                <span className="text-xs text-slate-900 font-extrabold text-right">{product.techSpecs[key]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default function BitdefenderConfigurePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center font-mono">
        Loading Bitdefender Configurator...
      </div>
    }>
      <ConfigureContent />
    </Suspense>
  );
}
