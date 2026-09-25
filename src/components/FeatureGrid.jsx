import React, { useState } from 'react';
import { Bot, Code2, Eye, Network, CheckCircle, ArrowRight, Layers, Lock, Cpu } from 'lucide-react';

const FEATURES = [
  {
    id: 'swarms',
    icon: Bot,
    title: 'Autonomous Agent Swarms',
    tag: 'Dynamic Mesh',
    desc: 'Self-coordinating agent clusters that decompose complex high-level directives into micro-tasks, distributing workloads with sub-millisecond inter-agent consensus.',
    metrics: 'Up to 10,000 agents per cluster',
    bullets: [
      'Self-healing task topologies with automatic failover',
      'Byzantine fault tolerant agent consensus',
      'Dynamic memory allocation across shared context pools'
    ]
  },
  {
    id: 'neural-code',
    icon: Code2,
    title: 'Neural Code Generation',
    tag: 'Deterministic',
    desc: 'Compiles natural language specifications directly into type-safe, production-ready Rust, Go, TypeScript, and Python with formal verification guarantees.',
    metrics: '99.4% compilation pass rate',
    bullets: [
      'Automated zero-vulnerability security auditing',
      'Sub-millisecond AST parser integration',
      'Synthesizes full test suites and mocking harnesses'
    ]
  },
  {
    id: 'vision',
    icon: Eye,
    title: 'Multi-Modal Vision Synthesis',
    tag: '4K Ultra-Low Latency',
    desc: 'Unified vision-language transformers capable of understanding LiDAR point clouds, 4K video streams, UI wireframes, and medical scans in a single forward pass.',
    metrics: '30 FPS real-time 4K inference',
    bullets: [
      'Sub-pixel semantic segmentation',
      'Spatial coordinate telemetry mapping',
      'Zero-shot optical OCR across 120 languages'
    ]
  },
  {
    id: 'knowledge-graph',
    icon: Network,
    title: 'Quantum Knowledge Graph',
    tag: 'Sub-Millisecond Retrieval',
    desc: 'Hybrid vector-graph database that maps enterprise data relationships in hyper-dimensional vector space, retrieving contextual memories with zero hallucinations.',
    metrics: '100M+ vectors queried in < 3ms',
    bullets: [
      'Real-time incremental semantic indexing',
      'Graph-augmented RAG with strict lineage tracking',
      'Encrypted client-side vector isolation'
    ]
  }
];

export default function FeatureGrid({ onOpenFeatureModal }) {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0]);

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            Core Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-['Space_Grotesk']">
            Engineered for Autonomous Supremacy
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Purpose-built neural runtime designed to replace fragile prompt chains with resilient, self-optimizing multi-modal agent clusters.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group cursor-pointer"
                onClick={() => onOpenFeatureModal(feat)}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>

                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-cyan-400">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors font-['Space_Grotesk']">
                  {feat.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {feat.desc}
                </p>

                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {feat.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                  <span className="text-purple-300 font-medium">{feat.metrics}</span>
                  <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
