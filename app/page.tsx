import ComparisonSection from "@/components/landing/ComparisonSection";
import CTASection from "@/components/landing/CTASection";
import Features from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import FutureVision from "@/components/landing/FutureVision";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import Philosophy from "@/components/landing/Philosophy";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import TrustStrip from "@/components/landing/TrustStrip";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] ">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <HowItWorks />
        <Philosophy />
        <ComparisonSection />
        <FutureVision />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}