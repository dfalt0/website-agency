import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.015em] text-white">
            Ready to go fully managed?
          </h2>
          <p className="mb-8 text-lg leading-[1.8] text-white/90">
            Start your 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="white-primary" size="lg" asChild>
              <Link href="/start">Get Started Free</Link>
            </Button>
            <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link href="/demo">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
