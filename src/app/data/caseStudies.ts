import milkforbubs2025 from "@/assets/gallery/milkforbubs-2025.png";
import pipedecor2025 from "@/assets/gallery/pipedecor-2025.png";
import googleToys from "@/assets/gallery/google-toys-jan2026.png";
import googleSinks from "@/assets/gallery/google-sinks.png";
import googleAesthetic from "@/assets/gallery/google-aesthetic.png";
import googleAntiques from "@/assets/gallery/google-antiques.png";
import googleTile from "@/assets/gallery/google-tile.png";
import googleRehab from "@/assets/gallery/google-rehab.png";

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  platform: string;
  description: string;
  image: string | null;
  logo: string | null;
  gradient: string;
  featured: boolean;
  problem: string;
  steps: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "milk-for-bubs",
    client: "Mother & Baby Care Brand (Confidential)",
    industry: "Baby & Mother Care E-commerce",
    platform: "Meta Ads",
    description:
      "Scaled a leading lactation-support DTC brand (undisclosed per NDA) to a 9.04x yearly ROAS with $431K+ in tracked Meta revenue in 2025.",
    image: milkforbubs2025,
    logo: null,
    gradient: "from-purple-500 to-blue-500",
    featured: true,
    problem:
      "The mother and baby care brand had a loyal customer following but an inefficient ad account structure. Budget was spread across traffic and engagement campaigns that generated low-intent clicks rather than profitable purchases. Purchase tracking was uncalibrated, CPMs in the parent-and-baby niche were climbing, and the brand lacked clarity on which creative angles or audiences truly drove bottom-line revenue.",
    steps: [
      "Audited the full account architecture and rebuilt server-side tracking via Meta Pixel and Conversions API, ensuring accurate purchase attribution.",
      "Killed underperforming traffic campaigns and consolidated budget into high-intent purchase-optimized sales campaigns around hero products: Lactation Support Cookies and Premium Mommy Starter Kits.",
      "Executed structured creative testing featuring benefit-led hooks tailored to new mothers, then scaled top-performing angles.",
      "Layered in high-converting retargeting funnels for engaged shoppers and past store visitors while scaling budgets gradually to protect ROAS.",
    ],
    outcome:
      "In 2025, the account turned $47.7K in ad spend into $431K+ in tracked purchase value at a 9.04x blended ROAS, delivering 5,357 purchases and 4.6M impressions. The Lactation Cookies campaign delivered an 8.84x ROAS on $39K spend, while the Starter Kit campaign hit 9.91x.",
    metrics: [
      { label: "Yearly ROAS", value: "9.04x" },
      { label: "Revenue", value: "$431K+" },
      { label: "Purchases", value: "5,357" },
    ],
  },
  {
    id: "pipe-decor",
    client: "Industrial Furniture Brand (NDA Protected)",
    industry: "Industrial & Pipe Furniture",
    platform: "Meta Ads",
    description:
      "Grew a premier industrial pipe furniture brand (undisclosed per NDA) to $417K in yearly Meta revenue while scaling ad spend 131% YoY.",
    image: pipedecor2025,
    logo: null,
    gradient: "from-orange-500 to-red-500",
    featured: true,
    problem:
      "The brand sells niche industrial pipe furniture, shelf brackets, iron table legs, and DIY pipe fittings: a high-ticket home decor category with a narrow target audience and longer consideration windows. Revenue had plateaued, the ad account relied on aging campaigns, and the brand needed to scale spend aggressively without degrading return on ad spend.",
    steps: [
      "Restructured the account around Advantage+ Shopping Campaigns (ASC) for broad prospecting, supported by clean product catalog feed data for pipe kits and industrial fixtures.",
      "Built dedicated dynamic and static remarketing funnels to capture long consideration cycles typical of home decor and interior design buyers.",
      "Tested high-converting creative formats (installation demo clips, UGC home transformations, and industrial aesthetic lifestyle shots) continuously.",
      "Scaled monthly budgets in controlled 15–20% steps (+131% spend year over year) while monitoring frequency and ROAS at every increment.",
    ],
    outcome:
      "In 2025, the account generated $417K in purchase conversion value from 2,408 purchases, averaging over $52K per month in Meta revenue. Remarketing campaigns sustained 4.4x to 5.4x ROAS while total ad spend more than doubled year over year.",
    metrics: [
      { label: "Yearly Revenue", value: "$417K" },
      { label: "Purchases", value: "2,408" },
      { label: "Spend Growth", value: "+131%" },
    ],
  },
  {
    id: "amentara",
    client: "CBD & Wellness Brand (Confidential)",
    industry: "Health, Wellness & CBD",
    platform: "Meta Ads",
    description:
      "Built a compliant Meta Ads growth engine for a CBD mushroom & gummies brand (undisclosed per NDA): 4.2x monthly ROAS and ~$60K/month in revenue.",
    image: null,
    logo: null,
    gradient: "from-green-500 to-teal-500",
    featured: true,
    problem:
      "The brand sells functional mushroom supplements, nocturnal wellness gummies, and daily calm formulas in the CBD space, one of the most strictly regulated categories on Meta. Ads were frequently rejected, the account faced constant restriction risks, and there was no reliable blueprint to scale while staying compliant with Meta's ad policies.",
    steps: [
      "Developed a fully compliant creative and landing page framework, positioning products around evening relaxation routines and daily wellness benefits within strict policy guidelines.",
      "Implemented resilient tracking via Meta Pixel and Conversions API to maintain strong optimization signals despite privacy updates.",
      "Tested ad angles and UGC creatives systematically to discover high-converting hooks that avoided triggering automated policy flags.",
      "Scaled ad spend gradually month over month, safeguarding the account's compliance standing while maximizing return on investment.",
    ],
    outcome:
      "The account maintains a consistent 4.2x monthly ROAS and generates approximately $60K per month in revenue from Meta Ads, continuing to scale safely month over month.",
    metrics: [
      { label: "Monthly ROAS", value: "4.2x" },
      { label: "Monthly Revenue", value: "$60K" },
      { label: "Trend", value: "Scaling" },
    ],
  },
  {
    id: "toys-ecommerce",
    client: "Toys & Educational Products Brand",
    industry: "Toys & Educational Products",
    platform: "Google Ads",
    description:
      "Post-holiday Google Ads turnaround for a giant jumbo building blocks store (undisclosed per NDA): 544% ROAS in January, the toughest month in the category.",
    image: googleToys,
    logo: null,
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
    problem:
      "January is notoriously tough for toy brands: consumer demand slumps after the holidays while leftover campaign structures continue spending like it's peak December. This jumbo building blocks store needed to maintain profitability through the post-holiday slump instead of pausing ad campaigns.",
    steps: [
      "Optimized the Google Merchant Center product feed and restructured Performance Max & Shopping campaigns around top-selling jumbo brick sets and STEM educational packs.",
      "Cut wasted spend aggressively using negative keyword lists, search intent filters, and device/geographic adjustments.",
      "Reallocated budget toward high-intent branded search terms and dynamic remarketing rather than broad cold prospecting.",
    ],
    outcome:
      "The account delivered a 544% ROAS in January 2026 with $3.62K in conversion value from 817 clicks and 70.1K impressions: profitable growth during the industry's quietest month.",
    metrics: [
      { label: "ROAS", value: "544%" },
      { label: "Conv. Value", value: "$3.6K" },
      { label: "Impressions", value: "70.1K" },
    ],
  },
  {
    id: "utility-sinks",
    client: "Home Improvement Store (Undisclosed)",
    industry: "Utility Sinks & Home Fixtures",
    platform: "Google Ads",
    description:
      "380% ROAS for a US utility sinks and home fixtures e-commerce store on Google Ads.",
    image: googleSinks,
    logo: null,
    gradient: "from-slate-500 to-blue-500",
    featured: false,
    problem:
      "A US home improvement store selling utility sinks and fixtures was paying too much per click for a considered, high-ticket purchase, and conversions were inconsistent from week to week.",
    steps: [
      "Rebuilt search campaigns around high-intent, product-specific queries and tightened match types.",
      "Optimized bids to hold CPC near $1.50 in a competitive home improvement auction.",
      "Aligned landing pages with ad intent to lift conversion rate on high-AOV products.",
    ],
    outcome:
      "The account reached a 380% ROAS in January 2026 with 785 clicks at a $1.53 average CPC: steady, profitable performance on a high-ticket catalog.",
    metrics: [
      { label: "ROAS", value: "380%" },
      { label: "Avg CPC", value: "$1.53" },
      { label: "Clicks", value: "785" },
    ],
  },
  {
    id: "aesthetic-laser",
    client: "Aesthetic & Laser Center (Undisclosed)",
    industry: "Healthcare & Med Spa",
    platform: "Google Ads",
    description:
      "High-value patient leads at ~$30 each for a US aesthetic and laser treatment center.",
    image: googleAesthetic,
    logo: null,
    gradient: "from-pink-500 to-rose-500",
    featured: false,
    problem:
      "An aesthetic and laser center needed a predictable flow of booked consultations for high-ticket treatments, but local competition kept CPCs high and previous campaigns brought unqualified inquiries.",
    steps: [
      "Built tightly-themed search campaigns around treatment-specific keywords with strong commercial intent.",
      "Filtered out low-quality traffic with negatives and geo-targeting around the clinic's service area.",
      "Tracked calls and form fills as conversions so optimization focused on real bookings.",
    ],
    outcome:
      "January 2026 delivered 15 qualified patient leads on just $443 of spend: roughly $30 per lead for treatments worth hundreds to thousands of dollars each.",
    metrics: [
      { label: "Cost / Lead", value: "~$30" },
      { label: "Leads", value: "15" },
      { label: "Spend", value: "$443" },
    ],
  },
  {
    id: "antiques",
    client: "Antiques & Jewelry Dealer (Undisclosed)",
    industry: "Jewelry & Antiques",
    platform: "Google Ads",
    description:
      "Qualified buyer leads for a US antiques business in a niche, high-value market.",
    image: googleAntiques,
    logo: null,
    gradient: "from-amber-500 to-yellow-600",
    featured: false,
    problem:
      "Antiques buyers are rare, specific, and high-value. This US dealer needed to reach serious collectors and sellers without burning budget on casual browsers.",
    steps: [
      "Researched the exact query language collectors use and built campaigns around those niche terms.",
      "Set up conversion tracking for inquiries so every dollar mapped to a real lead.",
      "Refined targeting continuously to keep lead quality high in a small market.",
    ],
    outcome:
      "The campaigns produce a steady flow of qualified, high-intent leads, with individual antique transactions large enough that a handful of leads per week pays for the entire program.",
    metrics: [
      { label: "Lead Quality", value: "High-intent" },
      { label: "Market", value: "USA" },
      { label: "Channel", value: "Search" },
    ],
  },
  {
    id: "tile-restoration",
    client: "Tile Restoration Services (Undisclosed)",
    industry: "Home Services",
    platform: "Google Ads",
    description:
      "Local lead generation for a US tile restoration service business.",
    image: googleTile,
    logo: null,
    gradient: "from-teal-500 to-emerald-600",
    featured: false,
    problem:
      "A local tile restoration company relied on word of mouth and needed a repeatable source of booked jobs from homeowners in its service area.",
    steps: [
      "Launched geo-targeted search campaigns around restoration and repair keywords homeowners actually search.",
      "Optimized ad schedules and bids around the hours when calls converted to booked jobs.",
      "Tracked calls and quote requests as primary conversions.",
    ],
    outcome:
      "The business now has a consistent pipeline of local job leads from Google Search, turning ad spend into scheduled work every week.",
    metrics: [
      { label: "Lead Flow", value: "Weekly" },
      { label: "Targeting", value: "Local" },
      { label: "Channel", value: "Search" },
    ],
  },
  {
    id: "rehab-health",
    client: "Rehab & Health Provider (Undisclosed)",
    industry: "Healthcare & Hospitals",
    platform: "Google Ads",
    description:
      "Patient lead generation for a US rehab and health services provider.",
    image: googleRehab,
    logo: null,
    gradient: "from-indigo-500 to-purple-600",
    featured: false,
    problem:
      "A rehab and health provider needed a steady flow of patient inquiries in a category where trust, compliance, and lead quality matter more than raw volume.",
    steps: [
      "Built compliant search campaigns focused on treatment and admissions-related queries.",
      "Used careful keyword and location targeting to reach people actively seeking help.",
      "Measured calls and admissions inquiries as conversions to optimize for real patients, not clicks.",
    ],
    outcome:
      "The campaigns deliver consistent, qualified patient inquiries month after month, giving the provider a dependable acquisition channel alongside referrals.",
    metrics: [
      { label: "Leads", value: "Consistent" },
      { label: "Quality", value: "Qualified" },
      { label: "Market", value: "USA" },
    ],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

