'use client';

export const ProtocolStrip = () => {
  const protocols = ['Jupiter', 'Raydium', 'Orca', 'Marinade', 'Magic Eden', 'Realms', 'Kamino'];

  return (
    <section className="border-t border-b border-[var(--border)] bg-[#07080c]">
      <div className="container-custom h-[50px] flex items-center">
        <span className="font-mono text-[10px] text-[var(--t3)] tracking-[0.14em] uppercase pr-[28px] border-r border-[var(--border)] h-full flex items-center shrink-0">
          Trusted by
        </span>
        
        <div className="flex flex-wrap items-center gap-[28px] ml-[28px] overflow-hidden">
          {protocols.map((protocol) => (
            <span 
              key={protocol}
              className="font-sans text-[13px] text-[var(--t3)] font-light hover:text-[var(--t2)] transition-colors duration-150 cursor-pointer"
            >
              {protocol}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
