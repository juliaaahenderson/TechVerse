'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Eye, Gauge, Check, ArrowRight, Laptop, Users, Headphones,
  HardDrive, ShieldCheck, Wifi, Bell
} from 'lucide-react';

export default function BitdefenderHubPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [selectedSetting, setSelectedSetting] = useState<'scan' | 'realtime' | 'vpn' | 'firewall'>('scan');

  const categories = ['All', 'Multi-Device & Family', 'Mobile & Mac', 'Privacy & Business'];

  // Reset selected product when category changes
  React.useEffect(() => {
    setActiveProductIndex(0);
  }, [activeCategory]);

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Advanced Threat Protection",
      desc: "Multi-layered defense against ransomware, malware & zero-day attacks.",
      bgDecoration: (
        <svg viewBox="0 0 100 100" className="absolute bottom-2 right-2 w-20 h-20 text-blue-500/10 pointer-events-none">
          <circle cx="20" cy="20" r="2.5" fill="currentColor" />
          <circle cx="40" cy="20" r="2.5" fill="currentColor" />
          <circle cx="60" cy="20" r="2.5" fill="currentColor" />
          <circle cx="80" cy="20" r="2.5" fill="currentColor" />
          <circle cx="20" cy="40" r="2.5" fill="currentColor" />
          <circle cx="40" cy="40" r="2.5" fill="currentColor" />
          <circle cx="60" cy="40" r="2.5" fill="currentColor" />
          <circle cx="80" cy="40" r="2.5" fill="currentColor" />
          <circle cx="20" cy="60" r="2.5" fill="currentColor" />
          <circle cx="40" cy="60" r="2.5" fill="currentColor" />
          <circle cx="60" cy="60" r="2.5" fill="currentColor" />
          <circle cx="80" cy="60" r="2.5" fill="currentColor" />
          <circle cx="20" cy="80" r="2.5" fill="currentColor" />
          <circle cx="40" cy="80" r="2.5" fill="currentColor" />
          <circle cx="60" cy="80" r="2.5" fill="currentColor" />
          <circle cx="80" cy="80" r="2.5" fill="currentColor" />
        </svg>
      )
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      title: "Privacy, Secured.",
      desc: "Protect your online privacy and your personal data with complete confidence.",
      bgDecoration: (
        <svg viewBox="0 0 120 120" className="absolute bottom-0 right-0 w-24 h-24 text-blue-500/10 pointer-events-none">
          <path d="M60 20 C 80 20, 100 25, 100 25 C 100 25, 100 70, 60 95 C 20 70, 20 25, 20 25 C 20 25, 40 20, 60 20 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="60" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      icon: <Gauge className="w-6 h-6 text-blue-600" />,
      title: "Performance Uncompromised",
      desc: "Powerful protection that won't slow you down.",
      bgDecoration: (
        <svg viewBox="0 0 120 120" className="absolute bottom-2 right-2 w-28 h-24 text-blue-500/10 pointer-events-none">
          <path d="M20 90 A 45 45 0 0 1 100 90" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 90 L85 45" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="60" cy="90" r="6" fill="currentColor" />
        </svg>
      )
    },
    {
      icon: <Laptop className="w-6 h-6 text-blue-600" />,
      title: "Protection for All Your Devices",
      desc: "One solution. Windows, macOS, Android, iOS and more.",
      bgDecoration: (
        <svg viewBox="0 0 120 120" className="absolute bottom-1 right-1 w-30 h-24 text-blue-500/10 pointer-events-none">
          {/* Laptop monitor */}
          <rect x="25" y="20" width="60" height="38" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M15 58 h80 v3 h-80 z" fill="currentColor" />
          {/* Smartphone */}
          <rect x="78" y="38" width="16" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Parental Control",
      desc: "Keep your children safe online with smart & easy-to-use tools.",
      bgDecoration: (
        <svg viewBox="0 0 120 120" className="absolute bottom-0 right-0 w-32 h-32 text-blue-500/10 pointer-events-none">
          {/* Shield outline */}
          <path d="M60 20 C 80 20, 100 25, 100 25 C 100 25, 100 70, 60 95 C 20 70, 20 25, 20 25 C 20 25, 40 20, 60 20 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* Family silhouettes inside */}
          <circle cx="48" cy="50" r="10" fill="currentColor" />
          <circle cx="72" cy="54" r="7" fill="currentColor" />
          <path d="M30 80 C30 68, 44 65, 48 65 C52 65, 66 68, 66 80 Z" fill="currentColor" />
          <path d="M58 80 C58 72, 68 70, 72 70 C76 70, 86 72, 86 80 Z" fill="currentColor" />
        </svg>
      )
    },
    {
      icon: <Headphones className="w-6 h-6 text-blue-600" />,
      title: "24/7 Expert Support",
      desc: "Real people. Real answers. Whenever you need us.",
      bgDecoration: (
        <svg viewBox="0 0 120 120" className="absolute bottom-2 right-2 w-24 h-24 text-blue-500/10 pointer-events-none">
          <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 6" />
          <text x="60" y="66" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">24/7</text>
        </svg>
      )
    }
  ];

  const productLineup = [
    {
      slug: "family-pack",
      name: "Bitdefender Family Pack",
      tagline: "Total protection for your household devices.",
      category: "Multi-Device & Family",
      devices: "Up to 15 Devices",
      os: "Windows, macOS, iOS, Android",
      benefits: [
        "Advanced Parental Controls to protect kids online",
        "Cross-platform protection for laptops, tablets, and phones",
        "Includes VPN & Password Manager utilities"
      ],
      color: "purple"
    },
    {
      slug: "mac",
      name: "Bitdefender Antivirus for Mac",
      tagline: "Advanced security built specifically for macOS.",
      category: "Mobile & Mac",
      devices: "1, 3, or 5 Devices",
      os: "macOS only",
      benefits: [
        "Time Machine protection from ransomware",
        "Blocks unwanted adware and malicious popups",
        "Secures your web browsing experience seamlessly"
      ],
      color: "blue"
    },
    {
      slug: "android",
      name: "Bitdefender Mobile Security (Android)",
      tagline: "Ultra-responsive virus and privacy shield.",
      category: "Mobile & Mac",
      devices: "1 Device",
      os: "Android only",
      benefits: [
        "App Lock with PIN or fingerprint protection",
        "Real-time web protection against online scams",
        "Smart WearOS smartwatch security features"
      ],
      color: "emerald"
    },
    {
      slug: "ios",
      name: "Bitdefender Mobile Security (iOS)",
      tagline: "Vulnerability analysis and connection encryption.",
      category: "Mobile & Mac",
      devices: "1 Device",
      os: "iOS / iPadOS",
      benefits: [
        "Advanced web scan alert for suspicious links",
        "Verifies security posture of your iOS system configuration",
        "Email privacy breach detection console"
      ],
      color: "indigo"
    },
    {
      slug: "office",
      name: "Bitdefender Small Office Security",
      tagline: "High-grade business protection with cloud control.",
      category: "Privacy & Business",
      devices: "10 or 20 Devices",
      os: "Windows, macOS, iOS, Android",
      benefits: [
        "Centrally managed cloud console for ease of operations",
        "Prevents data leaks and customer records breaches",
        "Secures online banking transactions and payments"
      ],
      color: "red"
    },
    {
      slug: "vpn",
      name: "Bitdefender Premium VPN",
      tagline: "Secure digital connection with unlimited bandwidth.",
      category: "Privacy & Business",
      devices: "Up to 10 Devices",
      os: "Windows, macOS, iOS, Android",
      benefits: [
        "Complete anonymity with unlimited encrypted traffic",
        "Fastest speeds with over 4,000 servers worldwide",
        "Secures credentials when connecting to public Wi-Fi hotspots"
      ],
      color: "amber"
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? productLineup 
    : productLineup.filter(p => p.category === activeCategory);

  const plans = [
    {
      slug: "antivirus-plus",
      name: "Bitdefender Antivirus Plus",
      desc: "Essential protection for Windows PCs.",
      color: "blue",
      titleColor: "text-[#1d4ed8] font-bold",
      bgClass: "bg-gradient-to-b from-[#f3f7ff] via-white to-white border-[#d2e0ff]",
      btnClass: "border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white bg-white",
      hoverShadow: "hover:shadow-blue-500/5 hover:border-blue-300",
      tag: null,
      bullets: [
        "Advanced threat protection",
        "Web attack prevention",
        "Lightweight performance"
      ],
      illustration: (
        <svg viewBox="0 0 180 100" className="w-full h-full">
          <defs>
            <linearGradient id="shieldBgGradBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0070f3" />
              <stop offset="100%" stopColor="#002d84" />
            </linearGradient>
            <linearGradient id="borderBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <filter id="glowBlue" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#3b82f6" floodOpacity="0.8" />
            </filter>
          </defs>
          
          {/* Laptop Base Grid / Screen */}
          <rect x="36" y="24" width="108" height="54" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="2" />
          <rect x="39" y="27" width="102" height="48" fill="#030712" />
          <path d="M24 78 h132 v3 a3 3 0 0 1-3 3 h-126 a3 3 0 0 1-3-3 z" fill="#1f2937" />
          
          {/* Exact Shield Shape with custom top peak & Georgia Serif B */}
          <g transform="translate(20, -5)">
            <path 
              d="M70 18 C78 19.5, 93 25, 93 25 C93 25, 93 58, 70 78 C47 58, 47 25, 47 25 C47 25, 62 19.5, 70 18 Z" 
              fill="url(#shieldBgGradBlue)" 
              stroke="url(#borderBlueGrad)" 
              strokeWidth="2.5" 
              filter="url(#glowBlue)" 
            />
            {/* Center Georgia Serif letter B */}
            <text x="70" y="56" textAnchor="middle" fill="#ffffff" fontSize="27" fontWeight="bold" fontFamily="Georgia, 'Times New Roman', serif">B</text>
          </g>
        </svg>
      )
    },
    {
      slug: "internet-security",
      name: "Bitdefender Internet Security",
      desc: "Complete protection for PC, Mac & mobile.",
      color: "purple",
      titleColor: "text-[#6b21a8] font-bold",
      bgClass: "bg-gradient-to-b from-[#f8f4ff] via-white to-white border-[#ecd5ff]",
      btnClass: "bg-[#7e22ce] hover:bg-[#6b21a8] text-white border-transparent shadow-md shadow-purple-600/10 hover:scale-[1.01]",
      hoverShadow: "hover:shadow-purple-500/15 hover:border-purple-300",
      tag: "BEST VALUE",
      bullets: [
        "Everything in Antivirus Plus",
        "Multi-layer ransomware protection",
        "Safe Online Banking & Shopping",
        "Privacy firewall"
      ],
      illustration: (
        <svg viewBox="0 0 180 100" className="w-full h-full">
          <defs>
            <linearGradient id="shieldBgGradPurple" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#4a044e" />
            </linearGradient>
            <linearGradient id="borderPurpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d8b4fe" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <filter id="glowPurple" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#a855f7" floodOpacity="0.8" />
            </filter>
          </defs>
          
          {/* Laptop back screen */}
          <rect x="25" y="24" width="85" height="50" rx="3" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="28" y="27" width="79" height="44" fill="#030712" />
          <path d="M15 74 h105 v3 a3 3 0 0 1-3 3 h-99 a3 3 0 0 1-3-3 z" fill="#1f2937" />
          
          {/* Mobile phone screen silhouette */}
          <rect x="112" y="32" width="22" height="42" rx="3" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="114" y="35" width="18" height="36" fill="#030712" />
          
          {/* Exact Shield Shape with custom top peak & Georgia Serif B */}
          <g transform="translate(14, -5)">
            <path 
              d="M70 18 C78 19.5, 93 25, 93 25 C93 25, 93 58, 70 78 C47 58, 47 25, 47 25 C47 25, 62 19.5, 70 18 Z" 
              fill="url(#shieldBgGradPurple)" 
              stroke="url(#borderPurpleGrad)" 
              strokeWidth="2.5" 
              filter="url(#glowPurple)" 
            />
            {/* Center Georgia Serif letter B */}
            <text x="70" y="56" textAnchor="middle" fill="#ffffff" fontSize="27" fontWeight="bold" fontFamily="Georgia, 'Times New Roman', serif">B</text>
          </g>
        </svg>
      )
    },
    {
      slug: "total-security",
      name: "Bitdefender Total Security",
      desc: "Our ultimate protection for you & your family.",
      color: "red",
      titleColor: "text-[#b91c1c] font-bold",
      bgClass: "bg-gradient-to-b from-[#fff4f4] via-white to-white border-[#fcd2d7]",
      btnClass: "border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white bg-white",
      hoverShadow: "hover:shadow-red-500/5 hover:border-red-300",
      tag: null,
      bullets: [
        "Everything in Internet Security",
        "Device optimization",
        "Parental control",
        "Cross-platform protection"
      ],
      illustration: (
        <svg viewBox="0 0 180 100" className="w-full h-full">
          <defs>
            <linearGradient id="shieldBgGradRed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>
            <linearGradient id="borderRedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fca5a5" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <filter id="glowRed" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#ef4444" floodOpacity="0.8" />
            </filter>
          </defs>
          
          {/* Laptop background */}
          <rect x="25" y="24" width="85" height="50" rx="3" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="28" y="27" width="79" height="44" fill="#030712" />
          <path d="M15 74 h105 v3 a3 3 0 0 1-3 3 h-99 a3 3 0 0 1-3-3 z" fill="#1f2937" />
          
          {/* Multi-devices side */}
          <rect x="112" y="32" width="22" height="42" rx="3" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="114" y="35" width="18" height="36" fill="#030712" />
          
          {/* Exact Shield Shape with custom top peak & Georgia Serif B */}
          <g transform="translate(14, -5)">
            <path 
              d="M70 18 C78 19.5, 93 25, 93 25 C93 25, 93 58, 70 78 C47 58, 47 25, 47 25 C47 25, 62 19.5, 70 18 Z" 
              fill="url(#shieldBgGradRed)" 
              stroke="url(#borderRedGrad)" 
              strokeWidth="2.5" 
              filter="url(#glowRed)" 
            />
            {/* Center Georgia Serif letter B */}
            <text x="70" y="56" textAnchor="middle" fill="#ffffff" fontSize="27" fontWeight="bold" fontFamily="Georgia, 'Times New Roman', serif">B</text>
          </g>
        </svg>
      )
    },
    {
      slug: "premium-security",
      name: "Bitdefender Premium Security",
      desc: "The most advanced protection for digital life.",
      color: "amber",
      titleColor: "text-[#d97706] font-bold",
      bgClass: "bg-gradient-to-b from-[#fff7f0] via-white to-white border-[#fce2c5]",
      btnClass: "border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white bg-white",
      hoverShadow: "hover:shadow-amber-500/5 hover:border-amber-300",
      tag: null,
      bullets: [
        "Everything in Total Security",
        "Identity theft protection",
        "Premium VPN (200MB/day)",
        "24/7 priority support"
      ],
      illustration: (
        <svg viewBox="0 0 180 100" className="w-full h-full">
          <defs>
            <linearGradient id="shieldBgGradAmber" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="borderAmberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="glowAmber" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.8" />
            </filter>
          </defs>
          
          {/* Laptop background */}
          <rect x="25" y="24" width="85" height="50" rx="3" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="28" y="27" width="79" height="44" fill="#030712" />
          <path d="M15 74 h105 v3 a3 3 0 0 1-3 3 h-99 a3 3 0 0 1-3-3 z" fill="#1f2937" />
          
          {/* Multi-devices side */}
          <rect x="112" y="32" width="22" height="42" rx="3" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="114" y="35" width="18" height="36" fill="#030712" />
          
          {/* Exact Shield Shape with custom top peak & Georgia Serif B */}
          <g transform="translate(14, -5)">
            <path 
              d="M70 18 C78 19.5, 93 25, 93 25 C93 25, 93 58, 70 78 C47 58, 47 25, 47 25 C47 25, 62 19.5, 70 18 Z" 
              fill="url(#shieldBgGradAmber)" 
              stroke="url(#borderAmberGrad)" 
              strokeWidth="2.5" 
              filter="url(#glowAmber)" 
            />
            {/* Center Georgia Serif letter B */}
            <text x="70" y="56" textAnchor="middle" fill="#ffffff" fontSize="27" fontWeight="bold" fontFamily="Georgia, 'Times New Roman', serif">B</text>
          </g>
        </svg>
      )
    }
  ];

  const comparisonCategories = [
    {
      title: "Core Protection",
      features: [
        { name: "Real-time Data Protection", values: ["Yes", "Yes", "Yes", "Yes"] },
        { name: "Advanced Threat Defense", values: ["Yes", "Yes", "Yes", "Yes"] },
        { name: "Multi-Layer Ransomware Protection", values: ["Yes", "Yes", "Yes", "Yes"] },
        { name: "Web Attack Prevention", values: ["Yes", "Yes", "Yes", "Yes"] },
        { name: "Anti-Phishing & Anti-Fraud Protection", values: ["Yes", "Yes", "Yes", "Yes"] }
      ]
    },
    {
      title: "Privacy & Connectivity",
      features: [
        { name: "Privacy Firewall", values: ["No", "Yes", "Yes", "Yes"] },
        { name: "Parental Control", values: ["No", "Yes", "Yes", "Yes"] },
        { name: "Webcam & Microphone Protection", values: ["No", "Yes", "Yes", "Yes"] },
        { name: "Secure VPN", values: ["200 MB/day", "200 MB/day", "200 MB/day", "Unlimited VPN"] }
      ]
    },
    {
      title: "Performance & Premium",
      features: [
        { name: "OneClick Device Optimizer", values: ["No", "No", "Yes", "Yes"] },
        { name: "Identity Theft Protection", values: ["No", "No", "No", "Yes"] },
        { name: "Priority Support 24/7", values: ["No", "No", "No", "Yes"] }
      ]
    }
  ];

  return (
    <div className="bg-[#fcfdfd] text-slate-900 min-h-screen font-sans">
      
      {/* 1. HERO SECTION - MATCHING HOME PAGE THEME */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-white pt-12 pb-24 px-6">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Futuristic Bitdefender Security Showcase.jpeg" 
            alt="Futuristic Bitdefender Security Showcase" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Hero Left Content */}
          <div className="max-w-2xl flex flex-col items-start text-left">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900"
            >
              World-leading <br />
              cybersecurity. <br />
              <span className="text-red-500 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Built for what matters.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              Bitdefender delivers unmatched protection for you, your family and your digital life — across every device.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="#plans"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all hover:translate-y-[-2px]"
              >
                View Plans & Pricing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/bitdefender/blog"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg flex items-center gap-2 transition-all hover:translate-y-[-2px]"
              >
                Cybersecurity Blog <ArrowRight className="w-5 h-5 text-red-400" />
              </Link>
            </motion.div>

            {/* Sub-bar below Hero buttons */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-16 pt-8 border-t border-slate-200 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-red-500" /> Advanced Threat Defense</span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Multi-Layer Ransomware Shield
              </span>
              <span className="flex items-center gap-2"><Eye className="w-4 h-4 text-red-500" /> Privacy Protection</span>
              <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-red-500" /> 24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-white px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">Security features designed to protect</h2>
            <p className="text-slate-500 text-base font-semibold">Powerful protection, privacy, and performance — all in one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-10 rounded-[32px] border flex flex-col text-left space-y-5 relative overflow-hidden transition-all duration-300 bg-gradient-to-b from-[#f3f7ff] to-white border-[#bfdbfe] shadow-[0_10px_25px_rgba(59,130,246,0.06)] hover:border-blue-400 hover:shadow-lg"
              >
                {/* SVG Corner Background Illustration Decoration */}
                {feat.bgDecoration}

                {/* Circular Icon Container */}
                <div className="w-14 h-14 bg-blue-50/70 rounded-full flex items-center justify-center relative">
                  {feat.icon}
                </div>

                {/* Text Layout */}
                <div className="space-y-3.5 relative z-10 pr-6">
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-snug">
                    {feat.title}
                  </h3>
                  
                  {/* Short blue horizontal bar accent */}
                  <div className="w-8 h-1 bg-blue-600 rounded" />
                  
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 2B. DETAILED PRODUCT PORTFOLIO / LINEUP (NEW PREMIUM SECTION) */}
      <section className="py-20 bg-slate-50/50 px-6 relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">Explore the Bitdefender Product Lineup</h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto font-semibold">
              Choose from our dedicated tools custom-built to secure specific platforms, protect multiple family devices, or secure small office operations.
            </p>

            {/* Category Filter Tabs */}
            <div className="inline-flex bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all relative ${
                    activeCategory === cat 
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-250/20' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Split-Screen Interactive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            
            {/* Left Side: Live Visual Highlight Showcase Panel */}
            <div className="lg:col-span-5 flex flex-col">
              <AnimatePresence mode="wait">
                {(() => {
                  const activeProd = filteredProducts[activeProductIndex] || filteredProducts[0];
                  if (!activeProd) return null;

                  const colorMap: { [key: string]: any } = {
                    purple: { bg: 'from-purple-600 to-indigo-700', text: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-300', monitorBg: 'bg-purple-950/40', monitorBorder: 'border-purple-400/20' },
                    blue: { bg: 'from-blue-600 to-indigo-700', text: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-300', monitorBg: 'bg-blue-950/40', monitorBorder: 'border-blue-400/20' },
                    emerald: { bg: 'from-emerald-600 to-teal-700', text: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-300', monitorBg: 'bg-emerald-950/40', monitorBorder: 'border-emerald-400/20' },
                    indigo: { bg: 'from-indigo-600 to-violet-700', text: 'text-indigo-400', badge: 'bg-indigo-500/10 text-indigo-300', monitorBg: 'bg-indigo-950/40', monitorBorder: 'border-indigo-400/20' },
                    red: { bg: 'from-red-600 to-rose-700', text: 'text-red-400', badge: 'bg-red-500/10 text-red-300', monitorBg: 'bg-red-950/40', monitorBorder: 'border-red-400/20' },
                    amber: { bg: 'from-amber-600 to-orange-700', text: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-300', monitorBg: 'bg-amber-950/40', monitorBorder: 'border-amber-400/20' }
                  };
                  const activeTheme = colorMap[activeProd.color] || colorMap.blue;

                  return (
                    <motion.div
                      key={activeProd.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className={`flex-1 rounded-[36px] bg-gradient-to-br ${activeTheme.bg} text-white p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[380px] lg:min-h-full`}
                    >
                      {/* Abstract glowing sphere decoration */}
                      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10.5px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/15 ${activeTheme.badge}`}>
                            {activeProd.category}
                          </span>
                          <span className="text-xs font-black text-white/95 uppercase tracking-wide">Active Shield</span>
                        </div>

                        <div className="space-y-2.5">
                          <h3 className="text-3xl font-black tracking-tight leading-tight">{activeProd.name}</h3>
                          <p className="text-[15px] text-slate-100 font-bold leading-relaxed">{activeProd.tagline}</p>
                        </div>

                        {/* List of benefits */}
                        <ul className="space-y-3.5 pt-5 border-t border-white/10">
                          {activeProd.benefits.map((benefit: string, bIdx: number) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <div className="shrink-0 mt-1">
                                <div className="w-4.5 h-4.5 rounded-full bg-white/15 text-white flex items-center justify-center">
                                  <Check className="w-2.5 h-2.5 stroke-[4]" />
                                </div>
                              </div>
                              <span className="text-sm text-white font-extrabold leading-normal">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Interactive Premium HUD Scanner / Visualizer */}
                      <div className={`rounded-3xl p-6 mt-6 relative overflow-hidden backdrop-blur-sm shadow-inner ${activeTheme.monitorBg} border ${activeTheme.monitorBorder}`}>
                        <div className="flex items-center justify-between mb-4 relative z-10">
                          <span className="text-[9.5px] font-black tracking-widest text-white uppercase opacity-95">Live Security Monitor</span>
                          <span className="text-[9.5px] font-extrabold bg-white/15 border border-white/25 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> SYSTEM SECURE
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 relative z-10">
                          {/* Scanning Circular Radar Graphic */}
                          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                            <div className="absolute inset-0 rounded-full border border-white/30 animate-[spin_4s_linear_infinite]" />
                            <div className="absolute inset-2 rounded-full border border-white/15" />
                            <div className="absolute w-2 h-2 bg-white rounded-full animate-ping" />
                            <Shield className="w-5 h-5 text-white" />
                          </div>
                          
                          {/* Dynamic Specs details */}
                          <div className="space-y-1">
                            <span className="text-[11px] font-extrabold text-white block">Threat Database: v42.9.2 (Active)</span>
                            <div className="flex gap-2 items-center">
                              <span className="text-[9.5px] font-bold text-white/90">Monitored: 580k+ items</span>
                              <span className="text-[9.5px] text-white/55 font-black">•</span>
                              <span className="text-[9.5px] font-bold text-white/90">Scan Latency: 1.2ms</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Pulsing abstract laser scanner glow overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/35 to-transparent animate-[pulse_2.5s_infinite]" />
                      </div>

                      {/* Footer Details */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
                        <div>
                          <span className="text-xs font-black text-white/80 block uppercase tracking-wide">Supported System</span>
                          <span className="text-sm font-black mt-1.5 block text-white">{activeProd.os}</span>
                        </div>
                        <div>
                          <span className="text-xs font-black text-white/80 block uppercase tracking-wide">Capacity</span>
                          <span className="text-sm font-black mt-1.5 block text-right text-white">{activeProd.devices}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* Right Side: Accordion Lists of products */}
            <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
              {filteredProducts.map((prod, idx) => {
                const isActive = activeProductIndex === idx;
                const colorMap: { [key: string]: any } = {
                  purple: { border: 'border-purple-200', text: 'text-purple-600', dot: 'bg-purple-600', btn: 'bg-[#7e22ce] hover:bg-[#6b21a8] text-white' },
                  blue: { border: 'border-blue-200', text: 'text-blue-600', dot: 'bg-blue-600', btn: 'bg-blue-600 hover:bg-blue-700 text-white' },
                  emerald: { border: 'border-emerald-200', text: 'text-emerald-600', dot: 'bg-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700 text-white' },
                  indigo: { border: 'border-indigo-200', text: 'text-indigo-600', dot: 'bg-indigo-600', btn: 'bg-indigo-600 hover:bg-indigo-700 text-white' },
                  red: { border: 'border-red-200', text: 'text-red-600', dot: 'bg-red-600', btn: 'bg-red-600 hover:bg-red-700 text-white' },
                  amber: { border: 'border-amber-200', text: 'text-amber-600', dot: 'bg-amber-600', btn: 'bg-amber-600 hover:bg-amber-700 text-white' }
                };
                const style = colorMap[prod.color] || colorMap.blue;

                return (
                  <div
                    key={prod.name}
                    onClick={() => setActiveProductIndex(idx)}
                    className={`cursor-pointer rounded-3xl border text-left p-6 transition-all duration-350 bg-white ${
                      isActive 
                        ? `shadow-lg ${style.border} translate-x-1` 
                        : 'border-slate-100 hover:border-slate-200 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center ${
                          isActive ? `${style.dot} text-white` : 'bg-slate-50 text-slate-400'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900">{prod.name}</h4>
                          <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{prod.category}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-slate-800 bg-slate-50 border border-slate-150 px-2.5 py-1 rounded-md hidden sm:block">
                          {prod.os}
                        </span>
                        
                        <div className={`w-2.5 h-2.5 rounded-full ${isActive ? style.dot : 'bg-slate-200'}`} />
                      </div>
                    </div>

                    {/* Accordion content */}
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                      >
                        <p className="text-xs text-slate-500 font-semibold max-w-md">
                          {prod.tagline} • Designed for {prod.devices} capacity operations.
                        </p>
                        <Link
                          href={`/bitdefender/configure?product=${prod.slug}`}
                          className={`inline-flex items-center gap-1.5 px-4.5 py-2.5 font-bold text-xs rounded-xl shadow-sm transition-all duration-300 shrink-0 ${style.btn}`}
                        >
                          Configure Product <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3. PRODUCT CHOICE / PLANS SECTION */}
      <section id="plans" className="py-20 bg-slate-50/50 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">Choose your protection</h2>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`rounded-[32px] border p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-350 ${p.bgClass} ${p.hoverShadow}`}
              >
                {p.tag && (
                  <div className="absolute top-0 left-0 bg-[#7e22ce] text-white font-extrabold text-[8.5px] tracking-wider px-3.5 py-1.5 rounded-br-2xl uppercase">
                    {p.tag}
                  </div>
                )}

                <div>
                  {/* Card Title */}
                  <h3 className={`text-xl font-bold text-left leading-tight mt-3 ${p.titleColor}`}>{p.name}</h3>
                  <p className="text-[11px] text-slate-500 text-left mt-1.5 font-medium leading-relaxed">{p.desc}</p>

                  {/* Device Illustration Showcase */}
                  <div className="my-5 w-full aspect-[16/9] flex items-center justify-center relative">
                    {p.illustration}
                  </div>

                  {/* Bullet checklist */}
                  <ul className="space-y-4 mb-8 border-t border-slate-200/50 pt-6">
                    {p.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-left">
                        <div className="shrink-0 mt-0.5">
                          <Check className={`w-3.5 h-3.5 stroke-[3.5] ${
                            p.color === 'blue' ? 'text-blue-600' :
                            p.color === 'purple' ? 'text-purple-600' :
                            p.color === 'red' ? 'text-red-600' : 'text-amber-600'
                          }`} />
                        </div>
                        <span className="text-xs text-slate-600 font-semibold leading-tight">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Button */}
                <Link 
                  href={`/bitdefender/plans/${p.slug}`} 
                  className={`w-full py-3.5 rounded-2xl text-xs font-bold transition-all text-center border block hover:shadow-sm tracking-wide ${p.btnClass}`}
                >
                  View Plan
                </Link>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ACTIVATION & SUBSCRIPTION JOURNEY */}
      <section id="activation" className="py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] px-6 relative z-10 border-t border-slate-200/60 overflow-hidden">
        {/* Subtle decorative background blur shapes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Activation & Subscription Journey
            </h2>
            <p className="text-slate-500 text-base font-semibold">
              Step-by-step guidance to activate and manage your shield license.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Log into Bitdefender Central", 
                desc: "Open your web browser, navigate to central.bitdefender.com and log in (or create a secure profile)." 
              },
              { 
                step: "02", 
                title: "Input License Key", 
                desc: "Locate code card (from TechVerse order receipt/email) and enter code sequence under 'My Subscriptions' pane." 
              },
              { 
                step: "03", 
                title: "Bind Subscription Scope", 
                desc: "Validate subscription plan parameters (active nodes count, validity timeline, region lock profiles)." 
              },
              { 
                step: "04", 
                title: "Deploy Software Suite", 
                desc: "Navigate to 'My Devices', trigger download commands on local desktop/smartphone and sign in to inherit active license." 
              }
            ].map((stepItem, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between relative shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-red-300 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-200 group-hover:text-red-500 transition-colors">
                      {stepItem.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs border border-red-100">
                      ✓
                    </div>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="w-full h-1 bg-slate-100 group-hover:bg-red-500 rounded-full mt-6 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONFIGURATION DASHBOARD (PREMIUM LIGHT MODE) */}
      <section id="setup" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white px-6 relative z-10 overflow-hidden border-t border-slate-200/80">
        {/* Subtle Background Radial Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-red-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Configuration Dashboard
            </h2>
            <p className="text-slate-500 text-base font-semibold max-w-xl mx-auto">
              Granular adjustment controls and live threat telemetry parameters for Bitdefender shield engines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Rail Controls (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3.5">
              {[
                { 
                  id: 'scan' as const, 
                  label: 'First System Scan', 
                  desc: 'Initiate cache directory diagnostics', 
                  icon: <HardDrive className="w-5 h-5" />,
                  tag: 'Diagnostics',
                  activeStyle: 'bg-white border-red-500 text-slate-900 shadow-xl shadow-red-500/8 ring-1 ring-red-500/20'
                },
                { 
                  id: 'realtime' as const, 
                  label: 'Real-time Protection', 
                  desc: 'Behavior heuristics parameters', 
                  icon: <ShieldCheck className="w-5 h-5" />,
                  tag: 'Threat Engine',
                  activeStyle: 'bg-white border-emerald-500 text-slate-900 shadow-xl shadow-emerald-500/8 ring-1 ring-emerald-500/20'
                },
                { 
                  id: 'vpn' as const, 
                  label: 'VPN & Encrypted Proxy', 
                  desc: 'Secure transit channels configuration', 
                  icon: <Wifi className="w-5 h-5" />,
                  tag: 'Traffic Shield',
                  activeStyle: 'bg-white border-blue-500 text-slate-900 shadow-xl shadow-blue-500/8 ring-1 ring-blue-500/20'
                },
                { 
                  id: 'firewall' as const, 
                  label: 'Notification Settings', 
                  desc: 'Toggle scanning status profiles', 
                  icon: <Bell className="w-5 h-5" />,
                  tag: 'Alert Profiles',
                  activeStyle: 'bg-white border-amber-500 text-slate-900 shadow-xl shadow-amber-500/8 ring-1 ring-amber-500/20'
                }
              ].map(item => {
                const isActive = selectedSetting === item.id;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => setSelectedSetting(item.id)}
                    className={`w-full text-left p-5.5 rounded-3xl border transition-all duration-300 flex items-center justify-between relative overflow-hidden group ${
                      isActive 
                        ? item.activeStyle
                        : 'bg-white/80 border-slate-200/90 text-slate-600 hover:border-slate-300 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-red-50 text-red-600 border border-red-100' 
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-150 group-hover:text-slate-900'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 tracking-tight">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-0.5">{item.desc}</div>
                      </div>
                    </div>

                    <div className="relative z-10 shrink-0">
                      <span className={`text-[9.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isActive 
                          ? 'bg-slate-900 text-white border-slate-900' 
                          : 'bg-slate-100 text-slate-500 border-slate-200 group-hover:text-slate-700'
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Display Panel - Light Mode Diagnostics Hub (8 cols) */}
            <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-8 lg:p-10 relative flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              {(() => {
                const settingDetails = {
                  scan: {
                    title: "First System Scan Diagnostics",
                    subtitle: "Pre-indexes file hashes to bypass safe routines and maximize throughput.",
                    badge: "CACHE ENGINE ACTIVE",
                    color: "text-red-600",
                    badgeBg: "bg-red-50 text-red-600 border-red-200/60",
                    steps: [
                      { num: "01", main: "Initialize Protection Pane", detail: "Open main interface -> click Protection -> select System Scan module." },
                      { num: "02", main: "Map File Hashes & Memory", detail: "Scanner maps system drive blocks and indexes clean operating system files." },
                      { num: "03", main: "Register Verification Pass", detail: "Bitdefender logs cryptographic file hashes in secure local cache memory." },
                      { num: "04", main: "Activate Fast Rescan", detail: "Subsequent background scans bypass cached safe files, reducing CPU load by 70%." }
                    ]
                  },
                  realtime: {
                    title: "Behavior Heuristics Core Config",
                    subtitle: "Continuous real-time memory monitoring to detect zero-day ransomware loops.",
                    badge: "HEURISTICS SHIELD ON",
                    color: "text-emerald-600",
                    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
                    steps: [
                      { num: "01", main: "Access Threat Defense", detail: "Navigate to Advanced Threat Defense settings in the protection hub." },
                      { num: "02", main: "Set Sensitivity Level", detail: "Select 'Standard' or 'High Assurance' threat detection parameters." },
                      { num: "03", main: "Enable Auto-Remediation", detail: "Toggle automatic ransomware file restoration & shadow backup locks." },
                      { num: "04", main: "Whitelist Safe Certificates", detail: "Add verified developer certificates to prevent sandbox false positives." }
                    ]
                  },
                  vpn: {
                    title: "VPN Encryption Transit Setup",
                    subtitle: "Military-grade 256-bit AES tunnel protecting all outbound browser traffic.",
                    badge: "ENCRYPTED TUNNEL READY",
                    color: "text-blue-600",
                    badgeBg: "bg-blue-50 text-blue-600 border-blue-200/60",
                    steps: [
                      { num: "01", main: "Launch VPN Companion", detail: "Open Bitdefender VPN module from toolbar or desktop shortcut." },
                      { num: "02", main: "Select Optimal Server", detail: "Choose manual ultra-fast location node or rely on Smart Auto-Route." },
                      { num: "03", main: "Engage Kill Switch", detail: "Enable Kill Switch to instantly drop packets if internet connection fluctuates." },
                      { num: "04", main: "Auto-Protect Public Wi-Fi", detail: "Set automatic VPN activation triggers when connecting to untrusted networks." }
                    ]
                  },
                  firewall: {
                    title: "Alert Notification Profiles",
                    subtitle: "Context-aware profile manager suppressing popups during gaming or work.",
                    badge: "SILENT MODE ENABLED",
                    color: "text-amber-600",
                    badgeBg: "bg-amber-50 text-amber-700 border-amber-200/60",
                    steps: [
                      { num: "01", main: "Open Settings Profiles", detail: "Access Bitdefender profiles configuration -> select Active Mode." },
                      { num: "02", main: "Configure Gaming / Work Mode", detail: "Enable automatic detection for full-screen applications and media streaming." },
                      { num: "03", main: "Postpone Background Tasks", detail: "Defer scheduled system scans and updates until your session completes." },
                      { num: "04", main: "Enable Silent Log Mode", detail: "Redirect security alerts to the background event log without interrupting your screen." }
                    ]
                  }
                };
                const activeDetails = settingDetails[selectedSetting];

                return (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedSetting}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Panel Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-6">
                        <div>
                          <h3 className={`text-2xl font-extrabold tracking-tight ${activeDetails.color}`}>
                            {activeDetails.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1 leading-relaxed">
                            {activeDetails.subtitle}
                          </p>
                        </div>
                        <span className={`self-start sm:self-center text-[10px] font-black tracking-wider px-3.5 py-1.5 rounded-full border ${activeDetails.badgeBg} shrink-0`}>
                          {activeDetails.badge}
                        </span>
                      </div>

                      {/* Interactive Step Cards Sequence */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeDetails.steps.map((st, idx) => (
                          <div 
                            key={idx} 
                            className="bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 hover:bg-white rounded-2xl p-5 transition-all duration-300 space-y-2 group shadow-xs hover:shadow-md"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-black text-slate-400 group-hover:text-red-600 transition-colors">
                                STEP {st.num}
                              </span>
                              <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-red-500 animate-pulse' : 'bg-slate-300'}`} />
                            </div>
                            <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-red-600 transition-colors">
                              {st.main}
                            </h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                              {st.detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Diagnostic Light Footer */}
                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                        <div className="flex items-center gap-2 text-slate-500 font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Status: Shield Operational</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-full font-bold text-[11px]">
                            Engine v26.0
                          </span>
                          <span className="px-3 py-1 bg-red-50 border border-red-100 text-red-600 rounded-full font-bold text-[11px]">
                            Live Telemetry Active
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREMIUM PLAN COMPARISON GRID */}
      <section id="compare" className="py-20 bg-white border-t border-slate-100 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">Compare plans side-by-side</h2>
            <p className="text-slate-500 text-base max-w-lg mx-auto font-semibold">
              Take a closer look at the detailed plan characteristics to find the optimal security coverage for your workflows.
            </p>
          </div>

          {/* Desktop/Tablet comparison table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200/80 bg-slate-50/20 shadow-sm min-w-full">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200/60 bg-slate-50/50">
                  <th className="p-6 text-sm font-bold text-slate-400 w-1/3">Core Features</th>
                  <th className="p-6 text-xs font-black uppercase text-[#1d4ed8] tracking-wider text-center">Antivirus Plus</th>
                  <th className="p-6 text-xs font-black uppercase text-[#6b21a8] tracking-wider text-center">Internet Security</th>
                  <th className="p-6 text-xs font-black uppercase text-[#b91c1c] tracking-wider text-center">Total Security</th>
                  <th className="p-6 text-xs font-black uppercase text-[#d97706] tracking-wider text-center">Premium Security</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-slate-100/40 border-y border-slate-200/50">
                      <td colSpan={5} className="p-4 pl-6 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                        {category.title}
                      </td>
                    </tr>
                    {category.features.map((feat, featIdx) => (
                      <tr key={featIdx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="p-5 pl-6 text-xs sm:text-sm text-slate-700 font-bold">{feat.name}</td>
                        {feat.values.map((val, valIdx) => {
                          const isYes = val === "Yes";
                          const isNo = val === "No";
                          return (
                            <td key={valIdx} className="p-5 text-center text-xs sm:text-sm font-bold">
                              {isYes ? (
                                <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              ) : isNo ? (
                                <span className="text-slate-300">—</span>
                              ) : (
                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-black ${
                                  valIdx === 3 ? 'bg-amber-100 text-amber-700 border border-amber-200/50' : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {val}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 7. TROUBLESHOOTING & SUPPORT FAQ (PREMIUM LIGHT MODE) */}
      <section id="troubleshoot" className="py-24 bg-white px-6 relative z-10 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Troubleshooting & Support
            </h2>
            <p className="text-slate-500 text-base font-semibold">
              Resolution guides for common installation, connectivity, and activation questions.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Installation failed or interrupted",
                solution: "This typically happens due to pre-existing security products, leftover installation remnants, or lack of administrator permissions. First, run the official Bitdefender Uninstall Tool to scrub previous records, restart your computer, then execute the downloaded installer as an Administrator."
              },
              {
                title: "Activation code not working / already used",
                solution: "Activation codes are one-time use tokens to bind subscription licenses to your Bitdefender Central Account. Once bound, you do not need to re-enter it on every device. Simply log into the Bitdefender app using your registered Central account credentials to inherit the active subscription license."
              },
              {
                title: "VPN connection dropping or failing to connect",
                solution: "VPN connectivity issues are usually caused by local network restrictions, firewalls, or strict router configurations. Try toggling between UDP and TCP protocols in the Bitdefender VPN application settings, or whitelist Bitdefender processes inside your third-party firewall/modem configurations."
              },
              {
                title: "Computer feels slow after scanning",
                solution: "During the first scan, Bitdefender builds an index cache of safe files to speed up subsequent scans. To optimize system resources, configure the OneClick Optimizer tool inside Bitdefender Total Security or schedule deep system scans during idle or off-peak hours."
              }
            ].map((issue, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-slate-50/80 via-white to-slate-50/40 border border-slate-200/80 hover:border-slate-300 rounded-3xl p-7 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-red-600/20">
                    Q
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-extrabold text-base text-slate-900 tracking-tight leading-snug">
                      {issue.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed bg-white/80 border border-slate-150 p-4.5 rounded-2xl shadow-2xs">
                      {issue.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
