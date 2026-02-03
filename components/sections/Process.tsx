"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { ScrambleHeading } from "@/components/ui/ScrambleHeading";

const steps = [
  {
    number: "01",
    title: "Tell us about your needs",
    description: "Quick consultation to understand your website goals and requirements.",
    icon: Icons.MessageCircle,
  },
  {
    number: "02",
    title: "We build or migrate",
    description: "Our engineers create your site or seamlessly migrate from your current platform.",
    icon: Icons.Settings,
  },
  {
    number: "03",
    title: "Launch and grow",
    description: "Your site goes live with ongoing optimization and support from our team.",
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
            return (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-card-hover"
              >
                <CardHeader>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="font-heading flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-primary text-xl font-semibold text-primary-foreground">
                      {step.number}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-surface-muted text-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
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
