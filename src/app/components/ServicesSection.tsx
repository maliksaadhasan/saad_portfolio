import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Target,
  TrendingUp,
  MessageCircle,
  Palette,
  Mail,
  Gauge,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Advertising",
    description:
      "Full-funnel Meta and Google Ads campaigns built for one thing: profitable, measurable revenue.",
    features: ["Meta Ads", "Google Ads", "PPC & Retargeting"],
    gradient: "from-pink-500 to-pink-700",
  },
  {
    icon: Gauge,
    title: "Performance Marketing",
    description:
      "From pixel integration to optimization and scaling — accurate tracking, disciplined testing, and ROAS-driven growth.",
    features: ["Pixel & CAPI Integration", "Conversion Tracking", "Optimization & Scaling"],
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: Mail,
    title: "Email Marketing (Klaviyo)",
    description:
      "Klaviyo campaigns and automated flows that turn one-time buyers into repeat customers and lift LTV.",
    features: ["Email Flows & Automation", "Campaigns", "Retention & LTV"],
    gradient: "from-green-500 to-green-700",
  },
  {
    icon: MessageCircle,
    title: "Social Media Marketing",
    description:
      "Strategic social media management that builds engaged communities and keeps your brand present where buyers are.",
    features: ["Social Media Management", "Community Engagement", "Organic Growth"],
    gradient: "from-red-500 to-red-700",
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description:
      "Positioning grounded in market research and competitor analysis, so your brand stands out and your ads convert.",
    features: ["Brand Positioning", "Market Research", "Competitor Analysis"],
    gradient: "from-yellow-500 to-yellow-700",
  },
  {
    icon: Palette,
    title: "Content Creation & Strategy",
    description:
      "Content that sells — ad creatives, copy, and content strategy. Currently Content Strategist for JunziDev.",
    features: ["Content Strategy", "Ad Creatives", "Copywriting"],
    gradient: "from-orange-500 to-orange-700",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 mb-6">
            My Services
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From pixel integration to optimization and scaling — end-to-end
            performance marketing that drives real revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 cursor-pointer"
                style={{
                  transform:
                    hoveredIndex === index
                      ? "perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02)"
                      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <div
                  className={`relative w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="relative text-2xl mb-4">{service.title}</h3>
                <p className="relative text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="relative space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-center gap-2 text-sm text-white/40 group-hover:text-white/80 transition-colors">
                  <span>Learn more</span>
                  <motion.span
                    animate={{
                      x: hoveredIndex === index ? 4 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
