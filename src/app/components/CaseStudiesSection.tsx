import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { featuredCaseStudies } from "@/app/data/caseStudies";

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative py-20 px-4 sm:py-32 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm mb-6">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Real Results for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Brands
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto mb-4">
            Every number below comes straight from the ad account: problem,
            steps taken, and the outcome.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/case-study/${study.id}`}
                className="group block relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                  {study.image ? (
                    <img
                      src={study.image}
                      alt={`${study.client}, ad account results`}
                      className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${study.gradient} opacity-40 flex items-center justify-center`}>
                      <TrendingUp className="w-16 h-16 text-white/80" />
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-40 group-hover:opacity-20 transition-opacity duration-300`} />

                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full text-xs text-white border border-white/20">
                    {study.industry}
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full text-xs text-white/80 border border-white/20">
                    {study.platform}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center justify-between text-white">
                      {study.client}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">{study.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-white/5">
                    {study.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-center p-2.5 sm:p-3 bg-white/5 rounded-lg"
                      >
                        <div className="text-xs text-white/60 mb-1 line-clamp-1">
                          {metric.label}
                        </div>
                        <div className={`text-sm sm:text-base font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-white/60 text-base mb-6">Want more success stories?</p>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
