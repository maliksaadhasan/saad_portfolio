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
  id: string;
  src: string;
  caption: string;
  platform: "Meta Ads" | "Google Ads";
}

export interface GalleryFolder {
  id: string;
  isFolder: true;
  title: string;
  subtitle: string;
  roas: string;
  platform: "Meta Ads" | "Google Ads";
  coverImage: string;
  items: GalleryItem[];
}

export type GalleryEntry = GalleryItem | GalleryFolder;

export const milkForBubsFolder: GalleryFolder = {
  id: "milk-for-bubs-folder",
  isFolder: true,
  title: "Milk for Bubs: Full Year Meta Ads Performance Folder",
  subtitle: "Complete Monthly Ad Manager Screenshots (2025 to 2026)",
  roas: "9.04x Yearly ROAS ($431K+ Revenue, 5,357 Purchases)",
  platform: "Meta Ads",
  coverImage: milkforbubs2025,
  items: [
    { id: "mfb-2025", src: milkforbubs2025, caption: "Milk for Bubs: Full Year 2025 Summary (9.04x ROAS, $431K+ Revenue, 5,357 Purchases)", platform: "Meta Ads" },
    { id: "mfb-max", src: milkforbubsMax, caption: "Milk for Bubs: Account Lifetime Cumulative Results", platform: "Meta Ads" },
    { id: "mfb-jan25", src: mfbJan2025, caption: "Milk for Bubs: January 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-feb25", src: mfbFeb2025, caption: "Milk for Bubs: February 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-mar25", src: mfbMar2025, caption: "Milk for Bubs: March 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-apr25", src: mfbApr2025, caption: "Milk for Bubs: April 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-may25", src: mfbMay2025, caption: "Milk for Bubs: May 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-jun25", src: mfbJun2025, caption: "Milk for Bubs: June 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-jul25", src: mfbJul2025, caption: "Milk for Bubs: July 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-aug25", src: mfbAug2025, caption: "Milk for Bubs: August 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-sep25", src: mfbSep2025, caption: "Milk for Bubs: September 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-oct25", src: mfbOct2025, caption: "Milk for Bubs: October 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-nov25", src: mfbNov2025, caption: "Milk for Bubs: November 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-dec25", src: mfbDec2025, caption: "Milk for Bubs: December 2025 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-jan26", src: mfbJan2026, caption: "Milk for Bubs: January 2026 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-feb26", src: mfbFeb2026, caption: "Milk for Bubs: February 2026 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
    { id: "mfb-mar26", src: mfbMar2026, caption: "Milk for Bubs: March 2026 Monthly Meta Ads Manager Results", platform: "Meta Ads" },
  ],
};

export const galleryEntries: GalleryEntry[] = [
  // Milk for Bubs dedicated folder card
  milkForBubsFolder,

  // Pipe Decor Meta Ads
  { id: "pd-2025", src: pipedecor2025, caption: "Pipe Decor: 2025 Results ($417K purchase value, 2,408 purchases)", platform: "Meta Ads" },
  { id: "pd-full", src: pipedecor2025Full, caption: "Pipe Decor: 2025 vs 2024 (+131% spend scaled profitably)", platform: "Meta Ads" },
  { id: "pd-feb26", src: pipedecorFeb2026, caption: "Pipe Decor: February 2026 (4.78x average ROAS)", platform: "Meta Ads" },

  // Meta Ads Campaign Screenshots
  { id: "meta-1", src: metaResults1, caption: "Meta Ads: Campaign Results Overview", platform: "Meta Ads" },
  { id: "meta-2", src: metaResults2, caption: "Meta Ads: Sales Campaign Performance", platform: "Meta Ads" },
  { id: "meta-3", src: metaResults3, caption: "Meta Ads: Retargeting & Catalog Performance", platform: "Meta Ads" },
  { id: "meta-4", src: metaResults4, caption: "Meta Ads: Prospecting Ad Set Breakdown", platform: "Meta Ads" },
  { id: "meta-5", src: metaResults5, caption: "Meta Ads: Scaling Campaign Dashboard", platform: "Meta Ads" },
  { id: "meta-6", src: metaResults6, caption: "Meta Ads: Conversion Attribution Metrics", platform: "Meta Ads" },

  // Google Ads Screenshots
  { id: "g-toys-jan", src: googleToysJan2026, caption: "Biggo Blocks E-commerce: January 2026 (544% ROAS)", platform: "Google Ads" },
  { id: "g-toys-apr", src: googleToysApril, caption: "Biggo Blocks E-commerce: April Shopping Campaign Results", platform: "Google Ads" },
  { id: "g-toys-may", src: googleToysMay, caption: "Biggo Blocks E-commerce: May Campaign Scale Results", platform: "Google Ads" },
  { id: "g-kids-toys", src: googleKidsToys, caption: "Kids Building Blocks E-commerce: Shopping Campaigns", platform: "Google Ads" },
  { id: "g-sinks", src: googleSinks, caption: "Utility Sinks & Home Fixtures: 380% ROAS", platform: "Google Ads" },
  { id: "g-aesthetic", src: googleAesthetic, caption: "Aesthetic & Laser Center: 15 patient leads at ~$30 each", platform: "Google Ads" },
  { id: "g-antiques", src: googleAntiques, caption: "Antiques Dealer: High-Intent Lead Generation", platform: "Google Ads" },
  { id: "g-tile", src: googleTile, caption: "Tile Restoration: Local Service Lead Generation", platform: "Google Ads" },
  { id: "g-rehab", src: googleRehab, caption: "Rehab & Health: Patient Lead Generation", platform: "Google Ads" },
  { id: "g-leadgen-1", src: googleLeadgen1, caption: "Lead Generation: Search Campaign Metrics", platform: "Google Ads" },
  { id: "g-leadgen-2", src: googleLeadgen2, caption: "Lead Generation: High-Intent Keyword Performance", platform: "Google Ads" },
  { id: "g-weekly", src: googleWeekly, caption: "Weekly Performance Snapshot Dashboard", platform: "Google Ads" },
];
