'use client';

import { useEffect, useState, useRef } from 'react';

interface ScoreCardProps {
  address: string;
  score: number;
  badge: 'Trusted' | 'High risk';
  rank: string;
  rankHighlight: string;
}

export const ScoreCard = ({ address, score, badge, rank, rankHighlight }: ScoreCardProps) => {
  const [displayScore, setDisplayScore] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const duration = 900;
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setDisplayScore(Math.round(progress * score));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          hasAnimated.current = true;
        }
      };
      
      requestAnimationFrame(animate);
      
      // Delay bar fill slightly
      setTimeout(() => setBarWidth(score), 200);
    }, 300);

    return () => clearTimeout(timeout);
  }, [score]);

  const isTrusted = badge === 'Trusted';

  return (
    <div className="bg-[var(--bg)] p-[28px] md:p-[28px] p-[24px]_mobile flex flex-col gap-[20px] hover:bg-[var(--bg2)] transition-colors duration-200 cursor-pointer border-t border-[var(--border)] first:border-t-0 md:border-t-0">
      {/* Row 1 — sc-top */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="font-mono text-[11px] text-[var(--text3)] truncate max-w-[120px] md:max-w-none">{address}</span>
          <span className="font-sans text-[10px] text-[var(--text3)] tracking-[0.12em] uppercase mt-[4px]">
            Solana · mainnet
          </span>
        </div>
        
        <div className="text-right">
          <div 
            className="font-serif text-[44px] leading-[1]"
            style={{ color: isTrusted ? 'var(--green)' : 'var(--text3)' }}
          >
            {displayScore}
          </div>
          <span className="font-sans text-[10px] text-[var(--text3)] tracking-[0.1em] uppercase">
            REPUTATION
          </span>
        </div>
      </div>

      {/* Row 2 — progress bar */}
      <div className="h-[1.5px] bg-[var(--border)] rounded-[1px] overflow-hidden">
        <div 
          className="h-full rounded-[1px] transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ 
            width: `${barWidth}%`,
            background: isTrusted ? 'var(--green)' : 'rgba(255,255,255,0.15)'
          }}
        />
      </div>

      {/* Row 3 — footer */}
      <div className="flex justify-between items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-[5px]">
          <div 
            className="w-[5px] h-[5px] rounded-full"
            style={{ backgroundColor: isTrusted ? 'var(--green)' : '#ef4444' }}
          />
          <span className="font-sans text-[11px] font-normal tracking-[0.06em] uppercase" 
                style={{ color: isTrusted ? 'var(--green)' : 'var(--text2)' }}>
            {badge}
          </span>
        </div>

        {/* Rank */}
        <div className="font-sans text-[11px] text-[var(--text3)] font-normal">
          {rank} <span className="font-normal text-[var(--text2)]">{rankHighlight}</span>
        </div>
      </div>
    </div>
  );
};
