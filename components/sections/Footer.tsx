import Link from "next/link";
import { BRAND } from "@/lib/config";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Websites & products", url: "/#services" },
      { label: "Infrastructure", url: "/#services" },
      { label: "Growth creatives", url: "/#services" },
      { label: "Pricing", url: "/#pricing" },
    ],
  },
  {
    title: "Start",
    links: [
      { label: "Discovery call", url: "/contact" },
      { label: "Intake form", url: "/start" },
      { label: "Stack scanner", url: "/scan" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How we work", url: "/#process" },
      { label: "Contact", url: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="-mt-px bg-dark text-dark-foreground">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-16">
        <div className="border-b border-dark-foreground/10 py-16" style={{ borderWidth: "0.5px" }}>
          <div className="mb-12 max-w-md">
            <p className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[#E2E8E2]">
              {BRAND.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-dark-foreground/60">{BRAND.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-dark-foreground">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
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

        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-sm text-dark-foreground/50">
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
          </p>
          <a
            href={`mailto:${BRAND.contactEmail}`}
            className="font-mono text-xs text-emerald/80 transition-colors hover:text-emerald"
          >
            {BRAND.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
