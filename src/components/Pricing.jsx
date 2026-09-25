import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, HelpCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const TIERS = [
  {
    id: 'starter',
    name: 'Developer Starter',
    monthlyPrice: 49,
    annualPrice: 39,
    desc: 'Ideal for indie hackers, autonomous workflow prototypes, and lightweight agent orchestration.',
    tokens: '25M Reasoning Tokens / mo',
    swarms: 'Up to 5 concurrent agent swarms',
    features: [
      'Nexus-3.8 Flash model access',
      'Sub-50ms token latency',
      'Community Slack & Discord support',
      'REST & WebSocket streaming endpoints',
      '1 Shared Vector Index'
    ],
    highlight: false,
    cta: 'Get Started with Starter'
  },
  {
    id: 'pro',
    name: 'Pro Swarm Cluster',
    monthlyPrice: 199,
    annualPrice: 159,
    desc: 'For fast-scaling engineering teams deploying multi-agent swarms into mission-critical production.',
    tokens: '250M Reasoning Tokens / mo',
    swarms: 'Up to 50 concurrent agent swarms',
    features: [
      'Full Nexus-Quantum & Omni-Vision models',
      'Sub-15ms P99 dedicated queue latency',
      'Formal mathematical proof engine',
      'Unlimited private vector indices',
      'Custom fine-tuning & LoRA adaptors',
      'Priority 24/7 engineering hotline'
    ],
    highlight: true,
    badge: 'MOST POPULAR',
    cta: 'Start 14-Day Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Dedicated Sovereign Cloud',
    monthlyPrice: 899,
    annualPrice: 719,
    desc: 'Dedicated GPU clusters, HIPAA/SOC2 Type II compliance, VPC peering, and custom SLA guarantees.',
    tokens: 'Unlimited Tensor Compute',
    swarms: 'Uncapped autonomous swarms',
    features: [
      'Dedicated Blackwell & H100 tensor pods',
      'Zero data retention & sovereign on-prem option',
      '99.999% uptime financial SLA agreement',
      'Dedicated forward deployed AI architect',
      'Custom quantum routing topologies',
      'Single Sign-On (Okta / SAML / SCIM)'
    ],
    highlight: false,
    cta: 'Contact Enterprise Architect'
  }
];

export default function Pricing({ onSelectPlan }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleSelect = (tier) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onSelectPlan(tier);
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-['Space_Grotesk']">
            Predictable Neural Compute Pricing
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8">
            Scale seamlessly from local agent prototypes to planetary-scale multi-agent infrastructure.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full transition-all ${
                !isAnnual ? 'bg-purple-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                isAnnual ? 'bg-cyan-500 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual Billing
              <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-900 border border-amber-500/30 text-[10px]">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-[#181d2f] to-[#111422] border-2 border-purple-500/70 shadow-2xl shadow-purple-500/20 lg:-translate-y-3'
                    : 'glass-card border border-white/10'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-black text-[11px] font-bold tracking-widest uppercase shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">{tier.name}</h3>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm min-h-[44px] mb-6 font-light">
                    {tier.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk']">
                      ${price}
                    </span>
                    <span className="text-slate-400 text-sm font-mono">
                      / month {isAnnual ? '(billed annually)' : ''}
                    </span>
                  </div>

                  {/* Core Capacity */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-900/60 border border-white/5 font-mono text-xs">
                    <div className="flex justify-between text-cyan-300">
                      <span>Compute:</span>
                      <span className="font-semibold text-white">{tier.tokens}</span>
                    </div>
                    <div className="flex justify-between text-purple-300">
                      <span>Concurrency:</span>
                      <span className="font-semibold text-white">{tier.swarms}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleSelect(tier)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    tier.highlight
                      ? 'cyber-btn-primary text-white shadow-lg'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-white/10'
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
