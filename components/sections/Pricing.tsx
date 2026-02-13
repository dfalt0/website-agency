"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TrueFocus from "@/components/ui/TrueFocus";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for small businesses and blogs",
    features: [
      "Up to 5,000 visitors/month",
      "Custom domain & SSL",
      "Weekly updates & backups",
      "Email support (24hr response)",
      "Basic SEO optimization",
      "Content updates (2 hrs/month)",
    ],
    cta: { label: "Start Free Trial", variant: "secondary" as const },
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "per month",
    description: "For growing businesses and ecommerce",
    features: [
      "Up to 25,000 visitors/month",
      "Everything in Starter",
      "Daily backups & monitoring",
      "Priority support (4hr response)",
      "Advanced SEO & analytics",
      "Content updates (5 hrs/month)",
      "Custom integrations",
      "Performance optimization",
    ],
    cta: { label: "Start Free Trial", variant: "default" as const },
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$299+",
    period: "per month",
    description: "For high-traffic sites and agencies",
    features: [
      "Unlimited visitors",
      "Everything in Professional",
      "Dedicated engineer",
      "24/7 support (1hr response)",
      "White-label options",
      "Unlimited content updates",
      "Custom development",
      "SLA guarantee",
    ],
    cta: { label: "Contact Sales", variant: "secondary" as const },
    highlighted: false,
  },
];

const DEFAULT_HIGHLIGHTED_INDEX = 1; // Professional

export default function Pricing() {
  const [highlightedIndex, setHighlightedIndex] = useState(DEFAULT_HIGHLIGHTED_INDEX);

  return (
    <section id="pricing" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <div className="mb-6 flex justify-center">
            <TrueFocus
              sentence="Simple,|transparent pricing"
              separator="|"
              manualMode={false}
              blurAmount={5}
              borderColor="var(--primary)"
              glowColor="rgba(21, 128, 61, 0.5)"
              animationDuration={0.5}
              pauseBetweenAnimations={3}
              className="text-center"
              wordClassName="relative font-heading text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground cursor-default"
            />
          </div>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-foreground/70">
            All plans include expert engineering support and managed infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => setHighlightedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setHighlightedIndex(index);
                }
              }}
              className={`relative flex cursor-pointer flex-col h-full border-2 transition-[border-color,box-shadow] duration-200 ease-out hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                highlightedIndex === index
                  ? "border-primary shadow-card"
                  : "border-border-subtle/60"
              }`}
            >
              {plan.badge && index === DEFAULT_HIGHLIGHTED_INDEX && highlightedIndex === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <Badge variant="default" className="text-sm leading-none px-3.5 py-2">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="font-heading text-4xl font-semibold text-foreground">{plan.price}</span>
                  <span className="ml-2 text-foreground/70">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
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
                  <Link href="/start">{plan.cta.label}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
