"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Download, Check, FileDown } from "lucide-react";
import { downloadBlueprint } from "../../lib/generatePdf";

export type DetectedTech = {
  name: string;
  type: string;
  confidence?: "high" | "medium";
};

type ScanResult = {
  stack: DetectedTech[];
  categories?: string[];
  status: string;
  url?: string;
};

const STATUS_MESSAGES = [
  "Initializing stealth handshake...",
  "Bypassing perimeter firewalls...",
  "Injecting DOM diagnostic probes...",
  "Intercepting server response headers...",
  "Decompiling CSS architecture...",
  "Capturing visual proof...",
  "Finalizing infrastructure report...",
];

function getStackAnalysis(stack: DetectedTech[]) {
  const names = stack.map((t) => t.name.toLowerCase());
  if (names.includes("wordpress")) {
    return {
      currentPain: "Monolithic architecture with high plugin overhead and frequent security vulnerabilities.",
      upgradePath: "Headless Decoupling: Keep your CMS, but serve the frontend via our hardened global edge nodes.",
      statChange: "+140% faster LCP",
    };
  }
  if (names.includes("next.js") || names.includes("react")) {
    return {
      currentPain: "Standard serverless cold starts and unoptimized hydration cycles.",
      upgradePath: "ISR Optimization: We deploy custom caching layers to ensure 0ms global response times.",
      statChange: "-300ms Time-to-First-Byte",
    };
  }
  if (names.includes("shopify")) {
    return {
      currentPain: "Liquid-based frontend constraints limiting SEO and custom UX performance.",
      upgradePath: "Hydrogen/Oxygen Bridge: Moving your storefront to a custom-engineered React environment.",
      statChange: "Custom UX Freedom",
    };
  }
  return {
    currentPain: "Unmanaged infrastructure with manual scaling and inconsistent monitoring.",
    upgradePath: "Full Concierge Migration: Automated CI/CD, 24/7 uptime guards, and performance tuning.",
    statChange: "99.99% Uptime SLA",
  };
}

