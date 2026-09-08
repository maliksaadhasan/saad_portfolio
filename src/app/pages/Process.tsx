import ProcessSection from "@/app/components/ProcessSection";
import SectionPage from "@/app/components/SectionPage";

// Mirrors the five steps rendered by ProcessSection. Structured as HowTo so
// answer engines can lift the sequence directly - the content was already
// step-shaped, it just was not marked up as such.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://www.maliksaadhasan.com/process#howto",
  name: "How I Run a Paid Media Campaign",
  description:
    "The five-stage process behind every paid media account I manage, from audit through to scaling and retention.",
  totalTime: "P30D",
  step: [
    {
      name: "Audit & Competitor Analysis",
      text: "Deep dive into your ad account, market, and competitors. I find where money is leaking and where your rivals are vulnerable.",
    },
    {
      name: "Tracking & Setup",
      text: "Accurate data before a single dollar is spent: pixel integration, Conversions API, and event testing done right.",
    },
    {
      name: "Launch & Creative Testing",
      text: "Structured campaigns go live with systematic creative testing: hooks, angles, and formats compete until winners emerge.",
    },
    {
      name: "Optimization",
      text: "Continuous testing, measuring, and refining to push ROAS, CPA, and CTR in the right direction every week.",
    },
    {
      name: "Scaling & Retention",
      text: "Double down on winners with controlled budget scaling, and lock in revenue with Klaviyo email flows and retargeting.",
    },
  ].map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `https://www.maliksaadhasan.com/process#step-${i + 1}`,
  })),
};

export default function Process() {
  return (
    <SectionPage
      title="My Process | How I Run Paid Media Campaigns"
      description="The five stages behind every account I run: audit, tracking setup, creative testing, optimisation, and scaling with retention. No guesswork at any step."
      canonical="https://www.maliksaadhasan.com/process"
      heading={
        <>
          From Pixel to{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Profitable Scale
          </span>
        </>
      }
      intro="Five stages, run in the same order on every account. Audit first so we know where money is leaking, tracking before any spend, creative testing to find what works, weekly optimisation, then controlled scaling backed by retention. Nothing here is improvised."
      jsonLd={jsonLd}
    >
      <ProcessSection />
    </SectionPage>
  );
}
