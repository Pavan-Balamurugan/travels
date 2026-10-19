import React from "react";
import { Car, Phone, MessageSquare, Mail, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO, POPULAR_ROUTES } from "../data/travelData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSelectRoute = (route) => {
    window.dispatchEvent(new CustomEvent("prefillRoute", { detail: route }));
    const bookElem = document.getElementById("book");
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center shadow-md shadow-amber-400/20">
                <Car className="w-5 h-5 text-slate-950" />
              </div>
              <span className="font-black text-2xl text-white tracking-tight">
                Chennai<span className="text-amber-400">Travels</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-3">
              Chennai Travels is Tamil Nadu's trusted drop taxi and outstation cab agency. Dedicated to delivering economical, safe, and punctual highway travel across South India with zero return fare charges.
            </p>

            <div className="pt-1 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Govt Authorized Tourist Taxi Operator (TN)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-amber-400 transition-colors font-bold text-amber-400">
                  Book A Taxi
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
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              Popular Chennai Drops
            </h4>
            <ul className="space-y-1.5 text-xs">
              {POPULAR_ROUTES.slice(0, 6).map((r, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => handleSelectRoute(r)}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between w-full group text-left cursor-pointer"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform text-slate-300 group-hover:text-white">
                      {r.from} to {r.to}
                    </span>
                    <span className="text-[11px] text-amber-400 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      ₹{r.sedanFare}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 24/7 Hotline Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              24/7 Helpline & Booking
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book your taxi anytime directly over telephone or WhatsApp for immediate doorstep vehicle dispatch.
            </p>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 shadow-2xs transition-all text-white font-bold text-xs group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Toll-Free Dispatch</div>
                <div className="text-white group-hover:text-amber-400 font-black truncate">
                  {COMPANY_INFO.phone}
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Hello%20Chennai%20Travels,%20I%20need%20a%20taxi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] transition-all text-white font-bold text-xs shadow-xs group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[10px] text-white/80 uppercase font-semibold">WhatsApp Booking</div>
                <div className="text-white font-black">
                  Chat With Dispatcher
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {currentYear} Chennai Travels. All rights reserved. Registered Tourist Cab Operator, Chennai, Tamil Nadu.
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>Toll & Taxes Extra at Actuals</span>
            <span>•</span>
            <span>Zero Return Km Charge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
