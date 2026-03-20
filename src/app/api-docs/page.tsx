'use client';

import { motion } from 'framer-motion';
import { Shield, ChevronRight, Copy, Terminal, Database, Code, ShieldCheck, Zap, Server, Lock, Activity } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ApiDocsPage() {
  const [copied, setCopied] = useState(false);
  const [activeLang, setActiveLang] = useState('javascript');

  const codeSnippets = {
    javascript: `const response = await fetch('https://api.repuchain.io/v1/score/0xd8dA6BF...');\n\nconst { score, factors } = await response.json();\n\nconsole.log(\`Reputation Score: \${score}\`);`,
    python: `import requests\n\nurl = "https://api.repuchain.io/v1/score/0xd8dA6BF..."\n\nr = requests.get(url, headers={"Authorization": "Bearer YOUR_API_KEY"})\n\nprint(f"Reputation Score: {r.json()['score']}")`,
    curl: `curl -X GET "https://api.repuchain.io/v1/score/0xd8dA6BF..." \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -H "Accept: application/json"`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang as keyof typeof codeSnippets]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-20 px-8">
      <nav className="fixed top-0 w-full z-50 glass-card !rounded-none border-t-0 border-x-0 bg-opacity-70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <Link href="/landing" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--color-accent-teal)] rounded-lg flex items-center justify-center rotate-12">
                 <Terminal className="text-black w-5 h-5 -rotate-12" fill="currentColor" />
              </div>
              <span className="text-xl font-display font-bold text-white uppercase tracking-tighter">RepuChain Dev</span>
           </Link>
           <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-sm font-bold text-[var(--color-text-secondary)] hover:text-white transition-colors">Explorer</Link>
              <button className="px-6 py-2 bg-[var(--color-accent-teal)] text-black font-bold rounded-lg text-xs hover:scale-[1.02] active:scale-95 transition-all">Get API Key</button>
           </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 space-y-8 hidden lg:block sticky top-32 h-fit">
           <div className="space-y-4">
              <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-text-muted)]">Introduction</h3>
              <div className="flex flex-col gap-2">
                 {['Welcome', 'Authentication', 'Rate Limits', 'Schema'].map((t) => (
                   <button key={t} className="text-left py-2 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-accent-teal)] transition-colors">{t}</button>
                 ))}
              </div>
           </div>
           <div className="space-y-4">
              <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-text-muted)]">Core Endpoints</h3>
              <div className="flex flex-col gap-2">
                 {['GET /score/:address', 'GET /history/:address', 'POST /proof/generate', 'GET /analytics/consensus'].map((t) => (
                   <button key={t} className="text-left py-2 font-mono text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent-teal)] transition-colors">{t}</button>
                 ))}
              </div>
           </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-16">
           <div className="space-y-6">
              <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)] rounded-full border border-[var(--color-accent-teal)]/20 text-[10px] font-bold uppercase tracking-widest font-mono"
              >
                REST API v1.0.4-beta
              </motion.div>
              <h1 className="text-6xl font-display font-bold tracking-tight">Build with <span className="text-[var(--color-accent-teal)]">Institutional</span> On-Chain Intelligence.</h1>
              <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">Integrate reputation scoring directly into your DAO landing page, DeFi protocol credit check, or dApp gatekeeper logic in under 5 minutes.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: '99.9% Uptime', icon: <Server className="w-4 h-4" /> },
                { title: 'Global Node Mesh', icon: <Activity className="w-4 h-4" /> },
                { title: 'Zero-Knowledge Proofs', icon: <Lock className="w-4 h-4" /> },
              ].map((f, i) => (
                <div key={i} className="glass-card p-4 flex items-center gap-4 bg-white/[0.02]">
                   <div className="w-10 h-10 bg-[var(--color-accent-teal)]/10 rounded-lg flex items-center justify-center text-[var(--color-accent-teal)]">{f.icon}</div>
                   <span className="text-xs font-bold uppercase tracking-widest text-white">{f.title}</span>
                </div>
              ))}
           </div>

           {/* Endpoint Detail Section */}
           <div className="space-y-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                 <div className="px-3 py-1 bg-[var(--color-accent-teal)]/20 text-[var(--color-accent-teal)] rounded font-bold text-xs">GET</div>
                 <h2 className="text-2xl font-display font-bold font-mono tracking-tighter">/v1/score/:address</h2>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">Returns a comprehensive reputation object containing the global index score, categorical weightage breakdown, and identified risk vectors for any EVM or SVM address.</p>

              <div className="grid lg:grid-cols-2 gap-8">
                 <div className="space-y-6">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-text-muted)]">Parameters</h3>
                    <div className="space-y-4">
                       {[
                         { name: 'address', type: 'string', desc: 'The wallet address (0x...) or ENS name (vitalik.eth)' },
                         { name: 'chain', type: 'string', desc: 'Filter by chain. Default: "all"' },
                         { name: 'refresh', type: 'boolean', desc: 'Force real-time chain indexing. Default: false' },
                       ].map((p, i) => (
                         <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-[var(--color-accent-teal)]/30 transition-all">
                            <div className="space-y-1">
                               <div className="flex items-center gap-2">
                                  <span className="font-mono text-sm font-bold text-white">{p.name}</span>
                                  <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-teal)] transition-colors">{p.type}</span>
                               </div>
                               <p className="text-xs text-[var(--color-text-secondary)]">{p.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-text-muted)]">Request Implementation</h3>
                       <div className="flex gap-2">
                          {['javascript', 'python', 'curl'].map((lang) => (
                            <button 
                             key={lang} 
                             onClick={() => setActiveLang(lang)}
                             className={cn(
                               "px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all",
                               activeLang === lang ? "bg-white/10 text-[var(--color-accent-teal)]" : "text-[var(--color-text-muted)] hover:text-white"
                             )}
                            >
                              {lang}
                            </button>
                          ))}
                       </div>
                    </div>
                    <div className="glass-card bg-black/60 relative group">
                       <pre className="p-6 font-mono text-xs overflow-x-auto text-[var(--color-text-secondary)] leading-relaxed">
                          <code>{codeSnippets[activeLang as keyof typeof codeSnippets]}</code>
                       </pre>
                       <button 
                        onClick={copyToClipboard}
                        className="absolute top-4 right-4 p-2 bg-white/10 border border-white/10 rounded-lg hover:bg-[var(--color-accent-teal)] transition-all"
                       >
                          {copied ? <ShieldCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
