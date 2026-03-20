'use client';

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export const Terminal = () => {
  const [scores, setScores] = useState([0, 0, 0]);
  const [widths, setWidths] = useState([0, 0, 0]);
  const [breakdown, setBreakdown] = useState([0, 0, 0, 0, 0]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    const targets = [94, 98, 18];
    const breakdownTargets = [88, 72, 64, 48, 32];
    
    const timeout = setTimeout(() => {
      // Score Countup
      const duration = 1000;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setScores(targets.map(t => Math.round(t * progress)));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          hasAnimated.current = true;
        }
      };
      
      requestAnimationFrame(animate);

      // Widths
      setTimeout(() => setWidths(targets), 200);
      
      // Breakdown staggering
      breakdownTargets.forEach((t, i) => {
        setTimeout(() => {
          setBreakdown(prev => {
            const next = [...prev];
            next[i] = t;
            return next;
          });
        }, 350 + (i * 80));
      });

    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const wallets = [
    { avi: '7x', addr: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83...AsU', tags: ['DeFi', 'DAO', 'NFT'], score: 94, aviClass: 'bg-[var(--g-dim)] border-[var(--g-border)] text-[var(--green)]' },
    { avi: 'vi', addr: 'vitalik.sol', tags: ['DeFi', 'Gov', 'Builder'], score: 98, aviClass: 'bg-[var(--p-dim)] border-[var(--p-border)] text-[var(--purple)]' },
    { avi: '3H', addr: '3Hf9Lm2KpQ8zRtXvBnY5eD7wA4cJ...N0q', tags: ['3 flags'], score: 18, aviClass: 'bg-[var(--t4)] border-[var(--border)] text-[var(--t3)]' },
  ];

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-md)] rounded-[14px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.03)] animate-fadeUp [animation-delay:0.2s]">
      {/* Title Bar */}
      <div className="px-[16px] py-[12px] border-b border-[var(--border)] bg-white/[0.02] flex items-center justify-between">
        <div className="flex gap-[6px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57b3]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#ffbc2eb3]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840b3]" />
        </div>
        <div className="font-mono text-[11px] text-[var(--t3)] tracking-[0.06em]">repuchain.sol — wallet scanner</div>
        <div className="flex items-center gap-[5px] font-mono text-[10px] text-[var(--green)] tracking-[0.08em]">
           LIVE
           <div className="w-[5px] h-[5px] rounded-full bg-[var(--green)] animate-blink-custom" />
        </div>
      </div>

      {/* Wallet Rows */}
      {wallets.map((w, i) => (
        <div key={i} className="px-[16px] py-[14px] border-b border-[var(--border)] flex items-center gap-[12px] hover:bg-[var(--bg-hover)] transition-colors duration-150 cursor-pointer">
           <div className={cn("w-[34px] h-[34px] rounded-[8px] border flex items-center justify-center font-mono text-[11px] font-medium shrink-0", w.aviClass)}>
             {w.avi}
           </div>
           <div className="flex-1 min-w-0">
             <div className="font-mono text-[11px] text-[var(--t2)] truncate">{w.addr}</div>
             <div className="flex gap-[6px] mt-[4px]">
               {w.tags.map(t => (
                 <span key={t} className={cn(
                   "px-[6px] py-[1px] rounded-[3px] font-mono text-[10px] border",
                   t === '3 flags' ? "text-[#ef4444] border-[#ef444433] bg-[#ef44440f]" : "text-[var(--t3)] border-[var(--border)] bg-[var(--t4)]"
                 )}>
                   {t}
                 </span>
               ))}
             </div>
           </div>
           <div className="text-right shrink-0">
             <div className={cn("font-serif text-[26px] leading-[1]", i === 2 ? "text-[#e2e8f440]" : "text-[var(--green)]")}>
               {scores[i]}
             </div>
             <div className="w-[44px] h-[2px] rounded-[1px] bg-[var(--border)] overflow-hidden mt-[5px] ml-auto">
                <div 
                  className={cn("h-full rounded-[1px] transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]", i === 2 ? "bg-white/[0.15]" : "bg-[var(--green)]")}
                  style={{ width: `${widths[i]}%` }}
                />
             </div>
           </div>
        </div>
      ))}

      {/* Score Breakdown Section */}
      <div className="p-[16px] border-b border-[var(--border)]">
        <div className="font-mono text-[10px] text-[var(--t3)] tracking-[0.1em] uppercase mb-[14px]">Score breakdown · 7xKX...AsU</div>
        {[
          { label: 'Tx consistency', val: '+22', color: 'var(--green)', barColor: 'var(--green)' },
          { label: 'DAO governance', val: '+18', color: 'var(--purple)', barColor: 'var(--purple)' },
          { label: 'DeFi depth', val: '+16', color: 'var(--purple)', barColor: 'var(--purple)' },
          { label: 'SPL tokens', val: '+12', color: 'var(--purple)', barColor: 'var(--purple)' },
          { label: 'Flagged programs', val: '−8', color: '#ef4444', barColor: '#ef4444' },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-[10px] mb-[9px] last:mb-0">
            <span className="font-sans text-[11px] text-[var(--t2)] w-[120px] shrink-0">{row.label}</span>
            <div className="flex-1 h-[3px] bg-[var(--border)] rounded-[2px] overflow-hidden">
              <div 
                className="h-full rounded-[2px] transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ width: `${breakdown[i]}%`, backgroundColor: row.barColor }}
              />
            </div>
            <span className="font-mono text-[11px] w-[28px] text-right shrink-0" style={{ color: row.color }}>{row.val}</span>
          </div>
        ))}
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-3">
         <div className="p-[14px_16px] border-r border-[var(--border)]">
           <div className="font-serif text-[22px] text-[var(--tx)] leading-[1] mb-[3px]">
             4.2<span className="text-[15px] italic text-[var(--green)] ml-[1px]">M</span>
           </div>
           <div className="font-mono text-[10px] text-[var(--t3)] tracking-[0.08em] uppercase">Wallets</div>
         </div>
         <div className="p-[14px_16px] border-r border-[var(--border)]">
           <div className="font-serif text-[22px] text-[var(--tx)] leading-[1] mb-[3px]">
             62<span className="text-[15px] italic text-[var(--green)] ml-[1px]">.4</span>
           </div>
           <div className="font-mono text-[10px] text-[var(--t3)] tracking-[0.08em] uppercase">Avg Score</div>
         </div>
         <div className="p-[14px_16px]">
           <div className="font-serif text-[22px] text-[var(--tx)] leading-[1] mb-[3px]">
             12<span className="text-[15px] italic text-[var(--green)] ml-[1px]">k</span>
           </div>
           <div className="font-mono text-[10px] text-[var(--t3)] tracking-[0.08em] uppercase">Risks Flagged</div>
         </div>
      </div>

    </div>
  );
};
