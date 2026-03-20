'use client';

import { useEffect, useState, useRef } from 'react';

export default function RepChainLanding() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const trustSignalsRef = useRef<HTMLDivElement>(null);
  const [animateSignals, setAnimateSignals] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateSignals(true);
        }
      },
      { threshold: 0.1 }
    );
    if (trustSignalsRef.current) observer.observe(trustSignalsRef.current);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div 
        className="cursor-glow" 
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        height: '64px',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        background: 'linear-gradient(rgba(6, 10, 6, 0.9), rgba(6, 10, 6, 0.8))',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div className="mono" style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--green)' }}>
            ⬡ REPCHAIN
          </div>
          
          <div className="nav-links" style={{ display: 'flex', gap: '24px', fontSize: '12px' }}>
            <a href="#" className="mono" style={{ color: 'var(--text)', textDecoration: 'none' }}>Protocol</a>
            <a href="#" className="mono" style={{ color: 'var(--text)', textDecoration: 'none' }}>Integrations</a>
            <a href="#" className="mono" style={{ color: 'var(--text)', textDecoration: 'none' }}>DAO Portal</a>
            <a href="#" className="mono" style={{ color: 'var(--text)', textDecoration: 'none' }}>Docs</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--green)', borderRadius: '50%', boxShadow: '0 0 8px var(--green)', animation: 'blink 1.4s infinite' }} />
              <span className="mono" style={{ fontSize: '10px', color: 'var(--green)' }}>LIVE</span>
            </div>
            <button className="btn-rep btn-outline mono" style={{ fontSize: '10px', padding: '10px 20px' }}>Connect Wallet</button>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '64px' }}>
        {/* HERO SECTION */}
        <section style={{ minHeight: 'calc(100vh - 64px)', padding: '60px 0', borderBottom: '1px solid var(--border)', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: '1fr', gridAutoFlow: 'row', gap: '60px', alignItems: 'center' }}>
            {/* HERO LEFT */}
            <div className="animate-fadeup hero-left-align" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '1000px' }}>
              <div className="hero-left">
              <span className="section-label">CROSS-CHAIN IDENTITY PROTOCOL</span>
              <h1 style={{ fontSize: 'clamp(48px, 8vw, 88px)', lineHeight: '0.9', marginBottom: '24px' }}>
                Your Reputation <br />
                <span className="glow-text" style={{ color: 'var(--green)' }}>Precedes You.</span>
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--text-dim)', maxWidth: '500px', marginBottom: '40px', fontWeight: 300 }}>
                Every transaction, governance vote, and yield farming session counts toward your universal trust score in the decentralized web.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', marginBottom: '64px', justifyContent: 'inherit', flexWrap: 'wrap' }}>
                <button className="btn-rep btn-primary" style={{ flex: '1 1 auto', minWidth: '200px' }}>Scan My Wallet →</button>
                <button className="btn-rep btn-outline" style={{ flex: '1 1 auto', minWidth: '200px' }}>View Sample Profile</button>
              </div>

              <div className="stats-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                border: '1px solid var(--border)', 
                background: 'rgba(10, 255, 100, 0.02)' 
              }}>
                {[
                  { value: '2.4M+', label: 'Wallets Scored' },
                  { value: '14', label: 'Chains Indexed' },
                  { value: '99.7%', label: 'Sybil Accuracy' },
                  { value: '<0.3s', label: 'Query Latency' },
                ].map((stat, i) => (
                  <div key={i} className="stats-cell" style={{ 
                    padding: '24px', 
                    borderRight: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    textAlign: 'center'
                  }}>

                    <div className="display" style={{ fontSize: '24px', color: 'var(--green)' }}>{stat.value}</div>
                    <div className="mono" style={{ fontSize: '8px', color: 'var(--text-muted)', marginTop: '4px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

            {/* HERO RIGHT (SCORE RING) */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div 
                className="animate-fadeup"
                style={{ 
                  width: '280px', 
                  height: '280px', 
                  borderRadius: '50%', 
                  background: 'var(--green-faint)', 
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 0 40px var(--border)'
                }}
              >
                <svg width="280" height="280" viewBox="0 0 280 280" style={{ transform: 'rotate(-90deg)' }}>
                  {/* Perimeter ticks */}
                  {Array.from({ length: 40 }).map((_, i) => (
                    <line 
                      key={i}
                      x1="140" y1="10" x2="140" y2={i % 5 === 0 ? "25" : "18"}
                      stroke="var(--green-dim)"
                      strokeWidth="2"
                      transform={`rotate(${i * 9} 140 140)`}
                    />
                  ))}
                  
                  {/* Background Arc */}
                  <circle 
                    cx="140" cy="140" r="130" 
                    fill="none" 
                    stroke="var(--green-faint)" 
                    strokeWidth="16"
                  />
                  
                  {/* Score Arc */}
                  <circle 
                    cx="140" cy="140" r="130" 
                    fill="none" 
                    stroke="var(--green)" 
                    strokeWidth="16"
                    strokeDasharray="816"
                    style={{ 
                      strokeDashoffset: (816 * (1 - 742 / 1000)),
                      filter: 'drop-shadow(0 0 8px #0aff64aa)',
                      transition: 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </svg>
                
                <div style={{ position: 'absolute', transform: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="mono" style={{ fontSize: '10px', color: 'var(--text-dim)', marginBottom: '8px' }}>REP SCORE</div>
                  <div className="mono" style={{ fontSize: '52px', color: 'var(--green)', lineHeight: 1, fontWeight: 'bold' }}>742</div>
                  <div className="mono" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>/ 1000</div>
                  <div className="mono" style={{ fontSize: '10px', color: 'var(--green)', letterSpacing: '4px', marginTop: '20px' }}>◈ TRUSTED ◈</div>
                </div>

                {/* Floating Tags */}
                <div 
                  className="animate-fadeup" 
                  style={{ position: 'absolute', top: '-20px', right: '-40px', animationDelay: '0.4s' }}
                >
                  <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--green)', padding: '8px 16px', borderRadius: '4px', boxShadow: '0 0 10px var(--border)' }}>
                    <span className="mono" style={{ fontSize: '10px', color: 'var(--green)' }}>✓ SYBIL CLEAN</span>
                  </div>
                </div>
                <div 
                  className="animate-fadeup" 
                  style={{ position: 'absolute', bottom: '40px', left: '-60px', animationDelay: '0.6s' }}
                >
                  <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--green)', padding: '8px 16px', borderRadius: '4px' }}>
                    <span className="mono" style={{ fontSize: '10px', color: 'var(--green)' }}>⬡ 12 DAOS</span>
                  </div>
                </div>
                <div 
                  className="animate-fadeup" 
                  style={{ position: 'absolute', bottom: '-20px', right: '0px', animationDelay: '0.8s' }}
                >
                  <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--green)', padding: '8px 16px', borderRadius: '4px' }}>
                    <span className="mono" style={{ fontSize: '10px', color: 'var(--green)' }}>◈ 847 ETH SCORE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="container" style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">HOW IT WORKS</span>
          <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}>
            {[
              { num: '01', title: 'Connect Wallet', desc: 'Link any EVM or Solana wallet in one click.' },
              { num: '02', title: 'Index Chains', desc: 'We scan all 14 chains for activity, DAOs, and history.' },
              { num: '03', title: 'Get Your Score', desc: 'Receive your universal reputation score in under a second.' },
            ].map((step, i) => (
              <div key={i} className="step-cell" style={{ 
                padding: '40px', 
                borderBottom: '1px solid var(--border)',
              }}>
                <div className="mono" style={{ fontSize: '48px', color: 'var(--green-dim)', marginBottom: '24px' }}>{step.num}</div>
                <h3 style={{ fontSize: '24px', color: 'var(--text)', marginBottom: '16px' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-dim)', fontWeight: 300, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section ref={trustSignalsRef} className="container" style={{ padding: '100px 0', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">TRUST SIGNALS</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { label: 'Sybil Resistance', val: 94, icon: '◈' },
              { label: 'DAO Participation', val: 78, icon: '⬡' },
              { label: 'DeFi History', val: 87, icon: '◎' },
              { label: 'NFT Activity', val: 62, icon: '◻' },
              { label: 'Smart Contract Calls', val: 91, icon: '⟐' },
              { label: 'Wallet Age', val: 88, icon: '◷' },
            ].map((sig, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '20px' }}>
                <div style={{ overflow: 'hidden' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                     <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                       <span style={{ color: 'var(--green)' }}>{sig.icon}</span>
                       <span className="mono" style={{ fontSize: '13px' }}>{sig.label}</span>
                     </div>
                   </div>
                   <div style={{ height: '8px', background: 'var(--green-faint)', width: '100%' }}>
                     <div style={{ 
                        height: '100%', 
                        background: 'var(--green)', 
                        width: animateSignals ? `${sig.val}%` : '0%',
                        transition: `width 1.5s cubic-bezier(0.16, 1, 0.3, 1)`,
                        transitionDelay: `${i * 100}ms`,
                        boxShadow: '0 0 10px var(--green)'
                     }} />
                   </div>
                </div>
                <div className="mono" style={{ fontSize: '18px', textAlign: 'right', color: 'var(--green)' }}>{sig.val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SUPPORTED CHAINS */}
        <section className="container" style={{ padding: '100px 0', borderBottom: '1px solid var(--border)' }}>
           <span className="section-label">14 CHAINS INDEXED</span>
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
             {[
               { name: 'Ethereum', color: '#627EEA' },
               { name: 'Solana', color: '#9945FF' },
               { name: 'Arbitrum', color: '#12AAFF' },
               { name: 'Optimism', color: '#FF0420' },
               { name: 'Polygon', color: '#8247E5' },
               { name: 'Base', color: '#0052FF' },
               { name: 'Avalanche', color: '#E84142' },
               { name: 'BNB Chain', color: '#F0B90B' },
             ].map((chain) => (
               <div key={chain.name} style={{ 
                 padding: '8px 16px', 
                 border: '1px solid var(--border)', 
                 borderRadius: '40px',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '10px',
                 background: `${chain.color}11`
               }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: chain.color }} />
                 <span className="mono" style={{ fontSize: '11px', color: 'var(--text)' }}>{chain.name}</span>
               </div>
             ))}
           </div>
        </section>

        {/* STATS BANNER */}
        <section style={{ padding: '60px 0', borderBottom: '1px solid var(--border)', background: 'var(--green-faint)' }}>
          <div className="container banner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', textAlign: 'center' }}>
             {[
               { value: '2.4M+', label: 'Wallets Scored' },
               { value: '14', label: 'Chains Indexed' },
               { value: '99.7%', label: 'Sybil Accuracy' },
               { value: '<0.3s', label: 'Query Latency' },
             ].map((stat, i) => (
               <div key={i}>
                 <div className="display" style={{ fontSize: '48px', color: 'var(--green)' }}>{stat.value}</div>
                 <div className="mono" style={{ fontSize: '10px', color: 'var(--text-dim)', marginTop: '8px' }}>{stat.label}</div>
               </div>
             ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section style={{ padding: '160px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 className="display" style={{ fontSize: 'clamp(32px, 6vw, 64px)', marginBottom: '16px' }}>
              Your wallet has a story.
            </h2>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 6vw, 64px)', color: 'var(--green)', marginBottom: '48px' }}>
              Make it count.
            </h2>
            <button className="btn-rep btn-primary" style={{ padding: '20px 48px', fontSize: '18px' }}>Scan My Wallet</button>
            <div className="mono" style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '100px' }}>
              © 2026 REPCHAIN IDENTITY PROTOCOL. ALL RIGHTS RESERVED.
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
