import AboutSection from "@/app/components/AboutSection";
import SectionPage from "@/app/components/SectionPage";

export default function About() {
  return (
    <SectionPage
      title="About Saad Hasan | Performance Marketer & Paid Media Specialist"
      description="Performance marketer running Meta Ads, Google Ads and Klaviyo for e-commerce and lead-gen brands, with $15M+ in tracked revenue and a 9.04x best yearly ROAS."
      canonical="https://www.maliksaadhasan.com/about"
      heading={
        <>
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Saad Hasan
          </span>
        </>
      }
      intro="I am a performance marketer with 4+ years running Meta and Google Ads for e-commerce and lead-generation brands across 15 industries. I have generated over $15M in tracked revenue for clients, with a best yearly return of 9.04x. Tracking comes first, creative testing is continuous, and budget only scales where the numbers hold."
    >
      <AboutSection />
    </SectionPage>
  );
}
