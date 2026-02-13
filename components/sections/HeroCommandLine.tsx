"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FULL_LINE = "All systems operational · Uptime 99.99%";

/**
 * Hero status line – quick reference for customers to see if our servers/services are online.
 * When live, this can be driven by a real status check.
 */
export default function HeroCommandLine() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (text.length < FULL_LINE.length) {
      const timeout = setTimeout(() => {
        setText(FULL_LINE.slice(0, text.length + 1));
      }, 45);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [text]);

  return (
    <motion.div
      className="w-full px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-base text-[#E2E8E2]/90 sm:text-lg">
        <span className="text-emerald" aria-hidden>●</span>
        <span>{text}</span>
        {!done && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2 flex-shrink-0 bg-[#E2E8E2]"
            aria-hidden
          />
        )}
      </div>
    </motion.div>
  );
}
