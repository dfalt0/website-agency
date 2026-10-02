/**
 * Transfer / lead flow — qualify goals for websites, infra, and growth.
 */

export type TransferIntent =
  | "new_website"
  | "redesign"
  | "managed_hosting"
  | "growth_creatives"
  | "full_ops";

export type TransferServiceType =
  | "website"
  | "domain"
  | "vercel"
  | "wix"
  | "squarespace"
  | "shopify"
  | "wordpress"
  | "other";

export type TransferPath = "discover" | "build" | "stay" | "migrate";

export interface ContactInfo {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  industry: string;
  note: string;
}

export interface TransferState {
  step: 1 | 2 | 3 | 4;
  intents: TransferIntent[];
  serviceTypes: TransferServiceType[];
  path: TransferPath | null;
  contact: ContactInfo;
}

export const INTENT_OPTIONS: Record<TransferIntent, { label: string; short: string }> = {
  new_website: {
    label: "Build a new website or product",
    short: "From scratch or a serious rebuild — design, engineering, and launch.",
  },
  redesign: {
    label: "Refresh an existing site",
    short: "It works, but it looks dated or converts poorly. We redesign and re-platform if needed.",
  },
  managed_hosting: {
    label: "Managed hosting & infrastructure",
    short: "Keep the site live, secure, and updated without hiring an in-house ops person.",
  },
  growth_creatives: {
    label: "Growth content & ad creatives",
    short: "Landing pages, campaign visuals, and copy that match the product we build or run.",
  },
  full_ops: {
    label: "Full digital ops partnership",
    short: "Site + infra + ongoing creatives under one retainer. Start-to-finish ownership.",
  },
};

export const SERVICE_OPTIONS: Record<
  TransferServiceType,
  { label: string; short: string; id?: string }
> = {
  website: {
    label: "Custom website",
    short: "A site built with code or a builder we don't list below.",
  },
  domain: {
    label: "Domain only",
    short: "You own a domain and want us to manage DNS, SSL, or point it somewhere.",
  },
  vercel: {
    label: "Vercel project",
    short: "Frontend or fullstack app hosted on Vercel.",
  },
  wix: {
    label: "Wix site",
    short: "Site on Wix — manage as-is or plan a move.",
  },
  squarespace: {
    label: "Squarespace site",
    short: "Site on Squarespace — design, content, or migration.",
  },
  shopify: {
    label: "Shopify store",
    short: "Ecommerce on Shopify — theme, apps, and ops.",
  },
  wordpress: {
    label: "WordPress site",
    short: "WordPress or WooCommerce — hosting, plugins, updates.",
  },
  other: {
    label: "Something else",
    short: "AWS, custom stack, or a mix. Tell us next.",
  },
};

export const PATH_OPTIONS: Record<TransferPath, { label: string; short: string; badge?: string }> = {
  discover: {
    label: "Discovery call first",
    short: "Map goals, stack, and budget — then propose a clear engagement.",
  },
  build: {
    label: "Scoped project build",
    short: "Fixed-scope website, redesign, or migration with a clear deliverable.",
  },
  stay: {
    label: "Manage what we have",
    short: "Keep your current platform. We join as your ops and engineering team.",
  },
  migrate: {
    label: "Migrate to a modern stack",
    short: "Move off a limiting builder onto hosting we can own and scale.",
    badge: "Project + retainer",
  },
};

export const TEAM_SIZE_OPTIONS = ["1–10", "11–50", "51–200", "201–500", "500+"] as const;
