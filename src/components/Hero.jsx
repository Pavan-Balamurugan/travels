import React from "react";
import { Phone, ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";
import meenakshiBg from "../assets/meenakshi-bg.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Elegant Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={meenakshiBg}
          alt="Demo Travels Outstation Cabs"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Pay strictly for one way • Zero return fare</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          South India's Most Reliable <br />
          <span className="text-amber-400">
            Solo Drop & Outstation Taxi
          </span>
        </h1>

        {/* Breathable Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Doorstep pickup across Chennai to anywhere in South India. Clean AC cabs, vetted professional chauffeurs, and 100% transparent per-km billing without hidden charges.
        </p>

        {/* 3 Simple Value Points */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No Return Fare</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>On-Time Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Sedan ₹14/km • SUV ₹19/km</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Book Your Taxi Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 backdrop-blur-md transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Rating proof */}
        <div className="pt-2 flex items-center justify-center gap-2.5 text-xs text-slate-400">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-semibold text-slate-200">4.9 / 5.0</span>
          <span>• 3,850+ Verified Traveler Reviews</span>
        </div>

      </div>
    </section>
  );
}
