import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: "techcorp",
    client: "TechCorp Inc.",
    industry: "Technology",
    description: "Transformed a tech startup into a market leader with 340% ROI increase",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    metrics: [
      { label: "ROI", value: "+340%" },
      { label: "Leads", value: "+450%" },
      { label: "Revenue", value: "+$2.4M" },
    ],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    id: "ecobeauty",
    client: "EcoBeauty",
    industry: "Beauty & Wellness",
    description: "Built a sustainable beauty brand from scratch to 45K+ community",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    metrics: [
      { label: "Growth", value: "+520%" },
      { label: "Community", value: "45K+" },
      { label: "Reach", value: "2.1M" },
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: "fintech",
    client: "FinFlow",
    industry: "Fintech",
    description: "Established trust in fintech with 120K+ app downloads and -64% CAC",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    metrics: [
      { label: "Users", value: "+680%" },
      { label: "Downloads", value: "120K+" },
      { label: "CAC", value: "-64%" },
    ],
    gradient: "from-green-500 to-teal-500",
  },
];

const industries = ["All", "Technology", "Beauty & Wellness", "Fintech", "E-commerce", "Healthcare"];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredCaseStudies =
    selectedIndustry === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 mb-6">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Real Results for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Brands
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            See how we've helped ambitious brands achieve extraordinary growth and
            dominate their markets.
          </p>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedIndustry === industry
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                    : "bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/case-study/${study.id}`}
                className="group block relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-xl rounded-full text-sm text-white border border-white/20">
                    {study.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
                  <h3 className="text-2xl mb-3 flex items-center justify-between">
                    {study.client}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-white/70 mb-6">{study.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    {study.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-center p-3 bg-white/5 rounded-lg"
                      >
                        <div className="text-sm text-white/60 mb-1">
                          {metric.label}
                        </div>
                        <div className={`font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/60">
            Want to see more success stories?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
