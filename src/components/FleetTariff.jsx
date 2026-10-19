import React, { useState } from "react";
import {
  Users,
  Briefcase,
  Wind,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Info,
  Car,
  RotateCcw,
} from "lucide-react";
import { VEHICLES } from "../data/travelData";

export default function FleetTariff() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleBookVehicle = (vehicleId) => {
    const bookSection = document.getElementById("book");
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tariff" className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Modern Fleet & Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Vehicle Fleet & <span className="text-amber-400">Tariff Rates</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Click on any vehicle card to flip and view luggage capacity, specifications, and features. Clear pricing with zero hidden charges.
          </p>
        </div>

        {/* 3D Flip Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {VEHICLES.map((v) => {
            const isFlipped = !!flippedCards[v.id];

            return (
              <div
                key={v.id}
                className="perspective-1000 h-[460px] cursor-pointer group"
                onClick={() => toggleFlip(v.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  
                  {/* FRONT CARD */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between shadow-xl group-hover:border-amber-400/40 transition-colors">
                    <div>
                      {/* Vehicle Image */}
                      <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-slate-950">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                        
                        {v.popular && (
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 text-[11px] font-bold shadow-md">
                            Most Booked
                          </div>
                        )}

                        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold border border-white/10">
                          ₹{v.oneWayRate} / km
                        </div>
                      </div>

                      {/* Title & Category */}
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold text-white">{v.name}</h3>
                        <span className="text-xs text-amber-400 font-semibold">One-Way</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-4">{v.category}</p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800 text-center text-xs text-slate-300">
                        <div className="flex flex-col items-center">
                          <Users className="w-4 h-4 text-amber-400 mb-1" />
                          <span className="text-[11px] font-medium">{v.passengers}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Briefcase className="w-4 h-4 text-amber-400 mb-1" />
                          <span className="text-[11px] font-medium">{v.luggage}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Wind className="w-4 h-4 text-amber-400 mb-1" />
                          <span className="text-[11px] font-medium">AC Cabs</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Hint */}
                    <div className="flex items-center justify-between pt-4 text-xs">
                      <span className="text-slate-400 flex items-center gap-1">
                        <RotateCcw className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                        Click to view details
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookVehicle(v.id);
                        }}
                        className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all shadow-md flex items-center gap-1"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* BACK CARD (Flipped) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-slate-900 border border-amber-400/50 p-6 flex flex-col justify-between shadow-2xl">
                    <div>
                      <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">{v.name} Specs</h3>
                          <p className="text-xs text-slate-400">{v.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-extrabold text-amber-400">₹{v.oneWayRate}/km</div>
                          <div className="text-[10px] text-slate-400">One-Way Rate</div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {v.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                          Key Inclusions:
                        </div>
                        {v.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 flex justify-between">
                        <span>Driver Bata: <strong>₹{v.driverBata}/day</strong></span>
                        <span>Round Trip: <strong>₹{v.roundTripRate}/km</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(v.id);
                        }}
                        className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                      >
                        Flip Back
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookVehicle(v.id);
                        }}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-lg text-center"
                      >
                        Book {v.name} Now
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Tariff Comparison Table */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Official Tariff Comparison</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Standard approved rates with zero peak-hour multiplier
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold self-start sm:self-auto">
              <CheckCircle2 className="w-4 h-4" />
              <span>Fastag & GPS Verified Odometer</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-4 font-semibold">Service Charge Type</th>
                  <th className="py-4 px-4 font-semibold text-amber-400">Sedan (Dzire / Etios)</th>
                  <th className="py-4 px-4 font-semibold text-amber-400">SUV (Ertiga / Carens)</th>
                  <th className="py-4 px-4 font-semibold text-amber-400">Innova / Crysta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">One Way Drop Rate</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400">₹14 / km</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400">₹19 / km</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400">₹20 / km</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Round Trip Outstation</td>
                  <td className="py-3.5 px-4">₹13 / km</td>
                  <td className="py-3.5 px-4">₹18 / km</td>
                  <td className="py-3.5 px-4">₹19 / km</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Driver Bata / Allowance</td>
                  <td className="py-3.5 px-4">₹400 / day</td>
                  <td className="py-3.5 px-4">₹450 / day</td>
                  <td className="py-3.5 px-4">₹500 / day</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Minimum Distance per Day</td>
                  <td className="py-3.5 px-4">250 km / day (Round Trip)</td>
                  <td className="py-3.5 px-4">250 km / day (Round Trip)</td>
                  <td className="py-3.5 px-4">300 km / day (Round Trip)</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Luggage Capacity</td>
                  <td className="py-3.5 px-4">2 Large Bags</td>
                  <td className="py-3.5 px-4">3 Large + 2 Small Bags</td>
                  <td className="py-3.5 px-4">4 Large + Carrier</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">AC Type</td>
                  <td className="py-3.5 px-4">Dual Zone Chiller AC</td>
                  <td className="py-3.5 px-4">Roof Vents Dual AC</td>
                  <td className="py-3.5 px-4">Independent Rear AC</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Note: Toll plaza fees, interstate permit (if any), and parking charges are additional at actual receipt.</span>
            </div>
            <a
              href="#book"
              className="text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1"
            >
              <span>Book with this tariff</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
