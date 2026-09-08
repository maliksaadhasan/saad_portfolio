import ServicesSection from "@/app/components/ServicesSection";
import SectionPage from "@/app/components/SectionPage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.maliksaadhasan.com/services#service",
  name: "Paid Media Management",
  serviceType: "Performance Marketing",
  provider: { "@id": "https://www.maliksaadhasan.com/#person" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  description:
    "Full-funnel Meta Ads, Google Ads, PPC and Klaviyo management, including conversion tracking setup and creative testing.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Performance Marketing Services",
    itemListElement: [
      "Meta Ads Management",
      "Google Ads Management",
      "PPC Campaign Management",
      "Klaviyo Email & SMS Flows",
      "Conversion Tracking & Conversions API Setup",
      "Creative Testing",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function Services() {
  return (
    <SectionPage
      title="Services | Meta Ads, Google Ads & Klaviyo Management"
      description="Full-funnel paid media: Meta Ads, Google Ads, PPC, Klaviyo email flows, conversion tracking and creative testing for e-commerce and lead-gen brands."
      canonical="https://www.maliksaadhasan.com/services"
      heading={
        <>
          Paid Media,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Managed End to End
          </span>
        </>
      }
      intro="Meta Ads across Facebook and Instagram, Google Ads including Search, Performance Max and YouTube, and Klaviyo for email and SMS. Every engagement starts with conversion tracking, because an optimisation engine cannot optimise toward signals it never receives."
      jsonLd={jsonLd}
    >
      <ServicesSection />
    </SectionPage>
  );
}
