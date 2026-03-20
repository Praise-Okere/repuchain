'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

interface ActivityHeatmapProps {
  data: number[];
  label?: string;
}

export const ActivityHeatmap = ({ data, label = "Transaction Activity (52w)" }: ActivityHeatmapProps) => {
  const weeks = 52;
  const days = 7;
  const totalCells = weeks * days;

  // Normalize data for display
  const max = Math.max(...data, 1);
  const getIntensity = (val: number) => {
    if (val === 0) return 0;
    const norm = val / max;
    if (norm < 0.25) return 1;
    if (norm < 0.5) return 2;
    if (norm < 0.75) return 3;
    return 4;
  };

  const colors = [
    'bg-white/[0.03]',
    'bg-[var(--color-accent-teal)]/10',
    'bg-[var(--color-accent-teal)]/30',
    'bg-[var(--color-accent-teal)]/60 shadow-[0_0_8px_rgba(0,212,170,0.2)]',
    'bg-[var(--color-accent-teal)] shadow-[0_0_12px_rgba(0,212,170,0.4)]',
  ];

  const grid = useMemo(() => {
    const res = [];
    for (let i = 0; i < totalCells; i++) {
       res.push(getIntensity(data[i] || 0));
    }
    return res;
  }, [data]);

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-display font-bold text-lg tracking-tight text-white">{label}</h3>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--color-text-muted)] group">
          <span>Less</span>
          {colors.map((c, i) => (
            <div key={i} className={cn("w-2.5 h-2.5 rounded-[2px]", c)} />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="flex gap-[3px] overflow-x-auto pb-2 scrollbar-none">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, d) => {
              const idx = w * days + d;
              const intensity = grid[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.001 }}
                  className={cn(
                    "w-[11px] h-[11px] rounded-[2px] cursor-pointer hover:ring-1 hover:ring-[var(--color-accent-teal)] transition-all",
                    colors[intensity]
                  )}
                  title={`Activity Level: ${intensity}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
