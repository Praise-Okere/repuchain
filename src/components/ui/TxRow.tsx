'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ShieldAlert, ArrowUpRight, ArrowDownLeft, Workflow, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface TxRowProps {
  tx: {
    id: string;
    type: 'send' | 'receive' | 'contract' | 'swap';
    date: string;
    amount: string;
    token: string;
    status: 'success' | 'fail' | 'pending';
    address: string;
    flagged?: boolean;
    chain?: string;
  };
}

export const TxRow = ({ tx }: TxRowProps) => {
  const [expanded, setExpanded] = useState(false);

  const icons = {
    send: <ArrowUpRight className="text-[var(--color-accent-amber)] w-4 h-4" />,
    receive: <ArrowDownLeft className="text-[var(--color-accent-teal)] w-4 h-4" />,
    contract: <Workflow className="text-[#8b5cf6] w-4 h-4" />,
    swap: <ArrowUpRight className="text-pink-500 w-4 h-4" />,
  };

  const statusColors = {
    success: 'bg-[var(--color-accent-teal)]/20 text-[var(--color-accent-teal)]',
    fail: 'bg-[var(--color-accent-red)]/20 text-[var(--color-accent-red)]',
    pending: 'bg-white/10 text-[var(--color-text-secondary)]',
  };

  return (
    <div className="relative group/row">
      <motion.div
        whileHover={{ y: -1 }}
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "w-full px-6 py-4 flex items-center gap-6 cursor-pointer border-b border-white/5 transition-all",
          expanded ? "bg-white/[0.03] border-white/10" : "bg-transparent hover:bg-white/[0.01]",
          tx.flagged && !expanded ? "border-l-2 border-l-[var(--color-accent-red)]/50 bg-[var(--color-accent-red)]/[0.02]" : ""
        )}
      >
        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
          {icons[tx.type]}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-display font-bold text-white capitalize">{tx.type}</h4>
            {tx.flagged && (
              <span className="flex items-center gap-1 text-[10px] bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] px-1.5 py-0.5 rounded uppercase font-bold tracking-widest">
                <ShieldAlert className="w-2.5 h-2.5" /> High Risk
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--color-text-muted)] font-mono">{tx.date}</p>
        </div>

        <div className="text-left w-32 hidden md:block">
          <p className="text-xs font-mono text-[var(--color-text-secondary)]">{tx.address.slice(0, 6)}...{tx.address.slice(-4)}</p>
        </div>

        <div className="text-right w-40">
           <p className="text-sm font-display font-bold text-white tabular-nums">{tx.amount} {tx.token}</p>
           <p className="text-[10px] text-[var(--color-text-muted)] mono">$4,250.00</p>
        </div>

        <div className="flex items-center gap-4 w-28 justify-end">
          <span className={cn("text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded", statusColors[tx.status])}>
            {tx.status}
          </span>
          <button className="opacity-0 group-hover/row:opacity-100 transition-opacity p-2 hover:bg-white/5 rounded-lg">
            <ExternalLink className="w-4 h-4 text-[var(--color-accent-teal)]" />
          </button>
        </div>
      </motion.div>

      {expanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden bg-[var(--color-bg-secondary)]/50 border-x border-white/5"
          >
            <div className="p-8 grid md:grid-cols-3 gap-8">
               <div className="space-y-4">
                  <h5 className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)]">Origin Data</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                     <span className="text-[var(--color-text-secondary)]">Chain ID:</span>
                     <span className="font-mono text-white">1 (Ethereum)</span>
                     <span className="text-[var(--color-text-secondary)]">Block:</span>
                     <span className="font-mono text-white">19482741</span>
                     <span className="text-[var(--color-text-secondary)]">Nonce:</span>
                     <span className="font-mono text-white">492</span>
                  </div>
               </div>
               <div className="space-y-4">
                  <h5 className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)]">Resource Consumed</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                     <span className="text-[var(--color-text-secondary)]">Gas Price:</span>
                     <span className="font-mono text-white">24 Gwei</span>
                     <span className="text-[var(--color-text-secondary)]">Gas Used:</span>
                     <span className="font-mono text-white">21,000</span>
                     <span className="text-[var(--color-text-secondary)]">L1 Fee:</span>
                     <span className="font-mono text-[var(--color-accent-teal)]">0.0005 ETH</span>
                  </div>
               </div>
               <div className="flex justify-end items-end gap-3">
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all">
                    View Verification
                  </button>
                  <button className="px-4 py-2 bg-[var(--color-accent-teal)] text-black rounded-lg text-xs font-bold transition-all">
                    Report Interaction
                  </button>
               </div>
            </div>
          </motion.div>
      )}
    </div>
  );
};
