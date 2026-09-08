import { Link } from "react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, X, Folder, Layers, Sparkles } from "lucide-react";
import { galleryEntries, GalleryFolder, GalleryItem, GalleryEntry } from "@/app/data/gallery";
import { LINKS } from "@/app/data/site";
import { usePageMeta } from "@/app/hooks/usePageMeta";

const filters = ["All", "Meta Ads", "Google Ads"] as const;

export default function WorkGallery() {
  const [selected, setSelected] = useState<(typeof filters)[number]>("All");
  const [activeFolder, setActiveFolder] = useState<GalleryFolder | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  usePageMeta({
    title: "Work Gallery | Saad Hasan - Ad Campaign Screenshots & Results",
    description: "Browse real ad account dashboards, campaign screenshots, and performance metrics from Meta Ads and Google Ads campaigns managed by Saad Hasan.",
    canonical: "https://www.maliksaadhasan.com/gallery",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxItem) {
          setLightboxItem(null);
        } else if (activeFolder) {
          setActiveFolder(null);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxItem, activeFolder]);

  const filteredEntries = galleryEntries.filter((entry) => {
    if (selected === "All") return true;
    return entry.platform === selected;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </Link>
        </div>
      </header>

      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm mb-6">
              Work Gallery
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Results,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Straight From the Ad Accounts
              </span>
            </h1>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Real screenshots from Meta Ads Manager and Google Ads: ROAS,
              purchases, leads, and revenue. No mockups, no stock numbers.
            </p>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelected(filter)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredEntries.map((entry, index) => {
              // FOLDER CARD (Milk for Bubs aggregated album)
              if ("isFolder" in entry) {
                const folder = entry as GalleryFolder;
                return (
                  <motion.div
                    key={folder.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                    onClick={() => setActiveFolder(folder)}
                    className="group relative cursor-pointer rounded-2xl overflow-hidden border-2 border-purple-500/40 hover:border-purple-400 transition-all duration-300 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 p-1 shadow-2xl hover:shadow-purple-500/20"
                  >
                    {/* Multi-layer Card Stack Aesthetic */}
                    <div className="relative overflow-hidden rounded-xl aspect-video bg-black/60">
                      <img
                        src={folder.coverImage}
                        alt={folder.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* Folder Badge Header */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-purple-600/90 backdrop-blur-xl rounded-full text-xs text-white font-semibold border border-purple-400/40 shadow-lg">
                        <Folder className="w-3.5 h-3.5 fill-white text-purple-600" />
                        <span>Album Folder ({folder.items.length} Screenshots)</span>
                      </div>

                      <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full text-xs text-white/80 border border-white/20">
                        {folder.platform}
                      </div>

                      {/* Bottom Folder Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-purple-300 text-xs font-bold mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{folder.roas}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-1">
                          {folder.title}
                        </h3>
                        <p className="text-xs text-white/60 line-clamp-1 mt-0.5">
                          {folder.subtitle} &bull; Click to open album
                        </p>
                      </div>
                    </div>
                    <div className="p-3 text-center text-xs text-purple-300 font-semibold flex items-center justify-center gap-1">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Click to view all {folder.items.length} monthly screenshots</span>
                    </div>
                  </motion.div>
                );
              }

              // STANDALONE SCREENSHOT CARD
              const item = entry as GalleryItem;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                  onClick={() => setLightboxItem(item)}
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
                  <div className="p-4 text-xs sm:text-sm text-white/80 font-medium">{item.caption}</div>
                </motion.button>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16 sm:mt-20 p-8 sm:p-12 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-3xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Want your ad account to look like this?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Book a free 1:1 audit and strategy call, competitor analysis
              included.
            </p>
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-base sm:text-lg font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <span>Book a 1:1 Audit & Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </main>

      {/* FOLDER ALBUM MODAL (Milk for Bubs Dedicated Screenshots Viewer) */}
      <AnimatePresence>
        {activeFolder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] bg-black/95 backdrop-blur-2xl overflow-y-auto pt-24 pb-12 px-4 sm:px-6"
          >
            <div className="max-w-7xl mx-auto">
              {/* Folder Header */}
              <div className="flex items-start justify-between gap-4 mb-8 p-6 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-black border border-purple-500/30 rounded-2xl">
                <div>
                  <div className="flex items-center gap-2 text-purple-300 text-xs sm:text-sm font-semibold mb-2">
                    <Folder className="w-4 h-4 text-purple-400 fill-purple-400/30" />
                    <span>Album Folder &bull; {activeFolder.items.length} Meta Ads Manager Screenshots</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">{activeFolder.title}</h2>
                  <p className="text-purple-200 text-sm sm:text-base font-semibold">{activeFolder.roas}</p>
                </div>

                <button
                  onClick={() => setActiveFolder(null)}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0"
                  aria-label="Close Folder"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Folder Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeFolder.items.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => setLightboxItem(subItem)}
                    className="group text-left rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 bg-white/5"
                  >
                    <div className="relative overflow-hidden aspect-video bg-black/40">
                      <img
                        src={subItem.src}
                        alt={subItem.caption}
                        loading="lazy"
                        className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                      {subItem.caption}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for Individual Screenshot Inspection */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-[75] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxItem.src}
                alt={lightboxItem.caption}
                className="w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-center text-xs sm:text-sm text-white/90 mt-4 px-2 font-medium">{lightboxItem.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
