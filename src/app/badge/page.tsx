'use client';

import { motion } from 'framer-motion';
import { ScoreRing } from '@/components/ui/ScoreRing';
import { Shield, ChevronRight, Copy, Share2, ExternalLink, ShieldCheck, Database, Layout, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function BadgePage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('iframe');

  const copyToClipboard = () => {
    const code = activeTab === 'iframe' 
      ? '<iframe src="https://repuchain.io/embed/0xd8dA...6045" width="280" height="320" frameborder="0"></iframe>'
      : "<RepuChainBadge address='0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045' size='lg' />";
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-20 px-8">
      <nav className="fixed top-0 w-full z-50 glass-card !rounded-none border-t-0 border-x-0 bg-opacity-70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[var(--color-accent-teal)] rounded-lg flex items-center justify-center rotate-12">
                <ShieldCheck className="text-black w-5 h-5 -rotate-12" fill="currentColor" />
             </div>
             <span className="text-xl font-display font-bold text-white uppercase tracking-tighter">RepuChain</span>
          </div>
          <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-[var(--color-accent-teal)] transition-all">Connect Wallet</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
           <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)] rounded-full border border-[var(--color-accent-teal)]/20"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent-teal)] animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest font-mono">Proof of Identity Protocol</span>
              </motion.div>
              <h1 className="text-6xl font-display font-bold tracking-tight">Display Your <span className="text-[var(--color-accent-teal)]">Reputation</span> Anywhere.</h1>
              <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-lg">Embed your institutional-grade reputation score in your DAO bio, project site, or social profiles with verifiable on-chain proofs.</p>
           </div>

           <div className="space-y-6">
              <h3 className="text-sm uppercase font-bold tracking-[0.3em] text-[var(--color-text-muted)]">Configuration</h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="glass-card p-4 space-y-4 bg-white/[0.03]">
                    <div className="flex justify-between items-center">
                       <p className="text-xs font-bold text-white">Size</p>
                       <Layout className="w-4 h-4 text-[var(--color-accent-teal)] opacity-50" />
                    </div>
                    <div className="flex gap-2">
                       {['SM', 'MD', 'LG'].map((s) => (
                         <button key={s} className="flex-1 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-bold hover:border-[var(--color-accent-teal)]/50 transition-all active:scale-95">{s}</button>
                       ))}
                    </div>
                 </div>
                 <div className="glass-card p-4 space-y-4 bg-white/[0.03]">
                    <div className="flex justify-between items-center">
                       <p className="text-xs font-bold text-white">Theme</p>
                       <Smartphone className="w-4 h-4 text-[var(--color-accent-teal)] opacity-50" />
                    </div>
                    <div className="flex gap-2">
                       {['Dark', 'Glass', 'Cyber'].map((t) => (
                         <button key={t} className="flex-1 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-bold hover:border-[var(--color-accent-teal)]/50 transition-all active:scale-95">{t}</button>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-4">
              <div className="flex items-center gap-2 p-1 bg-white/[0.03] border border-white/5 rounded-xl w-fit">
                 {['iframe', 'react'].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-6 py-2 rounded-lg text-xs font-bold uppercase transition-all",
                      activeTab === tab ? "bg-white/10 text-[var(--color-accent-teal)] border border-white/5" : "text-[var(--color-text-muted)] hover:text-white"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
              <div className="relative group">
                 <div className="flex absolute -inset-1 bg-gradient-to-r from-[var(--color-accent-teal)] to-transparent blur opacity-0 group-hover:opacity-20 transition-opacity" />
                 <pre className="bg-black/60 border border-white/10 rounded-2xl p-6 font-mono text-sm text-[var(--color-text-secondary)] overflow-x-auto relative">
                    <code>
                      {activeTab === 'iframe' 
                       ? `<iframe \n  src="https://repuchain.io/embed/0xd8dA...6045" \n  width="280" \n  height="320" \n  frameborder="0"\n></iframe>`
                       : `import { RepuChainBadge } from '@repuchain/react';\n\n<RepuChainBadge \n  address="0xd8dA6BF..." \n  size="lg"\n/>`}
                    </code>
                 </pre>
                 <button 
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 p-2 bg-white/10 border border-white/10 rounded-lg hover:bg-[var(--color-accent-teal)] hover:text-black transition-all active:scale-90"
                 >
                   {copied ? <ShieldCheck className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                 </button>
              </div>
           </div>
        </div>

        <div className="relative">
           <div className="absolute -inset-20 bg-[var(--color-accent-teal)]/5 blur-[100px] rounded-full" />
           <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card w-[320px] mx-auto p-1 bg-gradient-to-br from-[var(--color-accent-teal)]/20 via-transparent to-transparent shadow-2xl relative"
           >
              <div className="bg-[var(--color-bg-secondary)] rounded-[var(--radius-card)] p-8 flex flex-col items-center gap-8 relative overflow-hidden group">
                 {/* Proof Watermark */}
                 <div className="absolute top-4 right-4">
                    <div className="p-1 px-2 border border-[var(--color-accent-teal)]/20 bg-[var(--color-accent-teal)]/5 rounded-md flex items-center gap-1.5 text-[8px] font-bold text-[var(--color-accent-teal)] opacity-60">
                       <Database className="w-2.5 h-2.5" /> PROOF #4821
                    </div>
                 </div>

                 <ScoreRing score={82} size="lg" />

                 <div className="text-center space-y-2">
                    <p className="font-display font-bold text-xl uppercase tracking-tighter">Vitalik.eth</p>
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">Verified Reputation Proof</p>
                 </div>

                 <div className="w-full h-[1px] bg-white/5" />

                 <div className="flex gap-4 w-full">
                    <div className="flex-1 p-3 bg-white/5 rounded-xl text-center space-y-1">
                       <p className="text-[8px] uppercase font-bold tracking-widest text-[var(--color-text-muted)]">Rank</p>
                       <p className="text-xs font-bold text-[var(--color-accent-teal)]">Top 12%</p>
                    </div>
                    <div className="flex-1 p-3 bg-white/5 rounded-xl text-center space-y-1">
                       <p className="text-[8px] uppercase font-bold tracking-widest text-[var(--color-text-muted)]">Verified</p>
                       <p className="text-xs font-bold text-white">Mar 24</p>
                    </div>
                 </div>

                 <div className="flex items-center gap-1.5 pt-4">
                    <div className="w-5 h-5 bg-[var(--color-accent-teal)] rounded flex items-center justify-center font-bold text-[10px] text-black">R</div>
                    <span className="text-[10px] font-display font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Powered by RepuChain</span>
                 </div>
              </div>
           </motion.div>

           <div className="mt-12 flex justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 glass-card bg-[var(--color-bg-secondary)] text-sm font-bold border-white/10 hover:border-[var(--color-accent-teal)]/40 hover:scale-[1.02] transition-all">
                <ExternalLink className="w-4 h-4 text-[var(--color-accent-teal)]" /> View On-Chain Proof
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
