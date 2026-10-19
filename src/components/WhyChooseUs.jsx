import React from "react";
import {
  ShieldCheck,
  Clock,
  Coins,
  Smile,
  Award,
  Headphones,
  CheckCircle2,
  Car,
  MapPin,
} from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function WhyChooseUs() {
  const stats = [
    { label: "Successful Rides", value: COMPANY_INFO.completedTrips },
    { label: "Customer Rating", value: `${COMPANY_INFO.rating} / 5.0` },
    { label: "Verified Drivers", value: COMPANY_INFO.activeDrivers },
    { label: "Cities Connected", value: COMPANY_INFO.citiesCovered },
  ];

  const benefits = [
    {
      icon: Coins,
      title: "Strictly One-Way Drop Pricing",
      desc: "Save up to 40% immediately. Pay only for the distance you actually ride, with no empty return km, return toll fees, or return driver allowances.",
    },
    {
      icon: Clock,
      title: "100% On-Time Doorstep Pickup",
      desc: "Your cab arrives at your doorstep 15 minutes before the scheduled time. Real-time driver tracking ensures zero anxiety on travel morning.",
    },
    {
      icon: ShieldCheck,
      title: "Vetted & Background-Checked Drivers",
      desc: "All chauffeurs have clean background verification, 5+ years of highway driving experience, polite demeanor, and local route familiarity.",
    },
    {
      icon: Car,
      title: "Sanitized & Late-Model Fleet",
      desc: "Every vehicle is deep-cleaned and air-conditioned before dispatch. Travel in well-maintained, smooth-riding sedans and SUVs.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Care & Assistance",
      desc: "Round-the-clock telephone and WhatsApp helpline to support you through early morning departures, late-night arrivals, or route adjustments.",
    },
    {
      icon: Award,
      title: "Zero Hidden Charges Policy",
      desc: "Transparent per-km rate, clear driver allowance, and exact digital bills. No surprise surcharge, night charges, or hidden platform commissions.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Gold Standard in Highway Travel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Travelers Choose <span className="text-amber-400">Demo Travels</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            We built Demo Travels on two pillars: complete billing honesty and uncompromising rider comfort. Here is what sets us apart from conventional taxi operators.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center backdrop-blur-xl shadow-lg hover:border-amber-400/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Safety & Sanitization Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Your Safety & Comfort Is Guaranteed</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                SOS emergency response, live GPS location tracking, and verified chauffeurs on every trip.
              </p>
            </div>
          </div>

          <a
            href="#book"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105"
          >
            Experience Premium Travel
          </a>
        </div>

      </div>
    </section>
  );
}
