"use client";

import { motion } from "motion/react";
import { Server, Cloud } from "lucide-react";

/**
 * Animated divider between Hero and light section: "source → destination" transfer beam.
 * Horizontal line with two icons and a glowing pulse moving between them.
 */
export default function TransferFlowDivider() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-dark py-12 lg:py-16"
      aria-hidden
    >
      <div className="relative z-10 mx-auto flex max-w-md items-center justify-center gap-6 px-8">
        {/* Source: "Your current setup" */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-foreground/20 bg-dark-foreground/5">
            <Server className="h-5 w-5 text-dark-foreground/70" aria-hidden />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-dark-foreground/50">
            Your stack
          </span>
        </div>

        {/* Animated line with traveling pulse */}
        <div className="relative h-px min-w-[80px] flex-1 bg-dark-foreground/15">
          <motion.div
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald shadow-[0_0_12px_rgba(34,197,94,0.5)]"
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Destination: "Our managed cloud" */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(34,197,94,0.4)] bg-[rgba(34,197,94,0.1)]">
            <Cloud className="h-5 w-5 text-emerald" aria-hidden />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-dark-foreground/50">
            Fully managed
          </span>
        </div>
      </div>
    </section>
  );
}
