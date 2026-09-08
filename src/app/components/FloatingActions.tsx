import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClipboardList } from "lucide-react";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { useLeadForm } from "@/app/components/LeadFormProvider";

/**
 * The two persistent calls-to-action, present on every page:
 * a lead-form button stacked directly above the WhatsApp button.
 *
 * WhatsAppButton positions itself at bottom-4 / md:bottom-6 and is 56px tall,
 * so the form button sits one button-height plus a gap above it.
 */
export default function FloatingActions() {
  const [hovered, setHovered] = useState(false);
  const { open } = useLeadForm();

  return (
    <>
      <div className="fixed bottom-[5.25rem] right-4 md:bottom-[5.75rem] md:right-6 z-[60] flex items-center justify-end gap-3">
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="px-4 py-3 bg-black/90 backdrop-blur-xl border border-indigo-500/30 rounded-2xl rounded-br-sm text-sm text-white shadow-xl max-w-[220px]"
            >
              <span className="block font-medium text-indigo-400 mb-0.5">
                Free strategy call
              </span>
              Tell me about your brand and get a reply within 24 hours.
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => open("floating_button")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Open enquiry form"
          data-track="open_lead_form_floating"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.65, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          className="relative w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/40"
        >
          <ClipboardList className="w-6 h-6" />
        </motion.button>
      </div>

      <WhatsAppButton />
    </>
  );
}
