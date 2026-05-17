"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation, siteConfig, cta } from "@/data/site-content";
import { Menu, X, Phone, ArrowRight } from "@/lib/icons";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
        : "py-5 bg-transparent"
        }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="header-logo">
            <Image
              src="/Logo_Milodom.png"
              alt="MILODOM - Services à la personne à domicile"
              width={200}
              height={120}
              className={`h-12 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"
                }`}
              priority
            />
            <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"
              }`}>
              MILODOM.FR
            </span>
          </Link>

          {/* Desktop Nav — pill shape background */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${scrolled ? "bg-gray-50" : "bg-white/8 backdrop-blur-sm"
              }`}
            role="navigation"
            aria-label="Navigation principale"
          >
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${isActive
                    ? scrolled
                      ? "bg-blue-700 text-white"
                      : "bg-white text-blue-700"
                    : scrolled
                      ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  id={`nav-${item.href.replace(/\//g, "") || "home"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${scrolled ? "text-gray-500 hover:text-blue-700" : "text-white/70 hover:text-white"
                }`}
              id="header-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{siteConfig.phone}</span>
            </a>
            <Link
              href={cta.devis.href}
              className="bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-500 transition-all hover:shadow-lg hover:shadow-red-600/20 flex items-center gap-2"
              id="header-cta"
            >
              Devis gratuit
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-colors ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden" id="mobile-menu">
          <nav className="p-4 space-y-1" role="navigation" aria-label="Navigation mobile">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-3 border-t border-gray-100 space-y-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 px-4 py-2 text-blue-700 font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <Link
                href={cta.devis.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-red-600 text-white rounded-xl px-4 py-3.5 font-semibold hover:bg-red-500 transition-colors"
              >
                Devis gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
