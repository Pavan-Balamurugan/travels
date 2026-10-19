import React from "react";
import { Car, Phone, MessageSquare, Mail, MapPin, Heart, ShieldCheck } from "lucide-react";
import { COMPANY_INFO, POPULAR_ROUTES } from "../data/travelData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Car className="w-6 h-6 text-slate-950" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Demo<span className="text-amber-400">Travels</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Demo Travels is South India's trusted outstation taxi and one-way drop agency. Dedicated to providing economical, safe, and comfortable highway travel with zero return fare charges.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Authorized Tourist Taxi Operator</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#tariff" className="hover:text-amber-400 transition-colors">
                  Tariff & Vehicles
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Drop Routes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Popular Routes
            </h4>
            <ul className="space-y-2 text-xs">
              {POPULAR_ROUTES.slice(0, 6).map((r, i) => (
                <li key={i}>
                  <a
                    href="#book"
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{r.from} to {r.to}</span>
                    <span className="text-[10px] text-amber-400 font-semibold opacity-80 group-hover:opacity-100">
                      ₹{r.sedanFare}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct 24/7 Hotline Support (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              24/7 Cab Booking
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book your taxi anytime directly over telephone or WhatsApp for immediate vehicle dispatch.
            </p>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/40 transition-all text-white font-bold text-sm group"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Toll-Free Dispatch</div>
                <div className="text-amber-400 group-hover:text-amber-300 truncate">
                  {COMPANY_INFO.phone}
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Hi%20Demo%20Travels,%20I%20need%20a%20taxi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-950/40 border border-emerald-900/60 hover:border-emerald-500/40 transition-all text-emerald-300 font-bold text-sm group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-emerald-400/80 uppercase font-semibold">Instant WhatsApp</div>
                <div className="group-hover:text-emerald-200">
                  Chat With Dispatcher
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {currentYear} Demo Travels. All rights reserved. Professional Outstation & Drop Taxi Agency.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Toll & Taxes Extra at Actuals</span>
            <span>•</span>
            <span>24/7 Doorstep Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
