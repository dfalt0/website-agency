import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Switching to managed service was the best decision. Our website is faster, more secure, and I finally have time to focus on my business.",
    author: "Sarah Chen",
    role: "Founder, Modern Designs Co",
    avatar: "/images/testimonials/sarah.jpg",
  },
  {
    quote: "The team is incredibly responsive and knowledgeable. It's like having an in-house developer for a fraction of the cost.",
    author: "Michael Rodriguez",
    role: "CEO, TechStart Inc",
    avatar: "/images/testimonials/michael.jpg",
  },
  {
    quote: "We migrated from Squarespace and couldn't be happier. Same ease of use, but with unlimited customization and expert support.",
    author: "Emily Thompson",
    role: "Marketing Director, Bloom & Co",
    avatar: "/images/testimonials/emily.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface-muted py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
            [TESTIMONIALS]
          </p>
          <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground">
            Trusted by businesses like yours
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-card-hover"
            >
              <CardContent className="p-8">
                <p className="mb-6 text-lg leading-relaxed text-foreground/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-foreground/70">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
