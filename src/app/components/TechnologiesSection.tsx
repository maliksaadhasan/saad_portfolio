import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { INDUSTRIES } from "@/app/data/site";

const technologies = [
  { name: "Meta Ads", category: "Paid Social" },
  { name: "Google Ads", category: "Paid Search & Shopping" },
  { name: "TikTok Ads", category: "Paid Social" },
  { name: "Klaviyo", category: "Email Marketing" },
  { name: "Meta Pixel & CAPI", category: "Tracking" },
  { name: "Google Analytics 4", category: "Analytics" },
  { name: "Google Tag Manager", category: "Tracking" },
  { name: "Shopify", category: "E-commerce" },
  { name: "HubSpot", category: "CRM & Marketing" },
  { name: "Looker Studio", category: "Reporting" },
  { name: "Canva", category: "Creative" },
  { name: "CapCut", category: "Video Creative" },
];

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="technologies"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 mb-6">
            Platforms & Tools
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The platforms I work in every day — from ad managers and tracking
            to email automation and reporting.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-800">
                  {tech.name.substring(0, 2).toUpperCase()}
                </div>
              </div>

              <h3 className="text-lg mb-2 group-hover:text-violet-400 transition-colors duration-300">
                {tech.name}
              </h3>

              <div className="text-xs text-white/50">{tech.category}</div>

              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24"
        >
          <h3 className="text-3xl md:text-4xl mb-4">
            Industries I've{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Scaled
            </span>
          </h3>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            E-commerce and lead generation across 15+ verticals in the US,
            Australia, and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {INDUSTRIES.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.04 }}
                className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-white/80 hover:border-violet-400/50 hover:text-white transition-all duration-300"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
