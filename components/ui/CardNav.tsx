"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface CardNavLink {
  label: string;
  href?: string;
  ariaLabel?: string;
}

export interface CardNavItem {
  label: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  links: CardNavLink[];
}

interface CardNavProps {
  logo?: React.ReactNode;
  logoAlt?: string;
  items: CardNavItem[];
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  theme?: "light" | "dark";
  className?: string;
  scrolled?: boolean;
  /** When true, nav always has backdrop blur and subtle background (e.g. over hero). */
  glass?: boolean;
}

export function CardNav({
  logo,
  logoAlt = "Logo",
  items,
  baseColor,
  menuColor,
  buttonBgColor = "var(--dark)",
  buttonTextColor = "var(--dark-foreground)",
  theme = "dark",
  className,
  scrolled = false,
  glass,
}: CardNavProps) {
  const showGlass = glass ?? scrolled;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const textColor = baseColor ?? (scrolled ? "var(--foreground)" : "var(--dark-foreground)");
  const menuTextColor = menuColor ?? textColor;

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showGlass && "bg-nav-bar shadow-soft backdrop-blur-xl",
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-3xl font-semibold transition-colors"
            style={{ color: textColor }}
          >
            {logo ?? "YourCompany"}
          </Link>

          {/* Desktop: nav items with dropdown cards */}
          <div className="hidden items-center gap-1 lg:flex">
            {items.map((item, index) => (
              <div key={item.label} className="relative">
                {item.links.length > 0 ? (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenIndex(openIndex === index ? null : index);
                      }}
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-4 py-2 text-base font-medium transition-colors hover:opacity-90",
                        openIndex === index && "opacity-90"
                      )}
                      style={{ color: menuTextColor }}
                      aria-expanded={openIndex === index}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={cn("h-4 w-4 transition-transform", openIndex === index && "rotate-180")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full pt-2 -translate-x-1/2"
                        >
                          <div
                            className="min-w-[200px] rounded-xl border border-[#1A1F1A] py-3 shadow-xl backdrop-blur-sm"
                            style={{
                              backgroundColor: item.bgColor ?? "var(--card-obsidian)",
                              color: item.textColor ?? "var(--dark-foreground)",
                            }}
                          >
                            {item.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href ?? "#"}
                                aria-label={link.ariaLabel ?? link.label}
                                className="block px-5 py-2.5 text-base font-medium transition-colors hover:opacity-80"
                                onClick={() => setOpenIndex(null)}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className="rounded-lg px-4 py-2 text-base font-medium transition-colors hover:opacity-90"
                    style={{ color: menuTextColor }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/login"
              className="text-base font-medium transition-opacity hover:opacity-70"
              style={{ color: menuTextColor }}
            >
              Log In
            </Link>
            <Link
              href="/start"
              className="inline-flex h-11 items-center justify-center rounded-lg px-6 text-base font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-lg p-2"
            style={{ color: menuTextColor }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu with dropdown sections */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-[1200px] px-8 py-6">
              {items.map((item) => (
                <div key={item.label} className="mb-4">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <div className="space-y-1">
                    {item.links.length > 0 ? (
                      item.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href ?? "#"}
                          className="block py-2.5 text-lg font-medium text-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))
                    ) : (
                      <Link
                        href={item.href ?? "#"}
                        className="block py-2.5 text-lg font-medium text-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              <div className="mt-6 space-y-3 border-t border-border pt-6">
                <Link
                  href="/login"
                  className="block py-2.5 text-lg font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/start"
                  className="block w-full rounded-lg py-3.5 text-center text-lg font-semibold text-primary-foreground"
                  style={{ backgroundColor: buttonBgColor }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
