import type { Metadata } from "next";
import Link from "next/link";
import StackScanner from "@/components/sections/StackScanner";

export const metadata: Metadata = {
  title: "Stack & AI Opportunity Scan | Nodus Engineering",
  description:
    "Free technical audit of your website stack plus AI integration opportunities — CMS, frameworks, hosting, and where custom apps or MCPs could plug in.",
};

export default function ScanPage() {
  return (
    <main className="min-h-screen bg-dark">
      <div className="mx-auto max-w-[1200px] px-8 py-16 lg:px-16 lg:py-24">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 font-mono text-xs text-[#E2E8E2]/60 transition-colors hover:text-[#E2E8E2]"
        >
          ← Back
        </Link>

        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-emerald">
            [Technical + AI Audit]
          </p>
          <h1 className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#E2E8E2]">
            See where AI fits in what you already run
          </h1>
          <p className="mx-auto max-w-[600px] text-lg leading-[1.7] text-[#E2E8E2]/70">
            Enter your website URL. We detect CMS, framework, and hosting — then map integration points for
            custom apps, MCPs, and workflow automation.
          </p>
        </div>

        <StackScanner />
      </div>
    </main>
  );
}
