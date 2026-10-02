"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Aurora from "@/components/ui/Aurora";
import BlurText from "@/components/ui/BlurText";
import { BRAND } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-dark" />
      <Aurora
        colorStops={["#031a0d", "#22C55E", "#052E16"]}
        amplitude={1.05}
        blend={0.6}
        speed={0.7}
        className="opacity-70"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 35%, rgba(34,197,94,0.08), transparent 55%), linear-gradient(to bottom, transparent 55%, #080A08 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center justify-center px-6 pb-20 pt-32 text-center sm:px-8 lg:px-12">
        <motion.p
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {BRAND.legalName}
        </motion.p>

        <BlurText
          as="h1"
          text="Your digital presence, handled end to end."
          className="font-heading mb-6 max-w-[18ch] text-[clamp(2.5rem,7vw,4.75rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[#E2E8E2]"
          delay={80}
          animateBy="words"
          direction="top"
        />

        <motion.p
          className="mb-10 max-w-[540px] text-lg leading-[1.75] text-[#E2E8E2]/78 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          We build and run your website, keep the infrastructure healthy, and produce the creatives that
          help you grow — one team from first conversation to ongoing ops.
        </motion.p>

        <motion.div
          className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="emerald" size="lg" asChild>
            <Link href="/contact">
              Book a discovery call
              <ArrowRight />
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="border-[#E2E8E2]/30 text-[#E2E8E2] hover:border-[#E2E8E2]/50 hover:bg-[#E2E8E2]/08"
          >
            <Link href="#services">See what we handle</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-[#E2E8E2]/10 pt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-[#E2E8E2]/45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <span>Websites</span>
          <span className="text-emerald/50">·</span>
          <span>Infrastructure</span>
          <span className="text-emerald/50">·</span>
          <span>Growth creatives</span>
        </motion.div>
      </div>
    </section>
  );
}
