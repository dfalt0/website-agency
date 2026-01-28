export default function StatsBar() {
  const stats = [
    { number: "500+", label: "Websites Managed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold text-black lg:text-5xl">
                {stat.number}
              </div>
              <div className="text-base text-gray-600 lg:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
