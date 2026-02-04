"use client";

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
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
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
                  <div className="relative z-10 font-mono text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-white">
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
            href="/connect"
            className={cn(
              "group relative inline-flex rounded-lg px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:text-emerald"
            )}
          >
            <span className="relative z-10">Connect your stack</span>
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
