import { motion } from "motion/react";
import { ClipboardList } from "lucide-react";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { useLeadForm } from "@/app/components/LeadFormProvider";

/**
 * The two persistent calls-to-action, present on every page: the lead form
 * stacked directly above WhatsApp. Both carry a permanent label - an icon on
 * its own only explains itself on hover, which touch devices never get.
 *
 * WhatsAppButton positions itself at bottom-4 / md:bottom-6 and is 48px tall,
 * so this sits one button-height plus a gap above it.
 */
export default function FloatingActions() {
  const { open } = useLeadForm();

  return (
    <>
      <motion.button
        type="button"
        onClick={() => open("floating_button")}
        aria-label="Open enquiry form"
        data-track="open_lead_form_floating"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, type: "spring", stiffness: 260, damping: 22 }}
        whileHover={{ scale: 1.04 }}
        className="fixed bottom-[4.75rem] right-4 md:bottom-[5.25rem] md:right-6 z-[60] h-12 pl-4 pr-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center gap-2.5 text-white shadow-lg shadow-indigo-500/40"
      >
        <ClipboardList className="w-5 h-5 shrink-0" />
        <span className="text-sm font-medium whitespace-nowrap">
          Free Strategy Call
        </span>
      </motion.button>

      <WhatsAppButton />
    </>
  );
}
