import { useEffect } from "react";
import type { ReactNode } from "react";
import Navigation from "@/app/components/Navigation";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import { usePageMeta } from "@/app/hooks/usePageMeta";

interface Props {
  title: string;
  description: string;
  canonical: string;
  children: ReactNode;
}

/**
 * Shell for the pages that give a homepage section its own URL. Each one is a
 * standalone landing page - linkable, indexable, and usable as an ad
 * destination - and closes with the same call to action as everywhere else.
 */
export default function SectionPage({ title, description, canonical, children }: Props) {
  usePageMeta({ title, description, canonical });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        {children}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
