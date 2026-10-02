import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Nodus",
  description:
    "Free discovery conversation with Nodus — websites, infrastructure, and growth creatives handled end to end.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
