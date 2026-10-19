import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Car, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Tariff & Fleet", href: "/#tariff" },
    { name: "Tour Packages", href: "/#packages" },
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
    <div className="sticky top-0 z-50">
      {/* Top Banner Notice */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-1.5 px-4 text-slate-300 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Outstation & Drop Taxi Available
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Drivers & Sanitized Cars
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto">
            <span className="hidden sm:inline text-slate-400">Doorstep Pickup across South India</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-amber-400 font-semibold hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-800 py-3"
            : "bg-slate-950/80 backdrop-blur-sm py-4 border-b border-white/5"
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
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <Car className="w-6 h-6 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                    Demo<span className="text-amber-400">Travels</span>
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 uppercase tracking-widest hidden sm:inline">
                    24/7
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium tracking-wide -mt-0.5 hidden xs:block">
                  Drop Taxi & Tours
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700/60 transition-all"
                title="Call 24/7 Hotline"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Hotline</span>
              </a>

              <a
                href="/#book"
                onClick={() => handleNavClick("/#book")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Book a Ride</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 transition-colors"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none border border-slate-700/70"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-xl animate-fadeIn">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="/#book"
                onClick={() => handleNavClick("/#book")}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Book Instant Taxi</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 text-slate-200 font-semibold text-center text-sm flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
