import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <h2 className="mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.015em] text-black">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-gray-600">
            All plans include expert engineering support and managed infrastructure
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.highlighted
                  ? "border-black shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="default">{plan.badge}</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="mt-1 text-black">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.cta.variant}
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
