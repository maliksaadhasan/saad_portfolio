import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles, Linkedin, MessageCircle, CalendarCheck } from "lucide-react";
import { LINKS } from "@/app/data/site";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 px-4 sm:py-32 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-6 sm:p-12 md:p-16 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden"
        >
          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6 sm:mb-8 text-xs sm:text-sm text-fuchsia-300"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <span>Ready to Scale Your Brand?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Let's Build Something Amazing
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                & Scale It With Marketing That Pays for Itself
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-xl text-white/70 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Book a free 1:1 audit and strategy call. I'll dig into your ad
              account, run a competitor analysis, and map out exactly how to
              grow your revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto"
            >
              <a
                href={LINKS.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 rounded-full text-white text-base sm:text-lg font-medium hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <CalendarCheck className="w-5 h-5 flex-shrink-0" />
                <span>Book a 1:1 Audit & Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>

              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 bg-white/5 backdrop-blur-xl border border-green-500/40 rounded-full text-white text-base sm:text-lg font-medium hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 bg-white/5 backdrop-blur-xl border border-white/30 rounded-full text-white text-base sm:text-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <Linkedin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                <span>Free 1:1 Audit & Strategy Call</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                <span>Competitor Analysis Included</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                <span>No Long-Term Contracts</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
