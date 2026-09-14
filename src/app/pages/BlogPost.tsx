import { useParams, Link } from "react-router";
import { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, Calendar, Bookmark, Sparkles, CheckCircle2, ChevronRight, Mail, MessageCircle, Linkedin } from "lucide-react";
import { blogPosts } from "@/app/data/blogPosts";
import { LINKS } from "@/app/data/site";
import { usePageMeta } from "@/app/hooks/usePageMeta";
import { useLeadForm } from "@/app/components/LeadFormProvider";

export default function BlogPost() {
  const { slug } = useParams();
  const { open: openLeadForm } = useLeadForm();
  const post = blogPosts.find((p) => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeHeading, setActiveHeading] = useState<string>("");

  const jsonLd = useMemo(() => {
    if (!post) return undefined;

    const article = {
      "@type": "BlogPosting",
      "@id": `https://www.maliksaadhasan.com/blog/${slug}#article`,
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": "Malik Saad Hasan",
        "jobTitle": "Performance Marketer",
        "url": "https://www.maliksaadhasan.com/about"
      },
      "publisher": {
        "@type": "Person",
        "name": "Malik Saad Hasan"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.maliksaadhasan.com/blog/${slug}`
      },
      "articleSection": post.category,
      "wordCount": post.content.join(" ").split(/\s+/).length
    };

    // Answer-engine markup: every "?? Question | Answer" block in the post
    // becomes a FAQPage entry, which is what gets pulled into featured
    // snippets, voice results and AI answer boxes.
    const faqs = post.content
      .filter((b) => b.startsWith("?? "))
      .map((b) => {
        const idx = b.indexOf(" | ");
        if (idx === -1) return null;
        return {
          "@type": "Question",
          "name": b.slice(3, idx).trim(),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": b.slice(idx + 3).trim()
          }
        };
      })
      .filter(Boolean);

    const breadcrumb = {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.maliksaadhasan.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.maliksaadhasan.com/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.maliksaadhasan.com/blog/${slug}` }
      ]
    };

    const graph: Record<string, unknown>[] = [article, breadcrumb];
    if (faqs.length > 0) {
      graph.push({ "@type": "FAQPage", "mainEntity": faqs });
    }

    return { "@context": "https://schema.org", "@graph": graph };
  }, [post, slug]);

  usePageMeta({
    title: post
      ? `${post.title} | Saad Hasan`
      : "Post Not Found | Saad Hasan",
    description: post
      ? post.excerpt
      : "The requested blog post could not be found.",
    canonical: `https://www.maliksaadhasan.com/blog/${slug}`,
    ogType: "article",
    jsonLd: jsonLd,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-white/60 mb-6">The article you are looking for does not exist or has been moved.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const headings = post.content
    .filter((b) => b.startsWith("## "))
    .map((b) => b.replace("## ", ""));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            <span>All Articles</span>
          </Link>
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </Link>
        </div>
      </header>

      <main className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-14"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs sm:text-sm text-white/60">
              <span className={`px-3 py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full font-medium text-xs`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-pink-400" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-l-4 border-purple-500 rounded-r-2xl backdrop-blur-xl">
              {post.excerpt}
            </p>
          </motion.div>

          {/* Quick Table of Contents / Outline (if headers exist) */}
          {headings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 p-6 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-400 mb-4 uppercase tracking-wider">
                <Bookmark className="w-4 h-4" />
                <span>In This Article</span>
              </div>
              <nav className="grid sm:grid-cols-2 gap-2 text-sm">
                {headings.map((h, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx}`}
                    className="flex items-center gap-2 text-white/70 hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                    <span className="line-clamp-1">{h}</span>
                  </a>
                ))}
              </nav>
            </motion.div>
          )}

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-white/80"
          >
            {post.content.map((block, i) => {
              // Subheading
              if (block.startsWith("## ")) {
                const headingText = block.replace("## ", "");
                const headingIndex = headings.indexOf(headingText);
                return (
                  <h2
                    key={i}
                    id={`section-${headingIndex}`}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold pt-8 pb-2 text-white border-b border-white/10 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent scroll-mt-28"
                  >
                    {headingText}
                  </h2>
                );
              }

              // Callout Quote
              if (block.startsWith("> ")) {
                const quoteText = block.replace("> ", "");
                return (
                  <div
                    key={i}
                    className="my-8 p-6 sm:p-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 border border-purple-500/30 rounded-2xl backdrop-blur-xl relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-500/20 rounded-xl text-purple-300 flex-shrink-0 mt-1">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <p className="text-lg sm:text-xl font-medium text-purple-200 italic leading-relaxed">
                        {quoteText}
                      </p>
                    </div>
                  </div>
                );
              }

              // Bullet List Item
              if (block.startsWith("- ")) {
                const bulletText = block.replace("- ", "");
                return (
                  <div key={i} className="flex items-start gap-3 pl-2 sm:pl-4 py-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2.5 flex-shrink-0" />
                    <p className="text-white/80">{bulletText}</p>
                  </div>
                );
              }

              // Numbered List Item
              if (/^\d+\.\s/.test(block)) {
                const numberMatch = block.match(/^(\d+)\.\s/);
                const number = numberMatch ? numberMatch[1] : "•";
                const itemText = block.replace(/^\d+\.\s/, "");
                return (
                  <div key={i} className="flex items-start gap-4 pl-2 sm:pl-4 py-2">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center justify-center mt-0.5">
                      {number}
                    </span>
                    <p className="text-white/80 flex-1">{itemText}</p>
                  </div>
                );
              }

              // Inline diagram. The SVG is authored in this repo, never user
              // input, so injecting it as markup is safe here.
              if (block.startsWith("<svg")) {
                return (
                  <figure
                    key={i}
                    className="my-10 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6"
                  >
                    <div
                      className="min-w-[520px] sm:min-w-0"
                      dangerouslySetInnerHTML={{ __html: block }}
                    />
                  </figure>
                );
              }

              // FAQ entry: "?? Question | Answer". Also emitted as FAQPage
              // structured data above, for answer engines.
              if (block.startsWith("?? ")) {
                const idx = block.indexOf(" | ");
                const question = idx === -1 ? block.slice(3) : block.slice(3, idx);
                const answer = idx === -1 ? "" : block.slice(idx + 3);
                return (
                  <div
                    key={i}
                    className="my-4 p-5 sm:p-6 bg-white/[0.04] border border-white/10 rounded-2xl"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {question}
                    </h3>
                    <p className="text-white/75 leading-relaxed">{answer}</p>
                  </div>
                );
              }

              // Standard Paragraph
              return (
                <p key={i} className="text-white/80 leading-relaxed text-base sm:text-lg">
                  {block}
                </p>
              );
            })}
          </motion.div>

          {/* Author / Strategy Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-16 sm:mt-20 p-8 sm:p-12 bg-gradient-to-br from-purple-500/15 via-pink-500/15 to-red-500/10 backdrop-blur-xl border border-white/20 rounded-3xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10" />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs sm:text-sm text-purple-300 mb-6 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Ready for Actionable Growth?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Want these frameworks applied to your ad account?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              I am Malik Saad Hasan, a performance marketer managing Meta Ads,
              Google Ads and Klaviyo for e-commerce and lead-generation brands.
              Send me your account and I will tell you where the money is
              leaking, before you pay me anything.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <button
                type="button"
                onClick={() => openLeadForm("blog_post_footer")}
                data-track="open_lead_form_blog"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group text-base"
              >
                <span>Get a free account audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={LINKS.calendar}
                target="_blank"
                rel="noopener noreferrer"
                data-track="blog_book_call"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/15 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a 1:1 strategy call</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 grid gap-3 sm:grid-cols-3 text-sm">
              <a
                href={`mailto:${LINKS.email}`}
                data-track="blog_email"
                className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-300 flex-shrink-0" />
                <span className="break-all">{LINKS.email}</span>
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="blog_whatsapp"
                className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>{LINKS.whatsappNumber}</span>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-track="blog_linkedin"
                className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Related Articles */}
          <div className="mt-20 sm:mt-24 border-t border-white/10 pt-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">More Strategy Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-purple-300 font-medium px-2.5 py-1 bg-purple-500/20 rounded-full inline-block mb-3">
                      {p.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-semibold leading-snug group-hover:text-purple-300 transition-colors text-white mb-2 line-clamp-2">
                      {p.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/50 mt-4 pt-4 border-t border-white/5">
                    <span>{p.readTime}</span>
                    <span className="flex items-center gap-1 text-purple-400 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

    </div>
  );
}
