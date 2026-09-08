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
  /** Visible page H1. The shared section components below open at H2, so
   *  without this the page would have no top-level heading at all. */
  heading: ReactNode;
  intro: string;
  jsonLd?: Record<string, unknown>;
  children: ReactNode;
}

/**
 * Shell for the pages that give a homepage section its own URL. Each is a
 * standalone landing page - linkable, indexable, usable as an ad destination -
 * and closes with the same call to action as everywhere else.
 */
export default function SectionPage({
  title,
  description,
  canonical,
  heading,
  intro,
  jsonLd,
  children,
}: Props) {
  usePageMeta({ title, description, canonical, jsonLd });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-28 sm:pt-36">
        <header className="px-4 sm:px-6 mb-4 sm:mb-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-5 leading-tight">
              {heading}
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              {intro}
            </p>
          </div>
        </header>
        {children}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
