import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Integration compatibility | Managed Web Services",
  description:
    "Service compatibility and migration support for AWS, Google Cloud, Azure, Shopify, Vercel, and WordPress.",
};

const SECTIONS = [
  {
    id: "aws",
    name: "AWS",
    summary:
      "We migrate and manage workloads on Amazon Web Services including EC2, Lambda, RDS, S3, CloudFront, and Route 53.",
    compatibility: [
      "EC2 instances: lift-and-shift, resizing, and ongoing management",
      "Serverless: Lambda, API Gateway, and event-driven architecture",
      "Databases: RDS (PostgreSQL, MySQL), Aurora, DynamoDB",
      "Storage & CDN: S3, CloudFront, and transfer optimization",
      "DNS & networking: Route 53, VPC, and security groups",
    ],
  },
  {
    id: "gcp",
    name: "Google Cloud",
    summary:
      "Full support for Google Cloud Platform: Compute Engine, Cloud Run, BigQuery, and GCS with managed operations and cost optimization.",
    compatibility: [
      "Compute: Compute Engine, GKE, Cloud Run, and App Engine",
      "Storage: Cloud Storage, Filestore, and persistent disks",
      "Data: BigQuery, Cloud SQL, Firestore, and Pub/Sub",
      "Networking: Cloud Load Balancing, Cloud CDN, and VPC",
      "Identity & security: IAM, Cloud Armor, and Secret Manager",
    ],
  },
  {
    id: "azure",
    name: "Azure",
    summary:
      "We support Azure Virtual Machines, App Service, Azure SQL, Blob Storage, and Azure Front Door with migration and day-two operations.",
    compatibility: [
      "Compute: Virtual Machines, App Service, Functions, and AKS",
      "Data: Azure SQL, Cosmos DB, and Blob Storage",
      "Networking: Virtual Network, Front Door, and Load Balancer",
      "Identity: Entra ID (Azure AD) and managed identities",
      "DevOps: Azure DevOps pipelines and GitHub Actions integration",
    ],
  },
  {
    id: "shopify",
    name: "Shopify",
    summary:
      "Store migration, theme and app continuity, and ongoing Shopify Plus or standard store management with checkout and domain handling.",
    compatibility: [
      "Migration from other platforms (WooCommerce, BigCommerce, custom)",
      "Theme updates, customizations, and performance tuning",
      "App installation, configuration, and compatibility checks",
      "Checkout and payment configuration (Shop Pay, gateways)",
      "Domains, SSL, and DNS managed for your store",
    ],
  },
  {
    id: "vercel",
    name: "Vercel",
    summary:
      "We manage Vercel projects, serverless functions, edge config, and env vars—including migrations from Vercel or from other hosts.",
    compatibility: [
      "Project and deployment configuration and monitoring",
      "Serverless and Edge Functions setup and debugging",
      "Environment variables and Edge Config management",
      "Custom domains, SSL, and DNS on Vercel",
      "Migration to/from Vercel and integration with your repo",
    ],
  },
  {
    id: "wordpress",
    name: "WordPress",
    summary:
      "WordPress hosting, migration, plugin and theme management, security hardening, and performance optimization on your chosen infrastructure.",
    compatibility: [
      "Migration from shared hosting, other hosts, or multisite",
      "Plugin and theme updates with compatibility testing",
      "Security: hardening, WAF, and backup/restore procedures",
      "Performance: caching, CDN, and database optimization",
      "Staging environments and one-click rollbacks",
    ],
  },
] as const;

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16 pt-28 pb-24">
        <header className="border-b border-border pb-10">
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-primary mb-2">
            Documentation
          </p>
          <h1 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground">
            Integration compatibility
          </h1>
          <p className="mt-4 max-w-[640px] text-foreground-muted">
            Summaries of service compatibility and what we support for each platform. We manage migrations from and to these services.
          </p>
        </header>

        <nav aria-label="On this page" className="mt-10 mb-14">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted mb-4">
            On this page
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className="text-foreground underline decoration-border underline-offset-4 hover:decoration-primary hover:text-primary transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <article className="space-y-20">
          {SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28"
            >
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground border-b border-border pb-2 mb-6">
                {section.name}
              </h2>
              <p className="text-foreground-muted leading-[1.8] mb-8 max-w-[720px]">
                {section.summary}
              </p>
              <div className="bg-surface rounded-[var(--radius)] border border-border p-6 md:p-8">
                <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted mb-4">
                  Supported areas
                </h3>
                <ul className="space-y-3">
                  {section.compatibility.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-foreground leading-[1.7]"
                    >
                      <span className="text-primary mt-1.5 shrink-0" aria-hidden>
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </article>

        <footer className="mt-20 pt-10 border-t border-border">
          <Link
            href="/#services"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            ← Back to services
          </Link>
        </footer>
      </div>
    </main>
  );
}
