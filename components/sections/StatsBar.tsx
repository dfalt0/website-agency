export default function StatsBar() {
  const stats = [
    { number: "500+", label: "Websites Managed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="bg-surface-muted py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading mb-2 text-4xl font-semibold text-foreground lg:text-5xl">
                {stat.number}
              </div>
              <div className="text-base text-foreground/70 lg:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
