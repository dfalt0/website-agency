import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import ConnectionBeam from "@/components/sections/ConnectionBeam";
import TransferFlowDivider from "@/components/sections/TransferFlowDivider";
import StatsBar from "@/components/sections/StatsBar";
import BentoFeatures from "@/components/sections/BentoFeatures";
import InfrastructureCloud from "@/components/sections/InfrastructureCloud";
import Comparison from "@/components/sections/Comparison";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ConnectionBeam />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <TransferFlowDivider />
        <StatsBar />
        <BentoFeatures />
        <InfrastructureCloud />
        <Comparison />
        <Process />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
