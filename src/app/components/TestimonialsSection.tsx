import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
    text: "Saad Hasan transformed our entire digital presence. Within 6 months, we saw a 340% increase in qualified leads and our brand recognition skyrocketed. Their strategic approach and creative execution are unmatched.",
    company: "TechCorp",
  },
  {
    name: "Michael Roberts",
    role: "Founder, EcoBeauty",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
    text: "Working with Saad Hasan was a game-changer. They didn't just run campaigns—they built our brand from the ground up. The community they helped us create is incredibly engaged and loyal. Absolutely worth every penny.",
    company: "EcoBeauty",
  },
  {
    name: "Jessica Martinez",
    role: "CMO, FinFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
    text: "The ROI speaks for itself. Saad Hasan reduced our customer acquisition cost by 64% while scaling our user base by 680%. Their data-driven approach combined with creative excellence is a rare combination.",
    company: "FinFlow",
  },
  {
    name: "David Thompson",
    role: "VP Marketing, GrowthLabs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
    text: "Saad Hasan is more than an agency—they're true partners. Their team became an extension of ours, always thinking ahead and bringing innovative solutions. The results exceeded all our expectations.",
    company: "GrowthLabs",
  },
  {
    name: "Emily Watson",
    role: "Director, Wellness Co.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    rating: 5,
    text: "From strategy to execution, Saad Hasan delivered excellence at every stage. They took the time to understand our brand and created campaigns that truly resonated with our audience. Highly recommend!",
    company: "Wellness Co.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/10 to-black" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-rose-500/20 border border-rose-500/30 rounded-full text-rose-300 mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the brands we've helped
            transform.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <div className="relative p-12 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-rose-400" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 mt-8">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-white/90 text-center mb-8 leading-relaxed max-w-4xl mx-auto">
              "{currentTestimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-white/60">
                  {currentTestimonial.role}
                </div>
                <div className="text-sm text-white/40">
                  {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-rose-500 to-pink-500"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Floating Cards (Smaller Testimonials) */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 0.6, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-64 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl -rotate-6"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm text-white/70 mb-3">
              "Outstanding results and incredible team to work with!"
            </p>
            <div className="text-xs text-white/50">- Client Review</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 0.6, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-64 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl rotate-6"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm text-white/70 mb-3">
              "Best marketing decision we ever made. Highly recommend!"
            </p>
            <div className="text-xs text-white/50">- Client Review</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
