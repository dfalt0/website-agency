/**
 * Transfer / lead flow types — qualify stack and path, capture contact on step 3, confirm on step 4.
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

export interface ContactInfo {
  name: string;
  email: string;
  note: string;
}

export interface TransferState {
  step: 1 | 2 | 3 | 4;
  serviceTypes: TransferServiceType[];
  path: TransferPath | null;
  contact: ContactInfo;
}

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
