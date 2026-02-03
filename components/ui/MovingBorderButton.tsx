"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style Moving Border button – emerald light path around the border.
 */
export function MovingBorderButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      className={cn(
        "group relative rounded-lg px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-[#E2E8E2] transition-colors hover:text-emerald",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 rounded-lg border border-[#1A1F1A]"
        style={{ borderWidth: "0.5px" }}
        aria-hidden
      />
      <motion.span
        className="absolute inset-[-1px] rounded-lg opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent, rgba(34, 197, 94, 0.3))",
          backgroundSize: "200% 100%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "0.5px",
          WebkitMaskComposite: "xor",
        }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </button>
  );
}
