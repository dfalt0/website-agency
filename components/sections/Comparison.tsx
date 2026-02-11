"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrambleHeading } from "@/components/ui/ScrambleHeading";

const comparisonData = [
  { feature: "Monthly Cost", diy: "$16-50/mo", managed: "$99-299/mo" },
  { feature: "Your Time Required", diy: "5-20 hours/month", managed: "0 hours" },
  { feature: "Technical Expertise Needed", diy: "Yes", managed: "No" },
  { feature: "Custom Features", diy: "Limited", managed: "Unlimited" },
  { feature: "Dedicated Engineer", diy: "No", managed: "Yes" },
  { feature: "Proactive Monitoring", diy: "No", managed: "24/7" },
];

export default function Comparison() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <motion.div
          className="mb-16 text-center lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
            [COMPARISON]
          </p>
          <ScrambleHeading
            as="h2"
            className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground"
          >
            Why choose managed over DIY?
          </ScrambleHeading>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-foreground-muted">
            Get the benefits of platforms like Squarespace, Wix, and GoDaddy—with expert engineers doing all the work.
          </p>
        </motion.div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-surface-muted">
            <div className="grid grid-cols-3 gap-4">
              <CardTitle className="text-xl font-semibold tracking-wide">Feature</CardTitle>
              <CardTitle className="text-xl font-semibold tracking-wide">DIY Platforms</CardTitle>
              <CardTitle className="text-xl font-semibold tracking-wide">Our Managed Service</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {comparisonData.map((row, index) => (
              <div key={index}>
                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-foreground/70">{row.diy}</div>
                  <div className="font-semibold text-foreground">{row.managed}</div>
                </div>
                {index < comparisonData.length - 1 && <Separator />}
              </div>
            ))}
            <Separator />
            <div className="grid grid-cols-3 gap-4 px-6 py-4">
              <p className="col-span-3 text-xs leading-relaxed text-foreground-muted/80">
                <span className="font-medium text-foreground-muted">†</span>{" "}
                “Unlimited” custom features under our managed service means we add and implement whatever is within scope and scale for your project—we’re not miracle workers, but we’ll build what makes sense for you as a custom feature.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
