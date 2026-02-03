"use client";

import { motion } from "framer-motion";

const DETECTED_SERVICES = [
  { id: "wp", label: "WordPress" },
  { id: "aws", label: "AWS" },
  { id: "vercel", label: "Vercel" },
  { id: "shopify", label: "Shopify" },
];

/**
 * Nodus-style Transfer Dashboard: Detected Services (left) | Migration Beam (center) | Managed Cloud (right).
 * Obsidian Forest palette, mono text, pulsing emerald status dots.
 */
export default function TransferDashboard() {
  return (
    <motion.div
      className="mx-auto w-full max-w-3xl rounded-lg border border-[#1A1F1A] bg-[#080A08]/80 px-6 py-5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderWidth: "0.5px" }}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        {/* Left: Detected Services */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
            Detected services
          </p>
          <ul className="mt-3 space-y-2">
            {DETECTED_SERVICES.map((svc) => (
              <li
                key={svc.id}
                className="flex items-center gap-2 font-mono text-xs text-[#E2E8E2]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
                </span>
                {svc.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Center: Vertical Migration Beam (animated path) */}
        <div className="flex flex-col items-center">
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#1A1F1A] to-transparent" />
          <motion.div
            className="h-8 w-px bg-emerald"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              boxShadow: "0 0 12px rgba(34, 197, 94, 0.5)",
              transformOrigin: "center",
            }}
          />
          <motion.div
            className="mt-1 h-2 w-2 rounded-full bg-emerald"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)" }}
          />
          <div className="mt-1 h-16 w-px bg-gradient-to-b from-transparent via-[#1A1F1A] to-transparent" />
        </div>

        {/* Right: Managed Cloud destination */}
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
            Destination
          </p>
          <p className="mt-3 font-mono text-sm font-medium text-[#E2E8E2]">
            Managed Cloud
          </p>
          <p className="mt-1 font-mono text-[10px] text-emerald">
            READY
          </p>
        </div>
      </div>
    </motion.div>
  );
}
