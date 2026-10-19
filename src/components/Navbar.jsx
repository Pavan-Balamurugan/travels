import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Menu, X, Car, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Tariff", href: "/#tariff" },
    { name: "Packages", href: "/#packages" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/" && href.startsWith("/#")) {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-800/80 py-3.5"
          : "bg-slate-950/75 backdrop-blur-sm py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="/#home"
            onClick={() => handleNavClick("/#home")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                Demo<span className="text-amber-400">Travels</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/15 text-amber-400 border border-amber-400/30 uppercase tracking-wider hidden sm:inline">
                24/7
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-xl hover:bg-slate-800/60 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <a
              href="/#book"
              onClick={() => handleNavClick("/#book")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Book Taxi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 rounded-xl bg-slate-800 text-amber-400 hover:bg-slate-700 transition-colors"
              aria-label="Call Hotline"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-6 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 border-b border-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href="/#book"
              onClick={() => handleNavClick("/#book")}
              className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-center text-sm shadow-md"
            >
              Book Taxi Now
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-slate-300 font-semibold text-center text-xs flex items-center justify-center gap-2 border border-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
