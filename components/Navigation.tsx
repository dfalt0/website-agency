"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CardNav, type CardNavItem } from "@/components/ui/CardNav";
import { BRAND } from "@/lib/config";

type NavVariant = "dark" | "light";

export default function Navigation({ navVariant }: { navVariant?: NavVariant } = {}) {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  const isDarkPage =
    pathname === "/transfer" || pathname === "/scan" || pathname === "/contact" || pathname === "/";
  const isLightPage = pathname !== "/" && !isDarkPage;
  const scrolled =
    navVariant === "dark"
      ? false
      : navVariant === "light"
        ? true
        : isDarkPage && pathname !== "/"
          ? false
          : isLightPage || (pathname === "/" && hasScrolled);
  const showGlass = hasScrolled || (isDarkPage && pathname !== "/");

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items: CardNavItem[] = [
    {
      label: "Services",
      href: "/#services",
      bgColor: "#0C0F0C",
      textColor: "#E2E8E2",
      links: [
        { label: "Websites & products", href: "/#services", ariaLabel: "Websites" },
        { label: "Infrastructure", href: "/#services", ariaLabel: "Infrastructure" },
        { label: "Growth creatives", href: "/#services", ariaLabel: "Growth" },
      ],
    },
    {
      label: "Process",
      href: "/#process",
      links: [],
    },
    {
      label: "Pricing",
      href: "/#pricing",
      links: [],
    },
    {
      label: "Tools",
      href: "/scan",
      bgColor: "#080A08",
      textColor: "#E2E8E2",
      links: [
        { label: "Stack scanner", href: "/scan", ariaLabel: "Stack scanner" },
        { label: "Intake form", href: "/start", ariaLabel: "Intake" },
      ],
    },
  ];

  return (
    <CardNav
      logo={BRAND.name}
      items={items}
      scrolled={scrolled}
      glass={showGlass || hasScrolled}
      theme="dark"
      buttonBgColor={scrolled ? "var(--primary)" : "#E2E8E2"}
      buttonTextColor={scrolled ? "var(--primary-foreground)" : "var(--dark)"}
      ctaHref="/contact"
      ctaLabel="Book a call"
    />
  );
}
