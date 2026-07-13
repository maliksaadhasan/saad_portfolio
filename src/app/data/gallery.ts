// Meta Ads screenshots
import milkforbubs2025 from "@/assets/gallery/milkforbubs-2025.png";
import milkforbubsMax from "@/assets/gallery/milkforbubs-max.png";
import mfbJan2025 from "@/assets/gallery/mfb-jan2025.png";
import mfbFeb2025 from "@/assets/gallery/mfb-feb2025.png";
import mfbMar2025 from "@/assets/gallery/mfb-mar2025.png";
import mfbApr2025 from "@/assets/gallery/mfb-apr2025.png";
import mfbMay2025 from "@/assets/gallery/mfb-may2025.png";
import mfbJun2025 from "@/assets/gallery/mfb-jun2025.png";
import mfbJul2025 from "@/assets/gallery/mfb-jul2025.png";
import mfbAug2025 from "@/assets/gallery/mfb-aug2025.png";
import mfbSep2025 from "@/assets/gallery/mfb-sep2025.png";
import mfbOct2025 from "@/assets/gallery/mfb-oct2025.png";
import mfbNov2025 from "@/assets/gallery/mfb-nov2025.png";
import mfbDec2025 from "@/assets/gallery/mfb-dec2025.png";
import mfbJan2026 from "@/assets/gallery/mfb-jan2026.png";
import mfbFeb2026 from "@/assets/gallery/mfb-feb2026.png";
import mfbMar2026 from "@/assets/gallery/mfb-mar2026.png";
import pipedecor2025 from "@/assets/gallery/pipedecor-2025.png";
import pipedecor2025Full from "@/assets/gallery/pipedecor-2025-full.png";
import pipedecorFeb2026 from "@/assets/gallery/pipedecor-feb2026.png";
import metaResults1 from "@/assets/gallery/meta-results-1.png";
import metaResults2 from "@/assets/gallery/meta-results-2.jpg";
import metaResults3 from "@/assets/gallery/meta-results-3.jpg";
import metaResults4 from "@/assets/gallery/meta-results-4.jpg";
import metaResults5 from "@/assets/gallery/meta-results-5.jpg";
import metaResults6 from "@/assets/gallery/meta-results-6.jpg";

// Google Ads screenshots
import googleToysJan2026 from "@/assets/gallery/google-toys-jan2026.png";
import googleToysApril from "@/assets/gallery/google-toys-april.png";
import googleToysMay from "@/assets/gallery/google-toys-may.png";
import googleKidsToys from "@/assets/gallery/google-kids-toys.png";
import googleSinks from "@/assets/gallery/google-sinks.png";
import googleAesthetic from "@/assets/gallery/google-aesthetic.png";
import googleAntiques from "@/assets/gallery/google-antiques.png";
import googleTile from "@/assets/gallery/google-tile.png";
import googleRehab from "@/assets/gallery/google-rehab.png";
import googleLeadgen1 from "@/assets/gallery/google-leadgen-1.png";
import googleLeadgen2 from "@/assets/gallery/google-leadgen-2.png";
import googleWeekly from "@/assets/gallery/google-weekly.png";

export interface GalleryItem {
  src: string;
  caption: string;
  platform: "Meta Ads" | "Google Ads";
}

