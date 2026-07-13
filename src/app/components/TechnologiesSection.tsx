import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const technologies = [
  {
    name: "Google Ads",
    category: "Paid Media",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Meta Ads",
    category: "Social Media",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "HubSpot",
    category: "CRM & Marketing",
    logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
  },
  {
    name: "Google Analytics",
    category: "Analytics",
    logo: "https://www.google.com/analytics/static/5c6b2be92aa2c18a8a29f271faca8dc0/new-google-analytics-logo.svg",
  },
  {
    name: "SEMrush",
    category: "SEO Tools",
    logo: "https://www.semrush.com/static/semrush-logo.svg",
  },
  {
    name: "Figma",
    category: "Design",
    logo: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png",
  },
  {
    name: "Webflow",
    category: "Web Development",
    logo: "https://assets-global.website-files.com/6009ec03ceb8ca11785c5b8c/6009ec03ceb8ca89a95c5bd3_webflow-logo-blue-1.svg",
  },
  {
    name: "Mailchimp",
    category: "Email Marketing",
    logo: "https://mailchimp.com/release/plums/cxp/images/apple-touch-icon-192.ce8f3e6d.png",
  },
  {
    name: "Shopify",
    category: "E-commerce",
    logo: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg",
  },
  {
    name: "Slack",
    category: "Collaboration",
    logo: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
  },
  {
    name: "Ahrefs",
    category: "SEO Tools",
    logo: "https://static.ahrefs.com/favicon-192x192.png",
  },
  {
    name: "LinkedIn Ads",
    category: "B2B Marketing",
    logo: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
  },
];

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="technologies"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 mb-6">
            Technologies & Tools
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Powered by the{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Best Tools
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We leverage industry-leading platforms and cutting-edge technology to
            deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              {/* Logo Container */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-800">
                  {tech.name.substring(0, 2).toUpperCase()}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg mb-2 group-hover:text-violet-400 transition-colors duration-300">
                {tech.name}
              </h3>

              {/* Category */}
              <div className="text-xs text-white/50">{tech.category}</div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/60">
            And many more tools tailored to your specific needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
