'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Shield, Check, ArrowRight, ExternalLink, Lock, Wifi, 
  Eye, Gauge, Laptop, Smartphone, Monitor, Server, 
  Users, Headphones, Zap, Globe, Database, Cpu, 
  ShieldCheck, ShieldAlert, KeyRound, Fingerprint, ArrowLeft, Star, Clock
} from 'lucide-react';

/* ─────────────────────────────── Product Data ─────────────────────────────── */
const planData: Record<string, {
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  saveBadge: string;
  description: string;
  officialUrl: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  accentLight: string;
  badgeBg: string;
  tag: string | null;
  platforms: string[];
  devices: string;
  keyFeatures: { icon: React.ReactNode; title: string; desc: string }[];
  detailedFeatures: string[];
  whyChoose: string[];
  stats: { value: string; label: string }[];
  systemReqs: { os: string; ram: string; storage: string; browser: string };
}> = {
  'antivirus-plus': {
    name: 'Bitdefender Antivirus Plus',
    tagline: 'Essential protection for Windows PCs.',
    price: '$29.99',
    originalPrice: '$59.99',
    saveBadge: 'SAVE 50%',
    description: 'Bitdefender Antivirus Plus delivers powerful, lightweight antivirus defense for Windows PCs. Its multi-layered threat detection shields your system against ransomware, phishing, and malware without slowing down your computer.',
    officialUrl: 'https://www.bitdefender.com',
    accentBg: 'bg-red-600 hover:bg-red-700',
    accentBorder: 'border-red-200',
    accentText: 'text-red-600',
    accentLight: 'bg-red-50',
    badgeBg: 'bg-red-600',
    tag: null,
    platforms: ['Windows'],
    devices: 'Up to 3 Devices',
    keyFeatures: [
      { icon: <Shield className="w-5 h-5 text-red-600" />, title: 'Advanced Threat Defense', desc: 'Behavioral detection technology identifies and blocks elusive malware that traditional methods miss.' },
      { icon: <Globe className="w-5 h-5 text-red-600" />, title: 'Web Attack Prevention', desc: 'Blocks infected links before they open, protecting you from phishing, fraud, and identity theft.' },
      { icon: <Gauge className="w-5 h-5 text-red-600" />, title: 'Ultra-Light Performance', desc: 'Built with adaptive optimization so your system runs at full speed while remaining fully protected.' },
      { icon: <Lock className="w-5 h-5 text-red-600" />, title: 'Ransomware Remediation', desc: 'Multi-layered ransomware defense keeps your documents, photos, and personal data safe from encryption.' },
      { icon: <Wifi className="w-5 h-5 text-red-600" />, title: 'Secure VPN (200MB/day)', desc: 'Encrypts your internet traffic on public Wi-Fi networks with an included daily VPN allowance.' },
      { icon: <KeyRound className="w-5 h-5 text-red-600" />, title: 'Password Manager', desc: 'Stores, auto-fills, and generates complex passwords for all your online accounts in one vault.' },
    ],
    detailedFeatures: [
      'Real-time Data Protection with signature and heuristic engines',
      'Advanced Threat Defense behavioral monitoring',
      'Multi-Layer Ransomware Protection & Remediation',
      'Anti-Phishing & Anti-Fraud filtering',
      'Bitdefender Photon™ adaptive scanning technology',
      'Safe Online Banking via Bitdefender Safepay™ browser',
      'Password Manager for unlimited credential storage',
      'Vulnerability Assessment for outdated software detection',
      'File Shredder for permanent data deletion',
      'Rescue Mode for boot-time threat removal',
    ],
    whyChoose: [
      'Consistently rated #1 in protection by AV-Test and AV-Comparatives',
      'Patented machine learning algorithms trained on 500M+ endpoints',
      'Near-zero system impact — game, stream, and work without slowdowns',
      'Automatic updates ensure protection against brand new threats',
    ],
    stats: [
      { value: '500M+', label: 'Protected Endpoints' },
      { value: '99.9%', label: 'Threat Detection Rate' },
      { value: '0.2ms', label: 'Avg. Scan Latency' },
      { value: '30+', label: 'Years of Innovation' },
    ],
    systemReqs: { os: 'Windows 10, 11', ram: '2 GB', storage: '2.5 GB', browser: 'Chrome, Firefox, Edge' },
  },
  'internet-security': {
    name: 'Bitdefender Internet Security',
    tagline: 'Complete digital privacy & firewall for PC.',
    price: '$44.99',
    originalPrice: '$84.99',
    saveBadge: 'SAVE 47%',
    description: 'Bitdefender Internet Security expands Antivirus Plus with advanced privacy tools. Features an intelligent bi-directional firewall, parental controls, webcam guard, and microphone monitor for complete online peace of mind.',
    officialUrl: 'https://www.bitdefender.com',
    accentBg: 'bg-red-600 hover:bg-red-700',
    accentBorder: 'border-red-200',
    accentText: 'text-red-600',
    accentLight: 'bg-red-50',
    badgeBg: 'bg-slate-900',
    tag: 'MOST POPULAR',
    platforms: ['Windows'],
    devices: 'Up to 3 Devices',
    keyFeatures: [
      { icon: <Shield className="w-5 h-5 text-red-600" />, title: 'Privacy Firewall', desc: 'Two-way firewall monitors inbound and outbound connections, giving you granular control over apps.' },
      { icon: <Users className="w-5 h-5 text-red-600" />, title: 'Parental Controls', desc: 'Filter online content, limit screen time, and monitor children\'s activities for family safety.' },
      { icon: <Eye className="w-5 h-5 text-red-600" />, title: 'Webcam & Microphone Guard', desc: 'Prevents unauthorized applications from hijacking your webcam or microphone in real-time.' },
      { icon: <Lock className="w-5 h-5 text-red-600" />, title: 'Multi-Layer Ransomware', desc: 'Multi-tiered defense ensures your files are never encrypted or held hostage by cyberattacks.' },
      { icon: <Fingerprint className="w-5 h-5 text-red-600" />, title: 'Anti-Spam & Anti-Phishing', desc: 'Filters your email inbox to block spam, phishing links, and malicious email attachments.' },
      { icon: <Database className="w-5 h-5 text-red-600" />, title: 'Safe Online Banking', desc: 'Safepay™ isolated browser environment keeps financial credentials private and secure.' },
    ],
    detailedFeatures: [
      'Everything in Bitdefender Antivirus Plus',
      'Privacy Firewall with bi-directional traffic monitoring',
      'Parental Controls with content filtering & screen time limits',
      'Webcam Protection against unauthorized access',
      'Microphone Monitor for audio privacy',
      'Anti-Spam filtering for Outlook and Thunderbird',
      'Safe Files for ransomware-proof document vaults',
      'Wi-Fi Security Advisor for network vulnerability scanning',
      'Social Network Protection against malicious links',
      'File Shredder for military-grade data deletion',
    ],
    whyChoose: [
      'Complete privacy suite with firewall + webcam + mic protection',
      'Industry-leading parental controls for safe family browsing',
      'Isolated banking browser prevents financial credential theft',
      'Best value combination of protection, privacy, and performance',
    ],
    stats: [
      { value: '500M+', label: 'Protected Endpoints' },
      { value: '100%', label: 'Malware Detection' },
      { value: '24/7', label: 'Firewall Monitoring' },
      { value: '#1', label: 'Ranked by AV-Test' },
    ],
    systemReqs: { os: 'Windows 10, 11', ram: '2 GB', storage: '2.5 GB', browser: 'Chrome, Firefox, Edge' },
  },
  'total-security': {
    name: 'Bitdefender Total Security',
    tagline: 'Cross-platform protection for Windows, Mac, iOS & Android.',
    price: '$59.99',
    originalPrice: '$109.99',
    saveBadge: 'SAVE 45%',
    description: 'Bitdefender Total Security is an all-in-one cross-platform security suite. Protect Windows, macOS, Android, and iOS devices under a single account with anti-theft controls, system speed optimizer, and family safety.',
    officialUrl: 'https://www.bitdefender.com',
    accentBg: 'bg-red-600 hover:bg-red-700',
    accentBorder: 'border-red-200',
    accentText: 'text-red-600',
    accentLight: 'bg-red-50',
    badgeBg: 'bg-red-600',
    tag: 'BEST VALUE',
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    devices: 'Up to 5 Devices',
    keyFeatures: [
      { icon: <Laptop className="w-5 h-5 text-red-600" />, title: 'Cross-Platform Security', desc: 'A single license protects Windows PCs, Macs, Android phones, and iPhones/iPads effortlessly.' },
      { icon: <Users className="w-5 h-5 text-red-600" />, title: 'Parental Control Suite', desc: 'Comprehensive tools including GPS tracking, geofencing, content filters, and app usage reports.' },
      { icon: <Gauge className="w-5 h-5 text-red-600" />, title: 'OneClick Optimizer', desc: 'Cleans junk files, clears caches, and optimizes startup programs to boost device speed.' },
      { icon: <ShieldAlert className="w-5 h-5 text-red-600" />, title: 'Anti-Theft Module', desc: 'Locate, lock, or remotely wipe lost or stolen Windows and Android devices via Central portal.' },
      { icon: <Wifi className="w-5 h-5 text-red-600" />, title: 'Network Threat Prevention', desc: 'Detects and blocks network exploits before damage occurs, shielding against botnets.' },
      { icon: <Cpu className="w-5 h-5 text-red-600" />, title: 'Performance Profiles', desc: 'Autopilot, Game, Movie, and Work profiles automatically adjust settings to maximize speed.' },
    ],
    detailedFeatures: [
      'Everything in Bitdefender Internet Security',
      'Cross-platform coverage: Windows, macOS, Android, iOS',
      'OneClick Device Optimizer for system tune-up',
      'Anti-Theft with remote locate, lock, and wipe',
      'Network Threat Prevention against exploits',
      'Autopilot for intelligent security decisions',
      'Battery Mode for extended portable usage',
      'Game, Movie, and Work activity profiles',
      'macOS Time Machine Protection',
      'Android App Lock with biometric authentication',
    ],
    whyChoose: [
      'True cross-platform protection under one subscription',
      'Anti-theft features help recover lost or stolen devices',
      'System optimizer keeps all your devices running at peak speed',
      'Activity-aware profiles adapt security to how you use your device',
    ],
    stats: [
      { value: '4', label: 'Platforms Protected' },
      { value: '5', label: 'Devices per License' },
      { value: '99.9%', label: 'Detection Accuracy' },
      { value: '350+', label: 'Awards Won' },
    ],
    systemReqs: { os: 'Win 10/11, macOS 12+, Android 5+, iOS 15+', ram: '2 GB', storage: '2.5 GB', browser: 'All modern browsers' },
  },
  'premium-security': {
    name: 'Bitdefender Premium Security',
    tagline: 'Ultimate cybersecurity suite with Unlimited VPN.',
    price: '$79.99',
    originalPrice: '$159.99',
    saveBadge: 'SAVE 50%',
    description: 'Bitdefender Premium Security is the flagship cyber defense suite. Combines every Total Security feature with Unlimited VPN traffic, Dark Web Identity Monitoring, and 24/7 Priority Support for up to 10 devices.',
    officialUrl: 'https://www.bitdefender.com',
    accentBg: 'bg-red-600 hover:bg-red-700',
    accentBorder: 'border-red-200',
    accentText: 'text-red-600',
    accentLight: 'bg-red-50',
    badgeBg: 'bg-amber-600',
    tag: 'ULTIMATE SUITE',
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    devices: 'Up to 10 Devices',
    keyFeatures: [
      { icon: <Wifi className="w-5 h-5 text-red-600" />, title: 'Unlimited Premium VPN', desc: 'Full, unrestricted VPN across 4,000+ servers in 49 countries. Complete anonymity with zero caps.' },
      { icon: <Fingerprint className="w-5 h-5 text-red-600" />, title: 'Identity Theft Protection', desc: 'Continuous dark web monitoring alerts you immediately if SSN, email, or card details leak.' },
      { icon: <Headphones className="w-5 h-5 text-red-600" />, title: '24/7 Priority Support', desc: 'Direct priority phone, chat, and ticket access to senior security engineering specialists.' },
      { icon: <ShieldCheck className="w-5 h-5 text-red-600" />, title: 'Digital Identity Shield', desc: 'Monitors social footprint, checks data breach exposure, and reduces digital risk.' },
      { icon: <Lock className="w-5 h-5 text-red-600" />, title: 'Full Encryption Suite', desc: 'AES-256 file encryption, password manager with multi-device sync, and file shredding.' },
      { icon: <Globe className="w-5 h-5 text-red-600" />, title: 'Global Threat Network', desc: 'Connected to cloud-based intelligence analyzing 11 billion queries daily in real-time.' },
    ],
    detailedFeatures: [
      'Everything in Bitdefender Total Security',
      'Unlimited Premium VPN with 4,000+ global servers',
      'Identity Theft Protection with dark web monitoring',
      'Digital Identity Protection for social media',
      '24/7 Priority Customer Support',
      'Password Manager with unlimited sync',
      'Complete File Encryption (AES-256)',
      'Secure Deletion & File Shredder',
      'Cross-platform license for up to 10 devices',
      'Premium onboarding and configuration assistance',
    ],
    whyChoose: [
      'Unlimited VPN means truly private browsing without restrictions',
      'Only Bitdefender plan with identity theft & dark web monitoring',
      'Priority support connects you directly with senior specialists',
      'Maximum device coverage — protect up to 10 devices per license',
    ],
    stats: [
      { value: '10', label: 'Devices Protected' },
      { value: '4,000+', label: 'VPN Servers' },
      { value: '49', label: 'VPN Countries' },
      { value: '11B+', label: 'Daily Cloud Queries' },
    ],
    systemReqs: { os: 'Win 10/11, macOS 12+, Android 5+, iOS 15+', ram: '2 GB', storage: '2.5 GB', browser: 'All modern browsers' },
  },
};

