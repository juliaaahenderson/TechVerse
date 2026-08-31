'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Heart, GitCompare, User, Search, Menu, X, ChevronDown, 
  ShieldCheck, ShieldAlert, Layers, 
  HelpCircle, Settings, HelpCircle as FaqIcon, Compass, BookOpen 
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { cart, wishlist, compareList, activeExperience, setExperience } = useApp();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update experience automatically based on path
  useEffect(() => {
    if (pathname.includes('/bitdefender')) {
      setExperience('security');
    } else {
      setExperience('shop');
    }
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname, setExperience]);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const isSecurity = activeExperience === 'security';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md text-slate-900 py-3 shadow-md border-b border-slate-200/80'
            : 'bg-white/90 backdrop-blur-md text-slate-900 py-4 border-b border-slate-200/60 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/techverse-monogram-logo.png"
              alt="TechVerse Logo"
              width={280}
              height={70}
              className="h-10 w-auto object-contain scale-[2.4] origin-left"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/products" 
              className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors"
            >
              Shop
            </Link>

            {/* Bitdefender Hub Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('security')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                href="/bitdefender"
                className={`flex items-center gap-1.5 text-sm font-semibold py-2 px-3 rounded-full transition-all duration-300 ${
                  isSecurity 
                    ? 'bg-red-600 text-white' 
                    : 'bg-red-500/10 text-red-600 hover:bg-red-500/20'
                }`}
              >
                <ShieldCheck className="w-4 h-4" /> Bitdefender Hub <ChevronDown className="w-4 h-4" />
              </Link>
              <AnimatePresence>
                {activeMegaMenu === 'security' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 p-8 grid grid-cols-3 gap-6 text-white"
                  >
                    <div>
                      <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-3">Learn & Compare</div>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/bitdefender#plans" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                            <Layers className="w-4 h-4 text-red-500" /> Products & Plans
                          </Link>
                        </li>
                        <li>
                          <Link href="/bitdefender#compare" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                            <GitCompare className="w-4 h-4 text-red-500" /> Compare Specs
                          </Link>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-3">Install & Configure</div>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/bitdefender/guides" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-red-500" /> Installation Guides
                          </Link>
                        </li>
                        <li>
                          <Link href="/bitdefender#setup" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                            <Settings className="w-4 h-4 text-red-500" /> Configuration Guides
                          </Link>
                        </li>
                        <li>
                          <Link href="/bitdefender#activation" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                            <ShieldAlert className="w-4 h-4 text-red-500" /> Subscription Activation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-3">Intelligence Hub</div>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/bitdefender#troubleshoot" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                            <HelpCircle className="w-4 h-4 text-red-500" /> Troubleshooting FAQs
                          </Link>
                        </li>
                        <li>
                          <Link href="/bitdefender/blog" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-red-500" /> Cybersecurity Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/bitdefender/guides" className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors">Guides</Link>
            <Link href="/bitdefender/blog" className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors">Blog</Link>

            <Link 
              href="/contact" 
              className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4 text-slate-800">
            <Link href="/products" className={`p-2 rounded-full hover:bg-slate-500/10 transition-colors`}>
              <Search className="w-5 h-5" />
            </Link>
            
            <Link href="/products" className="relative p-2 rounded-full hover:bg-slate-500/10 transition-colors">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link href="/checkout" className="relative p-2 rounded-full hover:bg-slate-500/10 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </Link>

            <Link href="/checkout" className="p-2 rounded-full hover:bg-slate-500/10 transition-colors">
              <User className="w-5 h-5" />
            </Link>

            <button 
              className="lg:hidden p-2 rounded-full hover:bg-slate-500/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className={`fixed inset-0 z-40 lg:hidden flex flex-col p-8 pt-24 ${isSecurity ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}
          >
            <div className="flex flex-col gap-6 text-lg font-semibold overflow-y-auto">
              <Link href="/products" onClick={() => setMobileMenuOpen(false)}>Shop Technology</Link>
              <div className="h-px bg-slate-200/20" />
              

              
              <div className="flex flex-col gap-3">
                <div className="text-sm font-bold text-red-500 uppercase tracking-wider">Bitdefender Cyber Security</div>
                <Link href="/bitdefender" onClick={() => setMobileMenuOpen(false)} className="text-base font-normal pl-2">Security Hub Home</Link>
                <Link href="/bitdefender#plans" onClick={() => setMobileMenuOpen(false)} className="text-base font-normal pl-2">Products & Plans</Link>
                <Link href="/bitdefender#compare" onClick={() => setMobileMenuOpen(false)} className="text-base font-normal pl-2">Compare Systems</Link>
                <Link href="/bitdefender/guides" onClick={() => setMobileMenuOpen(false)} className="text-base font-normal pl-2">Install Guides</Link>
                <Link href="/bitdefender#setup" onClick={() => setMobileMenuOpen(false)} className="text-base font-normal pl-2">Settings & Dashboard</Link>
                <Link href="/bitdefender#activation" onClick={() => setMobileMenuOpen(false)} className="text-base font-normal pl-2">Subscription Activation</Link>
                <Link href="/bitdefender#troubleshoot" onClick={() => setMobileMenuOpen(false)} className="text-base font-normal pl-2">Troubleshoot FAQ</Link>
                <Link href="/bitdefender/blog" onClick={() => setMobileMenuOpen(false)} className="text-base font-normal pl-2">Cybersecurity Blog</Link>
              </div>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
