import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LivePlayground from './components/LivePlayground';
import FeatureGrid from './components/FeatureGrid';
import Architecture from './components/Architecture';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [activeFeatureModal, setActiveFeatureModal] = useState(null);

  const handleOpenConsole = () => {
    // In a real app, this might open a full-screen interactive terminal overlay
    const playgroundSection = document.getElementById('playground');
    if (playgroundSection) {
      playgroundSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTrial = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0b0f19]">
      {/* Background radial mesh styling */}
      <div className="absolute inset-0 z-0 radial-mesh-aurora pointer-events-none opacity-60"></div>
      
      <div className="relative z-10">
        <Navbar 
          onOpenConsole={handleOpenConsole} 
          onOpenPricing={handleOpenTrial} 
        />
        
        <main>
          <Hero 
            onOpenConsole={handleOpenConsole} 
            onOpenTrial={handleOpenTrial} 
          />
          <LivePlayground />
          <FeatureGrid 
            onOpenFeatureModal={(feat) => setActiveFeatureModal(feat)} 
          />
          <Architecture />
          <Pricing 
            onSelectPlan={(plan) => console.log('Selected Plan:', plan.name)} 
          />
        </main>
        
        <Footer />
      </div>

      {/* Feature Modal Placeholder */}
      {activeFeatureModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0b0f19]/80 backdrop-blur-md">
          <div className="glass-card w-full max-w-2xl rounded-2xl p-8 relative border border-cyan-500/30 shadow-2xl shadow-cyan-900/40">
            <button 
              onClick={() => setActiveFeatureModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full"
            >
              Close
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/20 text-purple-300 rounded-xl border border-purple-500/30">
                <activeFeatureModal.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">{activeFeatureModal.title}</h3>
            </div>
            <p className="text-slate-300 mb-6">{activeFeatureModal.desc}</p>
            <div className="space-y-2 text-sm text-slate-400">
              {activeFeatureModal.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
