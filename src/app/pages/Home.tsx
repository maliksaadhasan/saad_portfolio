import { useEffect } from "react";
import { useLocation } from "react-router";
import Navigation from "@/app/components/Navigation";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";
import CaseStudiesSection from "@/app/components/CaseStudiesSection";
import ProcessSection from "@/app/components/ProcessSection";
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import TechnologiesSection from "@/app/components/TechnologiesSection";
import CTASection from "@/app/components/CTASection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import { usePageMeta } from "@/app/hooks/usePageMeta";

export default function Home() {
  const location = useLocation();

  usePageMeta({
    title: "Saad Hasan | Meta & Google Ads Performance Marketer",
    description: "Performance marketer for Meta Ads, Google Ads and Klaviyo. $15M+ tracked revenue, 9.04x best yearly ROAS. Book a free strategy call.",
    canonical: "https://www.maliksaadhasan.com/",
  });

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CaseStudiesSection />
        <ProcessSection />
        <TestimonialsSection />
        <TechnologiesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
