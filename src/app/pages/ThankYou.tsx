import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft, MessageCircle, CalendarCheck } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { LINKS } from "@/app/data/site";
import { usePageMeta } from "@/app/hooks/usePageMeta";
import { pushEvent } from "@/app/lib/analytics";

interface ThankYouState {
  fromForm?: boolean;
  formSource?: string;
  budget?: string;
  hasPhone?: boolean;
}

export default function ThankYou() {
  const location = useLocation();
  const state = (location.state || null) as ThankYouState | null;
  const firedRef = useRef(false);

  usePageMeta({
    title: "Thank You | Saad Hasan - Performance Marketer",
    description: "Your enquiry has been received. Saad Hasan will get back to you within 24 hours.",
    canonical: "https://www.maliksaadhasan.com/thank-you",
  });

  // Keep the confirmation page out of the index - it is a conversion
  // destination, not content. Restored on unmount so other routes are
  // unaffected.
  useEffect(() => {
    const el = document.querySelector('meta[name="robots"]');
    const previous = el ? el.getAttribute("content") : null;
    if (el) el.setAttribute("content", "noindex, nofollow");
    return () => {
      if (el) el.setAttribute("content", previous || "index, follow");
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // The conversion. Fires only when the visitor actually arrived by
  // submitting the form, so bookmarks, refreshes and direct hits on
  // /thank-you cannot inflate the count.
  useEffect(() => {
    if (firedRef.current) return;
    if (!state || !state.fromForm) return;
    firedRef.current = true;
    pushEvent("generate_lead", {
      form_name: "lead_form",
      form_source: state.formSource || "unknown",
      budget: state.budget || "not_specified",
      has_phone: Boolean(state.hasPhone),
      value: 1,
      currency: "USD",
    });
  }, [state]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 18 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center"
          >
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Thank you
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 mb-3">
            Your enquiry has been received. I read every message personally and
            will get back to you within 24 hours.
          </p>
          <p className="text-sm text-white/50 mb-10">
            Want a faster reply? Message me on WhatsApp or book a call directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-track="thankyou_whatsapp"
              className="px-6 py-3.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white font-medium hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              data-track="thankyou_book_call"
              className="px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Book a call</span>
            </a>
          </div>

          <Link
            to="/"
            data-track="thankyou_back_home"
            className="inline-flex items-center gap-2 mt-10 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
