import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
}

function setMetaTag(name: string, content: string, attribute: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(data: Record<string, unknown>) {
  const id = "seo-jsonld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const BASE_URL = "https://www.maliksaadhasan.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    // Title
    document.title = meta.title;

    // Standard meta
    setMetaTag("description", meta.description);
    setMetaTag("author", "Saad Hasan");

    // Open Graph
    setMetaTag("og:title", meta.ogTitle || meta.title, "property");
    setMetaTag("og:description", meta.ogDescription || meta.description, "property");
    setMetaTag("og:image", meta.ogImage || DEFAULT_OG_IMAGE, "property");
    setMetaTag("og:type", meta.ogType || "website", "property");
    setMetaTag("og:site_name", "Saad Hasan | Performance Marketer", "property");
    setMetaTag("og:url", meta.canonical || `${BASE_URL}${window.location.pathname}`, "property");

    // Twitter Card
    setMetaTag("twitter:card", "summary_large_image", "name");
    setMetaTag("twitter:title", meta.ogTitle || meta.title, "name");
    setMetaTag("twitter:description", meta.ogDescription || meta.description, "name");
    setMetaTag("twitter:image", meta.ogImage || DEFAULT_OG_IMAGE, "name");

    // Canonical
    setCanonical(meta.canonical || `${BASE_URL}${window.location.pathname}`);

    // JSON-LD
    if (meta.jsonLd) {
      setJsonLd(meta.jsonLd);
    }
  }, [meta.title, meta.description, meta.canonical, meta.ogTitle, meta.ogDescription, meta.ogImage, meta.ogType, meta.jsonLd]);
}
