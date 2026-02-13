import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a transfer | Managed Web Services",
  description:
    "Share your website, domain, or service. Choose to stay on your platform or migrate to our stack. We’ll get you set up and into your dashboard.",
};

export default function TransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
