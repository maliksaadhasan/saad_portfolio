import { Link } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/app/data/blogPosts";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </Link>
        </div>
      </div>

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 mb-6">
              Blog
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Notes From the{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Ad Accounts
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Playbooks, frameworks, and lessons from real campaigns — Meta
              Ads, Google Ads, Klaviyo, and performance marketing strategy.
            </p>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl"
                >
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4 text-xs text-white/50">
                      <span className={`px-3 py-1 bg-gradient-to-r ${post.gradient} bg-opacity-20 rounded-full text-white/90`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl mb-3 leading-snug group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/40">{post.date}</span>
                      <span className="flex items-center gap-1 text-white/60 group-hover:text-white transition-colors">
                        Read
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
