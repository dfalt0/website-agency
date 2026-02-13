"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import PixelCard from "@/components/ui/PixelCard";

const PLATFORMS = [
  { id: "aws", name: "AWS", slug: "aws" },
  { id: "gcp", name: "Google Cloud", slug: "gcp" },
  { id: "azure", name: "Azure", slug: "azure" },
  { id: "shopify", name: "Shopify", slug: "shopify" },
  { id: "vercel", name: "Vercel", slug: "vercel" },
  { id: "wp", name: "WordPress", slug: "wordpress" },
];

/**
 * Your stack, connected: platform cards with pixel-card hover animation (green variant).
 */
export default function InfrastructureCloud() {
  const connectRef = useRef<HTMLAnchorElement>(null);
  const [connectHovered, setConnectHovered] = useState(false);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!connectHovered || !connectRef.current) return;
      const { x, y } = mousePosRef.current;
      const el = document.elementFromPoint(x, y);
      if (el && !connectRef.current.contains(el)) setConnectHovered(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [connectHovered]);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-primary">
            [INTEGRATIONS]
          </p>
          <h2 className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground">
            Your stack, connected
          </h2>
          <p className="mx-auto max-w-[600px] text-lg leading-[1.8] text-foreground-muted">
            We manage migrations from and to the platforms you already use.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
          {PLATFORMS.map((platform) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-h-[140px]"
            >
              <Link
                href={`/integrations#${platform.slug}`}
                className="block h-full rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <PixelCard
                  variant="green"
                  className="group min-h-[140px] w-full bg-surface transition-colors duration-200 hover:bg-[#166534]"
                >
                  <div className="relative z-10 font-mono text-2xl font-semibold text-foreground transition-colors duration-200 group-hover:text-white">
                    {platform.name}
                  </div>
                </PixelCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            ref={connectRef}
            href="/connect"
            onMouseEnter={() => setConnectHovered(true)}
            onMouseLeave={() => setConnectHovered(false)}
            className={cn(
              "relative inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider transition-all duration-200",
              connectHovered
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary text-foreground"
            )}
          >
            <span className="relative z-10">Connect your stack</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
