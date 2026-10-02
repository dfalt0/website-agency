"use client";

import { motion, useAnimationControls } from "motion/react";
import type { LucideIcon } from "lucide-react";

type AnimatedIconProps = {
  icon: LucideIcon;
  className?: string;
  size?: number;
};

/** Lightweight hover-animated icon wrapper (AnimateIcons-style feel with Lucide). */
export default function AnimatedIcon({ icon: Icon, className = "", size = 24 }: AnimatedIconProps) {
  const controls = useAnimationControls();

  return (
    <motion.span
      className={`inline-flex ${className}`}
      onHoverStart={() =>
        controls.start({
          scale: [1, 1.12, 1],
          rotate: [0, -6, 6, 0],
          transition: { duration: 0.45, ease: "easeInOut" },
        })
      }
      animate={controls}
    >
      <Icon size={size} strokeWidth={1.75} />
    </motion.span>
  );
}
