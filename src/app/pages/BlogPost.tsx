import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/app/data/blogPosts";
import { LINKS } from "@/app/data/site";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>All Posts</span>
          </Link>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </Link>
        </div>
      </div>

      <div className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6 text-sm text-white/50">
              <span className={`px-3 py-1 bg-gradient-to-r ${post.gradient} rounded-full text-white text-xs`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-white/60 leading-relaxed">{post.excerpt}</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            {post.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="text-2xl md:text-3xl pt-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i} className="text-white/70 leading-relaxed text-lg">
                  {block}
                </p>
              )
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-16 text-center p-10 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-3xl"
          >
            <h2 className="text-2xl md:text-3xl mb-4">
              Want this applied to your ad account?
            </h2>
            <p className="text-white/70 mb-8">
              Free 1:1 audit and strategy call, competitor analysis included.
            </p>
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <span>Book a 1:1 Audit & Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* More posts */}
          <div className="mt-20">
            <h3 className="text-2xl mb-6">More From the Blog</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-xs text-white/50 mb-3">{p.category}</div>
                  <div className="text-base leading-snug group-hover:text-purple-300 transition-colors">
                    {p.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
      <WhatsAppButton />
    </div>
  );
}
