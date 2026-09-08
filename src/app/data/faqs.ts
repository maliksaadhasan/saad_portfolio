export interface Faq {
  question: string;
  /**
   * Kept to roughly 40-60 words and written to stand alone. Answer engines lift
   * a single self-contained paragraph, so each answer has to make sense without
   * the question or anything around it.
   */
  answer: string;
  category: string;
}

export const faqs: Faq[] = [
  {
    question: "What does a performance marketer actually do?",
    answer:
      "A performance marketer runs paid advertising that is measured against revenue rather than impressions. That means building the tracking, structuring campaigns around conversion objectives, testing creative systematically, and scaling budget only where return holds. Every decision is tied to a number: cost per acquisition, return on ad spend, or qualified leads.",
    category: "Working together",
  },
  {
    question: "How much should I spend on ads to start?",
    answer:
      "For e-commerce, $3,000 per month is a realistic floor. Below that, Meta and Google cannot gather the 50 weekly conversions an ad set needs to exit the learning phase, so results stay volatile. Lead-generation accounts in low-competition niches can start closer to $1,500 per month.",
    category: "Budget and pricing",
  },
  {
    question: "How long before I see results from paid ads?",
    answer:
      "Expect two to four weeks before performance stabilises. The first week is tracking validation and campaign launch, the second and third are learning phase and creative testing, and meaningful optimisation starts once there is enough conversion data. Accounts with broken tracking take longer because the first job is fixing measurement.",
    category: "Working together",
  },
  {
    question: "What is a good ROAS?",
    answer:
      "A good return on ad spend depends entirely on your margin. A brand with 70% gross margin can be profitable at 2x, while a 25% margin business needs 4x or more to break even. Rather than chasing a benchmark, work out your break-even ROAS first, then target above it.",
    category: "Results and reporting",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "Meta Ads across Facebook and Instagram, Google Ads including Search, Performance Max, Demand Gen and YouTube, and Klaviyo for email and SMS flows. Most accounts run Meta and Google together, because prospecting on Meta and capturing existing demand on Google solve different problems.",
    category: "Services",
  },
  {
    question: "Do you set up conversion tracking, or do I need a developer?",
    answer:
      "Tracking setup is included. That covers Meta Pixel with the server-side Conversions API and event deduplication, Google Ads conversion actions, GA4, and Google Tag Manager. Tracking is fixed before any budget is scaled, because an optimisation engine cannot optimise toward signals it never receives.",
    category: "Services",
  },
  {
    question: "What industries have you worked with?",
    answer:
      "Fifteen and counting, including e-commerce and DTC, fashion and apparel, beauty and skincare, jewellery and antiques, home decor and improvement, toys and educational products, health and wellness including CBD, healthcare, insurance, renewable energy, and local service businesses such as roofing, plumbing and pest control.",
    category: "Working together",
  },
  {
    question: "Can you advertise restricted products like CBD?",
    answer:
      "Yes. Restricted categories such as CBD require compliant landing pages, carefully worded creative, and account structures that survive review. I have scaled CBD accounts on Meta within policy. The constraint is real but workable when compliance is designed in from the start rather than patched afterwards.",
    category: "Services",
  },
  {
    question: "What is the difference between vertical and horizontal scaling?",
    answer:
      "Vertical scaling means increasing budget on campaigns that already work, typically 15 to 20 percent every three to four days so the algorithm is not shocked. Horizontal scaling means adding new ad sets, audiences, placements or creative angles at existing budget. Vertical raises spend, horizontal raises capacity.",
    category: "Campaign management",
  },
  {
    question: "Why did my ROAS drop after I increased the budget?",
    answer:
      "Large or sudden budget increases push campaigns back into the learning phase, where delivery is unstable and cost per result rises. Raising budget more than about 20 percent at once is the usual cause. Frequency climbing above 2.5 on prospecting audiences is the other common culprit, and that is creative fatigue rather than budget.",
    category: "Campaign management",
  },
  {
    question: "How often will I get reports?",
    answer:
      "Weekly reporting on spend, revenue, ROAS, cost per acquisition and what changed, plus a monthly review covering trends and the plan for the next period. You keep full ownership of and access to every ad account, pixel and analytics property throughout.",
    category: "Results and reporting",
  },
  {
    question: "Do I keep ownership of my ad accounts?",
    answer:
      "Always. Campaigns are built inside your own Meta Business Manager, Google Ads and Klaviyo accounts, with access granted to me rather than the other way around. If we stop working together you keep every campaign, pixel, audience and historical data set.",
    category: "Working together",
  },
  {
    question: "Do you work with brands outside your time zone?",
    answer:
      "Yes. Clients span the United States, United Kingdom, Australia and the Middle East, and paid media does not require constant overlap. Reporting is asynchronous, and calls are scheduled inside your working hours rather than mine.",
    category: "Working together",
  },
  {
    question: "How do I know my tracking is actually working?",
    answer:
      "Check that a test purchase appears in Meta Events Manager with the correct value and currency, that it is marked as received from both browser and server, and that the event deduplication rate is high. In Google Ads, the conversion action should show recent conversions rather than a warning about no recent activity.",
    category: "Results and reporting",
  },
];

/** Preserves first-appearance order rather than sorting alphabetically. */
export const faqCategories: string[] = faqs.reduce<string[]>((acc, f) => {
  if (!acc.includes(f.category)) acc.push(f.category);
  return acc;
}, []);
