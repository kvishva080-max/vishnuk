import React from 'react';
import { Github, Twitter, Linkedin, Terminal, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090c15] pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8b5cf6] to-[#4cd7f6] p-[1px]">
                <div className="w-full h-full bg-[#0f131d] rounded-lg flex items-center justify-center">
                  <img src="/nexus_logo.svg" alt="NexusAI" className="w-5 h-5 object-contain" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Space_Grotesk']">
                Nexus<span className="text-[#4cd7f6]">AI</span>
              </span>
            </div>
            
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              The next-generation intelligence platform powering autonomous reasoning, formal code synthesis, and multi-modal swarms at planetary scale.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wider text-xs font-mono">Platform</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Agent Swarms</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Neural Dispatch</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Vision Engine</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Formal Verification</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wider text-xs font-mono">Resources</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-cyan-300 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">System Architecture</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Status Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wider text-xs font-mono">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-cyan-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Careers (We're Hiring)</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} NexusAI Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-white/5 text-xs text-emerald-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
