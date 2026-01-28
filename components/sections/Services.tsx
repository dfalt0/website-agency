import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const services = [
  {
    icon: Icons.Globe,
    title: "Website Management",
    description: "Complete website maintenance, updates, and optimization handled by our team.",
  },
  {
    icon: Icons.Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with automatic backups and disaster recovery.",
  },
  {
    icon: Icons.Shield,
    title: "Security & Monitoring",
    description: "24/7 security monitoring, SSL certificates, and proactive threat prevention.",
  },
  {
    icon: Icons.Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times with CDN, caching, and code optimization.",
  },
  {
    icon: Icons.Code,
    title: "Custom Development",
    description: "Tailored features and integrations built specifically for your needs.",
  },
  {
    icon: Icons.Headphones,
    title: "Expert Support",
    description: "Direct access to senior engineers, not chatbots or offshore support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
            WHAT WE DO
          </p>
          <h2 className="mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.015em] text-black">
            Everything you need, fully managed
          </h2>
          <p className="mx-auto max-w-[700px] text-lg leading-[1.8] text-gray-600">
            Our team of expert engineers handles all your website and cloud infrastructure needs so you can focus on your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
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
