/**
 * Brand + app config for Nodus — digital operations agency.
 * Set NEXT_PUBLIC_APP_URL when the app domain is ready.
 */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.nodus.engineering";

export const BRAND = {
  name: "Nodus",
  legalName: "Nodus Engineering",
  tagline: "Websites, infrastructure, and growth — handled end to end.",
  contactEmail: "hello@nodus.engineering",
} as const;
