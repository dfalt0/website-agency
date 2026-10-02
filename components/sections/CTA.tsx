"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Aurora from "@/components/ui/Aurora";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#031a0d] py-24 lg:py-32">
      <Aurora
        colorStops={["#031a0d", "#15803D", "#052E16"]}
        amplitude={0.9}
        blend={0.5}
        speed={0.55}
        className="opacity-60"
      />
      <div className="relative z-10 mx-auto max-w-[700px] px-6 text-center sm:px-8 lg:px-16">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald/80">
          [Next step]
        </p>
        <h2 className="font-heading mb-5 text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
          Ready to stop juggling vendors?
        </h2>
        <p className="mb-8 text-lg leading-[1.75] text-white/85">
          Book a free discovery call. We’ll map what you need across site, infra, and growth — then propose a
          clear path. No pitch deck theater.
        </p>
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button variant="emerald" size="lg" asChild>
            <Link href="/contact">Book a discovery call</Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-white/35 text-white hover:border-white/55 hover:bg-white/10"
            asChild
          >
            <Link href="/start">Start the intake form</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
