import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { LINKS } from "@/app/data/site";
import {
  BarChart3,
  Lightbulb,
  Cpu,
  Heart,
  Award,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Every move is backed by tracking done right, pixel, Conversions API, and analytics. I don't guess; I measure.",
  },
  {
    icon: Zap,
    title: "Full-Funnel Ownership",
    description:
      "From pixel integration to optimization and scaling, one person accountable for the entire funnel, end to end.",
  },
  {
    icon: Lightbulb,
    title: "Competitor Analysis Included",
    description:
      "Every engagement starts with a deep dive into your competitors' ads, offers, and funnels, so we know exactly what to beat.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "$15M+ in revenue generated across 15+ industries — from 9x yearly ROAS e-commerce accounts to $30 patient leads.",
  },
  {
    icon: Heart,
    title: "Direct Communication",
    description:
      "You work with me, not an account manager. Fast responses, honest reporting, and full transparency on performance.",
  },
  {
    icon: Cpu,
    title: "Retention Built In",
    description:
      "Paid ads bring customers; Klaviyo email flows keep them. I build both, so revenue compounds instead of leaking.",
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="why-choose-us"
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
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 mb-6">
            Why Work With Me
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Competitive
            </span>{" "}
            Advantage
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            More than a service provider, a strategic partner accountable for
            every dollar of your ad spend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl mb-3">{reason.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-white mb-2">
            Let's Build Something Amazing — for your SaaS.
          </p>
          <p className="text-2xl text-white/90 mb-8">
            And let's{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              scale your revenue
            </span>{" "}
            with performance marketing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Book a 1:1 Audit & Strategy Call
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-green-500/40 rounded-full text-white hover:bg-green-500/10 transition-all duration-300"
            >
              WhatsApp Me
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
