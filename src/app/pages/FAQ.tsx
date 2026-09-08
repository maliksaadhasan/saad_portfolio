import { useEffect, useMemo } from "react";
import { motion } from "motion/react";
import Navigation from "@/app/components/Navigation";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import { faqs, faqCategories } from "@/app/data/faqs";
import { usePageMeta } from "@/app/hooks/usePageMeta";

export default function FAQ() {
  // FAQPage schema is what makes these answers eligible for rich results and
  // for citation by answer engines. It has to mirror the visible text exactly.
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.maliksaadhasan.com/faq#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    }),
    []
  );

  usePageMeta({
    title: "Paid Ads FAQ | Budgets, ROAS, Tracking & Scaling Answered",
    description:
      "Straight answers on ad budgets, realistic ROAS, how long results take, conversion tracking, vertical vs horizontal scaling, reporting and account ownership.",
    canonical: "https://www.maliksaadhasan.com/faq",
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-28 sm:pt-36 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs sm:text-sm mb-6">
              Frequently Asked Questions
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              Questions I Get{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Before Every Engagement
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Budgets, timelines, tracking, scaling and reporting, answered
              plainly. If something is not covered here, ask me directly and I
              will add it.
            </p>
          </motion.div>

          {faqCategories.map((category) => (
            <section key={category} className="mb-12 sm:mb-14">
              <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-300/80 mb-6 pb-3 border-b border-white/10">
                {category}
              </h2>

              <div className="space-y-8">
                {faqs
                  .filter((f) => f.category === category)
                  .map((f) => (
                    <div key={f.question}>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2.5 text-white">
                        {f.question}
                      </h3>
                      <p className="text-white/70 leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
