"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Border Beam – subtle light travels around the card perimeter on hover (Linear-style).
 * SVG rect with gradient stroke and animated stroke-dashoffset.
 */
export function BorderBeam({
  className,
  children,
  duration = 2.5,
  variant = "light",
}: {
  className?: string;
  children: React.ReactNode;
  duration?: number;
  variant?: "light" | "dark";
}) {
  const gradientId = `beam-${useId().replace(/:/g, "")}`;
  const borderClass =
    variant === "dark"
      ? "border-[#E2E8E2]/10"
      : "border-[rgba(26,31,26,0.06)]";
  return (
    <div className={cn("group relative", className)}>
      <div
        className={cn("pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] border", borderClass)}
        style={{ borderWidth: "0.5px" }}
        aria-hidden
      />
      {/* Animated beam – gradient segment travels around on hover */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible rounded-[var(--radius-lg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--emerald)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--emerald)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--emerald)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          rx="20"
          ry="20"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="1"
          strokeDasharray="80 1200"
          strokeLinecap="round"
          animate={{ strokeDashoffset: [0, -1280] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
      {children}
    </div>
  );
}