const planSlugs = ['antivirus-plus', 'internet-security', 'total-security', 'premium-security'];

/* ──────────────────────────────── Component ───────────────────────────────── */
export default function PlanDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const plan = planData[slug];

  if (!plan) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-900">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-extrabold text-slate-900">Plan Not Found</h1>
          <Link href="/bitdefender#plans" className="text-red-600 underline text-sm font-bold">← Back to all plans</Link>
        </div>
      </div>
    );
  }

  const currentIndex = planSlugs.indexOf(slug);
  const prevPlan = currentIndex > 0 ? planSlugs[currentIndex - 1] : null;
  const nextPlan = currentIndex < planSlugs.length - 1 ? planSlugs[currentIndex + 1] : null;

  const platformIcons: Record<string, React.ReactNode> = {
    'Windows': <Monitor className="w-4 h-4 text-slate-700" />,
    'macOS': <Laptop className="w-4 h-4 text-slate-700" />,
    'Android': <Smartphone className="w-4 h-4 text-slate-700" />,
    'iOS': <Smartphone className="w-4 h-4 text-slate-700" />,
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">

      {/* ═══════════════════════  HERO (LIGHT MODE)  ═══════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-10 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/bitdefender#plans" 
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back to Bitdefender Plans
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text & Features (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 border border-red-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600" /> Official Bitdefender Partner
                </span>
                {plan.tag && (
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${plan.badgeBg} text-white`}>
                    {plan.tag}
                  </span>
                )}
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {plan.name}
                </h1>
                <p className="text-sm sm:text-base text-slate-500 font-semibold mt-2">
                  {plan.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {plan.description}
              </p>

              {/* Supported Platforms & Devices */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Platforms:</span>
                {plan.platforms.map(p => (
                  <span key={p} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
                    {platformIcons[p]}
                    {p}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1.5 rounded-xl">
                  <Users className="w-3.5 h-3.5 text-red-600" />
                  {plan.devices}
                </span>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {plan.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center shadow-xs">
                    <span className="text-2xl font-bold text-slate-900 block mb-0.5">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Pricing & CTA Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden space-y-6">
                
                {/* Save Badge */}
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-slate-800 font-bold ml-1">4.9 / 5.0</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white">
                    {plan.saveBadge}
                  </span>
                </div>

                {/* Price Display */}
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Special First-Year Offer</div>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-base font-semibold text-slate-400 line-through">
                      {plan.originalPrice}
                    </span>
                    <span className="text-xs font-medium text-slate-500">/ 1st year</span>
                  </div>
                </div>

                {/* Quick Check Bullet Points */}
                <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check className="w-4 h-4 text-red-600 stroke-[2.5]" />
                    <span>Instant Digital License Key Delivery</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check className="w-4 h-4 text-red-600 stroke-[2.5]" />
                    <span>30-Day Money Back Guarantee</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check className="w-4 h-4 text-red-600 stroke-[2.5]" />
                    <span>Coverage for {plan.devices}</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check className="w-4 h-4 text-red-600 stroke-[2.5]" />
                    <span>24/7 Official Bitdefender Technical Support</span>
                  </li>
                </ul>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={plan.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
                  >
                    Get {plan.name.replace('Bitdefender ', '')} <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/bitdefender#compare"
                    className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-2xl transition-all flex items-center justify-center text-center"
                  >
                    Compare All Plans
                  </Link>
                </div>

                <p className="text-[11px] text-center text-slate-400 font-medium">
                  🔒 Safe & Encrypted Checkout via Official Bitdefender Gateway
                </p>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════  KEY FEATURES GRID  ═══════════════════ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything Included in <span className="text-red-600">{plan.name.replace('Bitdefender ', '')}</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Explore the core security, privacy, and performance engines engineered to keep your digital life completely secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plan.keyFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════  DETAILED FEATURES + WHY CHOOSE  ════════════════ */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Complete Feature Checklist */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Full Features Checklist</h3>
                <p className="text-slate-500 text-sm font-medium mt-1">Complete breakdown of tools included in this license</p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                <ul className="space-y-4">
                  {plan.detailedFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[2.5] text-red-600" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Why Choose + System Reqs */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Why Choose {plan.name.replace('Bitdefender ', '')}?</h3>
                <p className="text-slate-500 text-sm font-medium mt-1">Key advantages trusted by millions of users worldwide</p>
              </div>

              <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-sm space-y-6">
                <ul className="space-y-4">
                  {plan.whyChoose.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[2.5] text-white" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">{reason}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={plan.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    Read Official Product Specifications <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* System Requirements */}
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">System Requirements</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Operating System', value: plan.systemReqs.os },
                    { label: 'RAM', value: plan.systemReqs.ram },
                    { label: 'Free Disk Space', value: plan.systemReqs.storage },
                    { label: 'Browser', value: plan.systemReqs.browser },
                  ].map((req, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">{req.label}</span>
                      <span className="text-xs font-bold text-slate-900 block">{req.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════  ACTIVATION & SUPPORT (LIGHT MODE)  ═══════════════════ */}
      <section className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3.5 py-1 rounded-full inline-block border border-red-100">
              User Setup Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Easy 4-Step Activation Process
            </h2>
            <p className="text-slate-500 text-sm font-medium">Follow these simple steps to activate your digital license key.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Log into Bitdefender Central", desc: "Open central.bitdefender.com in your web browser and sign in (or create a free account)." },
              { title: "Enter License Activation Code", desc: "Navigate to 'My Subscriptions' and paste the digital license key from your email receipt." },
              { title: "Confirm Subscription Status", desc: "Verify your license details, covered device slots, and expiration timeline in your dashboard." },
              { title: "Download & Protect", desc: "Click 'Install Bitdefender' on your device to download the installer and activate protection." }
            ].map((step, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex items-start gap-4 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════  OFFICIAL WEBSITE CTA BANNER  ═══════════════════ */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white text-center shadow-xl space-y-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
              <Shield className="w-7 h-7 text-red-400" />
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Ready to Secure Your Devices?
              </h2>
              <p className="text-slate-300 text-sm max-w-md mx-auto font-medium mt-2 leading-relaxed">
                Get started today with official Bitdefender protection. Enjoy instant digital key delivery and a 30-day money-back guarantee.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={plan.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all"
              >
                Get {plan.name.replace('Bitdefender ', '')} <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/bitdefender#plans"
                className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
              >
                View All Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════  PLAN NAVIGATION  ═══════════════════ */}
      <section className="py-10 px-6 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {prevPlan ? (
            <Link
              href={`/bitdefender/plans/${prevPlan}`}
              className="group flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-red-600" />
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Previous Plan</span>
                <span className="text-xs font-bold text-slate-900">{planData[prevPlan]?.name.replace('Bitdefender ', '')}</span>
              </div>
            </Link>
          ) : <div />}

          {nextPlan ? (
            <Link
              href={`/bitdefender/plans/${nextPlan}`}
              className="group flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors text-right"
            >
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Next Plan</span>
                <span className="text-xs font-bold text-slate-900">{planData[nextPlan]?.name.replace('Bitdefender ', '')}</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-red-600" />
            </Link>
          ) : <div />}
        </div>
      </section>

    </div>
  );
}
