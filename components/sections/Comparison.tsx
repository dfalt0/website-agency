"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrambleHeading } from "@/components/ui/ScrambleHeading";
import { AI_COMPARISON_ROWS } from "@/lib/ai-content";

export default function Comparison() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <motion.div
          className="mb-16 text-center lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-primary">
            [COMPARISON]
          </p>
          <ScrambleHeading
            as="h2"
            className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground"
          >
            Products over prompts
          </ScrambleHeading>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-foreground-muted">
            Operating businesses don&apos;t need another AI productivity app. They need software that fits how
            they already work — built with engineers who ship.
          </p>
        </motion.div>

        {/* Desktop table */}
        <Card className="hidden overflow-hidden md:block">
          <CardHeader className="bg-surface-muted">
            <div className="grid grid-cols-4 gap-4">
              <CardTitle className="text-lg font-semibold tracking-wide">Capability</CardTitle>
              <CardTitle className="text-lg font-semibold tracking-wide text-foreground/70">
                Prompting alone
              </CardTitle>
              <CardTitle className="text-lg font-semibold tracking-wide text-foreground/70">
                Off-the-shelf AI SaaS
              </CardTitle>
              <CardTitle className="text-lg font-semibold tracking-wide text-primary">
                Built with our engineers
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {AI_COMPARISON_ROWS.map((row, index) => (
              <div key={row.feature}>
                <div className="grid grid-cols-4 gap-4 p-6">
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-foreground/60">{row.prompting}</div>
                  <div className="text-foreground/60">{row.saas}</div>
                  <div className="font-semibold text-foreground">{row.engineered}</div>
                </div>
                {index < AI_COMPARISON_ROWS.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {AI_COMPARISON_ROWS.map((row) => (
            <Card key={row.feature} className="overflow-hidden">
              <CardHeader className="bg-surface-muted pb-3">
                <CardTitle className="text-base font-semibold">{row.feature}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-4">
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-foreground/50">
                    Prompting
                  </p>
                  <p className="text-sm text-foreground/70">{row.prompting}</p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-foreground/50">
                    AI SaaS
                  </p>
                  <p className="text-sm text-foreground/70">{row.saas}</p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    Our engineers
                  </p>
                  <p className="text-sm font-medium text-foreground">{row.engineered}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground-muted">
          Also need managed hosting and infrastructure?{" "}
          <Link href="#services" className="font-medium text-primary underline-offset-4 hover:underline">
            See our managed services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
