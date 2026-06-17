import Link from "next/link";
import { BRAND } from "@/lib/config";

const footerColumns = [
  {
    title: "AI Engineering",
    links: [
      { label: "Consulting & custom AI", url: "/#ai-engineering" },
      { label: "Custom MCPs", url: "/#ai-engineering" },
      { label: "Discovery call", url: "/contact" },
      { label: "Intake form", url: "/start" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Managed hosting", url: "/#services" },
      { label: "Cloud infrastructure", url: "/#services" },
      { label: "Security & monitoring", url: "/#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Stack & AI scan", url: "/scan" },
      { label: "Integrations", url: "/integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", url: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy", url: "/privacy" },
  { label: "Terms", url: "/terms" },
  { label: "Security", url: "/security" },
];

export default function Footer() {
  return (
    <footer className="-mt-px bg-dark text-dark-foreground">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="border-b border-dark-foreground/10 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-dark-foreground">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="text-sm text-dark-foreground/60 transition-colors hover:text-dark-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <div className="text-sm text-dark-foreground/60">
            © 2026 {BRAND.name}. All rights reserved.
          </div>
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-sm text-dark-foreground/60 transition-colors hover:text-dark-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
