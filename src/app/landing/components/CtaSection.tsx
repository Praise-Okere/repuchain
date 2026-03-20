'use client';

export const CtaSection = () => {
  return (
    <section className="py-[96px] text-center relative overflow-hidden bg-[#07080c]">
      {/* Purple orb behind content */}
      <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(153,69,255,0.1)_0%,transparent_70%)] filter blur-[60px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] font-normal tracking-[-0.02em] text-[var(--tx)] leading-[1.1] mb-[16px]">
          Start building <br />
          with <span className="italic text-[var(--green)]">trust.</span>
        </h2>
        
        <p className="font-sans text-[16px] text-[var(--t2)] font-light mb-[40px]">
          Integrate RepuChain into your Solana protocol in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px]">
          <button className="px-[28px] py-[13px] rounded-[8px] bg-[var(--purple)] text-white font-sans text-[14px] font-medium tracking-[-0.01em] hover:bg-[#8535ee] hover:translate-y-[-1px] transition-all duration-200 w-full sm:w-auto">
            Launch app
          </button>
          <button className="px-[28px] py-[13px] rounded-[8px] bg-transparent border border-[var(--border-md)] text-[var(--t2)] font-sans text-[14px] font-normal hover:text-[var(--tx)] hover:bg-[var(--t4)] transition-all duration-200 w-full sm:w-auto">
            Read the docs →
          </button>
        </div>
      </div>
    </section>
  );
};
