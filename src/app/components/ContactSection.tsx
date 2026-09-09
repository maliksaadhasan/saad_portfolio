import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Send, Linkedin, MessageCircle, CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { LINKS } from "@/app/data/site";
import { pushEvent } from "@/app/lib/analytics";
import { submitLead } from "@/app/lib/submitLead";

function AnimatedGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-52 h-52 sm:w-64 sm:h-64 border-2 border-indigo-500/30 rounded-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-44 h-44 sm:w-56 sm:h-56 border-2 border-purple-500/20 rounded-full"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-500/40 backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400/60 rounded-full"
          style={{
            left: `${50 + Math.cos((i / 12) * Math.PI * 2) * 40}%`,
            top: `${50 + Math.sin((i / 12) * Math.PI * 2) * 40}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState<FormStatus>("idle");
  const startedRef = useRef(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitLead(formData, "contact_section");

      // Success only: submitLead throws on validation failure, a network
      // error, or a FormSubmit rejection, so this line is unreachable unless
      // the enquiry was genuinely accepted.
      pushEvent("contact_form_success");

      const budget = formData.budget || "not_specified";
      const hasPhone = Boolean(formData.phone);

      setStatus("idle");
      startedRef.current = false;
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        budget: "",
      });

      // Same destination as the modal. The conversion itself is recorded on
      // /thank-you, guarded by this navigation state.
      navigate("/thank-you", {
        state: {
          fromForm: true,
          formSource: "contact_section",
          budget,
          hasPhone,
        },
      });
    } catch {
      setStatus("error");
      pushEvent("form_error", {
        form_name: "lead_form",
        form_source: "contact_section",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (!startedRef.current) {
      startedRef.current = true;
      pushEvent("form_start", {
        form_name: "lead_form",
        form_source: "contact_section",
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 px-4 sm:py-32 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs sm:text-sm mb-6">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Let's Scale Something{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Profitable
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to grow? Send a message, book a call, or reach out directly
            on WhatsApp (I respond fast).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-56 sm:h-64 mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10">
              <AnimatedGlobe />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <a
                href={`mailto:${LINKS.email}`}
                className="block p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-white">Email Me</h3>
                    <p className="text-white/60 text-sm sm:text-base break-all">{LINKS.email}</p>
                  </div>
                </div>
              </a>

              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-white">WhatsApp</h3>
                    <p className="text-white/60 text-sm sm:text-base">{LINKS.whatsappNumber}</p>
                    <p className="text-white/40 text-xs sm:text-sm">Fastest way to reach me</p>
                  </div>
                </div>
              </a>

              <a
                href={LINKS.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-white">Book a 1:1 Audit & Strategy Call</h3>
                    <p className="text-white/60 text-xs sm:text-sm">Free (competitor analysis included)</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2 text-white/80">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-base placeholder-white/40 focus:border-indigo-500/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2 text-white/80">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-base placeholder-white/40 focus:border-indigo-500/50 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2 text-white/80">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-base placeholder-white/40 focus:border-indigo-500/50 focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2 text-white/80">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-base placeholder-white/40 focus:border-indigo-500/50 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-white/80">
                  Monthly Ad Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-base focus:border-indigo-500/50 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-gray-900">
                    Select your monthly ad budget
                  </option>
                  <option value="lt-3k" className="bg-gray-900">
                    Less than $3,000
                  </option>
                  <option value="3k-10k" className="bg-gray-900">
                    $3,000 to $10,000
                  </option>
                  <option value="10k-50k" className="bg-gray-900">
                    $10,000 to $50,000
                  </option>
                  <option value="gt-50k" className="bg-gray-900">
                    More than $50,000
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-white/80">
                  Tell Me About Your Brand *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-base placeholder-white/40 focus:border-indigo-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="What do you sell? What are your goals? What's not working right now?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="group w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-base"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-400 text-center">
                  Thanks! Your message is on its way. I'll get back to you
                  within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong. Please email me directly at{" "}
                  {LINKS.email} or reach out on WhatsApp.
                </p>
              )}
              {status === "idle" && (
                <p className="text-xs sm:text-sm text-white/50 text-center">
                  I'll respond within 24 hours
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mt-20 sm:mt-32 pt-10 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Saad Hasan
          </div>
          <div className="text-white/60 text-xs sm:text-sm">
            &copy; 2026 Saad Hasan. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-white/60">
            <Link to="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link to="/gallery" className="hover:text-white transition-colors">
              Work Gallery
            </Link>
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
