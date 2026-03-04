import Link from "next/link";
import { Button } from "@/components/ui/button";
import Grainient from "@/components/ui/Grainient";

export default function CTA() {
  return (
    <section className="relative w-full min-w-full py-24 lg:py-32 overflow-hidden bg-[#031a0d]">
      <div className="absolute inset-0 w-full min-w-full">
        <Grainient
          color1="#031a0d"
          color2="#052E16"
          color3="#0d4d28"
          timeSpeed={0.9}
          colorBalance={0}
          warpStrength={1.4}
          warpFrequency={5}
          warpSpeed={5}
          warpAmplitude={40}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={350}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          centerDriftX={0.22}
          centerDriftY={0.05}
          centerDriftSpeed={0.35}
          zoom={0.9}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-heading mb-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-white">
            Ready to go fully managed?
          </h2>
          <p className="mb-8 text-lg leading-[1.8] text-white/90">
            Start your 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="white-primary" size="lg" asChild>
              <Link href="/start">Get started free</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-white/50 bg-transparent text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              asChild
            >
              <Link href="/demo">Schedule a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
