import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Loader2, Send, X } from "lucide-react";
import { LINKS } from "@/app/data/site";
import { pushEvent } from "@/app/lib/analytics";
import { submitLead } from "@/app/lib/submitLead";

const EMPTY = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  budget: "",
};

const inputClass =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-base placeholder-white/40 focus:border-indigo-500/50 focus:outline-none transition-colors";
const labelClass = "block text-xs sm:text-sm font-medium mb-2 text-white/80";

interface Props {
  open: boolean;
  /** Where the modal was opened from - carried into the dataLayer. */
  source: string;
  onClose: () => void;
}

export default function LeadFormModal({ open, source, onClose }: Props) {
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const startedRef = useRef(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // Fires once, on first real interaction - this is the GA4 form_start signal.
    if (!startedRef.current) {
      startedRef.current = true;
      pushEvent("form_start", { form_name: "lead_form", form_source: source });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitLead(formData, source);

      // Success only: submitLead throws on validation failure, a network
      // error, or a FormSubmit rejection, so this line is unreachable unless
      // the enquiry was genuinely accepted.
      pushEvent("contact_form_success");

      const budget = formData.budget || "not_specified";
      const hasPhone = Boolean(formData.phone);

      // Reset before navigating so a re-opened modal starts clean.
      setFormData(EMPTY);
      setStatus("idle");
      startedRef.current = false;
      onClose();

      // The conversion event fires on /thank-you rather than here, so a direct
      // visit to the thank-you URL cannot be mistaken for a real lead.
      navigate("/thank-you", {
        state: {
          fromForm: true,
          formSource: source,
          budget,
          hasPhone,
        },
      });
    } catch {
      setStatus("error");
      pushEvent("form_error", { form_name: "lead_form", form_source: source });
    }
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          pushEvent("form_close", { form_name: "lead_form", form_source: source });
          onClose();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm" />
        <Dialog.Content
          aria-describedby="lead-form-desc"
          className="fixed left-1/2 top-1/2 z-[100] w-[calc(100vw-2rem)] max-w-lg max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0b0b12] p-5 sm:p-7 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <Dialog.Title className="text-xl sm:text-2xl font-bold text-white">
                Get your free strategy call
              </Dialog.Title>
              <Dialog.Description id="lead-form-desc" className="text-sm text-white/60 mt-1">
                Tell me about your brand and I will reply within 24 hours.
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Close form"
              data-track="close_lead_form"
              className="shrink-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={labelClass} htmlFor="lf-name">
                Full Name *
              </label>
              <input
                id="lf-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="lf-email">
                Email Address *
              </label>
              <input
                id="lf-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="john@company.com"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} htmlFor="lf-company">
                  Company / Brand
                </label>
                <input
                  id="lf-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="lf-phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="lf-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="lf-budget">
                Monthly Ad Budget
              </label>
              <select
                id="lf-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={inputClass}
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
              <label className={labelClass} htmlFor="lf-message">
                Tell Me About Your Brand *
              </label>
              <textarea
                id="lf-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className={inputClass + " resize-none"}
                placeholder="What do you sell? What are your goals?"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              data-track="submit_lead_form"
              className="group w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-base"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>

            {status === "error" && (
              <p className="text-sm text-red-400 text-center">
                Something went wrong. Please email{" "}
                <a href={"mailto:" + LINKS.email} className="underline">
                  {LINKS.email}
                </a>{" "}
                directly.
              </p>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
