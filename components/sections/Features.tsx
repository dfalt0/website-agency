"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Cloud, Zap, History, MessageSquare, Activity, GitCommit, Shield, Wrench, Sparkles, User } from "lucide-react";
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
const BENTO_TRAY_BG = "#0f5528";

/** Bento card shades of green matching the site – Obsidian Forest greens */
const GREEN_CARDS = [
  "#e8f5ec",
  "#d4edda",
  "#c8e6d0",
  "#b8dfc4",
  "#a7d9b8",
  "#d0e9d6",
] as const;

const LOG_CARD_BG = "var(--surface)";

type ClosePhase = "visible" | "poofing" | "gone" | "returning";

/** Mock services for expanded "Your Services" view (greens/whites, dashboard-style) */
const MOCK_SERVICES = [
  { id: "SRV-001", name: "Main Website", provider: "Vercel", status: "active" as const, uptime: 99.9, visitors: 12500, url: "example.com", type: "website" },
  { id: "SRV-002", name: "Cloud Infrastructure", provider: "AWS", status: "active" as const, uptime: 99.5, visitors: 0, url: "api.example.com", type: "api" },
  { id: "SRV-003", name: "E-commerce Store", provider: "Shopify", status: "active" as const, uptime: 98.5, visitors: 8200, url: "shop.example.com", type: "website" },
  { id: "SRV-004", name: "API Gateway", provider: "Railway", status: "maintenance" as const, uptime: 97.2, visitors: 4200, url: "api.example.com", type: "api" },
];

const typeIcons = { website: Globe, api: Zap, cloud: Cloud } as const;

/** Mock recent changes (ChangeLog style – type, source, title, description, engineer, commit, date) */
const MOCK_CHANGE_LOGS = [
  { type: "feature" as const, source: "github" as const, title: "New checkout flow deployed", description: "Implemented the new 3-step checkout process with improved mobile experience.", engineer_name: "Jordan Lee", commit_hash: "b7e8c1f", created_date: "Feb 4, 10:10 AM" },
  { type: "security" as const, source: "github" as const, title: "Security patch deployed", description: "Applied latest security updates to Node.js dependencies and updated SSL certificates.", engineer_name: "Alex Chen", commit_hash: "a3f2d9c", created_date: "Feb 4, 10:10 AM" },
  { type: "update" as const, source: "manual" as const, title: "Performance optimization", description: "Reduced page load times by 40% through image optimization and CDN configuration.", engineer_name: "Sam Rivera", commit_hash: null, created_date: "Feb 4, 9:45 AM" },
  { type: "maintenance" as const, source: "automated" as const, title: "Database backup completed", description: "Automated weekly backup completed successfully. All data verified.", engineer_name: null, commit_hash: null, created_date: "Feb 4, 8:00 AM" },
];

const changeTypeConfig = {
  deployment: { icon: History, label: "Deploy", class: "bg-primary/20 text-primary border-primary/30" },
  update: { icon: Sparkles, label: "Update", class: "bg-blue-500/20 text-blue-200 border-blue-500/30" },
  fix: { icon: Zap, label: "Fix", class: "bg-amber-500/20 text-amber-200 border-amber-500/30" },
  security: { icon: Shield, label: "Security", class: "bg-rose-500/20 text-rose-200 border-rose-500/30" },
  maintenance: { icon: Wrench, label: "Maintenance", class: "bg-white/10 text-white/80 border-white/20" },
  feature: { icon: Sparkles, label: "Feature", class: "bg-purple-500/20 text-purple-200 border-purple-500/30" },
};

const sourceLabels: Record<string, string> = {
  github: "GITHUB",
  gitlab: "GitLab",
  manual: "MANUAL",
  api: "API",
  automated: "AUTO",
};

const CLOSED_MESSAGES = [
  "uh oh! here lets open that up again",
  "whoops! haha mistakes happen",
  "are you doing this on purpose?",
  "hey i have feeling too :( ",
  "you're a sadist arent you...",
];

/**
 * Features section: "Everything you need, fully managed" – Migration Feed + Magic Bento grid.
 * Traffic lights: Red = poof & reload, Yellow = minimize, Green = expand to full dashboard.
 */
