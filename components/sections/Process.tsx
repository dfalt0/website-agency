"use client";

import { motion } from "motion/react";
import BlurText from "@/components/ui/BlurText";
import { JOURNEY } from "@/lib/agency-content";

export default function Process() {
  return (
    <section id="process" className="bg-surface-muted py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-16">
        <div className="mb-14 text-center lg:mb-20">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            [How we work]
          </p>
          <BlurText
            as="h2"
            text="Start to finish — then keep going."
            className="font-heading mb-4 text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground"
            delay={60}
          />
          <p className="mx-auto max-w-[560px] text-lg leading-[1.75] text-foreground-muted">
            A clear path from first call to live product, with ops and growth baked in after launch.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          {JOURNEY.map((step, i) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="relative rounded-2xl border border-border bg-background p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{ borderWidth: "0.5px" }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
                {step.number}
              </div>
              <h3 className="font-heading mb-2 text-lg font-semibold tracking-[-0.02em] text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground-muted">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
