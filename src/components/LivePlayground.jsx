import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check, Cpu, Network, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

const PRESETS = [
  {
    id: 'code-gen',
    title: 'Autonomous Code Refactoring Swarm',
    prompt: 'Refactor high-concurrency order pipeline into lock-free RingBuffer with distributed tracing.',
    model: 'Nexus-3.8-Quantum',
    steps: [
      'Scanning AST tree for contention bottlenecks in worker pools...',
      'Detected 3 blocking mutex acquisitions in dispatch loop.',
      'Synthesizing zero-allocation lock-free ring buffer (L1 cache aligned)...',
      'Injecting OpenTelemetry span context into gRPC headers...',
      'Compiling test harness: 10,000,000 synthetic operations executed.',
      'Verification complete: 0 data races, P99 latency reduced by 84.6%.'
    ],
    code: `// Nexus-3.8 Generated Lock-Free RingBuffer (Zero-Allocation)
export class AutonomousRingBuffer<T> {
  private buffer: (T | null)[];
  private head: number = 0;
  private tail: number = 0;
  private mask: number;

  constructor(capacityPowerOfTwo: number = 1024) {
    this.buffer = new Array(capacityPowerOfTwo).fill(null);
    this.mask = capacityPowerOfTwo - 1;
  }

  enqueue(item: T): boolean {
    const next = (this.tail + 1) & this.mask;
    if (next === this.head) return false; // Buffer saturated
    this.buffer[this.tail] = item;
    this.tail = next;
    return true;
  }

  drainToBatch(batchSize: number = 64): T[] {
    const batch: T[] = [];
    while (this.head !== this.tail && batch.length < batchSize) {
      batch.push(this.buffer[this.head]!);
      this.buffer[this.head] = null;
      this.head = (this.head + 1) & this.mask;
    }
    return batch;
  }
}`
  },
  {
    id: 'vision-syn',
    title: 'Multi-Modal Vision & Telemetry Synthesis',
    prompt: 'Analyze high-resolution drone LiDAR feed and flag structural micro-fractures on wind turbine blades.',
    model: 'Nexus-Omni-Vision',
    steps: [
      'Ingesting 4K multispectral drone stream (30 fps)...',
      'Normalizing point-cloud depth vectors against turbine CAD blueprint...',
      'Scanning surface texture with sub-millimeter edge segmentation...',
      'Identified stress fracture at 42.8m blade radius [Confidence: 99.4%].',
      'Calculating aerodynamic drag penalty and catastrophic failure risk window...',
      'Generated corrective maintenance dispatch order with geo-coordinates.'
    ],
    code: `{\n  "event": "ANOMALY_CONFIRMED",\n  "target": "TURBINE_BLADE_DELTA_3",\n  "defect_type": "DELAMINATION_FRACTURE",\n  "severity": "CRITICAL",\n  "coordinates": {\n    "elevation_m": 42.8,\n    "azimuth_deg": 118.4,\n    "surface_depth_mm": 1.4\n  },\n  "recommended_action": "AUTOMATED_PITCH_DOWN_SHUTDOWN",\n  "telemetry_signature": "0x7F9A_F82C_103B"\n}`
  },
  {
    id: 'agent-swarm',
    title: 'Autonomous Multi-Agent Market Intelligence',
    prompt: 'Deploy 50 recursive agents to evaluate semiconductor supply chain exposure to rare earth export policies.',
    model: 'Nexus-Swarm-Pro',
    steps: [
      'Instantiating 50 isolated agent sandbox nodes across 3 continents...',
      'Querying 4,800 public trade manifests and customs tariff schedules...',
      'Constructing dependency graph for Gallium and Germanium wafer distributors...',
      'Cross-referencing lead times against Tier-1 foundry inventory reserves...',
      'Synthesized risk delta: Estimated Q3 wafer price surge of +18.4% (std dev 2.1%).',
      'Report finalized and broadcasted to enterprise alerting webhook.'
    ],
    code: `// Swarm Orchestration Telemetry
SwarmNodes: 50 active workers
TotalManifestsIndexed: 4,812
ConfidenceInterval: 98.7%
CriticalBottleneckIdentified: "Zone-4 Smelting Facilities"
HedgingStrategyRecommended: "Forward procurement contracts on 300mm Gallium wafers"`
  }
];

