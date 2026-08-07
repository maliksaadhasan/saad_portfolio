import { Link } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/app/data/caseStudies";
import { LINKS } from "@/app/data/site";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { usePageMeta } from "@/app/hooks/usePageMeta";

const platforms = ["All", "Meta Ads", "Google Ads"];

export default function CaseStudies() {
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  usePageMeta({
    title: "Case Studies | Saad Hasan - Performance Marketing Results",
    description: "Real performance marketing case studies showing proven ROI. See how data-driven Meta Ads, Google Ads, and Klaviyo strategies delivered 9x+ ROAS and $15M+ in client revenue.",
    canonical: "https://saadhasan.me/case-studies",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    selectedPlatform === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.platform === selectedPlatform);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </Link>
        </div>
      </header>

      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm mb-6">
              Success Stories
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Every Account Tells a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              E-commerce scaling on Meta, lead generation on Google: the
              problem each brand faced, the steps I took, and the outcome.
            </p>

            {/* Platform Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedPlatform === platform
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                      : "bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20"
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  to={`/case-study/${study.id}`}
                  className="group block relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                    {study.image ? (
                      <img
                        src={study.image}
                        alt={`${study.client}, ad results`}
                        className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${study.gradient} opacity-40 flex items-center justify-center`}>
                        <TrendingUp className="w-16 h-16 text-white/80" />
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-40 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    {/* Logo Overlay */}
                    {study.logo ? (
                      <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center max-w-[150px] shadow-lg">
                        <img
                          src={study.logo}
                          alt={`${study.client} Logo`}
                          className="h-5 sm:h-6 w-auto object-contain max-w-[130px]"
                        />
                      </div>
                    ) : (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full text-xs text-white border border-white/20">
                        {study.industry}
                      </div>
                    )}

                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full text-xs text-white/80 border border-white/20">
                      {study.platform}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center justify-between text-white">
                        {study.client}
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                      </h3>
                      <p className="text-white/70 text-sm mb-5 leading-relaxed">{study.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                      {study.metrics.map((metric, mi) => (
                        <div key={mi} className="text-center p-2 bg-white/5 rounded-lg">
                          <div className="text-xs text-white/60 mb-1 line-clamp-1">{metric.label}</div>
                          <div className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16 sm:mt-20 p-8 sm:p-12 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-3xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Your brand could be the next story here.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Free 1:1 audit and strategy call, including a competitor
              analysis of your market.
            </p>
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-base sm:text-lg font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <span>Book a 1:1 Audit & Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </main>
      <WhatsAppButton />
    </div>
  );
}
