import Navigation from "@/app/components/Navigation";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";
import CaseStudiesSection from "@/app/components/CaseStudiesSection";
import ProcessSection from "@/app/components/ProcessSection";
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import TeamSection from "@/app/components/TeamSection";
import TechnologiesSection from "@/app/components/TechnologiesSection";
import CTASection from "@/app/components/CTASection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamSection />
      <TechnologiesSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
