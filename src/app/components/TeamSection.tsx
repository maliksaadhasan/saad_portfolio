import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    expertise: "Brand Strategy & Growth",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "15+ years driving growth for Fortune 500 brands and startups.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Samantha Lee",
    role: "Creative Director",
    expertise: "Design & Storytelling",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Award-winning designer with a passion for brand narratives.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Head of Performance",
    expertise: "Paid Media & Analytics",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "Data scientist turned marketer. Obsessed with optimization.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "Content Strategist",
    expertise: "SEO & Content Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Content wizard who turns words into revenue-driving machines.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Chen",
    role: "Social Media Lead",
    expertise: "Community & Engagement",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "Built million-follower communities for top brands.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sofia Martinez",
    role: "UX/UI Director",
    expertise: "Web Design & CRO",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    bio: "Designs that don't just look good, they convert.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="team"
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
          <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 mb-6">
            Our Team
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Meet the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Dream Team
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A collective of world-class strategists, creatives, and growth
            hackers who live and breathe marketing excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-2">{member.name}</h3>
                <div className="text-cyan-400 mb-2">{member.role}</div>
                <div className="text-sm text-white/60 mb-3">
                  {member.expertise}
                </div>
                <p className="text-white/70 leading-relaxed">{member.bio}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl"
        >
          <h3 className="text-2xl mb-4">Want to Join Our Team?</h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for excellence and innovation.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
