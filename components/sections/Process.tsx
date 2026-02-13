"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { ScrambleHeading } from "@/components/ui/ScrambleHeading";

const steps = [
  {
    number: "01",
    title: "Share your website & services",
    description: "Enter your website, domain, and service details into our system for AI-powered analysis. We get a clear picture of your stack and needs fast.",
    icon: Icons.MessageCircle,
  },
  {
    number: "02",
    title: "We bring it into our stack",
    description: "We onboard your tech into our management platform and get to work—whether that means building new, migrating to better services, or rebuilding. Your setup, our bubble.",
    icon: Icons.Settings,
  },
  {
    number: "03",
    title: "Launch and grow",
    description: "We focus on managing and improving what you already have. Your site and services stay live with ongoing optimization and support—and we can build new when you need it.",
    icon: Icons.Rocket,
  },
];

export default function Process() {
  return (
    <section className="bg-surface-muted py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <motion.div
          className="mb-16 text-center lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
            [PROCESS]
          </p>
          <ScrambleHeading
            as="h2"
            className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground"
          >
            How it works
          </ScrambleHeading>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-foreground-muted">
            Get started in minutes, not hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const hoverPop =
              index === 0
                ? "hover:-translate-x-2 hover:-translate-y-3"
                : index === 1
                  ? "hover:-translate-y-3"
                  : "hover:translate-x-2 hover:-translate-y-3";
            return (
              <Card
                key={index}
                className={`transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.14),0_28px_64px_-12px_rgba(0,0,0,0.1)] ${hoverPop}`}
              >
                <CardHeader>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="font-heading flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-primary text-xl font-semibold tracking-wide text-primary-foreground">
                      {step.number}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-surface-muted text-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold tracking-wide">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
