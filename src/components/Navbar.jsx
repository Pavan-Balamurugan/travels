import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Menu, X, Car, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Neat, single-word & concise nav items so they never wrap or crowd
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
      navigate(href);
    } else if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-3"
          : "bg-white py-4 border-b border-slate-100 shadow-2xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Logo - Clean, aligned, no overlapping pills */}
          <Link
            to="/#home"
            onClick={() => handleNavClick("/#home")}
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center shadow-sm shadow-amber-400/30 group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
                  Chennai<span className="text-amber-500">Travels</span>
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase mt-0.5">
                Drop Taxi & Outstation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Single line, spacious, never wraps */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-bold text-slate-700 hover:text-amber-500 transition-colors whitespace-nowrap py-1 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 rounded-full group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Right Action: Clean 'Book Taxi' CTA (Phone number removed as requested) */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="/#book"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#book");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Book Taxi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/#book"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#book");
              }}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs"
            >
              Book
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-6 pt-3 pb-5 mt-2 space-y-3 shadow-xl animate-fadeIn">
          <div className="flex flex-col divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2.5 text-sm font-bold text-slate-800 hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="/#book"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#book");
              }}
              className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-center text-sm shadow-sm flex items-center justify-center gap-2 transition-colors block"
            >
              <span>Book Taxi Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
