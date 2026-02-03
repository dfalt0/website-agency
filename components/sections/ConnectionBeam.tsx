"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Connection Beam – faint glowing emerald line that pulses downward as the user scrolls.
 * Represents the flow of services being transferred to our management (Aceternity-style).
 * Renders between Hero and Features; uses spring for a high-end feel.
 */
export default function ConnectionBeam() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.4], [0.3, 0.8, 0.2]);
  const scaleY = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 0.25], ["0%", "20%"]);

  const pulseY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "60vh"]);

  return (
    <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-screen w-px -translate-x-1/2 overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-full w-full origin-top"
        style={{ opacity, scaleY, y }}
      >
        <div
          className="absolute left-1/2 top-0 h-[80vh] w-px -translate-x-1/2"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, var(--emerald) 15%, rgba(34, 197, 94, 0.4) 50%, var(--emerald) 85%, transparent 100%)",
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.25), 0 0 40px rgba(34, 197, 94, 0.1)",
          }}
        />
        <motion.div
          className="absolute left-1/2 h-8 w-1 -translate-x-1/2 rounded-full bg-emerald"
          style={{
            boxShadow: "0 0 24px var(--emerald), 0 0 48px rgba(34, 197, 94, 0.4)",
            y: pulseY,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
}
