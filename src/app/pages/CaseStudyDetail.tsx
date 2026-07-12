import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, TrendingUp, Target, Zap } from "lucide-react";

const caseStudies = [
  {
    id: "techcorp",
    client: "TechCorp Inc.",
    industry: "Technology",
    challenge: "Low brand awareness and minimal digital presence in a competitive market",
    strategy: "Implemented a comprehensive digital transformation strategy focusing on content marketing, SEO optimization, and targeted social media campaigns",
    results: [
      { label: "ROI Increase", value: "340%", icon: TrendingUp },
      { label: "Lead Generation", value: "+450%", icon: Target },
      { label: "Engagement Rate", value: "8.2x", icon: Zap },
    ],
    description: "TechCorp came to us with a solid product but virtually no online presence. Through strategic positioning and data-driven campaigns, we transformed them into an industry leader.",
    metrics: {
      revenue: "+$2.4M",
      traffic: "12,000 → 94,000",
      conversion: "1.2% → 4.8%",
    },
  },
  {
    id: "ecobeauty",
    client: "EcoBeauty",
    industry: "Beauty & Wellness",
    challenge: "Breaking into a saturated market with a new sustainable beauty line",
    strategy: "Created an authentic brand story emphasizing sustainability, leveraged influencer partnerships, and built a community-driven social strategy",
    results: [
      { label: "Revenue Growth", value: "520%", icon: TrendingUp },
      { label: "Community Size", value: "45K+", icon: Target },
      { label: "Viral Reach", value: "2.1M", icon: Zap },
    ],
    description: "EcoBeauty needed to stand out in a crowded market. We positioned them as the authentic voice in sustainable beauty, creating a movement rather than just a brand.",
    metrics: {
      revenue: "+$890K",
      traffic: "3,200 → 67,000",
      conversion: "2.1% → 6.3%",
    },
  },
  {
    id: "fintech",
    client: "FinFlow",
    industry: "Fintech",
    challenge: "Building trust in a new financial platform targeting millennials and Gen Z",
    strategy: "Developed educational content strategy, implemented conversion-focused UX redesign, and launched targeted paid acquisition campaigns",
    results: [
      { label: "User Acquisition", value: "+680%", icon: TrendingUp },
      { label: "App Downloads", value: "120K+", icon: Target },
      { label: "CAC Reduction", value: "-64%", icon: Zap },
    ],
    description: "FinFlow needed to overcome skepticism in a competitive fintech landscape. Our approach combined education, trust-building, and performance marketing.",
    metrics: {
      revenue: "+$1.8M",
      traffic: "8,500 → 103,000",
      conversion: "0.9% → 5.2%",
    },
  },
];

export default function CaseStudyDetail() {
  const { id } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4">Case Study Not Found</h1>
          <Link
            to="/"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black text-white">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            PRISM
          </div>
        </div>
      </div>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 mb-6">
              {caseStudy.industry}
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {caseStudy.client}
            </h1>
            <p className="text-xl text-white/60 max-w-3xl">
              {caseStudy.description}
            </p>
          </motion.div>

          {/* Results Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {caseStudy.results.map((result, index) => {
              const Icon = result.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl"
                >
                  <Icon className="w-8 h-8 text-purple-400 mb-4" />
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {result.value}
                  </div>
                  <div className="text-white/60">{result.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl mb-6">The Challenge</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </motion.section>

          {/* Strategy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl mb-6">Our Strategy</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              {caseStudy.strategy}
            </p>
          </motion.section>

          {/* Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl mb-6">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl">
                <div className="text-sm text-white/60 mb-2">Revenue Impact</div>
                <div className="text-3xl font-bold text-purple-400">
                  {caseStudy.metrics.revenue}
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-xl">
                <div className="text-sm text-white/60 mb-2">
                  Monthly Traffic
                </div>
                <div className="text-3xl font-bold text-pink-400">
                  {caseStudy.metrics.traffic}
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 rounded-xl">
                <div className="text-sm text-white/60 mb-2">
                  Conversion Rate
                </div>
                <div className="text-3xl font-bold text-red-400">
                  {caseStudy.metrics.conversion}
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center p-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl"
          >
            <h3 className="text-3xl mb-4">Ready for Similar Results?</h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your brand and drive measurable
              growth for your business.
            </p>
            <Link
              to="/?scroll=contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Start Your Success Story
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
