'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Shield, Check, ArrowRight, ExternalLink, Lock, Wifi, 
  Eye, Gauge, Laptop, Smartphone, Monitor, Server, 
  Users, Headphones, Zap, Globe, Database, Cpu, 
  ShieldCheck, ShieldAlert, KeyRound, Fingerprint, ArrowLeft
} from 'lucide-react';

/* ─────────────────────────────── Product Data ─────────────────────────────── */
const planData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  officialUrl: string;
  heroGradient: string;
  accentColor: string;
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
    description: 'Bitdefender Antivirus Plus delivers powerful, yet lightweight antivirus protection for your Windows PC. Its multi-layered defense system keeps you safe from new and existing cyber threats without impacting your system\'s performance. Ideal for users who need robust baseline protection with minimal configuration.',
    officialUrl: 'https://www.bitdefender.com',
    heroGradient: 'from-blue-950 via-blue-900 to-indigo-950',
    accentColor: '#3b82f6',
    accentBg: 'bg-blue-500',
    accentBorder: 'border-blue-500/30',
    accentText: 'text-blue-400',
    accentLight: 'bg-blue-500/10',
    badgeBg: 'bg-blue-600',
    tag: null,
    platforms: ['Windows'],
    devices: 'Up to 3 Devices',
    keyFeatures: [
      { icon: <Shield className="w-5 h-5" />, title: 'Advanced Threat Defense', desc: 'Behavioral detection technology identifies and blocks even the most elusive malware that traditional methods miss.' },
      { icon: <Globe className="w-5 h-5" />, title: 'Web Attack Prevention', desc: 'Blocks known infected links before they can open, protecting you from phishing, fraud, and identity theft attempts.' },
      { icon: <Gauge className="w-5 h-5" />, title: 'Ultra-Light Performance', desc: 'Built with advanced optimization so your device runs at full speed while being completely protected in the background.' },
      { icon: <Lock className="w-5 h-5" />, title: 'Ransomware Remediation', desc: 'Multi-layered ransomware protection that keeps your documents, photos, videos, and music safe from encryption attacks.' },
      { icon: <Wifi className="w-5 h-5" />, title: 'Secure VPN (200MB/day)', desc: 'Encrypts your internet traffic on unsecured Wi-Fi networks with an included daily VPN allowance for safe browsing.' },
      { icon: <KeyRound className="w-5 h-5" />, title: 'Password Manager', desc: 'Securely stores, auto-fills, and generates complex passwords for all your online accounts in one encrypted vault.' },
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
      'Automatic updates ensure protection against the latest threats',
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
    tagline: 'Complete protection for PC, Mac & mobile.',
    description: 'Bitdefender Internet Security builds upon Antivirus Plus with advanced privacy and online security features. The integrated firewall, parental controls, and webcam protection create a comprehensive shield for your entire digital life. Perfect for families and power users who need multi-layered defense.',
    officialUrl: 'https://www.bitdefender.com',
    heroGradient: 'from-purple-950 via-purple-900 to-violet-950',
    accentColor: '#a855f7',
    accentBg: 'bg-purple-500',
    accentBorder: 'border-purple-500/30',
    accentText: 'text-purple-400',
    accentLight: 'bg-purple-500/10',
    badgeBg: 'bg-purple-600',
    tag: 'BEST VALUE',
    platforms: ['Windows'],
    devices: 'Up to 3 Devices',
    keyFeatures: [
      { icon: <Shield className="w-5 h-5" />, title: 'Privacy Firewall', desc: 'Two-way firewall monitors all inbound and outbound connections, giving you granular control over which applications access the internet.' },
      { icon: <Users className="w-5 h-5" />, title: 'Advanced Parental Controls', desc: 'Monitor and limit screen time, filter content categories, and track your children\'s online activities to keep them safe.' },
      { icon: <Eye className="w-5 h-5" />, title: 'Webcam & Microphone Guard', desc: 'Prevents unauthorized applications from accessing your webcam and microphone, blocking potential spying attempts in real-time.' },
      { icon: <Lock className="w-5 h-5" />, title: 'Multi-Layer Ransomware', desc: 'Data protection layers work together with ransomware remediation to ensure your files are never held hostage by encryption attacks.' },
      { icon: <Fingerprint className="w-5 h-5" />, title: 'Anti-Spam & Anti-Phishing', desc: 'Filters your inbox to block spam, phishing emails, and malicious attachments before they reach you or your family members.' },
      { icon: <Database className="w-5 h-5" />, title: 'Safe Online Banking', desc: 'Safepay™ isolated browser environment ensures your financial transactions and credentials remain completely secure and private.' },
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
    tagline: 'Our ultimate protection for you & your family.',
    description: 'Bitdefender Total Security is a comprehensive cross-platform solution protecting Windows, macOS, Android, and iOS devices under a single subscription. With device optimization tools, advanced parental controls, and anti-theft features, it delivers complete digital security for your entire household.',
    officialUrl: 'https://www.bitdefender.com',
    heroGradient: 'from-red-950 via-rose-900 to-red-950',
    accentColor: '#ef4444',
    accentBg: 'bg-red-500',
    accentBorder: 'border-red-500/30',
    accentText: 'text-red-400',
    accentLight: 'bg-red-500/10',
    badgeBg: 'bg-red-600',
    tag: null,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    devices: 'Up to 5 Devices',
    keyFeatures: [
      { icon: <Laptop className="w-5 h-5" />, title: 'Cross-Platform Protection', desc: 'A single subscription secures all your devices — Windows PCs, Macs, Android phones, and iPhones/iPads with optimized engines for each.' },
      { icon: <Users className="w-5 h-5" />, title: 'Parental Control Suite', desc: 'Comprehensive parental advisory tools including GPS tracking, geofencing alerts, content filtering, and application usage reports.' },
      { icon: <Gauge className="w-5 h-5" />, title: 'OneClick Optimizer', desc: 'Speeds up your devices by cleaning junk files, clearing caches, optimizing startup programs, and freeing disk space with a single click.' },
      { icon: <ShieldAlert className="w-5 h-5" />, title: 'Anti-Theft Module', desc: 'Locate, lock, and wipe your lost or stolen Windows laptop or Android device remotely through the Bitdefender Central dashboard.' },
      { icon: <Wifi className="w-5 h-5" />, title: 'Network Threat Prevention', desc: 'Identifies and blocks network-level exploits before they can damage your system, protecting against brute-force and botnet attacks.' },
      { icon: <Cpu className="w-5 h-5" />, title: 'Battery & Performance Modes', desc: 'Autopilot mode adjusts security settings based on your activity. Battery mode extends laptop life. Game mode pauses notifications.' },
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
    tagline: 'The most advanced protection for digital life.',
    description: 'Bitdefender Premium Security is the ultimate cybersecurity suite, combining every feature from Total Security with unlimited VPN, identity theft protection, and 24/7 priority support. Designed for users who demand the highest level of digital protection with concierge-level customer service.',
    officialUrl: 'https://www.bitdefender.com',
    heroGradient: 'from-amber-950 via-orange-900 to-amber-950',
    accentColor: '#f59e0b',
    accentBg: 'bg-amber-500',
    accentBorder: 'border-amber-500/30',
    accentText: 'text-amber-400',
    accentLight: 'bg-amber-500/10',
    badgeBg: 'bg-amber-600',
    tag: 'ULTIMATE',
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    devices: 'Up to 10 Devices',
    keyFeatures: [
      { icon: <Wifi className="w-5 h-5" />, title: 'Unlimited Premium VPN', desc: 'Full, unrestricted VPN access across 4,000+ servers in 49 countries. Stream, browse, and transact with complete anonymity — no daily limits.' },
      { icon: <Fingerprint className="w-5 h-5" />, title: 'Identity Theft Protection', desc: 'Continuous dark web monitoring scans for your personal data — SSN, emails, credit cards — and alerts you instantly if compromised.' },
      { icon: <Headphones className="w-5 h-5" />, title: '24/7 Priority Support', desc: 'Direct access to senior security specialists via phone, chat, and email. Your issues are escalated first with guaranteed rapid resolution.' },
      { icon: <ShieldCheck className="w-5 h-5" />, title: 'Digital Identity Protection', desc: 'Monitors your social media footprint, checks data breaches, and provides actionable steps to reduce your digital exposure surface.' },
      { icon: <Lock className="w-5 h-5" />, title: 'Complete Encryption Suite', desc: 'Military-grade AES-256 file encryption, secure file vault, and a password manager with cross-device syncing for maximum credential security.' },
      { icon: <Globe className="w-5 h-5" />, title: 'Global Threat Intelligence', desc: 'Connected to Bitdefender\'s cloud-based Global Protective Network processing 11 billion queries per day for real-time threat analysis.' },
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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-black">Plan not found</h1>
          <Link href="/bitdefender#plans" className="text-blue-400 underline text-sm font-bold">← Back to all plans</Link>
        </div>
      </div>
    );
  }

  const currentIndex = planSlugs.indexOf(slug);
  const prevPlan = currentIndex > 0 ? planSlugs[currentIndex - 1] : null;
  const nextPlan = currentIndex < planSlugs.length - 1 ? planSlugs[currentIndex + 1] : null;

  const platformIcons: Record<string, React.ReactNode> = {
    'Windows': <Monitor className="w-4 h-4" />,
    'macOS': <Laptop className="w-4 h-4" />,
    'Android': <Smartphone className="w-4 h-4" />,
    'iOS': <Smartphone className="w-4 h-4" />,
  };

  return (
    <div className="bg-[#fcfdfd] text-slate-900 min-h-screen font-sans">

      {/* ═══════════════════════  HERO  ═══════════════════════ */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${plan.heroGradient} text-white`}>
        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        {/* Glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ backgroundColor: plan.accentColor }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-15" style={{ backgroundColor: plan.accentColor }} />

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          {/* Breadcrumb */}
          <Link href="/bitdefender#plans" className="inline-flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white/90 transition-colors mb-8 group">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to All Plans
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {plan.tag && (
                <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${plan.badgeBg} text-white`}>
                  {plan.tag}
                </span>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08]">
                {plan.name}
              </h1>
              <p className="text-lg text-white/70 font-medium leading-relaxed max-w-lg">
                {plan.description}
              </p>

              {/* Platform badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {plan.platforms.map(p => (
                  <span key={p} className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/80 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">
                    {platformIcons[p]}
                    {p}
                  </span>
                ))}
                <span className="text-[11px] font-bold text-white/60">
                  •  {plan.devices}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={plan.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 px-8 py-4 ${plan.accentBg} hover:brightness-110 text-white font-black text-sm rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl`}
                  style={{ boxShadow: `0 8px 30px ${plan.accentColor}30` }}
                >
                  Get {plan.name.replace('Bitdefender ', '')} <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/bitdefender#compare"
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm rounded-xl transition-all"
                >
                  Compare All Plans
                </Link>
              </div>
            </motion.div>

            {/* Right: Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {plan.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.1] transition-all duration-300 group"
                >
                  <span className={`text-3xl sm:text-4xl font-black ${plan.accentText} block mb-1.5 group-hover:scale-105 transition-transform`}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════  KEY FEATURES GRID  ═══════════════════ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Everything included in your plan
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto font-medium">
              Explore the comprehensive security features that make {plan.name} one of the most trusted solutions worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plan.keyFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50/50 to-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${plan.accentLight} ${plan.accentText} group-hover:scale-110 transition-transform`}
                  style={{ border: `1px solid ${plan.accentColor}20` }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════  DETAILED FEATURES + WHY CHOOSE  ════════════════ */}
      <section className="py-20 px-6 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Full Feature List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">All features at a glance</h3>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                <ul className="space-y-4">
                  {plan.detailedFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${plan.accentLight}`}>
                        <Check className={`w-3 h-3 stroke-[3] ${plan.accentText}`} />
                      </div>
                      <span className="text-sm text-slate-700 font-semibold leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Why Choose + System Reqs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">Why choose {plan.name.replace('Bitdefender ', '')}?</h3>
              </div>

              <div className={`rounded-2xl p-8 bg-gradient-to-br ${plan.heroGradient} text-white shadow-lg relative overflow-hidden`}>
                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-20" style={{ backgroundColor: plan.accentColor }} />
                <ul className="space-y-5 relative z-10">
                  {plan.whyChoose.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white/15 flex items-center justify-center border border-white/10">
                        <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                      </div>
                      <span className="text-sm text-white/90 font-bold leading-snug">{reason}</span>
                    </li>
                  ))}
                </ul>

                {/* Inline CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={plan.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-black text-white hover:underline underline-offset-4"
                  >
                    Visit Official {plan.name.replace('Bitdefender ', '')} Page <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* System Requirements */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-5">System Requirements</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Operating System', value: plan.systemReqs.os },
                    { label: 'RAM', value: plan.systemReqs.ram },
                    { label: 'Free Disk Space', value: plan.systemReqs.storage },
                    { label: 'Browser', value: plan.systemReqs.browser },
                  ].map((req, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{req.label}</span>
                      <span className="text-sm font-extrabold text-slate-800 block">{req.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════  EXCLUSIVE PREMIUM SECTIONS: ACTIVATION & TROUBLESHOOTING  ═══════════════════ */}
      {slug === 'premium-security' && (
        <>
          {/* Activation Journey Section */}
          <section className="py-16 px-6 bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3.5 py-1.5 rounded-full inline-block">Exclusive Premium Setup</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Activation & Subscription Journey</h2>
                <p className="text-xs sm:text-sm text-slate-400">Step-by-step guidance to activate and manage your Premium Security license.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Log into Bitdefender Central", desc: "Open your web browser, navigate to central.bitdefender.com and log in (or create a secure profile)." },
                  { title: "Input License Key", desc: "Locate code card (from TechVerse order receipt/email) and enter code sequence under 'My Subscriptions' pane." },
                  { title: "Bind Subscription Scope", desc: "Validate the subscription plan layout parameters (number of active nodes, validity timeline, region lock profiles)." },
                  { title: "Deploy Software Suite", desc: "Navigate to 'My Devices', trigger download commands on local desktop/smartphone and sign in to inherit active license." }
                ].map((step, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4 shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white mb-1">{step.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Troubleshooting Center Section */}
          <section className="py-16 px-6 bg-slate-900 text-white border-t border-slate-800">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3.5 py-1.5 rounded-full inline-block">Support Portal</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Troubleshooting & Support</h2>
                <p className="text-xs sm:text-sm text-slate-400">Resolution guides for common installation, connectivity, and activation questions.</p>
              </div>

              <div className="space-y-4">
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
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-2">
                    <h3 className="font-bold text-base text-slate-100 flex items-center gap-2">
                      <span className="text-red-500 font-extrabold">Q:</span> {issue.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">{issue.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══════════════════  OFFICIAL WEBSITE CTA BANNER  ═══════════════════ */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-10 sm:p-14 bg-gradient-to-br ${plan.heroGradient} text-white text-center relative overflow-hidden shadow-2xl`}
            style={{ boxShadow: `0 25px 60px ${plan.accentColor}25` }}
          >
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15" style={{ backgroundColor: plan.accentColor }} />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto backdrop-blur-sm">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Ready to get protected?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto font-medium leading-relaxed">
                Visit the official Bitdefender website to explore pricing options, start your free trial, or purchase {plan.name} today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href={plan.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 px-10 py-4 bg-white text-slate-900 font-black text-sm rounded-xl shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl`}
                >
                  Visit Official Website <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/bitdefender#plans"
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm rounded-xl transition-all"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════  PLAN NAVIGATION  ═══════════════════ */}
      <section className="py-12 px-6 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {prevPlan ? (
            <Link
              href={`/bitdefender/plans/${prevPlan}`}
              className="group flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Previous Plan</span>
                <span className="text-sm font-extrabold">{planData[prevPlan]?.name.replace('Bitdefender ', '')}</span>
              </div>
            </Link>
          ) : <div />}

          {nextPlan ? (
            <Link
              href={`/bitdefender/plans/${nextPlan}`}
              className="group flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors text-right"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Next Plan</span>
                <span className="text-sm font-extrabold">{planData[nextPlan]?.name.replace('Bitdefender ', '')}</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
}
