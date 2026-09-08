import { motion } from "motion/react";
import { LINKS } from "@/app/data/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.58-1.67a12.74 12.74 0 0 0 6.22 1.61h.01c7.06 0 12.79-5.74 12.79-12.8s-5.74-12.74-12.8-12.74zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9.99 1.04-3.8-.25-.39a10.55 10.55 0 0 1-1.63-5.65c0-5.86 4.77-10.62 10.64-10.62a10.56 10.56 0 0 1 10.62 10.64c0 5.86-4.77 10.54-10.62 10.54zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.67.77.25 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

/**
 * Persistent WhatsApp CTA. The label is always visible - a bare icon relies on
 * the visitor hovering to learn what it does, which never happens on touch.
 */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-track="whatsapp_floating"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 22 }}
      whileHover={{ scale: 1.04 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] h-12 pl-4 pr-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center gap-2.5 text-white shadow-lg shadow-green-500/40"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span className="text-sm font-medium whitespace-nowrap">WhatsApp</span>
    </motion.a>
  );
}
