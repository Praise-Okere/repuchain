'use client';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProtocolStrip } from './components/ProtocolStrip';
import { Features } from './components/Features';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--tx)] selection:bg-sol-purple/30">
      <Navbar />
      <Hero />
      <ProtocolStrip />
      <Features />
      <CtaSection />
      <Footer />
    </main>
  );
}
