"use client";

import Link from "next/link";
import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { Button } from "@/components/ui/button";
import RotatingText from "@/components/ui/RotatingText";
import HeroCommandLine from "@/components/sections/HeroCommandLine";
import Squares from "@/components/ui/Squares";

/* Forest Mist – large blurred emerald radial gradient */
const FOREST_MIST = "rgba(34, 197, 94, 0.08)";

const ROTATING_TEXTS = [
  "website",
  "online store",
  "blog",
  "site builder",
  "ecommerce",
  "cloud",
  "hosting",
];

/** Extra pixels so the word isn’t cut off by the box edge (font/subpixel variance) */
const BOX_WIDTH_BUFFER = 20;
/** Extra padding on the right so the right edge doesn’t look tighter than the left */
const BOX_EXTRA_RIGHT_PADDING = 12;

export default function Hero() {
  const squaresMouseRef = useRef<{ clientX: number; clientY: number } | null>(null);

  const boxWidth = useMotionValue(0);
  const [boxWidthReady, setBoxWidthReady] = useState(false);
  const measureBoxRef = useRef<HTMLSpanElement>(null);
  const measureInnerRef = useRef<HTMLSpanElement>(null);
  const widthsRef = useRef<number[]>([]);

  useEffect(() => {
    const box = measureBoxRef.current;
    const inner = measureInnerRef.current;
    if (!box || !inner) return;
    const w: number[] = [];
    ROTATING_TEXTS.forEach((text) => {
      inner.textContent = text;
      w.push(box.offsetWidth + BOX_WIDTH_BUFFER + BOX_EXTRA_RIGHT_PADDING);
    });
    widthsRef.current = w;
    boxWidth.set(w[0]);
    setBoxWidthReady(true);
  }, []);

  const handleRotatingNext = useCallback(
    (index: number) => {
      const widths = widthsRef.current;
      if (widths.length === 0) return;
      const target = widths[index % widths.length];
      const current = boxWidth.get();
      if (target > current) {
        // Expand immediately so incoming longer words never render off to the side.
        boxWidth.set(target);
        return;
      }
      animate(boxWidth, target, {
        duration: 0.34,
        ease: [0.4, 0, 0.2, 1],
      });
    },
    [boxWidth]
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    squaresMouseRef.current = { clientX: e.clientX, clientY: e.clientY };
  }, []);

  const handleMouseLeave = useCallback(() => {
    squaresMouseRef.current = null;
  }, []);

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-dark"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base: deep forest black + Forest Mist glow (emerald radial) */}
      <div className="absolute inset-0 bg-dark" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${FOREST_MIST}, transparent 55%)`,
        }}
      />

      {/* Animated grid – full section layer (independent of pill); larger cells */}
      <div
        className="absolute inset-0 opacity-90 size-full"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 82%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 82%)",
        }}
      >
        <Squares
          direction="diagonal"
          speed={0.2}
          squareSize={36}
          borderColor="rgba(226, 232, 226, 0.06)"
          borderWidth={0.5}
          hoverFillColor="rgba(34, 197, 94, 0.18)"
          mouseClientRef={squaresMouseRef}
        />
      </div>
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pt-28 lg:pt-36">
        <div className="mx-auto max-w-[900px] text-center">
        <motion.h1
          className="font-heading mb-8 text-[clamp(3rem,10vw,6rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#E2E8E2]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Hidden measure for pre-calculating each phrase width (same font/size/padding as box) */}
          <span
            ref={measureBoxRef}
            aria-hidden
            className="font-heading absolute left-[-9999px] top-0 inline-flex items-baseline px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 opacity-0 pointer-events-none overflow-hidden"
            style={{ visibility: "hidden" }}
          >
            <span ref={measureInnerRef} className="inline-block text-[clamp(3rem,10vw,6rem)] font-normal leading-[1.1] tracking-[-0.02em]" />
          </span>
          Your{" "}
          <motion.span
            className="font-heading inline-flex items-baseline justify-center align-baseline px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 bg-[#E2E8E2] text-[#080A08] rounded-lg shrink-0"
            style={
              boxWidthReady
                ? { width: boxWidth, minWidth: 0 }
                : undefined
            }
          >
            <span className="inline-block w-max shrink-0 whitespace-nowrap">
              <RotatingText
                texts={ROTATING_TEXTS}
                mainClassName="overflow-hidden justify-center inline-flex"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
                onNext={handleRotatingNext}
              />
            </span>
          </motion.span><br />
          fully managed
        </motion.h1>

        <motion.p
          className="mb-12 text-lg leading-[1.8] lg:text-xl"
          style={{ color: "rgba(226, 232, 226, 0.92)" }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Professional engineers managing your web services and cloud infrastructure—affordable, competitive, and worry-free.
        </motion.p>

        <motion.div
          className="mb-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => { squaresMouseRef.current = null; }}
        >
          <Button
            variant="white-primary"
            size="lg"
            asChild
            className="w-full max-w-[280px] border border-[#E2E8E2]/90 bg-transparent text-[#E2E8E2] shadow-emerald hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <Link href="/start">Get started</Link>
          </Button>
        </motion.div>

        <motion.p
          className="text-sm text-[#E2E8E2]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          Start for free. No credit card required.
        </motion.p>
        </div>

        <div
          className="mt-auto w-full pb-24 pt-16"
          onMouseEnter={() => { squaresMouseRef.current = null; }}
        >
          <HeroCommandLine />
        </div>
      </div>
    </section>
  );
}
