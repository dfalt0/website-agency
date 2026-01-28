"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-black/40" />
        {/* Placeholder for background video/image - can be replaced with actual video/image */}
        <div className="absolute inset-0 bg-gray-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[900px] px-8 text-center">
        <h1 className="mb-8 text-[clamp(3rem,10vw,6rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
          Your website,
          <br />
          fully managed
        </h1>
        
        <p className="mb-12 text-lg leading-[1.8] text-white/95 lg:text-xl">
          Professional engineers managing your website and cloud infrastructure—affordable, competitive, and worry-free.
        </p>

        <div className="mb-8 flex flex-col items-center gap-4">
          <Button
            variant="white-primary"
            size="lg"
            asChild
            className="w-full max-w-[280px]"
          >
            <Link href="/start">GET STARTED</Link>
          </Button>
        </div>

        <p className="text-sm text-white/90">
          Start for free. No credit card required.
        </p>
      </div>
    </section>
  );
}
