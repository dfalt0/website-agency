import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";

const StatsBar = dynamic(() => import("@/components/sections/StatsBar"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: true });
const Comparison = dynamic(() => import("@/components/sections/Comparison"), { ssr: true });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: true });
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <StatsBar />
        <Services />
        <Process />
        <Comparison />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
