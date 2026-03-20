'use client';

import { motion } from 'framer-motion';
import { ScoreRing } from './ScoreRing';
import { RiskBadge } from './RiskBadge';
import { Copy, ExternalLink, Globe } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface WalletCardProps {
  address: string;
  score: number;
  chain?: 'ethereum' | 'solana' | 'polygon';
  compact?: boolean;
  simple?: boolean;
}

export const WalletCard = ({ address, score, chain = 'ethereum', compact = false, simple = false }: WalletCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateAddress = (addr: string) => 
    `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  const riskLevel = score >= 80 ? 'trusted' : score >= 50 ? 'moderate' : 'high-risk';

  if (simple) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <ScoreRing score={score} size="md" />
        <div className="space-y-1">
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest">{chain}</p>
          <p className="font-mono text-sm font-bold text-white">{truncateAddress(address)}</p>
          <div className="flex justify-center mt-2">
            <RiskBadge level={riskLevel} size="sm" />
          </div>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <motion.div 
        whileHover={{ scale: 1.02, y: -2 }}
        className="glass-card p-4 flex items-center gap-4 group"
      >
        <ScoreRing score={score} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-sm text-[var(--color-text-primary)]">{truncateAddress(address)}</span>
            <RiskBadge level={riskLevel} size="sm" />
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] opacity-60">Last active: 2h ago</p>
        </div>
        <ExternalLink className="w-4 h-4 text-[var(--color-accent-teal)] opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 flex flex-col items-center gap-6 relative overflow-hidden group w-full"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-teal)]/5 blur-3xl rounded-full" />
      
      <div className="flex justify-between w-full items-start">
        <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
          <Globe className="w-3 h-3 text-[var(--color-accent-teal)]" />
          {chain}
        </div>
        <RiskBadge level={riskLevel} size="md" />
      </div>

      <ScoreRing score={score} size="lg" />

      <div className="text-center w-full space-y-4">
        <div className="space-y-1">
          <div 
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 border border-white/5 rounded-lg cursor-pointer transition-all active:scale-95 group/addr"
          >
            <span className="font-mono text-lg text-[var(--color-text-primary)]">{truncateAddress(address)}</span>
            <div className="relative">
              {copied ? (
                <span className="text-xs text-[var(--color-accent-teal)] font-bold absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">Copied!</span>
              ) : null}
              <Copy className="w-4 h-4 text-[var(--color-text-secondary)] group-hover/addr:text-[var(--color-accent-teal)] transition-colors" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
          <div className="text-left">
            <p className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-text-muted)] mb-1">First Seen</p>
            <p className="text-sm font-medium">Oct 12, 2021</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-text-muted)] mb-1">Rank</p>
            <p className="text-sm font-medium text-[var(--color-accent-teal)]">Top 12%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
