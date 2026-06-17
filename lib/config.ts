/**
 * App and site config.
 * Set NEXT_PUBLIC_APP_URL in .env when the app domain is ready.
 */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.nodus.engineering";

export const BRAND = {
  name: "Nodus Engineering",
  shortName: "Nodus",
  tagline: "Custom AI built with engineers — not prompts into the void.",
  contactEmail: "hello@nodus.engineering",
} as const;
