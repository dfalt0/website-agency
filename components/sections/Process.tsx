import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

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
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <h2 className="mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.015em] text-black">
            How it works
          </h2>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-gray-600">
            Get started in minutes, not hours
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="border-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-2xl font-bold text-white">
                      {step.number}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-black">
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
