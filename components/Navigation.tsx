"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CardNav, type CardNavItem } from "@/components/ui/CardNav";
import { BRAND } from "@/lib/config";

type NavVariant = "dark" | "light";

export default function Navigation({ navVariant }: { navVariant?: NavVariant } = {}) {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  const isDarkPage = pathname === "/transfer" || pathname === "/scan" || pathname === "/contact";
  const isLightPage = pathname !== "/" && !isDarkPage;
  const scrolled =
    navVariant === "dark"
      ? false
      : navVariant === "light"
        ? true
        : isDarkPage
          ? false
          : isLightPage || (pathname === "/" && hasScrolled);
  const showGlass = hasScrolled || isDarkPage;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items: CardNavItem[] = [
    {
      label: "AI Engineering",
      href: "#ai-engineering",
      bgColor: "#0C0F0C",
      textColor: "#E2E8E2",
      links: [
        { label: "Consulting & custom AI", href: "/#ai-engineering", ariaLabel: "AI consulting" },
        { label: "Custom MCPs", href: "/#ai-engineering", ariaLabel: "Custom MCPs" },
        { label: "Modern stacks", href: "/#ai-engineering", ariaLabel: "Modern stacks" },
      ],
    },
    {
      label: "Services",
      href: "#services",
      bgColor: "#080A08",
      textColor: "#E2E8E2",
      links: [
        { label: "Managed hosting", href: "#services", ariaLabel: "Managed hosting" },
        { label: "Cloud infrastructure", href: "#services", ariaLabel: "Cloud infrastructure" },
        { label: "Security & monitoring", href: "#services", ariaLabel: "Security" },
      ],
    },
    {
      label: "Pricing",
      href: "#pricing",
      links: [],
    },
    {
      label: "Resources",
      href: "#resources",
      bgColor: "#0C0F0C",
      textColor: "#E2E8E2",
      links: [
        { label: "Stack & AI scan", href: "/scan", ariaLabel: "Stack and AI opportunity scan" },
        { label: "Intake form", href: "/start", ariaLabel: "Start intake form" },
        { label: "Discovery call", href: "/contact", ariaLabel: "Book discovery call" },
      ],
    },
  ];

  return (
    <CardNav
      logo={BRAND.shortName}
      items={items}
      scrolled={scrolled}
      glass={showGlass}
      theme="dark"
      buttonBgColor={scrolled ? "var(--primary)" : "#E2E8E2"}
      buttonTextColor={scrolled ? "var(--primary-foreground)" : "var(--dark)"}
      ctaHref="/contact"
      ctaLabel="Book discovery"
    />
  );
}
