'use client';

export const Features = () => {
  const features = [
    {
      num: '01',
      name: 'Reputation scoring',
      desc: 'Composite 0–100 score from transaction history, DeFi protocol depth, governance participation, and NFT quality signals.',
    },
    {
      num: '02',
      name: 'Sybil detection',
      desc: 'Identifies bot clusters, multi-wallet farming, known phishing programs, and anomalous on-chain behaviour patterns.',
    },
    {
      num: '03',
      name: 'Governance power',
      desc: 'Weighted scoring across Realms DAOs — vote history, proposal creation, and governance token holdings.',
    },
  ];

  return (
    <section className="py-[96px] border-b border-[var(--border)] bg-[#07080c]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-[80px] items-end mb-[64px]">
          <div>
            <span className="font-mono text-[10px] text-[var(--purple)] tracking-[0.15em] uppercase mb-[16px] block">
              Core capabilities
            </span>
            <h2 className="font-serif text-[38px] font-normal text-[var(--tx)] leading-[1.1] tracking-[-0.02em]">
              Everything <br />
              <span className="italic text-[var(--green)]">trust requires.</span>
            </h2>
          </div>
          
          <p className="font-sans text-[15px] text-[var(--t2)] font-light leading-[1.75]">
            Built natively on Solana. Powered by Helius RPC, Realms governance data, and the Metaplex NFT standard to deliver the most comprehensive reputation score in Web3.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border)] border border-[var(--border)] rounded-[12px] overflow-hidden">
          {features.map((feature) => (
            <div key={feature.num} className="bg-[var(--bg)] p-[32px_28px] hover:bg-[var(--bg-card)] transition-colors duration-200 cursor-pointer">
              <span className="font-mono text-[11px] text-[var(--purple)] opacity-50 mb-[24px] block tracking-[0.06em]">
                {feature.num}
              </span>
              <h3 className="font-sans text-[15px] font-medium text-[var(--tx)] mb-[10px] tracking-[-0.01em]">
                {feature.name}
              </h3>
              <p className="font-sans text-[13px] text-[var(--t2)] font-light leading-[1.7]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
