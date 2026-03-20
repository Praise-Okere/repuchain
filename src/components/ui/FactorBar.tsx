'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FactorBarProps {
  label: string;
  points: number;
  weight: number;
  maxPoints?: number;
}

export const FactorBar = ({ label, points, weight, maxPoints = 25 }: FactorBarProps) => {
  const percentage = Math.abs((points / maxPoints) * 100);
  const isPositive = points >= 0;

  return (
    <div className="space-y-2 group">
      <div className="flex justify-between items-end">
        <div className="space-y-0.5">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors">{label}</p>
          <p className="text-sm font-display font-semibold text-white">Weight: {(weight * 100).toFixed(0)}%</p>
        </div>
        <div className="text-right">
          <p className={cn(
            "text-lg font-display font-bold tabular-nums",
            isPositive ? "text-[var(--color-accent-teal)]" : "text-[var(--color-accent-red)]"
          )}>
            {isPositive ? '+' : ''}{points}
          </p>
        </div>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className={cn(
            "h-full rounded-full",
            isPositive ? "bg-[var(--color-accent-teal)] shadow-[0_0_10px_rgba(0,212,170,0.3)]" : "bg-[var(--color-accent-red)] shadow-[0_0_10px_rgba(239,68,68,0.3)]"
          )}
        />
      </div>
    </div>
  );
};
