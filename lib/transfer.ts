/**
 * Transfer flow types – aligns with Process steps (Share → We bring it → Launch).
 */

export type TransferServiceType =
  | "website"
  | "domain"
  | "vercel"
  | "wix"
  | "squarespace"
  | "shopify"
  | "wordpress"
  | "other";

export type TransferPath = "stay" | "migrate";

export type TransferAIFeature =
  | "chatbot"
  | "analytics"
  | "content"
  | "search"
  | "automation"
  | "personalization"
  | "seo"
  | "moderation"
  | "none";

export interface TransferState {
  step: 1 | 2 | 3 | 4;
  /** Multiple service types can be selected; more than one is a paid feature. */
  serviceTypes: TransferServiceType[];
  path: TransferPath | null;
  /** AI features the user wants to integrate (if possible). Empty or ["none"] = skip. */
  aiFeatures: TransferAIFeature[];
}

export const AI_FEATURE_OPTIONS: Record<
  TransferAIFeature,
  { label: string; short: string }
> = {
  chatbot: {
    label: "Help chatbot / Live chat",
    short: "AI-powered chat that answers visitor questions. Many platforms have built-in options we can set up for you.",
  },
  analytics: {
    label: "Analytics & insights",
    short: "AI dashboards, trend detection, and recommendations so you understand how your site or store performs.",
  },
  content: {
    label: "Content & copywriting",
    short: "AI suggestions for pages, product descriptions, or marketing copy. We plug in the right tools for your stack.",
  },
  search: {
    label: "Search & recommendations",
    short: "Smarter site search or product recommendations so visitors find what they need faster.",
  },
  automation: {
    label: "Automation & workflows",
    short: "AI-assisted form handling, lead triage, or routine tasks so you spend less time on repetitive work.",
  },
  personalization: {
    label: "Personalization",
    short: "Tailored content or offers per visitor. We help configure this where your platform supports it.",
  },
  seo: {
    label: "SEO & performance",
    short: "AI-driven suggestions for SEO, speed, and structure. Great for sites that already have basics in place.",
  },
  moderation: {
    label: "Moderation & safety",
    short: "AI for content moderation, spam filtering, or review handling so you stay in control at scale.",
  },
  none: {
    label: "None / Not sure yet",
    short: "Skip for now. We can add or configure AI features later once you’re onboarded.",
  },
};

export const SERVICE_OPTIONS: Record<
  TransferServiceType,
  { label: string; short: string; id?: string }
> = {
  website: {
    label: "Custom website",
    short: "A site built with code or a builder we don’t list below.",
  },
  domain: {
    label: "Domain only",
    short: "You own a domain and want us to manage DNS, SSL, or point it somewhere.",
  },
  vercel: {
    label: "Vercel project",
    short: "Frontend or fullstack app hosted on Vercel. We’ll manage deploys and config.",
  },
  wix: {
    label: "Wix site",
    short: "Site on Wix. We can manage it as-is or plan a move to a more flexible stack.",
  },
  squarespace: {
    label: "Squarespace site",
    short: "Site on Squarespace. We manage design and content or help you migrate.",
  },
  shopify: {
    label: "Shopify store",
    short: "E‑commerce on Shopify. We handle theme, apps, and operations.",
  },
  wordpress: {
    label: "WordPress site",
    short: "WordPress or WooCommerce. We handle hosting, plugins, and updates.",
  },
  other: {
    label: "Something else",
    short: "AWS, Hostinger, another host, or a custom setup. Tell us in the next step.",
  },
};
