'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Globe, Shield, Activity, Coins, BarChart3, Users, History, Settings, Search, Bell, Wallet, Workflow, Share2 } from 'lucide-react';
import { WalletCard } from '@/components/ui/WalletCard';
import { FactorBar } from '@/components/ui/FactorBar';
import { ActivityHeatmap } from '@/components/ui/ActivityHeatmap';
import { RiskAlert } from '@/components/ui/RiskAlert';
import { TxRow } from '@/components/ui/TxRow';

const TABS = [
  { id: 'overview', label: 'Overview', icon: <Activity className="w-4 h-4" /> },
  { id: 'transactions', label: 'Transactions', icon: <History className="w-4 h-4" /> },
  { id: 'defi', label: 'DeFi', icon: <Coins className="w-4 h-4" /> },
  { id: 'nfts', label: 'NFTs', icon: <Workflow className="w-4 h-4" /> },
  { id: 'dao', label: 'DAO', icon: <Users className="w-4 h-4" /> },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [walletAddress, setWalletAddress] = useState('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');

  const factors = [
    { label: 'Long-term Holder', points: 18, weight: 0.25 },
    { label: 'DeFi TVL Contribution', points: 12, weight: 0.20 },
    { label: 'Governance Participation', points: -5, weight: 0.15 },
    { label: 'NFT Collection Quality', points: 22, weight: 0.20 },
    { label: 'Sybil Likelihood', points: -2, weight: 0.20 },
  ];

  const transactions = [
    { id: '1', type: 'send', date: 'Mar 12, 2024 • 14:22', amount: '0.45', token: 'ETH', status: 'success', address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', flagged: false },
    { id: '2', type: 'contract', date: 'Mar 11, 2024 • 09:15', amount: '1,240', token: 'USDC', status: 'success', address: '0xUniswapV3-Pool', flagged: false },
    { id: '3', type: 'send', date: 'Mar 10, 2024 • 22:45', amount: '0.01', token: 'ETH', status: 'success', address: '0xDeadAddress-HighRisk', flagged: true },
    { id: '4', type: 'swap', date: 'Mar 09, 2024 • 11:32', amount: '5.2', token: 'SOL', status: 'fail', address: '0xJupiter-Aggregator', flagged: false },
    { id: '5', type: 'receive', date: 'Mar 08, 2024 • 16:54', amount: '10,000', token: 'PEPE', status: 'success', address: '0xMeme-Distributor', flagged: true },
  ];

  const heatmapData = Array.from({ length: 364 }, () => Math.floor(Math.random() * 5));

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex">
      {/* Sidebar Score Rail */}
      <aside className="hidden lg:flex w-96 border-r border-white/5 flex-col fixed inset-y-0 left-0 bg-[var(--color-bg-secondary)]/30 backdrop-blur-xl z-20">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--color-accent-teal)] rounded-lg flex items-center justify-center rotate-12">
                <Shield className="text-black w-5 h-5 -rotate-12" fill="currentColor" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">RepuChain</span>
           </div>
           <button className="p-2 hover:bg-white/5 rounded-lg text-[var(--color-text-muted)] hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
           </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
           <WalletCard address={walletAddress} score={82} chain="ethereum" />

           <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-text-muted)]">
                 <span>Account Health</span>
                 <Shield className="w-3 h-3 text-[var(--color-accent-teal)]" />
              </div>
              <div className="glass-card p-4 space-y-1 bg-gradient-to-br from-[var(--color-accent-teal)]/10 to-transparent">
                 <p className="text-lg font-display font-bold text-white uppercase tracking-tight">Prime Status</p>
                 <p className="text-xs text-[var(--color-text-secondary)]">Verified via 4 security layers.</p>
              </div>
           </div>

           <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-text-muted)]">
                 <span>Scoring Factors</span>
                 <BarChart3 className="w-3 h-3" />
              </div>
              <div className="space-y-6">
                {factors.map((f, i) => (
                  <FactorBar key={i} {...f} />
                ))}
              </div>
           </div>
        </div>

        <div className="p-8 border-t border-white/5">
           <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-display font-bold text-sm tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" /> Generate Badge
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:pl-96 min-h-screen bg-[var(--color-bg-primary)]">
        {/* Top Navbar */}
        <header className="h-20 border-b border-white/5 bg-[var(--color-bg-primary)]/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
           <div className="flex items-center gap-6 flex-1 max-w-xl">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent-teal)] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Scan another wallet..."
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-sm font-mono focus:outline-none focus:border-[var(--color-accent-teal)]/50 transition-all"
                />
              </div>
           </div>

           <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg">
                 <div className="w-2 h-2 rounded-full bg-[var(--color-accent-teal)] animate-pulse" />
                 <span className="text-xs font-mono font-bold uppercase tracking-wider">Mainnet</span>
              </div>
              <button className="p-2.5 hover:bg-white/5 rounded-lg text-[var(--color-text-muted)] hover:text-white transition-colors relative">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--color-accent-red)] rounded-full border-2 border-[var(--color-bg-primary)]" />
              </button>
              <button className="px-5 py-2.5 bg-[var(--color-accent-teal)] text-black font-bold rounded-xl text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[var(--color-accent-teal)]/10">
                 <Wallet className="w-4 h-4" /> Connect Wallet
              </button>
           </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-8 max-w-7xl mx-auto space-y-8 pb-32">
           {/* Tab Selector */}
           <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/5 rounded-xl w-fit">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-lg text-sm font-display font-semibold transition-all flex items-center gap-2",
                    activeTab === tab.id 
                    ? "bg-white/10 text-[var(--color-accent-teal)] shadow-sm border border-white/5" 
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-white/[0.02]"
                  )}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
           </div>

           {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <RiskAlert 
                  severity="warning" 
                  message="This wallet has interacted with 1 known high-risk contract in the last 72 hours. Proceed with caution when providing allowance." 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {[
                     { label: 'Asset Value', value: '$84,204', icon: <Coins />, trend: '+12.5%' },
                     { label: 'Transactions', value: '1,242', icon: <History />, trend: '+45' },
                     { label: 'NFT Holdings', value: '34', icon: <Workflow />, trend: '-2' },
                     { label: 'DAO Votes', value: '18', icon: <Users />, trend: '+2' },
                   ].map((kpi, i) => (
                      <div key={i} className="glass-card p-6 flex flex-col justify-between h-32 group">
                         <div className="flex justify-between items-start">
                            <span className="p-2 bg-white/5 rounded-lg text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-teal)] transition-colors">{kpi.icon}</span>
                            <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest", kpi.trend.startsWith('+') ? 'bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)]' : 'bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)]')}>
                               {kpi.trend}
                            </span>
                         </div>
                         <div>
                            <p className="text-2xl font-display font-bold text-white tabular-nums">{kpi.value}</p>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)]">{kpi.label}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <ActivityHeatmap data={heatmapData} />

                <div className="grid lg:grid-cols-2 gap-8">
                   <div className="glass-card p-6 space-y-6">
                      <h3 className="text-xl font-display font-bold">Portfolio Allocation</h3>
                      <div className="h-64 flex items-center justify-center border border-dashed border-white/10 rounded-xl text-[var(--color-text-muted)] text-sm font-mono">
                         [Chart: Assets Breakdown]
                      </div>
                   </div>
                   <div className="glass-card p-6 space-y-6">
                      <h3 className="text-xl font-display font-bold">Protocol Exposure</h3>
                      <div className="space-y-4">
                         {['Uniswap', 'Aave', 'Lido', 'Curve'].map((p, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 group hover:border-[var(--color-accent-teal)]/30 transition-all">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-xs">{p[0]}</div>
                                  <span className="font-semibold">{p}</span>
                                </div>
                                <span className="text-sm font-mono text-[var(--color-accent-teal)]">$22,400.00</span>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
              </motion.div>
           )}

           {activeTab === 'transactions' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card overflow-hidden border-b-0"
              >
                <div className="px-6 py-4 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                   <h3 className="font-display font-bold text-lg">Interaction History</h3>
                   <div className="flex gap-2">
                      <button className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-semibold hover:bg-white/10 border border-white/5">Filter</button>
                      <button className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-semibold hover:bg-white/10 border border-white/5">Export CSV</button>
                   </div>
                </div>
                <div className="divide-y divide-white/5">
                  {transactions.map((tx) => (
                    <TxRow key={tx.id} tx={tx as any} />
                  ))}
                </div>
                <div className="p-4 text-center">
                   <button className="text-sm font-bold text-[var(--color-accent-teal)] hover:underline">Load More Transactions</button>
                </div>
              </motion.div>
           )}
        </div>
      </main>
    </div>
  );
}


