import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = {
  label: string;
  href: string;       // route path used when not on home
  sectionId?: string; // id of section on home page
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections", sectionId: "collections" },
  { label: "Fabrics", href: "/fabrics", sectionId: "fabrics" },
  { label: "Process", href: "/process", sectionId: "process" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent, link: NavLink) => {
    setIsMobileMenuOpen(false);

    // Home button: if already home, scroll to top; else navigate.
    if (link.href === "/") {
      if (location === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Section links: if on home, scroll to section instead of routing away.
    if (link.sectionId && location === "/") {
      e.preventDefault();
      scrollToSection(link.sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-secondary">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="RM Apparels"
            className="h-9 md:h-11 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location === "/"
                : location.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-base font-medium tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-secondary/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/quote">
            <Button className="font-semibold px-7 h-11 text-base">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-background border-b shadow-lg flex flex-col p-4 gap-3 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location === "/"
                : location.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-lg font-medium p-3 rounded-md ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full mt-4 font-semibold h-12 text-base">
              Get Quote
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
