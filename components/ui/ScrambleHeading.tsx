"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const CHARS = "01!@#$%&*<>?/\\{}[]";

function scrambleText(str: string, progress: number): string {
  if (progress >= 1) return str;
  let out = "";
  for (let i = 0; i < str.length; i++) {
    if (i / str.length < progress) {
      out += str[i];
    } else {
      out += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
  }
  return out;
}

interface ScrambleHeadingProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

/**
 * Heading that scrambles (binary/gibberish) on scroll into view, then settles into the serif title (Nodus/Aceternity style).
 */
export function ScrambleHeading({ children, className = "", as: Tag = "h2" }: ScrambleHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(children);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setSettled(false);
    const duration = 600;
    const steps = 12;
    const stepMs = duration / steps;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setDisplay(scrambleText(children, progress));
      if (step >= steps) {
        clearInterval(interval);
        setDisplay(children);
        setSettled(true);
      }
    }, stepMs);
    return () => clearInterval(interval);
  }, [inView, children]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Tag className={className}>
        {display}
        {!settled && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            className="inline-block w-0.5 align-middle bg-current"
          />
        )}
      </Tag>
    </motion.div>
  );
}
