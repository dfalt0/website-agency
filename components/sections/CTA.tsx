import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-dark py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-dark-foreground">
            Ready to go fully managed?
          </h2>
          <p className="mb-8 text-lg leading-[1.8] text-dark-foreground/90">
            Start your 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="white-primary" size="lg" asChild>
              <Link href="/start">Get started free</Link>
            </Button>
            <Button variant="secondary" size="lg" className="border-dark-foreground/50 text-dark-foreground hover:bg-dark-foreground hover:text-dark" asChild>
              <Link href="/demo">Schedule a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