export const galleryItems: GalleryItem[] = [
  // Meta — headline results
  { src: milkforbubs2025, caption: "Milk for Bubs — Full Year 2025 (9.04x ROAS, $431K+ revenue)", platform: "Meta Ads" },
  { src: milkforbubsMax, caption: "Milk for Bubs — Account Lifetime Results", platform: "Meta Ads" },
  { src: pipedecor2025, caption: "Pipe Decor — 2025 Results ($417K purchase value, 2,408 purchases)", platform: "Meta Ads" },
  { src: pipedecor2025Full, caption: "Pipe Decor — 2025 vs 2024 (+131% spend scaled profitably)", platform: "Meta Ads" },
  { src: pipedecorFeb2026, caption: "Pipe Decor — February 2026 (4.78x average ROAS)", platform: "Meta Ads" },
  // Meta — Milk for Bubs monthlies
  { src: mfbJan2025, caption: "Milk for Bubs — January 2025", platform: "Meta Ads" },
  { src: mfbFeb2025, caption: "Milk for Bubs — February 2025", platform: "Meta Ads" },
  { src: mfbMar2025, caption: "Milk for Bubs — March 2025", platform: "Meta Ads" },
  { src: mfbApr2025, caption: "Milk for Bubs — April 2025", platform: "Meta Ads" },
  { src: mfbMay2025, caption: "Milk for Bubs — May 2025", platform: "Meta Ads" },
  { src: mfbJun2025, caption: "Milk for Bubs — June 2025", platform: "Meta Ads" },
  { src: mfbJul2025, caption: "Milk for Bubs — July 2025", platform: "Meta Ads" },
  { src: mfbAug2025, caption: "Milk for Bubs — August 2025", platform: "Meta Ads" },
  { src: mfbSep2025, caption: "Milk for Bubs — September 2025", platform: "Meta Ads" },
  { src: mfbOct2025, caption: "Milk for Bubs — October 2025", platform: "Meta Ads" },
  { src: mfbNov2025, caption: "Milk for Bubs — November 2025", platform: "Meta Ads" },
  { src: mfbDec2025, caption: "Milk for Bubs — December 2025", platform: "Meta Ads" },
  { src: mfbJan2026, caption: "Milk for Bubs — January 2026", platform: "Meta Ads" },
  { src: mfbFeb2026, caption: "Milk for Bubs — February 2026", platform: "Meta Ads" },
  { src: mfbMar2026, caption: "Milk for Bubs — March 2026", platform: "Meta Ads" },
  // Meta — other results
  { src: metaResults1, caption: "Meta Ads — Campaign Results", platform: "Meta Ads" },
  { src: metaResults2, caption: "Meta Ads — Campaign Results", platform: "Meta Ads" },
  { src: metaResults3, caption: "Meta Ads — Campaign Results", platform: "Meta Ads" },
  { src: metaResults4, caption: "Meta Ads — Campaign Results", platform: "Meta Ads" },
  { src: metaResults5, caption: "Meta Ads — Campaign Results", platform: "Meta Ads" },
  { src: metaResults6, caption: "Meta Ads — Campaign Results", platform: "Meta Ads" },
  // Google
  { src: googleToysJan2026, caption: "Toys E-commerce (USA) — January 2026 (544% ROAS)", platform: "Google Ads" },
  { src: googleToysApril, caption: "Toys E-commerce (USA) — April Results", platform: "Google Ads" },
  { src: googleToysMay, caption: "Toys E-commerce (USA) — May Results", platform: "Google Ads" },
  { src: googleKidsToys, caption: "Kids Toys E-commerce (USA) — Shopping Campaigns", platform: "Google Ads" },
  { src: googleSinks, caption: "Utility Sinks & Home Fixtures (USA) — 380% ROAS", platform: "Google Ads" },
  { src: googleAesthetic, caption: "Aesthetic & Laser Center (USA) — 15 leads at ~$30 each", platform: "Google Ads" },
  { src: googleAntiques, caption: "Antiques Dealer (USA) — Lead Generation", platform: "Google Ads" },
  { src: googleTile, caption: "Tile Restoration (USA) — Local Lead Generation", platform: "Google Ads" },
  { src: googleRehab, caption: "Rehab & Health (USA) — Patient Lead Generation", platform: "Google Ads" },
  { src: googleLeadgen1, caption: "Lead Generation (USA) — Search Campaigns", platform: "Google Ads" },
  { src: googleLeadgen2, caption: "Lead Generation (USA) — Search Campaigns", platform: "Google Ads" },
  { src: googleWeekly, caption: "Weekly Performance Snapshot", platform: "Google Ads" },
];
