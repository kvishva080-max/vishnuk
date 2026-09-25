import React, { useState } from 'react';
import { Cpu, Server, Database, Shield, Zap, ArrowRight, Activity, GitBranch } from 'lucide-react';

const NODES = [
  {
    id: 'gateway',
    title: 'Edge Gateway & Tokenizer',
    icon: Zap,
    latency: '1.2ms',
    throughput: '850K req/s',
    status: 'Healthy',
    desc: 'Anycast edge proxy routing traffic to the nearest GPU tensor cluster with zero cold starts and sub-millisecond BPE tokenization.'
  },
  {
    id: 'dispatcher',
    title: 'Autonomous Swarm Dispatcher',
    icon: GitBranch,
    latency: '2.8ms',
    throughput: '120K swarms/s',
    status: 'Healthy',
    desc: 'Dynamic DAG task scheduler dynamically clustering multi-agent reasoning paths with speculative execution.'
  },
  {
    id: 'tensor',
    title: 'Tensor Processing Pods',
    icon: Cpu,
    latency: '8.4ms',
    throughput: '48M tokens/s',
    status: 'Optimal',
    desc: 'Cluster of 16,384 Blackwell and H100 SXM5 GPUs interconnected via 3.2 Tbps Quantum-2 InfiniBand.'
  },
  {
    id: 'verifier',
    title: 'Formal Verification Engine',
    icon: Shield,
    latency: '3.1ms',
    throughput: '100% Guaranteed',
    status: 'Active',
    desc: 'Deterministic mathematical theorem prover validating output correctness, hallucination prevention, and code safety.'
  },
  {
    id: 'graph',
    title: 'Quantum Vector Store',
    icon: Database,
    latency: '1.8ms',
    throughput: '500M vectors',
    status: 'Synchronized',
    desc: 'Distributed HNSW graph index with instant semantic retrieval and end-to-end homomorphic vector encryption.'
  }
];

export default function Architecture() {
  const [selectedNode, setSelectedNode] = useState(NODES[2]);

  return (
    <section id="architecture" className="py-24 relative bg-[#090d16]/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            Infrastructure Topology
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-['Space_Grotesk']">
            Distributed Neural Pipeline
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Inspect the multi-layered telemetry and execution pipeline powering NexusAI’s ultra-low latency guarantees.
          </p>
        </div>

        {/* Interactive Node Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-10">
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#1c1f2e] to-[#121622] border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-105'
                    : 'bg-[#0f131d]/80 border-white/5 hover:border-white/20 hover:bg-[#151926]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    STAGE {index + 1}
                  </span>
                </div>

                <div className="font-bold text-sm text-white mb-1 font-['Space_Grotesk']">{node.title}</div>
                <div className="text-xs font-mono text-cyan-400">{node.latency}</div>
              </div>
            );
          })}
        </div>

        {/* Detailed Node Inspector Panel */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <selectedNode.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">{selectedNode.title}</h4>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Cluster Status: <strong className="text-emerald-300">{selectedNode.status}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5">
                <div className="text-slate-500">LATENCY</div>
                <div className="text-cyan-400 font-bold">{selectedNode.latency}</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5">
                <div className="text-slate-500">THROUGHPUT</div>
                <div className="text-purple-300 font-bold">{selectedNode.throughput}</div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            {selectedNode.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
