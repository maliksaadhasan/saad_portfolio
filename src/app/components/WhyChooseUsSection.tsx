import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
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
      "Every strategy is backed by deep analytics and market insights. We don't guess—we know what works.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description:
      "Our award-winning creative team crafts campaigns that don't just perform—they inspire and captivate.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Leverage cutting-edge AI tools and automation to scale your campaigns and maximize efficiency.",
  },
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description:
      "Your success is our success. We become an extension of your team, fully invested in your growth.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "200+ brands trusted us to transform their business. Join the ranks of industry leaders.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description:
      "We move fast without compromising quality. From strategy to launch in record time.",
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Competitive
            </span>{" "}
            Advantage
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We're more than a service provider—we're your strategic partner in
            building a brand that dominates.
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
                {/* Card */}
                <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl mb-3">{reason.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Ready to experience the difference?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            Let's Build Something Amazing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
