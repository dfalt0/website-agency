"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const FOREST_MIST = "rgba(34, 197, 94, 0.08)";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${FOREST_MIST}, transparent 55%)`,
        }}
      />
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-404" width={48} height={48} patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-404)" className="text-[#E2E8E2]" />
        </svg>
      </div>

      <Navigation navVariant="dark" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 pt-24 pb-20 text-center">
        <h1
          className="font-heading mb-6 text-[clamp(4rem,18vw,10rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#E2E8E2] -translate-x-0.5"
          style={{ textShadow: "0 0 1px #E2E8E2" }}
        >
          404
        </h1>
        <p className="font-heading text-xl md:text-2xl text-[#E2E8E2]/90 tracking-tight mb-2">
          Page not found
        </p>
        <p className="text-[#E2E8E2]/70 max-w-md mb-10">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button variant="white-primary" size="lg" asChild className="shadow-emerald">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
