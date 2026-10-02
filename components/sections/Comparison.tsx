"use client";

import { motion } from "motion/react";
import Link from "next/link";
import BlurText from "@/components/ui/BlurText";
import { COMPARISON } from "@/lib/agency-content";

export default function Comparison() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-16">
        <div className="mb-14 text-center lg:mb-16">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            [Why Nodus]
          </p>
          <BlurText
            as="h2"
            text="DIY burnout or agency handoff — neither owns the whole picture."
            className="font-heading mx-auto mb-4 max-w-[22ch] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground"
            delay={55}
          />
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-border md:block" style={{ borderWidth: "0.5px" }}>
          <div className="grid grid-cols-4 gap-4 bg-surface-muted px-6 py-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">Capability</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">DIY</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">Typical agency</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-primary">Nodus</p>
          </div>
          {COMPARISON.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="grid grid-cols-4 gap-4 border-t border-border px-6 py-5"
              style={{ borderWidth: "0.5px" }}
            >
              <p className="font-medium text-foreground">{row.feature}</p>
              <p className="text-foreground/55">{row.diy}</p>
              <p className="text-foreground/55">{row.agencies}</p>
              <p className="font-semibold text-foreground">{row.nodus}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4 md:hidden">
          {COMPARISON.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl border border-border bg-surface-muted p-4"
              style={{ borderWidth: "0.5px" }}
            >
              <p className="mb-3 font-medium text-foreground">{row.feature}</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/55">
                  <span className="font-mono text-[10px] uppercase text-foreground/40">DIY — </span>
                  {row.diy}
                </p>
                <p className="text-foreground/55">
                  <span className="font-mono text-[10px] uppercase text-foreground/40">Agency — </span>
                  {row.agencies}
                </p>
                <p className="rounded-lg bg-primary/10 px-3 py-2 font-medium text-foreground">
                  <span className="font-mono text-[10px] uppercase text-primary">Nodus — </span>
                  {row.nodus}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground-muted">
          Ready to talk scope?{" "}
          <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
            Book a discovery call
          </Link>
        </p>
      </div>
    </section>
  );
}
