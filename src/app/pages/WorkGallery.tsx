import { Link } from "react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { galleryItems, GalleryItem } from "@/app/data/gallery";
import { LINKS } from "@/app/data/site";
import WhatsAppButton from "@/app/components/WhatsAppButton";

const filters = ["All", "Meta Ads", "Google Ads"] as const;

export default function WorkGallery() {
  const [selected, setSelected] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items =
    selected === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.platform === selected);

  return (
    <div className="min-h-screen bg-black text-white">
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
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 mb-6">
              Work Gallery
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Results,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Straight From the Ad Accounts
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10">
              Real screenshots from Meta Ads Manager and Google Ads, ROAS,
              purchases, leads, and revenue. No mockups, no stock numbers.
            </p>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelected(filter)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selected === filter
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                      : "bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <motion.button
                key={item.src + index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                onClick={() => setLightbox(item)}
                className="group text-left rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/[0.02]"
              >
                <div className="relative overflow-hidden aspect-video bg-black/40">
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full text-xs text-white/80 border border-white/20">
                    {item.platform}
                  </div>
                </div>
                <div className="p-4 text-sm text-white/70">{item.caption}</div>
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20 p-12 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Want your ad account to look like this?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Book a free 1:1 audit and strategy call, competitor analysis
              included.
            </p>
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <span>Book a 1:1 Audit & Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-center text-white/70 mt-4">{lightbox.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppButton />
    </div>
  );
}
