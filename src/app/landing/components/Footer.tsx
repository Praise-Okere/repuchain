'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] py-[32px] bg-[#07080c]">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 md:items-baseline">
          <span className="font-serif text-[16px] text-[var(--t2)]">RepuChain</span>
          <span className="font-sans text-[12px] text-[var(--t3)]">© 2026 · Built on Solana</span>
        </div>

        <div className="flex items-center gap-[24px]">
          {['Protocol', 'Developers', 'GitHub', 'Twitter'].map((link) => (
            <Link 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="font-sans text-[12px] text-[var(--t3)] hover:text-[var(--t2)] transition-colors duration-150"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
