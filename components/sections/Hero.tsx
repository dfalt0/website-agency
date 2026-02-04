"use client";

import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import RotatingText from "@/components/ui/RotatingText";
import TransferDashboard from "@/components/sections/TransferDashboard";
import HeroCommandLine from "@/components/sections/HeroCommandLine";

/* Forest Mist – large blurred emerald radial gradient (no purple/blue) */
const FOREST_MIST = "rgba(34, 197, 94, 0.08)";

/* SVG grid pattern – mask fades toward the bottom (Linear depth) */
function GridPattern() {
  const size = 48;
  return (
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 85%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 85%)",
      }}
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hero-grid"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              stroke="var(--dark-foreground)"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  );
}

/* Mouse-follow radial glow – emerald tint (Forest Mist) */
function Spotlight({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
      style={{
        background: `radial-gradient(
          600px 400px at ${x}px ${y}px,
          ${FOREST_MIST},
          transparent 70%
        )`,
      }}
    />
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setSpotlight({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-dark"
      onMouseMove={handleMouseMove}
    >
      {/* Base: deep forest black + Forest Mist glow (emerald radial) */}
      <div className="absolute inset-0 bg-dark" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${FOREST_MIST}, transparent 55%)`,
        }}
      />

      <GridPattern />
      <Spotlight x={spotlight.x} y={spotlight.y} />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pt-48 lg:pt-64">
        <div className="mx-auto max-w-[900px] text-center">
        <motion.h1
          className="font-heading mb-8 text-[clamp(3rem,10vw,6rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#E2E8E2]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Your{" "}
          <span className="font-heading inline-flex items-baseline align-baseline px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 bg-[#E2E8E2] text-[#080A08] rounded-lg">
            <RotatingText
              texts={["website", "shopify", "wordpress", "wix", "squarespace", "aws", "vercel"]}
              mainClassName="overflow-hidden justify-center inline-flex"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
            ,
          </span>
          <br />
          fully managed
        </motion.h1>

        <motion.p
          className="mb-12 text-lg leading-[1.8] lg:text-xl"
          style={{ color: "rgba(226, 232, 226, 0.92)" }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Professional engineers managing your web services and cloud infrastructure—affordable, competitive, and worry-free.
        </motion.p>

        <motion.div
          className="mb-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            variant="white-primary"
            size="lg"
            asChild
            className="w-full max-w-[280px] shadow-emerald"
          >
            <Link href="/start">Get started</Link>
          </Button>
        </motion.div>

        <motion.p
          className="text-sm text-[#E2E8E2]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Start for free. No credit card required.
        </motion.p>
        </div>

        <div className="mt-12 w-full max-w-[900px] px-4">
          <TransferDashboard />
        </div>

        <HeroCommandLine />
      </div>
    </section>
  );
}
