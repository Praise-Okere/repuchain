'use client';

import { motion } from 'framer-motion';
import { WalletCard } from '@/components/ui/WalletCard';
import { FactorBar } from '@/components/ui/FactorBar';
import { Shield, ChevronRight, Scale, Search, History, Users, Coins } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ComparePage() {
  const wallets = [
    {
      address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      score: 98,
      factors: [
        { label: 'Long-term Holder', points: 18, weight: 0.25 },
        { label: 'DeFi TVL', points: 12, weight: 0.20 },
        { label: 'Governance', points: 15, weight: 0.15 },
        { label: 'NFT Quality', points: 22, weight: 0.20 },
        { label: 'Sybil Risk', points: 24, weight: 0.20 },
      ]
    },
    {
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      score: 64,
      factors: [
        { label: 'Long-term Holder', points: 8, weight: 0.25 },
        { label: 'DeFi TVL', points: 15, weight: 0.20 },
        { label: 'Governance', points: -5, weight: 0.15 },
        { label: 'NFT Quality', points: 12, weight: 0.20 },
        { label: 'Sybil Risk', points: 10, weight: 0.20 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] px-8 pt-32 pb-20">
      <nav className="fixed top-0 w-full z-50 glass-card !rounded-none border-t-0 border-x-0 bg-opacity-70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--color-accent-teal)] rounded-lg flex items-center justify-center rotate-12">
               <Shield className="text-black w-5 h-5 -rotate-12" fill="currentColor" />
            </div>
            <span className="text-xl font-display font-bold text-white">RepuChain</span>
          </div>
          <div className="flex items-center gap-4">
             <button className="px-4 py-2 hover:bg-white/5 rounded-lg text-sm font-semibold transition-colors">Integrations</button>
             <button className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-[var(--color-accent-teal)] transition-all transform hover:-translate-y-0.5 shadow-lg">New Comparison</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)] rounded-full border border-[var(--color-accent-teal)]/20"
          >
            <Scale className="w-3 h-3" />
            <span className="text-[10px] uppercase font-bold tracking-widest font-mono">Side-by-Side Analysis</span>
          </motion.div>
          <h1 className="text-5xl font-display font-bold tracking-tight">Vetting Protocol Contributors</h1>
          <p className="text-[var(--color-text-secondary)] text-lg">Compare reputation signals across multiple addresses for DAO whitelisting or credit assessment.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--color-bg-secondary)] border border-white/10 rounded-full hidden md:flex items-center justify-center z-10 font-display font-bold text-xl text-[var(--color-text-muted)] italic">
             VS
           </div>

           {wallets.map((wallet, idx) => (
             <motion.div 
               key={wallet.address}
               initial={{ x: idx === 0 ? -20 : 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="space-y-8"
             >
                <WalletCard address={wallet.address} score={wallet.score} />
                <div className="glass-card p-8 space-y-8">
                   <h3 className="text-xl font-display font-bold border-b border-white/5 pb-4">Detailed Breakdown</h3>
                   <div className="space-y-6">
                      {wallet.factors.map((f, i) => (
                        <div key={i} className="relative">
                           <FactorBar {...f} />
                           {idx === 0 && wallets[1].factors[i] && (
                              <div className={cn(
                                "absolute -right-4 top-0 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest translate-x-1/2",
                                f.points > wallets[1].factors[i].points ? "bg-[var(--color-accent-teal)]/20 text-[var(--color-accent-teal)]" : "hidden"
                              )}>
                                Higher Score
                              </div>
                           )}
                           {idx === 1 && wallets[0].factors[i] && (
                              <div className={cn(
                                "absolute -right-4 top-0 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest translate-x-1/2",
                                f.points > wallets[0].factors[i].points ? "bg-[var(--color-accent-teal)]/20 text-[var(--color-accent-teal)]" : "hidden"
                              )}>
                                Higher Score
                              </div>
                           )}
                        </div>
                      ))}
                   </div>

                   <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                         <p className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)] flex items-center gap-1.5">
                           <Coins className="w-3 h-3 text-[var(--color-accent-teal)]" /> TVL Rank
                         </p>
                         <p className="text-xl font-display font-bold">#42,903</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                         <p className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)] flex items-center gap-1.5">
                           <Users className="w-3 h-3 text-[var(--color-accent-amber)]" /> DAO Influence
                         </p>
                         <p className="text-xl font-display font-bold">14.2M Votes</p>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="glass-card p-12 text-center space-y-6">
           <div className="w-16 h-16 bg-[var(--color-accent-teal)]/10 rounded-full flex items-center justify-center mx-auto">
             <Scale className="w-8 h-8 text-[var(--color-accent-teal)]" />
           </div>
           <div className="space-y-2">
             <h2 className="text-3xl font-display font-bold text-white">Final Recommendation</h2>
             <p className="text-[var(--color-text-secondary)]">Based on the comparative reputation index, <span className="text-white font-mono">0xd8dA...6045</span> is categorized as an <span className="text-[var(--color-accent-teal)] font-bold italic underline decoration-dotted underline-offset-4 pointer">Institutional Grade Partner</span>, scoring 34% higher than the industry baseline.</p>
           </div>
           <button className="px-8 py-3 bg-[var(--color-bg-primary)] border border-white/10 rounded-xl font-bold hover:bg-[var(--color-accent-teal)] hover:text-black transition-all">Download Comparative Report</button>
        </div>
      </div>
    </div>
  );
}
