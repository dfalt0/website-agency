"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "Solutions", href: "#solutions", hasDropdown: true },
    { label: "Pricing", href: "#pricing", hasDropdown: false },
    { label: "Resources", href: "#resources", hasDropdown: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            YourCompany
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/login"
              className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Log In
            </Link>
            <Button
              variant={scrolled ? "default" : "white-primary"}
              size="default"
              asChild
            >
              <Link href="/start">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Icons.X className="h-6 w-6" />
            ) : (
              <Icons.Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white lg:hidden">
          <div className="mx-auto max-w-[1200px] px-8 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-base font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
              <Link
                href="/login"
                className="block text-base font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Button variant="default" size="default" className="w-full" asChild>
                <Link href="/start" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
