"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  Code2,
  Layers,
  Rocket,
  ChevronRight,
  Terminal,
  Plug,
  Shield,
  Server,
  Settings2,
  TestTube2,
} from "lucide-react";
import { ScrambleHeading } from "@/components/ui/ScrambleHeading";
import { Button } from "@/components/ui/button";
import {
  CONSULTING_PILLARS,
  MODERN_STACKS,
  SKILLS_VS_MCPS,
  MCP_BUILD_LAYERS,
  MCP_EXAMPLE_TOOLS,
} from "@/lib/ai-content";

const PILLAR_ICONS = [Brain, Code2, Plug, Rocket] as const;
const LAYER_ICONS = [Settings2, Server, Shield, Layers, Terminal, TestTube2] as const;

type TabId = "pillars" | "stacks" | "mcp-skills" | "mcp-build";

const TABS: { id: TabId; label: string }[] = [
  { id: "pillars", label: "Services" },
  { id: "stacks", label: "Modern stacks" },
  { id: "mcp-skills", label: "Skills vs MCPs" },
  { id: "mcp-build", label: "Custom MCPs" },
];

export default function AIConsulting() {
  const [activeTab, setActiveTab] = useState<TabId>("pillars");
  const [expandedStack, setExpandedStack] = useState<string | null>(null);

  return (
    <section id="ai-engineering" className="relative overflow-hidden bg-dark py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34, 197, 94, 0.07), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-8 lg:px-16">
        <motion.div
          className="mb-12 text-center lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-emerald">
            [AI ENGINEERING]
          </p>
          <ScrambleHeading
            as="h2"
            className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-[#E2E8E2]"
          >
            Consulting & custom AI — built with engineers
          </ScrambleHeading>
          <p className="mx-auto max-w-[720px] text-lg leading-[1.8] text-[#E2E8E2]/75">
            For businesses already in operation with no clear AI direction. We find where AI belongs in{" "}
            <em className="not-italic text-[#E2E8E2]">your</em> operations, then build software your team
            actually uses — on stacks that are proven today and adaptable tomorrow.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-emerald bg-emerald/15 text-emerald shadow-[0_0_20px_rgba(34,197,94,0.12)]"
                  : "border-[#1A1F1A] bg-[#0C0F0C] text-[#E2E8E2]/60 hover:border-emerald/30 hover:text-[#E2E8E2]"
              }`}
              style={{ borderWidth: "0.5px" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "pillars" && (
            <motion.div
              key="pillars"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {CONSULTING_PILLARS.map((pillar, i) => {
                const Icon = PILLAR_ICONS[i];
                return (
                  <motion.article
                    key={pillar.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-xl border border-[#1A1F1A] bg-[#0C0F0C] p-6 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]"
                    style={{ borderWidth: "0.5px" }}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz4KPC9zdmc+')] opacity-60" />
                    <div className="relative">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald/10 text-emerald transition-colors group-hover:bg-emerald/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/40">
                          {pillar.id}
                        </span>
                      </div>
                      <h3 className="font-heading mb-2 text-xl font-semibold tracking-[-0.02em] text-[#E2E8E2]">
                        {pillar.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-[#E2E8E2]/70">{pillar.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-[#1A1F1A] bg-[#080A08] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald/80"
                            style={{ borderWidth: "0.5px" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}

          {activeTab === "stacks" && (
            <motion.div
              key="stacks"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <p className="mb-8 text-center text-sm leading-relaxed text-[#E2E8E2]/65">
                The AI landscape shifts monthly. These stacks are what we ship on today — reactive by default,
                realtime where it matters, and familiar to the engineers you&apos;ll work with.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {MODERN_STACKS.map((stack, i) => {
                  const isOpen = expandedStack === stack.name;
                  return (
                    <motion.button
                      key={stack.name}
                      type="button"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => setExpandedStack(isOpen ? null : stack.name)}
                      className={`rounded-xl border bg-[#0C0F0C] p-4 text-left transition-all duration-300 ${
                        isOpen
                          ? "border-emerald/40 shadow-[0_0_24px_rgba(34,197,94,0.1)]"
                          : "border-[#1A1F1A] hover:border-emerald/25"
                      }`}
                      style={{ borderWidth: "0.5px" }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-heading text-lg font-medium text-[#E2E8E2]">{stack.name}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald/70">
                          {stack.role}
                        </span>
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 overflow-hidden text-sm leading-relaxed text-[#E2E8E2]/70"
                          >
                            {stack.detail}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "mcp-skills" && (
            <motion.div
              key="mcp-skills"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[SKILLS_VS_MCPS.skills, SKILLS_VS_MCPS.mcps].map((block) => (
                  <div
                    key={block.label}
                    className="rounded-xl border border-[#1A1F1A] bg-[#0C0F0C] p-6"
                    style={{ borderWidth: "0.5px" }}
                  >
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-emerald">
                      {block.label}
                    </p>
                    <h3 className="font-heading mb-4 text-xl font-semibold tracking-[-0.02em] text-[#E2E8E2]">
                      {block.summary}
                    </h3>
                    <ul className="space-y-3">
                      {block.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#E2E8E2]/75">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 text-center">
                <p className="text-sm leading-relaxed text-[#E2E8E2]/85">{SKILLS_VS_MCPS.recommendation}</p>
              </div>
            </motion.div>
          )}

          {activeTab === "mcp-build" && (
            <motion.div
              key="mcp-build"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <p className="text-center text-sm leading-relaxed text-[#E2E8E2]/65">
                A company MCP is a production service — not a weekend script. We build the full stack: tool
                design, system bridges, auth, deployment, client setup, and observability.
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {MCP_BUILD_LAYERS.map((layer, i) => {
                  const Icon = LAYER_ICONS[i];
                  return (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-xl border border-[#1A1F1A] bg-[#0C0F0C] p-5"
                      style={{ borderWidth: "0.5px" }}
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/40">
                          {layer.id}
                        </span>
                      </div>
                      <h4 className="font-heading mb-2 text-base font-semibold text-[#E2E8E2]">{layer.title}</h4>
                      <p className="text-sm leading-relaxed text-[#E2E8E2]/65">{layer.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Example tool surface */}
              <div className="overflow-hidden rounded-xl border border-[#1A1F1A] bg-[#080A08]" style={{ borderWidth: "0.5px" }}>
                <div className="border-b border-[#1A1F1A] px-5 py-3" style={{ borderWidth: "0.5px" }}>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-emerald/80">
                    Example tool surface — your_company_mcp
                  </p>
                </div>
                <div className="divide-y divide-[#1A1F1A]">
                  {MCP_EXAMPLE_TOOLS.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <code className="font-mono text-sm text-emerald">{tool.name}()</code>
                      <span className="text-sm text-[#E2E8E2]/60">{tool.description}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#1A1F1A] bg-[#0C0F0C] px-5 py-4" style={{ borderWidth: "0.5px" }}>
                  <p className="font-mono text-xs leading-relaxed text-[#E2E8E2]/50">
                    <span className="text-emerald/70">//</span> Each tool is schema-validated, permission-scoped,
                    and logged. Agents call what you expose — nothing more.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="white-primary" size="lg" asChild>
            <Link href="/contact">Book a discovery call</Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-[#E2E8E2]/30 bg-transparent text-[#E2E8E2] hover:bg-emerald hover:text-[#080A08]"
            asChild
          >
            <Link href="/start">Start intake form</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
