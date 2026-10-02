"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurText from "@/components/ui/BlurText";

const plans = [
  {
    name: "Care",
    price: "$149",
    period: "/mo",
    description: "Keep an existing site healthy while we plan what’s next.",
    features: [
      "Managed hosting & SSL",
      "Weekly updates & backups",
      "Uptime monitoring",
      "Email support",
      "2 hrs content / fixes monthly",
    ],
    cta: { label: "Start intake", href: "/start" },
    highlighted: false,
  },
  {
    name: "Operate",
    price: "$349",
    period: "/mo",
    description: "Full ownership of site + infra with room for growth work.",
    features: [
      "Everything in Care",
      "Priority support",
      "Performance & SEO basics",
      "8 hrs engineering monthly",
      "Campaign landing pages",
      "Ad creative starter pack",
    ],
    cta: { label: "Book discovery", href: "/contact" },
    highlighted: true,
    badge: "Most chosen",
  },
  {
    name: "Partner",
    price: "Custom",
    period: "",
    description: "Dedicated engineering + growth for businesses that need more.",
    features: [
      "Everything in Operate",
      "Dedicated engineer",
      "Custom product builds",
      "Infra & migration projects",
      "Ongoing creative production",
      "SLA & roadmap reviews",
    ],
    cta: { label: "Talk to us", href: "/contact" },
    highlighted: false,
  },
];

export default function Pricing() {
  const [highlightedIndex, setHighlightedIndex] = useState(1);

  return (
    <section id="pricing" className="bg-surface-muted py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-16">
        <div className="mb-14 text-center lg:mb-16">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            [Pricing]
          </p>
          <BlurText
            as="h2"
            text="Clear retainers. Project work scoped separately."
            className="font-heading mb-4 text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground"
            delay={55}
          />
          <p className="mx-auto max-w-[560px] text-lg leading-[1.75] text-foreground-muted">
            Builds and migrations are quoted as projects. These plans cover ongoing ownership after you’re live.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              role="button"
              tabIndex={0}
              onClick={() => setHighlightedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setHighlightedIndex(index);
                }
              }}
              className={`relative flex h-full cursor-pointer flex-col border-2 transition-[border-color,box-shadow] duration-200 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                highlightedIndex === index ? "border-primary shadow-card" : "border-border-subtle/60"
              }`}
            >
              {plan.badge && highlightedIndex === index && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="px-3 py-1.5 text-xs">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="font-heading text-4xl font-semibold text-foreground">{plan.price}</span>
                  {plan.period ? <span className="ml-1 text-foreground/60">{plan.period}</span> : null}
                </div>
                <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter onClick={(e) => e.stopPropagation()}>
                <Button
                  variant={highlightedIndex === index ? "default" : "secondary"}
                  size="default"
                  className="w-full"
                  asChild
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-foreground-muted">
          New website or rebuild?{" "}
          <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
            We’ll scope a fixed project first
          </Link>
          , then move you onto a retainer.
        </p>
      </div>
    </section>
  );
}
