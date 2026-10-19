import React from "react";
import { Phone, ArrowRight, CheckCircle2, Star, Sparkles, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { COMPANY_INFO, POPULAR_ROUTES } from "../data/travelData";

export default function Hero() {
  const handleSelectRoute = (route) => {
    window.dispatchEvent(new CustomEvent("prefillRoute", { detail: route }));
    const bookElem = document.getElementById("book");
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-amber-50/50 via-white to-white py-10 sm:py-14 lg:py-16 overflow-hidden border-b border-slate-100">
      
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-yellow-100/30 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Subtle Dark Mixed Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs sm:text-sm font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Pay strictly for one way • Zero return fare from Chennai</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Chennai's Most Reliable <br />
          <span className="text-amber-500 underline decoration-amber-300 decoration-wavy decoration-from-font underline-offset-4">
            Drop Taxi & Outstation Cabs
          </span>
        </h1>

        {/* Breathable Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Doorstep pickup across all Chennai locations (Airport MAA, Central, OMR, Tambaram, Koyambedu) to anywhere in Tamil Nadu, Pondicherry, Bangalore, Tirupati, & South India. 100% transparent per-km billing with clean, air-conditioned cabs.
        </p>

        {/* Value Points Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-800 font-semibold pt-1">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs card-subtle">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Strictly One-Way Drop</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs card-subtle">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Sedan ₹14/km • SUV ₹19/km</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs card-subtle">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>On-Time Doorstep Pickup</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs card-subtle">
            <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0" />
            <span>Zero Advance Required</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Booking Button */}
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-md shadow-amber-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Book Your Taxi Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Call Button - Sleek subtle dark button */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-md shadow-slate-900/15 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call: {COMPANY_INFO.phone}</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              "Hello Chennai Travels, I want to book a drop taxi / outstation cab."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Booking</span>
          </a>
        </div>

        {/* Rating proof */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-extrabold text-slate-900">4.9 / 5.0</span>
          <span>• {COMPANY_INFO.reviewsCount}+ Verified Tamil Nadu Travelers</span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Govt Authorized Tourist Taxi
          </span>
        </div>

        {/* Popular Quick Route Shortcut Pills */}
        <div className="pt-4 max-w-4xl mx-auto">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Popular One-Way Drops from Chennai (Click to autofill):</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {POPULAR_ROUTES.slice(0, 6).map((route, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectRoute(route)}
                className="text-xs px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-800 font-semibold border border-slate-200 hover:border-amber-400 hover:text-slate-950 shadow-2xs card-subtle transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{route.from} → {route.to}</span>
                <span className="font-black text-amber-600 bg-amber-50/80 px-1.5 py-0.5 rounded border border-amber-200/60">
                  ₹{route.sedanFare}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
