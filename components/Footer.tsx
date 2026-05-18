import Link from "next/link";
import { ACCOUNT } from "@/data/account";

const footerLinks = [
  { href: "/act1",          label: "The Problem" },
  { href: "/act2",          label: "The Foundation" },
  { href: "/act3",          label: "The Future" },
  { href: "/architecture",  label: "Architecture" },
  { href: "/strategy",      label: "Strategy" },
  { href: "/agent-tracker", label: "Agent Tracker" },
  { href: "/proof",         label: "Results" },
  { href: "/use-cases",     label: "Use Cases" },
  { href: "/business-case", label: "Business Case" },
  { href: "/pilot",         label: "Pilot Plan" },
  { href: "/account-team",  label: "Team" },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "var(--brand-bg)", borderColor: "var(--brand-surface-border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display text-base font-black" style={{ color: "var(--brand-text-muted)" }}>{ACCOUNT.company}</p>
          <p className="text-[0.6rem] font-bold tracking-widest uppercase mt-0.5" style={{ color: "var(--brand-text-muted)", opacity: 0.5 }}>
            Prepared by the Salesforce Account Team
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:bg-[var(--brand-surface)]"
              style={{ color: "var(--brand-text-muted)" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
