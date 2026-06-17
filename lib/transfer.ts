/**
 * Transfer / lead flow types — qualify intent, stack, path, and contact on step 3.
 */

export type TransferIntent =
  | "ai_discovery"
  | "custom_ai_app"
  | "workflow_automation"
  | "mcp_skills"
  | "managed_hosting";

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

export const INTENT_OPTIONS: Record<
  TransferIntent,
  { label: string; short: string }
> = {
  ai_discovery: {
    label: "Explore AI for my business",
    short: "I know AI matters but don't know where to start. I want a roadmap grounded in how we actually operate.",
  },
  custom_ai_app: {
    label: "Build a custom AI app or internal tool",
    short: "A real product — dashboards, portals, operator tools — not a chatbot wrapper.",
  },
  workflow_automation: {
    label: "Automate a specific workflow",
    short: "One painful process end-to-end: quoting, intake, support routing, reporting, etc.",
  },
  mcp_skills: {
    label: "Custom MCPs or agent skills",
    short: "Wire our CRM, ERP, or internal APIs into Cursor, Claude, or our own agent stack.",
  },
  managed_hosting: {
    label: "Managed hosting & web services",
    short: "Keep my site or store running — maintenance, security, migrations, ongoing engineering.",
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
    short: "Frontend or fullstack app hosted on Vercel. We'll manage deploys and config.",
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
    short: "AWS, custom stack, internal tools, or a mix. Tell us in the next step.",
  },
};

export const PATH_OPTIONS: Record<TransferPath, { label: string; short: string; badge?: string }> = {
  discover: {
    label: "Discovery & roadmap",
    short: "A focused session to map operations, prioritize use cases, and recommend what to build first.",
  },
  build: {
    label: "Scoped build with engineers",
    short: "We prototype and ship a defined product — custom app, MCP, automation, or integration.",
  },
  stay: {
    label: "Manage what we have",
    short: "Keep your current platform. We join as your engineering team — no migration required.",
  },
  migrate: {
    label: "Migrate to our stack",
    short: "Move to modern hosting and infrastructure for better performance and control.",
    badge: "Paid tiers",
  },
};

export const TEAM_SIZE_OPTIONS = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "500+",
] as const;
