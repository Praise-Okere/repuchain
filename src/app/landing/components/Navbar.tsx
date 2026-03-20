'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[100] border-b border-[var(--border)] bg-[#07080c]/85 backdrop-blur-[20px] -webkit-backdrop-blur-[20px]">
      <div className="max-w-[1200px] mx-auto px-[48px] h-[60px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-[28px] h-[28px] rounded-[7px] bg-[var(--p-dim)] border border-[var(--p-border)] flex items-center justify-center">
            <span className="font-serif italic text-[14px] text-[var(--purple)] mt-[-1px]">R</span>
          </div>
          <span className="font-serif text-[18px] text-[var(--tx)] tracking-[-0.01em]">RepuChain</span>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-[32px]">
          {['Protocol', 'Integrations', 'Developers', 'Docs'].map((link) => (
            <Link 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="font-sans text-[13px] text-[var(--t2)] font-normal hover:text-[var(--tx)] transition-colors duration-150"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:block font-mono text-[10px] text-[var(--t3)] tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-[4px] border border-[var(--border)] bg-[var(--t4)]">
            SOLANA MAINNET
          </div>
          <button className="px-[18px] py-[8px] rounded-[7px] bg-[var(--purple)] text-white font-sans text-[13px] font-medium tracking-[-0.01em] hover:bg-[#8535ee] hover:translate-y-[-1px] transition-all duration-200">
            Launch app
          </button>
        </div>
      </div>
    </nav>
  );
};
