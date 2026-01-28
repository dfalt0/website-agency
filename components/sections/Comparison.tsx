import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <h2 className="mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.015em] text-black">
            Why choose managed over DIY?
          </h2>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-gray-600">
            Get the benefits of platforms like Squarespace, Wix, and GoDaddy—with expert engineers doing all the work.
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden border-gray-200">
          <CardHeader className="bg-gray-50">
            <div className="grid grid-cols-3 gap-4">
              <CardTitle className="text-lg font-semibold">Feature</CardTitle>
              <CardTitle className="text-lg font-semibold">DIY Platforms</CardTitle>
              <CardTitle className="text-lg font-semibold">Our Managed Service</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {comparisonData.map((row, index) => (
              <div key={index}>
                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="font-medium text-black">{row.feature}</div>
                  <div className="text-gray-600">{row.diy}</div>
                  <div className="font-semibold text-black">{row.managed}</div>
                </div>
                {index < comparisonData.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
