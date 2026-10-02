"use client";

import { motion } from "motion/react";
import { Globe, Server, Megaphone, Check } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import AnimatedIcon from "@/components/ui/AnimatedIcon";
import BlurText from "@/components/ui/BlurText";
import { PILLARS } from "@/lib/agency-content";

const ICONS = [Globe, Server, Megaphone] as const;

export default function Services() {
  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-16">
        <div className="mb-14 max-w-[640px] lg:mb-20">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            [What we own]
          </p>
          <BlurText
            as="h2"
            text="Three lanes. One accountability."
            className="font-heading mb-5 text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground"
            delay={60}
          />
          <p className="text-lg leading-[1.75] text-foreground-muted">
            Not a buffet of disconnected services. We take responsibility for how your business shows up
            online — the site, the stack underneath it, and the creatives that drive demand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <SpotlightCard className="h-full p-6 lg:p-7" spotlightColor="rgba(34, 197, 94, 0.16)">
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                      <AnimatedIcon icon={Icon} size={22} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/35">
                      {pillar.id}
                    </span>
                  </div>
                  <h3 className="font-heading mb-3 text-xl font-semibold tracking-[-0.02em] text-[#E2E8E2]">
                    {pillar.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-[#E2E8E2]/65">{pillar.description}</p>
                  <ul className="space-y-2.5">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#E2E8E2]/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" strokeWidth={2.25} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
