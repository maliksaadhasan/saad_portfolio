import { motion } from "motion/react";
import { ArrowRight, Sparkles, CalendarCheck } from "lucide-react";
import Hero3D from "@/app/components/Hero3D";
import { LINKS } from "@/app/data/site";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32">
      <Hero3D />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-xs sm:text-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
          <span className="text-white/80">
            Performance Marketer &bull; Meta & Google Ads Specialist
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight text-balance"
        >
          <span className="block mb-2">I Turn Ad Spend Into</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Predictable Revenue
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-white/70 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          From pixel integration to optimization and scaling, I run
          data-driven Meta & Google Ads campaigns for e-commerce and
          lead-gen brands.
          <br className="hidden sm:inline" />
          <span className="text-white font-medium">$15M+ in revenue generated for my clients.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 px-2 sm:px-0 max-w-md sm:max-w-none mx-auto"
        >
          <a
            href={LINKS.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center text-center text-sm sm:text-base gap-2"
          >
            <CalendarCheck className="w-5 h-5 flex-shrink-0" />
            <span>Book a 1:1 Audit & Strategy Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </a>
          <button
            onClick={() => scrollToSection("case-studies")}
            className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base text-center flex items-center justify-center"
          >
            View My Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "$15M+", label: "Revenue Generated" },
            { value: "9.04x", label: "Best Yearly ROAS" },
            { value: "15+", label: "Industries Served" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
