import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Nodus Engineering",
  description:
    "Free discovery conversation for operating businesses exploring custom AI apps, MCPs, and engineered solutions — not generic SaaS.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
