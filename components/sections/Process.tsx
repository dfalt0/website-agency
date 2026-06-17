"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { ScrambleHeading } from "@/components/ui/ScrambleHeading";

const steps = [
  {
    number: "01",
    title: "Map your operations",
    description:
      "We learn how your business actually runs — workflows, data sources, pain points, and where your team wastes time. No generic AI audit; a focused discovery on what’s worth building.",
    icon: Icons.MessageCircle,
  },
  {
    number: "02",
    title: "Scope & prototype with engineers",
    description:
      "We define the smallest useful product — custom app, MCP, agent skills, or automation — and build a working prototype on modern stacks. You see real software, not slide decks.",
    icon: Icons.Settings,
  },
  {
    number: "03",
    title: "Ship, integrate, iterate",
    description:
      "Production deploy, integration with your existing tools, and ongoing engineering as requirements evolve. Optional managed hosting when you want us to run the infrastructure too.",
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
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-primary">
            [PROCESS]
          </p>
          <ScrambleHeading
            as="h2"
            className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground"
          >
            From uncertainty to shipped software
          </ScrambleHeading>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-foreground-muted">
            A clear path for businesses that know AI matters but don&apos;t know where to start
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