export default function StackScanner() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [pdfGenerating, setPdfGenerating] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const id = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, 1200);
    return () => clearInterval(id);
  }, [loading]);

  const handleScan = async () => {
    setError(null);
    setResult(null);
    setLoading(true);
    setStatusIndex(0);
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Scan failed");
        return;
      }
      setResult(data);
    } catch {
      setError("Could not reach scanner");
    } finally {
      setLoading(false);
    }
  };

  const categories = result?.categories?.length ? result.categories : [...new Set(result?.stack?.map((t) => t.type) ?? [])];
  const stackByCategory =
    result?.stack != null
      ? categories.reduce<Record<string, DetectedTech[]>>((acc, cat) => {
          acc[cat] = result.stack.filter((t) => t.type === cat);
          return acc;
        }, {})
      : {};

  const exportPayload = result ? { url: result.url, stack: result.stack, scannedAt: new Date().toISOString() } : null;
  const handleCopy = useCallback(() => {
    if (!exportPayload) return;
    navigator.clipboard.writeText(JSON.stringify(exportPayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [exportPayload]);
  const handleDownload = useCallback(() => {
    if (!exportPayload) return;
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `stack-report-${(result?.url ?? "site").replace(/\./g, "-")}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [exportPayload, result?.url]);

  const firstTech = result?.stack?.[0]?.name;
  const hasLegacy = result?.stack?.some((t) => t.name === "WordPress" || t.name === "jQuery") ?? false;
  const stabilityRating = hasLegacy ? 64 : 91;
  const caseId = useMemo(() => Math.random().toString(36).slice(2, 10), [result?.url]);
  const stackAnalysis = result?.stack?.length ? getStackAnalysis(result.stack) : null;
  const engineerNote = hasLegacy
    ? `Your site relies on ${firstTech ?? "legacy stack"}. While functional, it's currently a bottleneck for core web vitals. We recommend offloading your backend processing to a headless architecture to improve load times by ~40%.`
    : `You've got a great foundation with ${firstTech ?? "your stack"}. Our managed service would focus on cost-optimization and 24/7 security monitoring rather than a full rewrite.`;

  return (
    <div className="mx-auto w-full max-w-4xl rounded-xl border border-[#1A1F1A] bg-[#080A08] p-6 shadow-2xl" style={{ borderWidth: "0.5px" }}>
      <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald/70">
        <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
        Infrastructure Analyzer v1.0
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleScan()}
          placeholder="Enter website URL (e.g. apple.com)"
          className="min-w-0 flex-1 rounded-lg border border-[#1A1F1A] bg-[#0C0F0C] px-4 py-3 font-mono text-sm text-[#E2E8E2] placeholder:text-[#E2E8E2]/40 focus:border-emerald/50 focus:outline-none focus:ring-1 focus:ring-emerald/30"
          style={{ borderWidth: "0.5px" }}
          disabled={loading}
        />
        <button
          type="button"
          onClick={handleScan}
          disabled={loading || !url.trim()}
          className="shrink-0 rounded-lg bg-emerald px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#080A08] transition-all hover:bg-emerald/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Scanning…" : "Analyze"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 font-mono text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-center gap-3 rounded-lg border border-[#1A1F1A] bg-[#0C0F0C] px-4 py-3"
            style={{ borderWidth: "0.5px" }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald animate-pulse" />
            <span className="font-mono text-xs text-[#E2E8E2]/80">{STATUS_MESSAGES[statusIndex]}</span>
          </motion.div>
        )}

        {result && result.stack && result.stack.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 rounded-lg border border-[#1A1F1A] bg-[#0C0F0C] p-6 text-center"
            style={{ borderWidth: "0.5px" }}
          >
            <p className="font-mono text-sm text-[#E2E8E2]/60">No technologies detected for {result.url || "this URL"}.</p>
            <p className="mt-4">
              <a
                href="mailto:support@example.com?subject=Stack%20Scanner%20feedback"
                className="font-mono text-[10px] text-[#E2E8E2]/40 underline decoration-[#E2E8E2]/20 hover:text-emerald/70"
              >
                Something wrong or missing?
              </a>
            </p>
          </motion.div>
        )}

        {result && result.stack && result.stack.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-12"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
                Detected for {result.url || "target"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded border border-[#1A1F1A] bg-[#0C0F0C] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald transition-colors hover:border-emerald/40"
                  style={{ borderWidth: "0.5px" }}
                >
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 rounded border border-[#1A1F1A] bg-[#0C0F0C] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald transition-colors hover:border-emerald/40"
                  style={{ borderWidth: "0.5px" }}
                >
                  <Download className="h-3 w-3" />
                  Export
                </button>
              </div>
            </div>

            {/* Grouped by category */}
            <div className="space-y-6">
              {categories.map((cat) => {
                const techs = stackByCategory[cat];
                if (!techs?.length) return null;
                return (
                  <motion.div
                    key={cat}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald/80">
                      {cat}
                    </h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {techs.map((tech, i) => (
                        <motion.div
                          key={`${tech.name}-${tech.type}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: i * 0.05 }}
                          className="group flex items-center justify-between rounded-lg border border-[#1A1F1A] bg-[#0C0F0C] p-4 transition-colors hover:border-emerald/30"
                          style={{ borderWidth: "0.5px" }}
                        >
                          <div>
                            <div className="font-heading text-lg font-medium text-[#E2E8E2]">
                              {tech.name}
                            </div>
                          </div>
                          <span className="font-mono text-[10px] text-[#E2E8E2]/40 transition-colors group-hover:text-emerald">
                            [READY_TO_MIGRATE]
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Migration Blueprint (capturable for PDF) */}
            <div id="blueprint-content" className="mt-10 rounded-lg border border-[#1A1F1A] bg-[#080A08] p-6 text-[#E2E8E2]" style={{ borderWidth: "0.5px" }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-col border-b border-[#1A1F1A] pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                  <div>
                    <h2 className="font-heading text-2xl font-medium text-[#E2E8E2]">Migration Blueprint</h2>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-emerald/50">
                      Prepared for: {result.url} • Case ID: {caseId}
                    </p>
                  </div>
                  <div className="mt-4 shrink-0 rounded border border-emerald/20 bg-emerald/10 px-4 py-2 font-mono text-xs text-emerald sm:mt-0">
                    STABILITY RATING: {stabilityRating}%
                  </div>
                </div>

                {/* Opposing realities: Current Bottlenecks vs Nodus Optimized */}
                {stackAnalysis && (
                  <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[#1A1F1A] bg-[#1A1F1A] md:grid-cols-2">
                    <div className="bg-[#080A08] p-6 group">
                      <div className="mb-6 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500/50" />
                        <h4 className="font-mono text-[10px] uppercase tracking-widest text-red-500/50">
                          Current Bottlenecks
                        </h4>
                      </div>
                      <p className="mb-6 text-sm italic leading-relaxed text-[#E2E8E2]/40">
                        &ldquo;{stackAnalysis.currentPain}&rdquo;
                      </p>
                      <div className="space-y-3">
                        {result.stack.slice(0, 3).map((tech) => (
                          <div
                            key={tech.name}
                            className="flex justify-between border-b border-[#1A1F1A] pb-2 font-mono text-[11px] uppercase"
                          >
                            <span className="text-red-900/80">{tech.name}</span>
                            <span className="text-red-900/50">Unmanaged</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-l border-emerald-500/10 bg-[#0C0F0C] p-6">
                      <div className="mb-6 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                        <h4 className="font-mono text-[10px] uppercase tracking-widest text-emerald-500">
                          Nodus Optimized
                        </h4>
                      </div>
                      <p className="mb-6 text-sm font-medium leading-relaxed text-[#E2E8E2]">
                        {stackAnalysis.upgradePath}
                      </p>
                      <div className="rounded border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                        <span className="mb-1 block font-mono text-[9px] uppercase text-emerald-500/50">
                          Predicted Outcome
                        </span>
                        <span className="font-heading text-2xl text-emerald-400">{stackAnalysis.statChange}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="relative overflow-hidden rounded-lg border border-[#1A1F1A] bg-[#0C0F0C] p-6">
                  <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity hover:opacity-20">
                    <svg className="h-16 w-16 text-emerald" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-lg font-medium text-emerald">Engineer&apos;s Note</h4>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#E2E8E2]/70">
                    {engineerNote}
                  </p>
                  <Link
                    href="/start"
                    className="mt-4 inline-block font-mono text-xs text-emerald underline decoration-emerald/30 transition-colors hover:decoration-emerald"
                  >
                    → View full migration blueprint
                  </Link>
                </div>

                <p className="border-t border-[#1A1F1A] pt-4 text-center font-mono text-[9px] uppercase tracking-widest text-[#E2E8E2]/30">
                  Prepared by Nodus Engineering • Confidential
                </p>
              </motion.div>
            </div>

            <button
              type="button"
              disabled={pdfGenerating}
              onClick={async () => {
                setPdfGenerating(true);
                try {
                  await downloadBlueprint("blueprint-content", result.url ?? "site");
                } finally {
                  setPdfGenerating(false);
                }
              }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500/50 bg-transparent py-4 font-mono text-xs uppercase tracking-wider text-emerald-500 transition-all hover:bg-emerald-500 hover:text-[#080A08] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileDown className="h-4 w-4 shrink-0" />
              {pdfGenerating ? "Generating PDF…" : "Generate official PDF report"}
            </button>

            <p className="mt-6">
              <a
                href="mailto:support@example.com?subject=Stack%20Scanner%20feedback"
                className="font-mono text-[10px] text-[#E2E8E2]/40 underline decoration-[#E2E8E2]/20 transition-colors hover:text-emerald/70 hover:decoration-emerald/40"
              >
                Something wrong or missing?
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
