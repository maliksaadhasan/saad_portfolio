import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <div ref={ref}>{count}</div>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "M+", label: "Revenue Generated", prefix: "$" },
    { value: 15, suffix: "+", label: "Industries Served" },
    { value: 9, suffix: "x", label: "Best Yearly ROAS" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 mb-6">
            About Me
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Where Data Meets{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creativity
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm Saad Hasan — a performance marketer with 4+ years of running
            data-backed Meta and Google Ads campaigns. I handle everything
            from pixel integration and tracking to creative testing,
            optimization, and scaling — helping brands grow with strategy,
            storytelling, and measurable performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl"
          >
            <h3 className="text-2xl mb-4 text-purple-400">What I Do</h3>
            <p className="text-white/70 leading-relaxed">
              Full-funnel Meta and Google Ads management, performance
              marketing and PPC, Klaviyo email marketing and flows, social
              media management, content strategy, and brand strategy. I also
              serve as Content Strategist for JunziDev, shaping content that
              converts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl"
          >
            <h3 className="text-2xl mb-4 text-pink-400">How I Work</h3>
            <p className="text-white/70 leading-relaxed">
              Every account starts with accurate tracking — pixel and
              Conversions API done right. Then competitor analysis, structured
              creative testing, and disciplined scaling. No guesswork: every
              decision is backed by data, and every dollar is accountable to
              ROAS, CPA, and revenue.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center">
                {stat.prefix}
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
