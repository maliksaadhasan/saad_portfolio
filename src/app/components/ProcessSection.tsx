import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
  BarChart2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Research & Discovery",
    description:
      "Deep dive into your market, competitors, and target audience. We uncover insights that drive strategy.",
    details: [
      "Market Analysis",
      "Competitor Research",
      "Audience Profiling",
      "Brand Audit",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    description:
      "Craft a comprehensive marketing strategy tailored to your unique goals and market position.",
    details: [
      "Goal Setting",
      "Channel Strategy",
      "Content Planning",
      "Budget Allocation",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Creative Execution",
    description:
      "Bring the strategy to life with compelling campaigns, stunning creative, and flawless execution.",
    details: [
      "Campaign Launch",
      "Content Production",
      "Design & Development",
      "Multi-Channel Deployment",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimization",
    description:
      "Continuously test, measure, and refine every element to maximize performance and ROI.",
    details: [
      "A/B Testing",
      "Performance Analysis",
      "Conversion Optimization",
      "Budget Reallocation",
    ],
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Scale & Growth",
    description:
      "Amplify what works, double down on winners, and scale your success exponentially.",
    details: [
      "Growth Strategies",
      "Market Expansion",
      "Team Training",
      "Long-term Planning",
    ],
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="process"
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
          <div className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 mb-6">
            Our Process
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            How We{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Brands
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A proven methodology that turns ambitious goals into measurable
            results, step by strategic step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-pink-500/50 hidden lg:block" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "lg:text-right"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } relative`}
                  >
                    <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 group">
                      {/* Number Badge */}
                      <div
                        className={`inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 mb-4`}
                      >
                        Step {step.number}
                      </div>

                      <h3 className="text-3xl mb-4">{step.title}</h3>
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul
                        className={`space-y-2 ${
                          isEven ? "lg:text-left" : "lg:text-right"
                        }`}
                      >
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className={`flex items-center gap-2 text-sm text-white/60 ${
                              isEven
                                ? "lg:justify-start"
                                : "lg:justify-end lg:flex-row-reverse"
                            }`}
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div
                    className={`${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } flex justify-center`}
                  >
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-xl opacity-50" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
