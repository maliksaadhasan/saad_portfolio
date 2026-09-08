/**
 * Single entry point for everything pushed to the GTM dataLayer.
 *
 * Every marketing event on the site goes through here so event names and
 * parameter shapes stay stable. GTM triggers, GA4 events and Google Ads
 * conversions are all configured against the names below — changing one here
 * means changing it in GTM too.
 *
 * Events emitted:
 *   page_view       every route change (SPA navigation)
 *   form_open       lead form modal opened
 *   form_start      first interaction with a form field
 *   generate_lead   form submitted successfully  <- the conversion
 *   form_error      submission failed
 *   whatsapp_click  any click on a wa.me link
 *   book_call_click any click on the Google Calendar booking link
 *   email_click     any mailto: click
 *   cta_click       every other button / link click
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type AnalyticsParams = Record<string, unknown>;

/** Push an event to the dataLayer. No-ops if GTM has not loaded yet. */
export function pushEvent(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Readable label for a clicked element, for use as a GTM trigger condition. */
export function elementLabel(el: Element): string {
  const explicit = el.getAttribute("data-track");
  if (explicit) return explicit;
  const aria = el.getAttribute("aria-label");
  if (aria) return aria.trim();
  const text = (el.textContent || "").replace(/\s+/g, " ").trim();
  return text ? text.slice(0, 80) : "unlabelled";
}
