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
    client: "Milk for Bubs",
    industry: "Baby & Mother Care E-commerce",
    platform: "Meta Ads",
    description:
      "Scaled a lactation-support brand to a 9.04x yearly ROAS with $431K+ in tracked Meta revenue in 2025.",
    image: milkforbubs2025,
    gradient: "from-purple-500 to-blue-500",
    featured: true,
    problem:
      "Milk for Bubs had a loyal product but an inefficient ad account. Budget was spread across traffic and engagement campaigns that generated clicks, not customers. Purchase tracking was unreliable, CPMs in the mum-and-baby niche were climbing, and the brand had no clear picture of which products or audiences actually drove revenue.",
    steps: [
      "Audited the full account and rebuilt tracking with proper Meta Pixel and Conversions API setup, so every purchase was attributed accurately.",
      "Killed underperforming traffic campaigns and consolidated budget into purchase-optimized sales campaigns around the two hero products: Lactation Cookies and the Premium Mommy Starter Kit.",
      "Ran structured creative testing with benefit-led hooks tailored to new mums, then scaled the winning angles.",
      "Layered in retargeting for engaged shoppers and past visitors, and scaled winning campaigns gradually to protect ROAS.",
    ],
    outcome:
      "In 2025 the account turned $47.7K in ad spend into $431K+ in tracked purchase value at a 9.04x blended ROAS, with 5,357 purchases and 4.6M impressions. The Lactation Cookies campaign alone delivered an 8.84x ROAS on $39K spend, while the Starter Kit campaign hit 9.91x.",
    metrics: [
      { label: "Yearly ROAS", value: "9.04x" },
      { label: "Revenue", value: "$431K+" },
      { label: "Purchases", value: "5,357" },
    ],
  },
  {
    id: "pipe-decor",
    client: "Pipe Decor",
    industry: "Industrial & Pipe Furniture",
    platform: "Meta Ads",
    description:
      "Grew an industrial pipe furniture brand to $417K in yearly Meta revenue while scaling spend 131% year over year.",
    image: pipedecor2025,
    gradient: "from-orange-500 to-red-500",
    featured: true,
    problem:
      "Pipe Decor sells niche industrial pipe furniture and DIY fittings — a category with a narrow audience and a longer consideration window. Revenue had plateaued, the account leaned on a handful of aging campaigns, and the brand wanted to scale spend aggressively without letting ROAS collapse.",
    steps: [
      "Restructured the account around Advantage+ shopping campaigns for prospecting, backed by clean pixel and catalog data.",
      "Built dedicated dynamic and static remarketing campaigns to capture the long consideration cycle typical of furniture buyers.",
      "Tested creative formats and product angles continuously, feeding winners into the scaled campaigns.",
      "Scaled budget in controlled steps — 131% more spend year over year — while monitoring frequency and ROAS at every increase.",
    ],
    outcome:
      "In 2025 the account generated $417K in purchase conversion value from 2,408 purchases — averaging around $52K per month in Meta revenue. Remarketing campaigns sustained 4.4–5.4x ROAS while total spend more than doubled versus the prior year.",
    metrics: [
      { label: "Yearly Revenue", value: "$417K" },
      { label: "Purchases", value: "2,408" },
      { label: "Spend Growth", value: "+131%" },
    ],
  },
  {
    id: "amentara",
    client: "Amentara",
    industry: "Health, Wellness & CBD",
    platform: "Meta Ads",
    description:
      "Built a compliant Meta Ads engine for a CBD mushroom & gummies brand — 4.2x monthly ROAS and ~$60K/month in revenue.",
    image: null,
    gradient: "from-green-500 to-teal-500",
    featured: true,
    problem:
      "Amentara sells mushroom supplements and gummies in the CBD space — one of the hardest categories to advertise on Meta. Ads were getting rejected, the account was at constant risk of restrictions, and there was no reliable way to scale while staying compliant with Meta's policies.",
    steps: [
      "Developed a fully compliant creative and landing page strategy, positioning products around wellness benefits within Meta's policy lines.",
      "Set up resilient tracking with Pixel and Conversions API so optimization signals stayed strong.",
      "Tested angles and creatives systematically to find hooks that converted without triggering policy flags.",
      "Scaled budget gradually month over month, protecting both the account's standing and its return.",
    ],
    outcome:
      "The account now holds a consistent 4.2x monthly ROAS and generates around $60K per month in revenue from Meta Ads — and it's still scaling, with spend increasing every month.",
    metrics: [
      { label: "Monthly ROAS", value: "4.2x" },
      { label: "Monthly Revenue", value: "$60K" },
      { label: "Trend", value: "Scaling" },
    ],
  },
  {
    id: "toys-ecommerce",
    client: "Toys E-commerce Brand",
    industry: "Toys & Educational Products",
    platform: "Google Ads",
    description:
      "Post-holiday Google Ads turnaround for a US toys store — 544% ROAS in January, the hardest month in the category.",
    image: googleToys,
    gradient: "from-blue-500 to-cyan-500",
    featured: false,
    problem:
      "January is brutal for toy brands: demand crashes after the holidays while leftover campaign structures keep spending like it's December. This US toys store needed to stay profitable through the slump instead of pausing ads entirely.",
    steps: [
      "Cleaned up the product feed and restructured shopping campaigns around the products that still sold in Q1.",
      "Cut wasted spend aggressively with negative keywords and device/geo adjustments.",
      "Shifted budget toward remarketing and high-intent search terms rather than broad prospecting.",
    ],
    outcome:
      "The account delivered a 544% ROAS in January 2026 with $3.62K in conversion value from 817 clicks and 70.1K impressions — profitable growth in the category's weakest month.",
    metrics: [
      { label: "ROAS", value: "544%" },
      { label: "Conv. Value", value: "$3.6K" },
      { label: "Impressions", value: "70.1K" },
    ],
  },
  {
    id: "utility-sinks",
    client: "Home Improvement Store",
    industry: "Utility Sinks & Home Fixtures",
    platform: "Google Ads",
    description:
      "380% ROAS for a US utility sinks and home fixtures e-commerce store on Google Ads.",
    image: googleSinks,
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
      "The account reached a 380% ROAS in January 2026 with 785 clicks at a $1.53 average CPC — steady, profitable performance on a high-ticket catalog.",
    metrics: [
      { label: "ROAS", value: "380%" },
      { label: "Avg CPC", value: "$1.53" },
      { label: "Clicks", value: "785" },
    ],
  },
  {
    id: "aesthetic-laser",
    client: "Aesthetic & Laser Center",
    industry: "Healthcare & Med Spa",
    platform: "Google Ads",
    description:
      "High-value patient leads at ~$30 each for a US aesthetic and laser treatment center.",
    image: googleAesthetic,
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
      "January 2026 delivered 15 qualified patient leads on just $443 of spend — roughly $30 per lead for treatments worth hundreds to thousands of dollars each.",
    metrics: [
      { label: "Cost / Lead", value: "~$30" },
      { label: "Leads", value: "15" },
      { label: "Spend", value: "$443" },
    ],
  },
  {
    id: "antiques",
    client: "Antiques Dealer",
    industry: "Jewelry & Antiques",
    platform: "Google Ads",
    description:
      "Qualified buyer leads for a US antiques business in a niche, high-value market.",
    image: googleAntiques,
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
      "The campaigns produce a steady flow of qualified, high-intent leads — with individual antique transactions large enough that a handful of leads per week pays for the entire program.",
    metrics: [
      { label: "Lead Quality", value: "High-intent" },
      { label: "Market", value: "USA" },
      { label: "Channel", value: "Search" },
    ],
  },
  {
    id: "tile-restoration",
    client: "Tile Restoration Company",
    industry: "Home Services",
    platform: "Google Ads",
    description:
      "Local lead generation for a US tile restoration service business.",
    image: googleTile,
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
    client: "Rehab & Health Provider",
    industry: "Healthcare & Hospitals",
    platform: "Google Ads",
    description:
      "Patient lead generation for a US rehab and health services provider.",
    image: googleRehab,
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