export default function Features() {
  const [logIndex, setLogIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [closePhase, setClosePhase] = useState<ClosePhase>("visible");
  const [closeCount, setCloseCount] = useState(0);
  const [expandContentReady, setExpandContentReady] = useState(false);
  const [calloutDismissed, setCalloutDismissed] = useState(false);

  const dismissCallout = useCallback(() => {
    setCalloutDismissed(true);
  }, []);

  useEffect(() => {
    if (!expanded) {
      setExpandContentReady(false);
      return;
    }
    const t = setTimeout(() => setExpandContentReady(true), 520);
    return () => clearTimeout(t);
  }, [expanded]);

  useEffect(() => {
    const t = setInterval(() => {
      setLogIndex((i) => (i + 1) % MIGRATION_LOGS.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  const handleClose = useCallback(() => {
    dismissCallout();
    if (closePhase !== "visible") return;
    setClosePhase("poofing");
  }, [closePhase, dismissCallout]);

  useEffect(() => {
    if (closePhase !== "poofing") return;
    const goneTimer = setTimeout(() => {
      setCloseCount((c) => c + 1);
      setClosePhase("gone");
    }, 420);
    return () => clearTimeout(goneTimer);
  }, [closePhase]);

  useEffect(() => {
    if (closePhase !== "gone") return;
    const returnTimer = setTimeout(() => setClosePhase("returning"), 3000);
    return () => clearTimeout(returnTimer);
  }, [closePhase]);

  const handleReturnComplete = useCallback(() => {
    setClosePhase("visible");
  }, []);

  const handleMinimize = useCallback(() => {
    dismissCallout();
    setMinimized((m) => !m);
    if (expanded) setExpanded(false);
  }, [expanded, dismissCallout]);

  const handleExpand = useCallback(() => {
    dismissCallout();
    setExpanded((e) => !e);
    if (minimized) setMinimized(false);
  }, [minimized, dismissCallout]);

  const systemLogContent = (
    <div className="relative h-full min-h-[200px] flex flex-col border-l-2 border-primary/40">
      <div className="flex items-center gap-2 border-b border-border/80 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
        <span className="size-1.5 rounded-full bg-primary/60" aria-hidden />
        [SYSTEM_LOG]
      </div>
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

  const isPoofing = closePhase === "poofing";
  const isReturning = closePhase === "returning";
  const closedMessage = CLOSED_MESSAGES[(closeCount - 1 + CLOSED_MESSAGES.length) % CLOSED_MESSAGES.length];

  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      <div
        className="mx-auto px-8 transition-[max-width] duration-500 ease-out lg:px-16"
        style={{ maxWidth: expanded ? "min(1800px, 98vw)" : "1200px" }}
      >
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-primary">
            [FEATURES]
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

        {/* Bento window + "try me!" callout (top-left, arrow to traffic lights). Hidden when "gone". */}
        {closePhase !== "gone" && (
        <div className="relative mx-auto overflow-visible">
          {/* "try me!" + curved arrow – disappears after first click on any traffic light button */}
          {!calloutDismissed && (
          <svg
            className="absolute -left-8 -top-[5.5rem] z-20 h-[100px] w-[160px] md:-left-10 md:-top-[6.5rem] md:h-[105px] md:w-[170px]"
            viewBox="0 0 170 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {/* "click me!" – natural handwriting font, tilted (Features callout only) */}
            <text
              x="8"
              y="38"
              fill="var(--primary)"
              fontSize="26"
              transform="rotate(-18 48 38)"
              stroke="var(--primary)"
              strokeWidth="0.8"
              strokeLinejoin="round"
              paintOrder="stroke fill"
              style={{
                fontFamily: "var(--font-handwriting), 'Caveat', cursive",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              click me!
            </text>
            {/* Arrow: start right of "!", curve out right (parabola/U), then 90° bend down to tip */}
            <path
              d="M 98 32 C 132 26, 134 58, 98 94"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Arrowhead: medium triangle aligned with curve end */}
            <path
              d="M 98 94 L 103 77 L 113 85 Z"
              fill="var(--primary)"
            />
          </svg>
          )}

        <motion.div
          className="overflow-hidden rounded-2xl transition-[max-width] duration-500 ease-out"
          style={{
            backgroundColor: BENTO_TRAY_BG,
            width: "100%",
          }}
          initial={
            closePhase === "returning"
              ? { scale: 0.96, opacity: 0, filter: "blur(8px)" }
              : false
          }
          animate={{
            scale: isPoofing ? 1.2 : 1,
            opacity: isPoofing ? 0 : 1,
            filter: isPoofing ? "blur(12px)" : "blur(0px)",
          }}
          transition={{
            duration: isPoofing ? 0.4 : closePhase === "returning" ? 0.5 : 0,
            ease: "easeOut",
          }}
          onAnimationComplete={() => {
            if (closePhase === "returning") handleReturnComplete();
          }}
        >
          <>
              {/* macOS-style title bar – always visible when window is shown */}
              <div
                className="flex items-center gap-2 px-4 pt-2 pb-1.5 md:px-5 md:pt-2.5"
                style={{ minHeight: "36px" }}
              >
                <button
                  type="button"
                  aria-label="Close"
                  onClick={handleClose}
                  className="h-3 w-3 rounded-full border-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f5528]"
                  style={{ backgroundColor: "#ff5f57" }}
                />
                <button
                  type="button"
                  aria-label="Minimize"
                  onClick={handleMinimize}
                  className="h-3 w-3 rounded-full border-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f5528]"
                  style={{ backgroundColor: "#febc2e" }}
                />
                <button
                  type="button"
                  aria-label="Expand"
                  onClick={handleExpand}
                  className="h-3 w-3 rounded-full border-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f5528]"
                  style={{ backgroundColor: "#28c840" }}
                />
              </div>

              {/* Content area: bento fades out when expanding; expanded shows skeleton then content. No height collapse. */}
              {!minimized && (
                <div className="relative overflow-hidden">
                  {/* Bento: stays in DOM when expanding, fades out so expanded view can show on top */}
                  <motion.div
                    animate={{ opacity: expanded ? 0 : 1 }}
                    transition={{ duration: 0.22 }}
                    className={expanded ? "pointer-events-none absolute inset-0 z-0" : ""}
                  >
                    <div className="p-4 pt-2 md:p-5 md:pt-2 lg:p-6 lg:pt-3">
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
                  </motion.div>

                  {/* Expanded: skeleton while container grows, then content fades in (app-like fonts) */}
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.28 }}
                      className="relative z-10 min-h-[420px] font-body"
                    >
                      {!expandContentReady ? (
                        /* Skeleton of dashboard – same layout, no real content */
                        <div className="space-y-6 p-4 pb-6 md:p-6 lg:p-8">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="space-y-2">
                              <div className="h-8 w-48 rounded bg-white/10" />
                              <div className="h-4 w-72 rounded bg-white/5" />
                            </div>
                            <div className="h-10 w-32 rounded-lg bg-white/10" />
                          </div>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="rounded-xl border border-white/10 bg-[#0a2d14] p-4">
                                <div className="flex justify-between">
                                  <div className="h-8 w-16 rounded bg-white/10" />
                                  <div className="h-8 w-8 rounded-lg bg-white/10" />
                                </div>
                                <div className="mt-3 h-3 w-24 rounded bg-white/5" />
                              </div>
                            ))}
                          </div>
                          <div className="space-y-3">
                            <div className="h-5 w-28 rounded bg-white/10" />
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                              {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-32 rounded-xl border border-white/10 bg-[#0a2d14]" />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-5 w-32 rounded bg-white/10" />
                            <div className="space-y-2">
                              {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex gap-3">
                                  <div className="h-10 w-10 shrink-0 rounded-lg bg-white/10" />
                                  <div className="flex-1 rounded-xl border border-white/10 bg-[#0a2d14] p-3">
                                    <div className="mb-2 flex gap-2">
                                      <div className="h-4 w-16 rounded bg-white/10" />
                                      <div className="h-4 w-14 rounded bg-white/5" />
                                    </div>
                                    <div className="h-4 w-full rounded bg-white/5" />
                                    <div className="mt-2 h-3 w-3/4 rounded bg-white/5" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6 p-4 pb-6 md:p-6 lg:p-8"
                          >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <h3 className="text-2xl font-semibold tracking-tight text-white">
                                  Welcome back!
                                </h3>
                                <p className="mt-1 text-sm text-white/70">
                                  Here&apos;s what&apos;s happening with your services today.
                                </p>
                              </div>
                              <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/15 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/25"
                              >
                                <MessageSquare className="h-4 w-4" />
                                New Request
                              </button>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              {[
                                { title: "ACTIVE SERVICES", value: "3", sub: "4 total", Icon: Globe },
                                { title: "TOTAL CHANGES", value: "4", sub: "This month", Icon: History },
                                { title: "OPEN TICKETS", value: "1", sub: "Pending response", Icon: MessageSquare },
                                { title: "SYSTEM STATUS", value: "Operational", sub: "All systems normal", Icon: Activity },
                              ].map(({ title, value, sub, Icon }) => (
                                <div
                                  key={title}
                                  className="rounded-xl border border-white/10 bg-[#0a2d14] p-4"
                                >
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <p className="text-2xl font-semibold text-white">{value}</p>
                                      <p className="text-xs text-white/60">{sub}</p>
                                    </div>
                                    <div className="rounded-lg bg-white/10 p-2">
                                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                                    </div>
                                  </div>
                                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-white/50">
                                    {title}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xl font-semibold text-white">Your Services</h4>
                                <span className="text-sm text-white/70">View all →</span>
                              </div>
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {MOCK_SERVICES.map((service, index) => {
                                  const Icon = typeIcons[service.type as keyof typeof typeIcons] ?? Globe;
                                  const isMaintenance = service.status === "maintenance";
                                  return (
                                    <motion.div
                                      key={service.id}
                                      initial={{ opacity: 0, y: 8 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.04 }}
                                      className="rounded-xl border border-white/10 bg-[#0a2d14] p-4 transition-colors hover:border-primary/40"
                                    >
                                      <div className="mb-3 flex items-start justify-between">
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                                          {service.id}
                                        </span>
                                        <span
                                          className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                                            isMaintenance
                                              ? "border-amber-500/30 bg-amber-500/20 text-amber-200"
                                              : "border-primary/30 bg-primary/20 text-primary-foreground"
                                          }`}
                                        >
                                          {isMaintenance ? "Maintenance" : (<><span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />Operational</>)}
                                        </span>
                                      </div>
                                      <div className="mb-3 flex items-center gap-3">
                                        <div className="rounded-lg bg-white/10 p-2">
                                          <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <h5 className="truncate font-medium text-white">{service.name}</h5>
                                          <p className="text-xs text-white/70">{service.provider}</p>
                                        </div>
                                      </div>
                                      <div className="mb-3 grid grid-cols-2 gap-2">
                                        <div className="rounded-lg bg-white/5 py-2 text-center">
                                          <p className="text-lg font-semibold text-primary">{service.uptime}%</p>
                                          <p className="font-mono text-[10px] text-white/60">UPTIME</p>
                                        </div>
                                        <div className="rounded-lg bg-white/5 py-2 text-center">
                                          <p className="text-lg font-semibold text-white">{(service.visitors / 1000).toFixed(1)}k</p>
                                          <p className="font-mono text-[10px] text-white/60">VISITORS</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center justify-between border-t border-white/10 pt-2">
                                        <span className="text-xs capitalize text-white/60">{service.type}</span>
                                        <a href={`https://${service.url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 truncate text-xs text-primary hover:underline">
                                          <span className="max-w-[100px] truncate">{service.url}</span>
                                          <ExternalLink className="h-3 w-3 shrink-0" />
                                        </a>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Recent Changes – cloud-scale-guard ChangeLog style */}
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xl font-semibold text-white">Recent Changes</h4>
                                <span className="text-sm text-white/70">View all →</span>
                              </div>
                              <div className="space-y-2">
                                {MOCK_CHANGE_LOGS.map((log, index) => {
                                  const config = changeTypeConfig[log.type] ?? changeTypeConfig.update;
                                  const Icon = config.icon;
                                  return (
                                    <motion.div
                                      key={index}
                                      initial={{ opacity: 0, x: -12 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.15 + index * 0.04 }}
                                      className="flex gap-4"
                                    >
                                      <div className="flex flex-col items-center">
                                        <div className={`rounded-lg border p-2 ${config.class}`}>
                                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                                        </div>
                                        <div className="my-2 w-px flex-1 bg-white/20" />
                                      </div>
                                      <div className="flex-1 pb-4">
                                        <div className="rounded-xl border border-white/10 bg-[#0a2d14] p-4 transition-colors hover:border-primary/30">
                                          <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                              <span className={`rounded border px-2 py-0.5 text-[10px] font-medium ${config.class}`}>
                                                {config.label}
                                              </span>
                                              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                                                {sourceLabels[log.source] ?? log.source}
                                              </span>
                                            </div>
                                            <span className="text-xs text-white/50">{log.created_date}</span>
                                          </div>
                                          <h5 className="font-medium text-white">{log.title}</h5>
                                          {log.description && (
                                            <p className="mt-1 line-clamp-2 text-sm text-white/60">{log.description}</p>
                                          )}
                                          <div className="mt-3 flex items-center gap-3 text-xs text-white/50">
                                            {log.engineer_name ? (
                                              <div className="flex items-center gap-1.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                                                  <User className="h-3 w-3" />
                                                </div>
                                                <span>{log.engineer_name}</span>
                                              </div>
                                            ) : (
                                              <span>System</span>
                                            )}
                                            {log.commit_hash && (
                                              <div className="flex items-center gap-1 font-mono">
                                                <GitCommit className="h-3 w-3" />
                                                <span>{log.commit_hash}</span>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </motion.div>
                  )}
                </div>
              )}
            </>
        </motion.div>
        </div>
        )}

        {/* When window is "gone", show nothing (or a thin placeholder) for 3s */}
        {closePhase === "gone" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-border/50 bg-surface-muted/50 py-16 text-center"
          >
            <p className="text-sm text-foreground-muted">{closedMessage}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
