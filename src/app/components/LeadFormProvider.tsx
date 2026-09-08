import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import LeadFormModal from "@/app/components/LeadFormModal";
import { pushEvent } from "@/app/lib/analytics";

interface LeadFormContextValue {
  /** Open the lead form. `source` is recorded in the dataLayer. */
  open: (source: string) => void;
  close: () => void;
  isOpen: boolean;
}

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function useLeadForm(): LeadFormContextValue {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used inside <LeadFormProvider>");
  }
  return ctx;
}

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("unknown");

  const open = useCallback((from: string) => {
    setSource(from);
    setIsOpen(true);
    pushEvent("form_open", { form_name: "lead_form", form_source: from });
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <LeadFormModal open={isOpen} source={source} onClose={close} />
    </LeadFormContext.Provider>
  );
}
