"use client";

import { motion } from "motion/react";
import { Layers, Building2, Handshake } from "lucide-react";
import AnimatedIcon from "@/components/ui/AnimatedIcon";
import BlurText from "@/components/ui/BlurText";
import { DIFFERENTIATORS } from "@/lib/agency-content";

const ICONS = [Layers, Building2, Handshake] as const;

export default function StatsBar() {
  return (
    <section className="border-y border-border bg-background py-16 lg:py-20" style={{ borderWidth: "0.5px" }}>
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-16">
        <div className="mb-10 max-w-[520px]">
          <BlurText
            as="h2"
            text="Built like a real partner, not a pet project."
            className="font-heading text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground"
            delay={50}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="mb-4 text-primary">
                  <AnimatedIcon icon={Icon} size={26} />
                </div>
                <h3 className="font-heading mb-2 text-lg font-semibold tracking-[-0.02em] text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
