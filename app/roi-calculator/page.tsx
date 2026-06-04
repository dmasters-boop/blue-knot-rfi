"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";
import ROICalculator from "@/components/ROICalculator";
import { ACCOUNT } from "@/data/account";

export default function ROIPage() {
  const cfg = ACCOUNT.roi;

  return (
    <div className="min-h-screen" style={{ background: "var(--brand-bg)" }}>
      <Nav />

      <section className="relative overflow-hidden" style={{ background: "var(--brand-bg)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-primary) 12%, transparent) 0%, transparent 60%)" }} />
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
          <FadeIn>
            <div className="mb-6"><span className="eyebrow-pill">ROI Calculator</span></div>
            <h1 className="font-display text-6xl sm:text-7xl font-black tracking-tight leading-[0.92] mb-6 max-w-3xl" style={{ color: "var(--brand-text-heading)" }}>
              {cfg.pageHeadline}
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "var(--brand-text-muted)" }}>{cfg.pageSubhead}</p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn delay={80}>
          <ROICalculator />
        </FadeIn>
      </Section>

      {cfg.assumptions && cfg.assumptions.length > 0 && (
        <Section alt>
          <FadeIn>
            <h2 className="font-display text-2xl font-black mb-8" style={{ color: "var(--brand-text-heading)" }}>Assumptions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cfg.assumptions.map((group) => (
                <div key={group.title}>
                  <p className="text-[0.65rem] font-bold tracking-widest uppercase mb-3" style={{ color: "var(--brand-primary)" }}>{group.title}</p>
                  <ul className="space-y-2.5 text-sm leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                    {group.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span style={{ opacity: 0.4 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>
      )}

      <Footer />
    </div>
  );
}
