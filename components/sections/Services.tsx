"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Icons } from "@/components/icons";

const services = [
  { icon: Icons.Globe, title: "Website Management", description: "Complete website maintenance, updates, and optimization handled by our team.", serviceId: "SRV-01" },
  { icon: Icons.Cloud, title: "Cloud Infrastructure", description: "Scalable cloud solutions with automatic backups and disaster recovery.", serviceId: "CLD-02" },
  { icon: Icons.Shield, title: "Security & Monitoring", description: "24/7 security monitoring, SSL certificates, and proactive threat prevention.", serviceId: "SEC-03" },
  { icon: Icons.Zap, title: "Performance Optimization", description: "Lightning-fast load times with CDN, caching, and code optimization.", serviceId: "PRF-04" },
  { icon: Icons.Code, title: "Custom Development", description: "Tailored features and integrations built specifically for your needs.", serviceId: "DEV-05" },
  { icon: Icons.Headphones, title: "Expert Support", description: "Direct access to senior engineers, not chatbots or offshore support.", serviceId: "SUP-06" },
];

const container = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  }),
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* Subtle grain texture overlay (Railway/Koyeb tactile feel) */
function GrainOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] opacity-[0.03] mix-blend-overlay"
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <motion.div
          className="mb-16 text-center lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-primary">
            What we do
          </p>
          <h2 className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground">
            Everything you need, fully managed
          </h2>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-foreground-muted">
            Our team of expert engineers handles all your website and cloud infrastructure needs so you can focus on your business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={cardItem}>
                <BorderBeam duration={2.5} variant="dark">
                  <Card className="relative overflow-hidden border-0 bg-card-obsidian shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                    <GrainOverlay />
                    {/* Service ID / Category – top right, mono, muted silver (Railway-style) */}
                    <div className="absolute right-4 top-4">
                      <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-[#E2E8E2]/50">
                        {service.serviceId}
                      </span>
                    </div>
                    <CardHeader className="pb-2">
                      {/* Smaller, thinner stroke icon in Emerald (Lucide) */}
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--radius)] text-emerald">
                        <Icon className="h-5 w-5 shrink-0 text-emerald" strokeWidth={1.5} />
                      </div>
                      <CardTitle className="text-lg text-[#E2E8E2]">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-[#E2E8E2]/70">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </BorderBeam>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
