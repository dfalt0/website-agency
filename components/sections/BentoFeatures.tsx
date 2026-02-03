"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Cloud, Shield, Zap, Code, Headphones } from "lucide-react";
import { ScrambleHeading } from "@/components/ui/ScrambleHeading";

const MIGRATION_LOGS = [
  "Analyzing SSL certificates...",
  "Optimizing static assets...",
  "Transferring DNS records...",
  "Syncing database schema...",
  "Verifying CDN propagation...",
  "Running post-migration checks...",
  "Clearing cache layers...",
  "Enabling WAF rules...",
];

const BENEFITS = [
  { tag: "SYSTEM_LOG", title: "Real-time Migration Feed", icon: null },
  { tag: "PERFORMANCE_METRIC", title: "Website Management", icon: Globe },
  { tag: "SECURITY_LAYER", title: "Security & Monitoring", icon: Shield },
  { tag: "CDN_STATUS", title: "Performance Optimization", icon: Zap },
  { tag: "CLOUD_SYNC", title: "Cloud Infrastructure", icon: Cloud },
  { tag: "CUSTOM_BUILD", title: "Custom Development", icon: Code },
  { tag: "SUPPORT_TIER", title: "Expert Support", icon: Headphones },
];

/**
 * Nodus-style Bento Grid: technical headers [TAG], one card = scrolling Migration Feed, 0.5px borders, glassmorphism.
 */
export default function BentoFeatures() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLogIndex((i) => (i + 1) % MIGRATION_LOGS.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
            [BENEFITS]
          </p>
          <ScrambleHeading
            as="h2"
            className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground"
          >
            Everything you need, fully managed
          </ScrambleHeading>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-foreground-muted">
            Our team of expert engineers handles all your website and cloud infrastructure needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* Migration Feed card – full width on first row */}
          <motion.div
            className="md:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative h-full min-h-[200px] overflow-hidden rounded-lg border border-[rgba(26,31,26,0.2)] bg-[#0C0F0C]/60 backdrop-blur-sm"
              style={{ borderWidth: "0.5px" }}
            >
              <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
                [SYSTEM_LOG]
              </div>
              <div className="flex h-full flex-col justify-end p-6 pt-10">
                <div className="font-mono text-xs text-[#E2E8E2]/90">
                  {MIGRATION_LOGS.slice(0, 4).map((line, i) => (
                    <div
                      key={`log-${i}`}
                      className={i === 3 ? "text-emerald" : "text-[#E2E8E2]/60"}
                    >
                      {i === 3 ? MIGRATION_LOGS[logIndex] : line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third card on first row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BentoCard
              tag="PERFORMANCE_METRIC"
              title="Website Management"
              description="Maintenance, updates, and optimization."
              Icon={Globe}
            />
          </motion.div>

          {/* Row 2 */}
          {BENEFITS.slice(2, 6).map((item, index) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
            >
              <BentoCard
                tag={item.tag}
                title={item.title}
                description=""
                Icon={item.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  tag,
  title,
  description,
  Icon,
}: {
  tag: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
}) {
  return (
    <div
      className="group relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-lg border border-[rgba(26,31,26,0.2)] bg-[#0C0F0C]/60 p-5 backdrop-blur-sm transition-colors hover:border-emerald/20"
      style={{ borderWidth: "0.5px" }}
    >
      <div className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
        [{tag}]
      </div>
      <div>
        {Icon && (
          <Icon className="mb-2 h-5 w-5 text-emerald" strokeWidth={1.5} />
        )}
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {title}
        </h3>
        {description && (
          <p className="mt-1 font-mono text-[10px] text-foreground-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
