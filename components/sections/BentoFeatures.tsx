"use client";

import { useState, useEffect } from "react";
import { ScrambleHeading } from "@/components/ui/ScrambleHeading";
import MagicBento, { type MagicBentoCard } from "@/components/ui/MagicBento";

/** Static lines shown above the active (rotating) line – fills the log pane */
const LOG_PREAMBLE = [
  "Connected to deploy target",
  "Running pre-flight checks...",
  "Environment: production",
  "Branch: main → verified",
  "Build cache: hit",
];

const MIGRATION_LOGS = [
  "Analyzing SSL certificates...",
  "Optimizing static assets...",
  "Transferring DNS records...",
  "Syncing database schema...",
  "Verifying CDN propagation...",
  "Running post-migration checks...",
  "Clearing cache layers...",
  "Enabling WAF rules...",
];

/** Bento tray – between primary and primary-hover, slightly darker */
const BENTO_TRAY_BG = "#0f5528"; // between #15803D and #052E16

/** Bento card shades of green matching the site (idea 2) – Obsidian Forest greens */
const GREEN_CARDS = [
  "#e8f5ec", // mint / lightest
  "#d4edda", // pale green
  "#c8e6d0", // soft sage
  "#b8dfc4", // light green
  "#a7d9b8", // medium-light green
  "#d0e9d6", // alternate pale
] as const;

/** Surface color for system log card (matches light card on tray) */
const LOG_CARD_BG = "var(--surface)";

/**
 * Benefits section: "Everything you need, fully managed" – Migration Feed + React Bits Magic Bento grid (hover animations, spotlight, emerald glow).
 */
export default function BentoFeatures() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLogIndex((i) => (i + 1) % MIGRATION_LOGS.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  const systemLogContent = (
    <div className="relative h-full min-h-[200px] flex flex-col border-l-2 border-primary/40">
      {/* Terminal-style title bar */}
      <div className="flex items-center gap-2 border-b border-border/80 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
        <span className="size-1.5 rounded-full bg-primary/60" aria-hidden />
        [SYSTEM_LOG]
      </div>
      {/* Log body: preamble lines + 3 static + 1 active (green) */}
      <div className="flex flex-1 flex-col justify-end gap-0.5 p-3 font-mono text-xs tabular-nums text-foreground-muted">
        {LOG_PREAMBLE.map((line, i) => (
          <div key={`pre-${i}`} className="flex items-center gap-2 py-0.5 pl-2 pr-1">
            <span className="select-none text-foreground-muted/40">$</span>
            <span className="min-w-0 truncate">{line}</span>
          </div>
        ))}
        {MIGRATION_LOGS.slice(0, 4).map((line, i) => {
          const isActive = i === 3;
          return (
            <div
              key={`log-${i}`}
              className={`flex items-center gap-2 py-0.5 pl-2 pr-1 ${
                isActive ? "border-l-2 border-primary/50 bg-primary/5 text-primary" : ""
              }`}
            >
              <span className="select-none text-foreground-muted/50">
                {isActive ? ">" : "$"}
              </span>
              <span className="min-w-0 truncate">
                {isActive ? MIGRATION_LOGS[logIndex] : line}
              </span>
              {isActive && (
                <span
                  className="ml-0.5 h-3.5 w-0.5 shrink-0 bg-primary animate-[terminal-blink_1.2s_ease-in-out_infinite]"
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const bentoCards: MagicBentoCard[] = [
    { color: GREEN_CARDS[0], title: "Website Management", description: "Maintenance, updates, and optimization.", label: "Performance", gridColumn: "1", gridRow: "1" },
    { color: GREEN_CARDS[1], title: "Security & Monitoring", description: "Enterprise-grade protection and 24/7 monitoring.", label: "Security", gridColumn: "2", gridRow: "1" },
    { color: GREEN_CARDS[2], title: "Performance Optimization", description: "CDN, caching, and speed tuning.", label: "CDN", gridColumn: "3", gridRow: "1" },
    { color: LOG_CARD_BG, title: "", description: "", label: "", gridColumn: "1 / 3", gridRow: "2 / 4", customContent: systemLogContent },
    { color: GREEN_CARDS[4], title: "Custom Development", description: "Features, integrations, and bespoke builds.", label: "Build", gridColumn: "3", gridRow: "2" },
    { color: GREEN_CARDS[5], title: "Expert Support", description: "Dedicated engineers when you need them.", label: "Support", gridColumn: "3", gridRow: "3" },
  ];

  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
            [BENEFITS]
          </p>
          <ScrambleHeading
            as="h2"
            className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground"
          >
            Everything you need, fully managed
          </ScrambleHeading>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-foreground-muted">
            Our team of expert engineers handles all your website and cloud infrastructure needs.
          </p>
        </div>

        {/* Bento tray: System Log bottom-left (large slot), 5 benefit cards */}
        <div
          className="rounded-2xl p-4 md:p-5 lg:p-6"
          style={{ backgroundColor: BENTO_TRAY_BG }}
        >
          <MagicBento
            cards={bentoCards}
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="34, 197, 94"
            disableAnimations={false}
          />
        </div>
      </div>
    </section>
  );
}
