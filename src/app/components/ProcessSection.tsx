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
    title: "Audit & Competitor Analysis",
    description:
      "Deep dive into your ad account, market, and competitors. I find where money is leaking and where your rivals are vulnerable.",
    details: [
      "Ad Account Audit",
      "Competitor Analysis",
      "Audience Profiling",
      "Offer & Funnel Review",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Tracking & Setup",
    description:
      "Accurate data before a single dollar is spent — pixel integration, Conversions API, and event testing done right.",
    details: [
      "Pixel Integration",
      "Conversions API (CAPI)",
      "Event & Catalog Setup",
      "Analytics Configuration",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Creative Testing",
    description:
      "Structured campaigns go live with systematic creative testing — hooks, angles, and formats compete until winners emerge.",
    details: [
      "Campaign Structure",
      "Creative & Angle Testing",
      "Audience Testing",
      "Landing Page Alignment",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimization",
    description:
      "Continuous testing, measuring, and refining to push ROAS, CPA, and CTR in the right direction every week.",
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
    title: "Scaling & Retention",
    description:
      "Double down on winners with controlled budget scaling, and lock in revenue with Klaviyo email flows and retargeting.",
    details: [
      "Controlled Budget Scaling",
      "Retargeting Systems",
      "Klaviyo Email Flows",
      "Monthly Reporting",
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 mb-6">
            My Process
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            From Pixel to{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Profitable Scale
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The exact methodology behind every account I manage — accurate
            tracking first, disciplined scaling last.
          </p>
        </motion.div>

        <div className="relative">
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
                  <div
                    className={`${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } relative`}
                  >
                    <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 group">
                      <div
                        className={`inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 mb-4`}
                      >
                        Step {step.number}
                      </div>

                      <h3 className="text-3xl mb-4">{step.title}</h3>
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {step.description}
                      </p>

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

                  <div
                    className={`${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } flex justify-center`}
                  >
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
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
