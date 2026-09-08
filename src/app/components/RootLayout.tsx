import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import FloatingActions from "@/app/components/FloatingActions";
import { LeadFormProvider, useLeadForm } from "@/app/components/LeadFormProvider";
import { elementLabel, pushEvent } from "@/app/lib/analytics";

/** Delay before the form opens by itself on first load. */
const AUTO_OPEN_DELAY_MS = 6000;
/** Once per browser session, so returning to the tab is not a nag. */
const AUTO_OPEN_KEY = "lead_form_auto_shown";

export default function RootLayout() {
  return (
    <LeadFormProvider>
      <RootLayoutInner />
    </LeadFormProvider>
  );
}

function RootLayoutInner() {
  const location = useLocation();
  const { open } = useLeadForm();
  const autoOpenedRef = useRef(false);

  // --- SPA page views -------------------------------------------------
  // GTM's "All Pages" trigger only fires on the initial document load, so
  // every client-side navigation is announced explicitly here.
  useEffect(() => {
    pushEvent("page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  // --- Click tracking -------------------------------------------------
  // One delegated listener covers every link and button on the site, so new
  // components are tracked automatically without touching them.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;
      const el = target.closest("a, button");
      if (!el) return;

      const href = el.getAttribute("href") || "";
      const label = elementLabel(el);
      const base = {
        click_text: label,
        click_url: href,
        page_path: window.location.pathname,
      };

      if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
        pushEvent("whatsapp_click", base);
        return;
      }
      if (/calendar\.app\.google|calendly\.com/i.test(href)) {
        pushEvent("book_call_click", base);
        return;
      }
      if (href.startsWith("mailto:")) {
        pushEvent("email_click", base);
        return;
      }
      if (href.startsWith("tel:")) {
        pushEvent("phone_click", base);
        return;
      }
      pushEvent("cta_click", base);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // --- Auto-open the lead form on first load --------------------------
  useEffect(() => {
    if (autoOpenedRef.current) return;
    if (location.pathname === "/thank-you") return;

    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem(AUTO_OPEN_KEY) === "1";
    } catch {
      // Private mode or blocked storage - fall through and show it once.
    }
    if (alreadyShown) return;

    const timer = window.setTimeout(() => {
      autoOpenedRef.current = true;
      try {
        window.sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      } catch {
        // Ignore - worst case the form opens again next navigation.
      }
      open("auto_popup");
    }, AUTO_OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [location.pathname, open]);

  return (
    <>
      <Outlet />
      <FloatingActions />
    </>
  );
}
