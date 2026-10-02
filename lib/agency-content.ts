/**
 * Agency offer copy — websites, infra, growth content. Start-to-finish ownership.
 */

export const PILLARS = [
  {
    id: "WEB-01",
    title: "Websites & products",
    description:
      "Design, build, and launch sites and web apps that look sharp and convert. We stay on after launch — updates, features, and polish included.",
    points: ["Custom builds & redesigns", "Ecommerce & marketing sites", "Ongoing product engineering"],
  },
  {
    id: "INF-02",
    title: "Infrastructure & hosting",
    description:
      "Cloud, domains, security, and uptime — so your stack doesn’t become a second job. We monitor, patch, and scale as you grow.",
    points: ["Managed hosting & deploys", "Security & monitoring", "Migrations without downtime"],
  },
  {
    id: "GRW-03",
    title: "Growth content & creatives",
    description:
      "Ad creatives, landing copy, and campaign visuals that support what we build — not a disconnected content mill. Useful assets for real campaigns.",
    points: ["Ad creatives & landing pages", "Brand-consistent campaign visuals", "Copy that matches the product"],
  },
] as const;

export const JOURNEY = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, audience, and goals — then map what to build, host, and promote first.",
  },
  {
    number: "02",
    title: "Build & launch",
    description:
      "Design and engineering in one lane. You get a live site or product, not a folder of unfinished mockups.",
  },
  {
    number: "03",
    title: "Operate",
    description:
      "Hosting, updates, security, and content support on a clear retainer — so momentum doesn’t die after launch day.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "New features, campaigns, and creatives as you expand. One team that already knows your stack and brand.",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "One team, end to end",
    description: "Design, engineering, infra, and growth creatives under one roof — fewer handoffs, fewer excuses.",
  },
  {
    title: "Built for operating businesses",
    description: "You’re already running. We plug into how you work and ship what moves the needle — not vanity side projects.",
  },
  {
    title: "Stay after launch",
    description: "Most agencies disappear. We keep the site live, the stack healthy, and the campaigns supplied.",
  },
] as const;

export const COMPARISON = [
  { feature: "Ownership after launch", diy: "You alone", agencies: "Often ends at launch", nodus: "Ongoing ops included" },
  { feature: "Infra & security", diy: "DIY or another vendor", agencies: "Usually out of scope", nodus: "Part of the engagement" },
  { feature: "Growth creatives", diy: "Freelance scramble", agencies: "Separate retainer", nodus: "Aligned with what we build" },
  { feature: "Engineering depth", diy: "Limited by your time", agencies: "Varies wildly", nodus: "Real engineers on the account" },
  { feature: "Communication", diy: "N/A", agencies: "Account manager maze", nodus: "Direct with builders" },
] as const;
