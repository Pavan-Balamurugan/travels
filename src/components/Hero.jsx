import React from "react";
import { Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Star, MapPin, Zap } from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";
import meenakshiBg from "../assets/meenakshi-bg.jpg";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    "Hi Demo Travels, I would like to enquire about an outstation drop taxi booking."
  )}`;

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center py-16 lg:py-24 overflow-hidden">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={meenakshiBg}
          alt="Demo Travels Outstation Cabs"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>#1 Outstation Drop Taxi Agency</span>
              <span className="text-slate-400">•</span>
              <span className="text-white font-medium">Save Up to 40% on One-Way</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              South India's Most Trusted <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Solo Drop & Outstation Taxi
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Pay <strong className="text-white font-semibold">only for one-way distance</strong> with zero return charges. 
              Clean sanitized cabs, polite chauffeurs, 24/7 on-time doorstep pickup, and 100% transparent pricing across Tamil Nadu & all of South India.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Return Fare</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-Time Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Live Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Book Your Taxi Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 backdrop-blur-md transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-900/30 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Real-time Customer Rating badge */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span>• Over 3,850+ Verified Traveler Reviews</span>
            </div>
          </div>

          {/* Right Column: Floating Highlights Cards */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Quick Rate Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-amber-400/40 transition-colors">
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Transparent Pricing</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                  All Inclusive Fuel
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Starting at <span className="text-amber-400 font-extrabold">₹14 / km</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Clean Dzire / Etios / Aura Sedans with high mileage and dual-zone air-conditioning.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                  <div className="text-slate-400">Sedan Rate</div>
                  <div className="font-bold text-white text-sm">₹14/km</div>
                </div>
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                  <div className="text-slate-400">SUV 6+1 Rate</div>
                  <div className="font-bold text-white text-sm">₹19/km</div>
                </div>
              </div>
            </div>

            {/* Popular Route Fast-Tag Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Instant Doorstep Pickup Available In</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {["Madurai", "Chennai", "Bangalore", "Coimbatore", "Trichy", "Rameswaram", "Kodaikanal"].map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/60"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
