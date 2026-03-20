'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ScoreRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export const ScoreRing = ({ score, size = 'md', animated = true }: ScoreRingProps) => {
  const [displayScore, setDisplayScore] = useState(animated ? 0 : score);

  useEffect(() => {
    if (animated) {
      const duration = 1500;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        
        setDisplayScore(Math.floor(easeOutQuad * score));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [score, animated]);

  const config = {
    sm: { size: 60, stroke: 4, font: 'text-sm' },
    md: { size: 120, stroke: 8, font: 'text-2xl' },
    lg: { size: 200, stroke: 12, font: 'text-4xl' },
    xl: { size: 280, stroke: 16, font: 'text-6xl' },
  };

  const { size: diameter, stroke, font } = config[size];
  const radius = (diameter - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (displayScore / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 80) return 'var(--color-accent-teal)';
    if (s >= 50) return 'var(--color-accent-amber)';
    return 'var(--color-accent-red)';
  };

  const getGlow = (s: number) => {
    if (s >= 80) return 'rgba(0, 212, 170, 0.4)';
    if (s >= 50) return 'rgba(245, 158, 11, 0.4)';
    return 'rgba(239, 68, 68, 0.4)';
  };

  return (
    <div className="relative flex items-center justify-center" style={{ width: diameter, height: diameter }}>
      <svg width={diameter} height={diameter} className="transform -rotate-90">
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={stroke}
          fill="transparent"
        />
        <motion.circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke={getColor(displayScore)}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          style={{
            filter: `drop-shadow(0 0 8px ${getGlow(displayScore)})`,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className={cn("absolute inset-0 flex flex-col items-center justify-center font-bold tracking-tighter", font)}>
        <motion.span
          className="font-display"
          style={{ color: getColor(displayScore) }}
        >
          {displayScore}
        </motion.span>
        <span className="text-[0.4em] opacity-40 uppercase tracking-widest font-mono">Reputation</span>
      </div>
    </div>
  );
};
