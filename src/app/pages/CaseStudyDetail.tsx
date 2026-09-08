import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, AlertTriangle, ListChecks, TrendingUp } from "lucide-react";
import { caseStudies } from "@/app/data/caseStudies";
import { LINKS } from "@/app/data/site";
import { usePageMeta } from "@/app/hooks/usePageMeta";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  usePageMeta({
    title: caseStudy
      ? `${caseStudy.industry} Case Study | Saad Hasan`
      : "Case Study Not Found | Saad Hasan",
    description: caseStudy
      ? `${caseStudy.description} See the full results and strategy breakdown.`
      : "The requested case study could not be found.",
    canonical: `https://www.maliksaadhasan.com/case-study/${id}`,
    ogType: "article",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-full text-white hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>
        </div>
      </div>
    );
  }

  const others = caseStudies.filter((cs) => cs.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/case-studies"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            <span>All Case Studies</span>
          </Link>
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </Link>
        </div>
      </header>

      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-12"
          >
            {caseStudy.logo && (
              <div className="mb-6 p-3.5 sm:p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl inline-block max-w-[240px] shadow-xl">
                <img
                  src={caseStudy.logo}
                  alt={`${caseStudy.client} Logo`}
                  className="h-8 sm:h-10 w-auto object-contain max-w-[200px]"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2.5 mb-6">
              <span className="px-3.5 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm font-medium">
                {caseStudy.industry}
              </span>
              <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs sm:text-sm font-medium">
                {caseStudy.platform}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">{caseStudy.client}</h1>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed">
              {caseStudy.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            {caseStudy.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl text-center"
              >
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">{metric.label}</div>
              </div>
            ))}
          </motion.div>

          {caseStudy.image && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12 sm:mb-16 rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={caseStudy.image}
                alt={`${caseStudy.client}, real ad account results`}
                className="w-full object-cover"
              />
              <div className="p-3 sm:p-4 bg-white/5 text-xs sm:text-sm text-white/50 text-center">
                Real results, straight from the ad account.
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-8 sm:mb-12 p-6 sm:p-8 bg-gradient-to-br from-red-500/10 to-orange-500/5 backdrop-blur-xl border border-red-500/20 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Problem</h2>
            </div>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              {caseStudy.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 sm:mb-12 p-6 sm:p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <ListChecks className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Steps I Took</h2>
            </div>
            <ol className="space-y-4 sm:space-y-5">
              {caseStudy.steps.map((step, i) => (
                <li key={i} className="flex gap-3 sm:gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-white/70 leading-relaxed text-base sm:text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-16 sm:mb-20 p-6 sm:p-8 bg-gradient-to-br from-green-500/10 to-teal-500/5 backdrop-blur-xl border border-green-500/20 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Outcome</h2>
            </div>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              {caseStudy.outcome}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center p-8 sm:p-12 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-3xl mb-16 sm:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Want results like this for your brand?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Book a free 1:1 audit and strategy call, I'll review your ad
              account, analyze your competitors, and show you exactly where
              the growth is.
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

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">More Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((cs) => (
                <Link
                  key={cs.id}
                  to={`/case-study/${cs.id}`}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-xs text-white/50 mb-2">{cs.industry}</div>
                  <div className="text-lg font-bold mb-3 flex items-center justify-between text-white">
                    {cs.client}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${cs.gradient} bg-clip-text text-transparent`}>
                    {cs.metrics[0].value}
                  </div>
                  <div className="text-xs text-white/50">{cs.metrics[0].label}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
