import { Link } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/app/data/caseStudies";
import { LINKS } from "@/app/data/site";
import WhatsAppButton from "@/app/components/WhatsAppButton";

const platforms = ["All", "Meta Ads", "Google Ads"];

export default function CaseStudies() {
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    selectedPlatform === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.platform === selectedPlatform);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black text-white">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </Link>
        </div>
      </div>

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 mb-6">
              Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Every Account Tells a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10">
              E-commerce scaling on Meta, lead generation on Google — the
              problem each brand faced, the steps I took, and the outcome.
            </p>

            {/* Platform Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  to={`/case-study/${study.id}`}
                  className="group block relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                    {study.image ? (
                      <img
                        src={study.image}
                        alt={`${study.client} — ad results`}
                        className="w-full h-full object-cover object-left-top group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${study.gradient} opacity-40 flex items-center justify-center`}>
                        <TrendingUp className="w-16 h-16 text-white/80" />
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-40 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-xl rounded-full text-xs text-white border border-white/20">
                      {study.industry}
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-xl rounded-full text-xs text-white/80 border border-white/20">
                      {study.platform}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
                    <h3 className="text-xl mb-3 flex items-center justify-between">
                      {study.client}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    <p className="text-white/70 text-sm mb-5">{study.description}</p>
                    <div className="grid grid-cols-3 gap-2">
                      {study.metrics.map((metric, mi) => (
                        <div key={mi} className="text-center p-2 bg-white/5 rounded-lg">
                          <div className="text-xs text-white/60 mb-1">{metric.label}</div>
                          <div className={`text-sm font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
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
            className="text-center mt-20 p-12 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Your brand could be the next story here.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Free 1:1 audit and strategy call — including a competitor
              analysis of your market.
            </p>
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <span>Book a 1:1 Audit & Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
