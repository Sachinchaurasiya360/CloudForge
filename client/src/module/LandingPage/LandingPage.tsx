import Navbar from "../components/navbar";
import { navItems } from "./navItems";
import HeroSection from "../../components/ui/hero";
import {
  TrustedBy,
  Features,
  HowItWorks,
  Testimonials,
  Pricing,
  FinalCTA,
  Footer,
} from "./sections";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal">
      <Navbar items={navItems} />
      <main>
        <HeroSection />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