export default function LivePlayground() {
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [customPrompt, setCustomPrompt] = useState(PRESETS[0].prompt);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(PRESETS[0].steps.length);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'code' | 'telemetry'
  const [elapsedMs, setElapsedMs] = useState(14);
  const intervalRef = useRef(null);

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
    setElapsedMs(0);

    let step = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      step++;
      setCurrentStepIndex(step);
      setElapsedMs((prev) => prev + Math.floor(Math.random() * 8 + 6));

      if (step >= selectedPreset.steps.length) {
        clearInterval(intervalRef.current);
        setIsRunning(false);
      }
    }, 450);
  };

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setCustomPrompt(preset.prompt);
    setCurrentStepIndex(preset.steps.length);
    setIsRunning(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedPreset.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Live Neural Playground
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-['Space_Grotesk']">
            Test Autonomous Reasoning in Real-Time
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Interact with NexusAI models and observe real-time chain-of-thought execution, multi-agent dispatch, and deterministic compilation.
          </p>
        </div>

        {/* Preset Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedPreset.id === preset.id
                  ? 'bg-purple-600/30 text-[#d0bcff] border border-purple-500/60 shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:border-white/20 hover:text-slate-200'
              }`}
            >
              {preset.title}
            </button>
          ))}
        </div>

        {/* Console Box */}
        <div className="rounded-2xl glass-frosted overflow-hidden border border-white/10 shadow-2xl shadow-black/80 max-w-5xl mx-auto">
          {/* Top Bar */}
          <div className="px-5 py-3 bg-[#0a0e18]/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="text-cyan-400 font-semibold">{selectedPreset.model}</span>
                <span>•</span>
                <span className="text-emerald-400">SESSION #{Math.abs(selectedPreset.title.length * 8214)}</span>
              </span>
            </div>

            {/* Tab switchers */}
            <div className="flex items-center space-x-1 bg-slate-900/80 p-1 rounded-lg border border-white/5 text-xs font-mono">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'terminal' ? 'bg-purple-500/30 text-purple-200 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Agent Stream
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'code' ? 'bg-cyan-500/30 text-cyan-200 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Synthesized Output
              </button>
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'telemetry' ? 'bg-emerald-500/30 text-emerald-200 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Telemetry
              </button>
            </div>
          </div>

          {/* Prompt Input Bar */}
          <div className="p-4 bg-slate-900/40 border-b border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter prompt or autonomous workflow requirement..."
                className="w-full bg-[#0b0f19] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-400/80 font-mono"
              />
            </div>
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="w-full sm:w-auto cyber-btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
            >
              {isRunning ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Synthesizing...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-cyan-300 fill-cyan-300" />
                  Run Autonomous Agent
                </>
              )}
            </button>
          </div>

          {/* Console Content Area */}
          <div className="p-6 font-mono text-sm bg-[#090d16] min-h-[300px] max-h-[440px] overflow-y-auto">
            {activeTab === 'terminal' && (
              <div className="space-y-3">
                <div className="text-slate-500 text-xs">
                  [KERNEL] Connected to cluster nexus-us-east-4a via QUIC protocol
                </div>
                <div className="text-purple-300/80 text-xs">
                  [INPUT_DISPATCH] &quot;{customPrompt}&quot;
                </div>

                {selectedPreset.steps.slice(0, currentStepIndex).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 animate-fadeIn">
                    <span className="text-cyan-400 text-xs mt-0.5">❯</span>
                    <span className="text-slate-300 leading-relaxed">{step}</span>
                  </div>
                ))}

                {isRunning && (
                  <div className="flex items-center gap-2 text-cyan-400 text-xs animate-pulse">
                    <span className="inline-block w-2 h-4 bg-cyan-400"></span>
                    <span>Reasoning in progress across 12 GPU tensor threads...</span>
                  </div>
                )}

                {!isRunning && currentStepIndex >= selectedPreset.steps.length && (
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <CheckCircle2 className="w-4 h-4" /> Workflow execution succeeded (Exit Code 0)
                    </span>
                    <span className="text-slate-400">
                      Execution time: <strong className="text-cyan-400">{elapsedMs}ms</strong>
                    </span>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'code' && (
              <div className="relative">
                <button
                  onClick={copyToClipboard}
                  className="absolute top-0 right-0 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 hover:bg-slate-700/80 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Code
                    </>
                  )}
                </button>
                <pre className="text-cyan-300/90 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm pt-2">
                  {selectedPreset.code}
                </pre>
              </div>
            )}

            {activeTab === 'telemetry' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                  <div className="text-xs text-slate-400">Active KV Cache</div>
                  <div className="text-xl font-bold text-white mt-1">4.2 GB</div>
                  <div className="text-[10px] text-cyan-400 mt-1">98.2% Hit Ratio</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                  <div className="text-xs text-slate-400">Parallel Swarm Nodes</div>
                  <div className="text-xl font-bold text-white mt-1">64 vCPUs</div>
                  <div className="text-[10px] text-purple-400 mt-1">Zero Lock Contention</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                  <div className="text-xs text-slate-400">Verification Engine</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">Formal Proof: Passed</div>
                  <div className="text-[10px] text-slate-400 mt-1">Checked 100,000 invariants</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
