import { LINKS } from "@/app/data/site";

export interface LeadPayload {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  budget: string;
}

/**
 * Send an enquiry to FormSubmit.
 *
 * FormSubmit answers with HTTP 200 even when it rejects a submission and puts
 * the real outcome in a JSON `success` field, so checking `res.ok` alone would
 * report a rejected enquiry as a lead - sending the visitor to /thank-you and
 * firing a conversion for an email that was never delivered. Both outcomes are
 * checked here, and every form on the site goes through this one function so
 * they cannot drift apart.
 *
 * Throws on failure; resolves only when the enquiry was genuinely accepted.
 */
export async function submitLead(payload: LeadPayload, source: string): Promise<void> {
  const res = await fetch("https://formsubmit.co/ajax/" + LINKS.email, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: "New portfolio inquiry from " + payload.name,
      _template: "table",
      _source: source,
      ...payload,
    }),
  });

  if (!res.ok) {
    throw new Error("FormSubmit returned HTTP " + res.status);
  }

  const data = (await res.json().catch(() => null)) as { success?: string; message?: string } | null;

  if (!data || String(data.success) !== "true") {
    throw new Error(data?.message || "FormSubmit rejected the submission");
  }
}
