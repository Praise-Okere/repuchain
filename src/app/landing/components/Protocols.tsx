'use client';

export const Protocols = () => {
  const protocols = ['Jupiter', 'Raydium', 'Orca', 'Marinade', 'Magic Eden', 'Realms', 'Kamino'];

  return (
    <section className="min-h-[52px] h-auto md:h-[52px] border-b border-[var(--border)] flex flex-wrap md:flex-nowrap items-center px-[24px] md:px-[64px] bg-[var(--bg)] gap-[12px] md:gap-0 py-[16px] md:py-0">
      <span className="font-sans text-[10px] text-[var(--text3)] tracking-[0.14em] uppercase pr-[28px] md:border-r border-[var(--border)] h-full flex items-center shrink-0">
        Trusted by
      </span>
      
      <div className="flex flex-wrap md:flex-nowrap items-center gap-[12px] md:gap-[28px] md:ml-[28px]">
        {protocols.map((protocol) => (
          <span 
            key={protocol}
            className="font-sans text-[12px] text-[var(--text3)] hover:text-[var(--text2)] transition-colors duration-150 cursor-pointer"
          >
            {protocol}
          </span>
        ))}
      </div>
    </section>
  );
};
