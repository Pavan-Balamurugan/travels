import React from "react";
import {
  ShieldCheck,
  Clock,
  Coins,
  Award,
  Headphones,
  Car,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function WhyChooseUs() {
  const stats = [
    { label: "Successful Trips", value: COMPANY_INFO.completedTrips },
    { label: "Google Rating", value: `${COMPANY_INFO.rating} ★` },
    { label: "Verified Chauffeurs", value: COMPANY_INFO.activeDrivers },
    { label: "Cities Connected", value: COMPANY_INFO.citiesCovered },
  ];

  const benefits = [
    {
      icon: Coins,
      title: "Strictly One-Way Drop Fare",
      desc: "Save up to 40% immediately. Pay solely for the distance you actually ride — no return empty km, return toll fees, or return driver allowances.",
    },
    {
      icon: Clock,
      title: "Guaranteed On-Time Pickup",
      desc: "Your cab arrives at your doorstep in Chennai 15 minutes before the scheduled time with complete driver contact and vehicle registration details.",
    },
    {
      icon: ShieldCheck,
      title: "Police-Verified Senior Drivers",
      desc: "Every chauffeur in our fleet has 5+ years of highway driving experience, clean records, polite demeanor, and in-depth South Indian route knowledge.",
    },
    {
      icon: Car,
      title: "Deep Cleaned & Sanitized Cabs",
      desc: "Every sedan and SUV is inspected, washed, and sanitized before departure. Travel in smooth-riding, dual-zone AC comfort with ample boot space.",
    },
    {
      icon: Headphones,
      title: "24/7 Helpline & Dispatch",
      desc: "Round-the-clock live telephone and WhatsApp support for late-night airport arrivals, early-morning departures, or sudden itinerary updates.",
    },
    {
      icon: Award,
      title: "Zero Hidden Fees Guarantee",
      desc: "Transparent per-km rate, clear driver allowance, and exact digital receipts. No surge multipliers, peak hour fees, or surprise platform charges.",
    },
  ];

  return (
    <section id="why-us" className="py-10 sm:py-14 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-2.5">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>The Gold Standard in Highway Travel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Why Travelers Choose <span className="text-amber-500">Chennai Travels</span>
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Over a decade of punctual, economical, and trusted outstation travel across Tamil Nadu and South India.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:mb-10">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center shadow-sm card-subtle hover:border-amber-400/50"
            >
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-0.5">
                {s.value}
              </div>
              <div className="text-xs font-bold text-slate-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 card-subtle transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Safety & Sanitization Banner */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-100 via-amber-50 to-white border border-amber-300 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">Your Safety & Comfort Is Guaranteed</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Fastag toll payments, live GPS tracking, and vetted highway chauffeurs on every trip.
              </p>
            </div>
          </div>

          <a
            href="#book"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            Book Your Ride Now
          </a>
        </div>

      </div>
    </section>
  );
}
