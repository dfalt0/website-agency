import Link from "next/link";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Website Management", url: "/services/website" },
      { label: "Cloud Infrastructure", url: "/services/cloud" },
      { label: "Security & Monitoring", url: "/services/security" },
      { label: "Custom Development", url: "/services/development" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Small Business", url: "/solutions/small-business" },
      { label: "Ecommerce", url: "/solutions/ecommerce" },
      { label: "Enterprise", url: "/solutions/enterprise" },
      { label: "Agencies", url: "/solutions/agencies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tech Stack Scanner", url: "/scan" },
      { label: "Blog", url: "/blog" },
      { label: "Help Center", url: "/help" },
      { label: "Case Studies", url: "/case-studies" },
      { label: "Documentation", url: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", url: "/about" },
      { label: "Careers", url: "/careers" },
      { label: "Contact", url: "/contact" },
      { label: "Partners", url: "/partners" },
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
    <footer className="bg-dark text-dark-foreground">
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
            © 2026 YourCompany. All rights reserved.
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
