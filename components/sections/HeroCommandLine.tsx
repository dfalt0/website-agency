"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FULL_LINE = "UPTIME: 99.99% | MIGRATIONS_ACTIVE: 1,248 | LATENCY: 12ms";

/**
 * Command-line style footer at bottom of Hero – typing animation of technical stats.
 */
export default function HeroCommandLine() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (text.length < FULL_LINE.length) {
      const timeout = setTimeout(() => {
        setText(FULL_LINE.slice(0, text.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [text]);

  return (
    <motion.div
      className="mt-auto w-full border-t border-[#1A1F1A] px-4 py-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{ borderWidth: "0.5px" }}
    >
      <div className="mx-auto flex max-w-2xl items-center gap-2 font-mono text-[10px] text-[#E2E8E2]/70">
        <span className="text-emerald">&gt;</span>
        <span>{text}</span>
        {!done && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2 bg-[#E2E8E2]"
          >
            {" "}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
