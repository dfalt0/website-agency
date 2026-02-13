"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CardNav, type CardNavItem } from "@/components/ui/CardNav";

type NavVariant = "dark" | "light";

export default function Navigation({ navVariant }: { navVariant?: NavVariant } = {}) {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  // navVariant overrides: "dark" = dark background page (white nav text), "light" = light page (black nav text).
  // Otherwise: home = white text until scroll past hero; dark pages (/transfer, /scan) = always white text; other pages = black text.
  const isDarkPage = pathname === "/transfer" || pathname === "/scan";
  const isLightPage = pathname !== "/" && !isDarkPage;
  const scrolled =
    navVariant === "dark" ? false : navVariant === "light" ? true : isDarkPage ? false : isLightPage || hasScrolledPastHero;
  const showGlass = hasScrolled || isDarkPage;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHasScrolled(y > 10);
      setHasScrolledPastHero(y > window.innerHeight);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items: CardNavItem[] = [
    {
      label: "Services",
      href: "#services",
      bgColor: "#0C0F0C",
      textColor: "#E2E8E2",
      links: [
        { label: "Website Management", href: "#services", ariaLabel: "Website Management" },
        { label: "Cloud Infrastructure", href: "#services", ariaLabel: "Cloud Infrastructure" },
        { label: "Hosting & Security", href: "#services", ariaLabel: "Hosting & Security" },
      ],
    },
    {
      label: "Solutions",
      href: "#solutions",
      bgColor: "#080A08",
      textColor: "#E2E8E2",
      links: [
        { label: "For Startups", href: "#solutions", ariaLabel: "Solutions for Startups" },
        { label: "For Agencies", href: "#solutions", ariaLabel: "Solutions for Agencies" },
        { label: "Case Studies", href: "#solutions", ariaLabel: "Case Studies" },
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
        { label: "Tech Stack Scanner", href: "/scan", ariaLabel: "Tech Stack Scanner" },
        { label: "Blog", href: "#resources", ariaLabel: "Blog" },
        { label: "Docs", href: "#resources", ariaLabel: "Documentation" },
        { label: "Support", href: "#resources", ariaLabel: "Support" },
      ],
    },
  ];

  return (
    <CardNav
      items={items}
      scrolled={scrolled}
      glass={showGlass}
      theme="dark"
      buttonBgColor={scrolled ? "var(--primary)" : "#E2E8E2"}
      buttonTextColor={scrolled ? "var(--primary-foreground)" : "var(--dark)"}
    />
  );
}
