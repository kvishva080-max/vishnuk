import React from 'react';
import { ArrowRight, Sparkles, Play, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function Hero({ onOpenConsole, onOpenTrial }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Dynamic ambient optical glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-xs text-purple-200 mb-8 shadow-inner hover:border-cyan-400/50 transition-all cursor-pointer">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-semibold text-[#4cd7f6]">Nexus-3.8 Reasoning Swarm</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">Stitch MCP Native Integration Released</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#4cd7f6]" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6 font-['Space_Grotesk']">
          Supercharge Autonomous Workflows with{' '}
          <span className="gradient-text-cyan-purple">Neural Intelligence</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300/90 font-light mb-10 leading-relaxed">
          Orchestrate multi-agent clusters, type-safe autonomous code compilation, and real-time vision synthesis with ultra-low latency and enterprise-grade isolation.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto cyber-btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-3 shadow-xl"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            Start 14-Day Enterprise Trial
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsole}
            className="w-full sm:w-auto cyber-btn-secondary px-8 py-4 rounded-xl text-base font-medium text-slate-200 flex items-center justify-center gap-3 hover:text-white"
          >
            <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
            Watch 2-Min Interactive Demo
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
            <div className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">48M+</div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mt-1">Tokens / Sec Peak</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
            <div className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">&lt; 14ms</div>
            <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mt-1">First Token Latency</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
            <div className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">99.998%</div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mt-1">Cluster SLA</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
            <div className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">142,000+</div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mt-1">Active Swarms</div>
          </div>
        </div>
      </div>
    </section>
  );
}
