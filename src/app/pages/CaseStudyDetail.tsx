import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, AlertTriangle, ListChecks, TrendingUp } from "lucide-react";
import { caseStudies } from "@/app/data/caseStudies";
import { LINKS } from "@/app/data/site";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4">Case Study Not Found</h1>
          <Link
            to="/"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const others = caseStudies.filter((cs) => cs.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/case-studies"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>All Case Studies</span>
          </Link>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </Link>
        </div>
      </div>

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                {caseStudy.industry}
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm">
                {caseStudy.platform}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">{caseStudy.client}</h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              {caseStudy.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-16"
          >
            {caseStudy.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl text-center"
              >
                <div className={`text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm text-white/60">{metric.label}</div>
              </div>
            ))}
          </motion.div>

          {caseStudy.image && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16 rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={caseStudy.image}
                alt={`${caseStudy.client}, real ad account results`}
                className="w-full"
              />
              <div className="p-4 bg-white/5 text-sm text-white/50 text-center">
                Real results, straight from the ad account.
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-12 p-8 bg-gradient-to-br from-red-500/10 to-orange-500/5 backdrop-blur-xl border border-red-500/20 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-3xl">The Problem</h2>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">
              {caseStudy.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <ListChecks className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl">The Steps I Took</h2>
            </div>
            <ol className="space-y-5">
              {caseStudy.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-white/70 leading-relaxed text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-20 p-8 bg-gradient-to-br from-green-500/10 to-teal-500/5 backdrop-blur-xl border border-green-500/20 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-3xl">The Outcome</h2>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">
              {caseStudy.outcome}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center p-12 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-3xl mb-20"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Want results like this for your brand?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Book a free 1:1 audit and strategy call, I'll review your ad
              account, analyze your competitors, and show you exactly where
              the growth is.
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

          <div>
            <h3 className="text-2xl mb-6">More Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((cs) => (
                <Link
                  key={cs.id}
                  to={`/case-study/${cs.id}`}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-sm text-white/50 mb-2">{cs.industry}</div>
                  <div className="text-xl mb-3 flex items-center justify-between">
                    {cs.client}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${cs.gradient} bg-clip-text text-transparent`}>
                    {cs.metrics[0].value}
                  </div>
                  <div className="text-sm text-white/50">{cs.metrics[0].label}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
