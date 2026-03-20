'use client';

import { Terminal } from './Terminal';
import { Search, Star, Lock, Clock } from 'lucide-react';
import { useState } from 'react';

export const Hero = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] min-h-[calc(100vh-60px)] flex items-center">
      {/* Orb Blurs */}
      <div className="orb-purple" />
      <div className="orb-green" />

      <div className="container-custom relative z-10 py-[80px]">
        <div className="grid lg:grid-cols-[1fr_460px] grid-cols-1 gap-0 items-center">
          
          {/* HERO LEFT */}
          <div className="lg:pr-[72px] lg:border-r border-[var(--border)] py-[20px] md:py-[80px]_lg">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-[8px] px-[12px] py-[5px] pl-[8px] border border-[var(--border)] rounded-[40px] bg-[var(--t4)] mb-[32px] animate-fadeUp">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--green)] animate-pulse-custom" />
              <span className="font-sans text-[11px] text-[var(--t2)] tracking-[0.08em] uppercase font-normal">
                On-chain reputation protocol
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-serif font-normal text-[clamp(44px,4.8vw,68px)] leading-[1.05] tracking-[-0.025em] text-[var(--tx)] mb-[22px] animate-fadeUp [animation-delay:0.1s]">
              Trust, <br />
              measured on <br />
              <span className="italic text-[var(--green)]">Solana.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-[16px] font-light leading-[1.75] text-[var(--t2)] max-w-[440px] mb-[44px] animate-fadeUp [animation-delay:0.2s]">
              Analyse any wallet&apos;s behaviour — transactions, DeFi depth, governance record, NFT credibility. Scored 0–100. Verifiable on-chain. Real-time.
            </p>

            {/* Search Field */}
            <div className="max-w-[480px] mb-[44px] border border-[var(--border-md)] rounded-[10px] bg-[var(--bg-card)] flex items-center transition-all duration-200 focus-within:border-[var(--p-border)] focus-within:ring-[3px] focus-within:ring-[#9945ff14] animate-fadeUp [animation-delay:0.3s]">
              <div className="px-[14px] opacity-25">
                <Search className="w-[15px] h-[15px] text-white stroke-[1.5]" />
              </div>
              <input 
                type="text"
                placeholder="wallet address or .sol domain"
                className="flex-1 py-[14px] bg-transparent border-none outline-none text-[var(--tx)] font-mono text-[12px] placeholder:text-[var(--t3)]"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="m-[5px] px-[20px] py-[9px] rounded-[7px] bg-[var(--purple)] text-white font-sans text-[13px] font-medium hover:bg-[#8535ee] transition-colors duration-150">
                Analyse
              </button>
            </div>

            {/* Trust Pills Row */}
            <div className="flex flex-wrap gap-[8px] animate-fadeUp [animation-delay:0.4s]">
              {[
                { icon: <Star />, text: 'Verified on-chain' },
                { icon: <Lock />, text: 'Non-custodial' },
                { icon: <Clock />, text: 'Real-time scoring' },
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-[6px] border border-[var(--border)] bg-[var(--t4)] font-sans text-[11px] text-[var(--t3)]">
                   <div className="w-[11px] h-[11px] opacity-60 *:w-full *:h-full">{pill.icon}</div>
                   <span>{pill.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className="lg:pl-[64px] py-[48px] lg:py-0">
             <Terminal />
          </div>

        </div>
      </div>
    </section>
  );
};
