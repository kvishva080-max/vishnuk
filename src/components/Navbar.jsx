import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

export default function Navbar({ onOpenConsole, onOpenPricing }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f19]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8b5cf6] to-[#4cd7f6] p-[1px] shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-[#0f131d] rounded-xl flex items-center justify-center">
                <img src="/nexus_logo.svg" alt="NexusAI Logo" className="w-6 h-6 object-contain" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Space_Grotesk']">
                Nexus<span className="text-[#4cd7f6]">AI</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-[#d0bcff] border border-purple-500/30 uppercase tracking-widest font-mono">
                  v3.8
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-[#4cd7f6] transition-colors flex items-center gap-1">
              Features
            </a>
            <a href="#playground" className="hover:text-[#4cd7f6] transition-colors flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#4cd7f6]" /> Live Playground
            </a>
            <a href="#architecture" className="hover:text-[#4cd7f6] transition-colors">
              Architecture
            </a>
            <a href="#pricing" className="hover:text-[#4cd7f6] transition-colors">
              Pricing
            </a>
            <a
              href="#docs"
              onClick={(e) => {
                e.preventDefault();
                onOpenConsole();
              }}
              className="hover:text-[#4cd7f6] transition-colors flex items-center gap-1"
            >
              API Reference <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </nav>

          {/* System Telemetry & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs font-mono px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400">STATUS:</span>
              <span className="text-emerald-400 font-semibold">100% OPERATIONAL</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400">14ms</span>
            </div>

            <button
              onClick={onOpenConsole}
              className="cyber-btn-primary px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#d0bcff]" />
              Launch Console
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsole}
              className="p-2 rounded-lg bg-purple-900/40 text-purple-300 border border-purple-500/30 text-xs flex items-center gap-1"
            >
              <Terminal className="w-3.5 h-3.5" /> Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-[#0f131d]/95 backdrop-blur-2xl border border-white/10 space-y-3">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
            >
              Features
            </a>
            <a
              href="#playground"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
            >
              Live Playground
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
            >
              Architecture
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
            >
              Pricing
            </a>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsole();
                }}
                className="w-full cyber-btn-primary py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4" /> Launch Live Console
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
