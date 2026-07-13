import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles, Linkedin, MessageCircle, CalendarCheck } from "lucide-react";
import { LINKS } from "@/app/data/site";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.15),transparent_50%)]" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-10 md:p-16 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"
               style={{ animationDelay: "1s" }} />

          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <span className="text-sm">Ready to Scale Your Brand?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl mb-6 leading-tight"
            >
              Let's Build Something Amazing
              <br />
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                & Scale It With Marketing That Pays for Itself
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Book a free 1:1 audit and strategy call. I'll dig into your ad
              account, run a competitor analysis, and map out exactly how to
              grow your revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={LINKS.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-5 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 rounded-full text-white text-lg hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book a 1:1 Audit & Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-white/5 backdrop-blur-xl border border-green-500/40 rounded-full text-white text-lg hover:bg-green-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-white/5 backdrop-blur-xl border border-white/30 rounded-full text-white text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Free 1:1 Audit & Strategy Call</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Competitor Analysis Included</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>No Long-Term Contracts</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
