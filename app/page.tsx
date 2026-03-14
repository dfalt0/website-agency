import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import ConnectionBeam from "@/components/sections/ConnectionBeam";

/* Below-the-fold sections: code-split to reduce initial JS and speed up load */
const StatsBar = dynamic(() => import("@/components/sections/StatsBar"), { ssr: true });
const Features = dynamic(() => import("@/components/sections/Features"), { ssr: true });
const InfrastructureCloud = dynamic(() => import("@/components/sections/InfrastructureCloud"), { ssr: true });
const Comparison = dynamic(() => import("@/components/sections/Comparison"), { ssr: true });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: true });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: true });
// const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ConnectionBeam />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <StatsBar />
        <Features />
        <InfrastructureCloud />
        <Comparison />
        <Process />
        <Pricing />
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
