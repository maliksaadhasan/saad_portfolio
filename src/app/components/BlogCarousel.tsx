import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface CarouselSlide {
  title: string;
  body: string;
}

/**
 * A minimal slide deck for inside an article.
 *
 * Scroll-snap does the work, so it stays usable with a trackpad, a touch
 * swipe, or the arrow buttons, and it needs no carousel library. One slide is
 * visible at a time by design: the point is to slow the reader down on each
 * item, not to fit as many on screen as possible.
 */
export default function BlogCarousel({ slides }: { slides: CarouselSlide[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }, [slides.length]);

  // Track which slide is centred so the dots and counter stay honest when the
  // reader swipes rather than using the buttons.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const index = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
      setActive(Math.max(0, Math.min(index, slides.length - 1)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <section className="my-12" aria-label="Summary of the changes">
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        {slides.map((slide, i) => (
          <article
            key={i}
            className="snap-center shrink-0 w-full px-7 py-10 sm:px-12 sm:py-14"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            <p className="text-xs font-medium tracking-[0.2em] text-amber-400/80 mb-5">
              {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <h3 className="text-xl sm:text-3xl font-semibold text-white leading-snug mb-4 text-balance">
              {slide.title}
            </h3>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed max-w-[52ch]">
              {slide.body}
            </p>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-2" role="tablist" aria-label="Choose a slide">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={
                "h-1.5 rounded-full transition-all duration-300 " +
                (i === active ? "w-7 bg-amber-400" : "w-1.5 bg-white/25 hover:bg-white/45")
              }
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 disabled:opacity-25 disabled:hover:text-white/70 disabled:hover:border-white/12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo(active + 1)}
            disabled={active === slides.length - 1}
            aria-label="Next slide"
            className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 disabled:opacity-25 disabled:hover:text-white/70 disabled:hover:border-white/12 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
