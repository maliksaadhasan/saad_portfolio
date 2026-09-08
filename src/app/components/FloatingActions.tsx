import { motion } from "motion/react";
import { ClipboardList } from "lucide-react";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { useLeadForm } from "@/app/components/LeadFormProvider";

const FORM_BUTTON =
  "h-12 px-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center gap-2 text-white shadow-lg shadow-indigo-500/30";

/**
 * The two persistent calls to action, on every page.
 *
 * Two layouts, because one does not work at both widths. On a phone, floating
 * pills sat on top of the body copy and hid whole lines of it, so the CTAs
 * become a bar pinned to the bottom edge and RootLayout reserves matching
 * space beneath the page. On wider screens there is empty gutter to float in,
 * so they stack in the corner.
 */
export default function FloatingActions() {
  const { open } = useLeadForm();

  return (
    <>
      <div className="md:hidden fixed inset-x-0 bottom-0 z-[60] flex gap-2 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-black/90 backdrop-blur-xl border-t border-white/10">
        <button
          type="button"
          onClick={() => open("floating_button")}
          aria-label="Open enquiry form"
          data-track="open_lead_form_floating"
          className={FORM_BUTTON + " flex-1 min-w-0"}
        >
          <ClipboardList className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium truncate">Free Strategy Call</span>
        </button>
        <WhatsAppButton className="shrink-0" />
      </div>

      <div className="hidden md:flex fixed bottom-6 right-6 z-[60] flex-col items-end gap-3">
        <motion.button
          type="button"
          onClick={() => open("floating_button")}
          aria-label="Open enquiry form"
          data-track="open_lead_form_floating"
          whileHover={{ scale: 1.03 }}
          className={FORM_BUTTON}
        >
          <ClipboardList className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium whitespace-nowrap">
            Free Strategy Call
          </span>
        </motion.button>
        <WhatsAppButton />
      </div>
    </>
  );
}
