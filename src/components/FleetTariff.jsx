import React, { useState } from "react";
import {
  Users,
  Briefcase,
  Wind,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Car,
  ShieldCheck,
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
    // Select this vehicle in the booking form
    window.dispatchEvent(new CustomEvent("selectVehicle", { detail: { vehicleId } }));
    const bookSection = document.getElementById("book");
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tariff" className="py-10 sm:py-14 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-2.5">
            <Car className="w-3.5 h-3.5 text-amber-600" />
            <span>Modern AC Fleet & Fixed Per-Km Rates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Our Vehicle Fleet & <span className="text-amber-500">Tariff Rates</span>
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Click on any vehicle card to flip and view full specifications and luggage capacity. No hidden commissions.
          </p>
        </div>

        {/* 3D Flip Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {VEHICLES.map((v) => {
            const isFlipped = !!flippedCards[v.id];

            return (
              <div
                key={v.id}
                className="perspective-1000 h-[450px] cursor-pointer group card-subtle"
                onClick={() => toggleFlip(v.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  
                  {/* FRONT CARD (Light Theme) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white border border-slate-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-400 card-subtle transition-all duration-300">
                    <div>
                      {/* Vehicle Image */}
                      <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-100">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {v.popular && (
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[11px] font-extrabold shadow-sm">
                            ★ Most Popular
                          </div>
                        )}

                        <div className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-lg bg-slate-900/90 text-amber-400 text-xs font-black shadow-sm">
                          ₹{v.oneWayRate} / km
                        </div>
                      </div>

                      {/* Title & Category */}
                      <div className="flex items-center justify-between mb-0.5">
                        <h3 className="text-lg font-black text-slate-900">{v.name}</h3>
                        <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          ₹{v.oneWayRate}/km
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-3">{v.category}</p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 text-center text-xs text-slate-700">
                        <div className="flex flex-col items-center">
                          <Users className="w-4 h-4 text-amber-600 mb-0.5" />
                          <span className="text-[11px] font-semibold">{v.passengers}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Briefcase className="w-4 h-4 text-amber-600 mb-0.5" />
                          <span className="text-[11px] font-semibold truncate max-w-full px-1">{v.luggage.split(" ")[0]} Bags</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Wind className="w-4 h-4 text-amber-600 mb-0.5" />
                          <span className="text-[11px] font-semibold">Chilled AC</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed mt-2.5 line-clamp-2">
                        {v.description}
                      </p>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium hover:text-amber-700">
                        <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
                        Click card to flip
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookVehicle(v.id);
                        }}
                        className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs shadow-sm transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* BACK CARD (Flipped - Light Theme) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-amber-50/80 border-2 border-amber-400 p-5 flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-3 border-b border-amber-200 pb-2.5">
                        <div>
                          <h3 className="text-base font-black text-slate-900">{v.name} Details</h3>
                          <p className="text-[11px] text-slate-600">{v.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-black text-amber-700">₹{v.oneWayRate}/km</div>
                          <div className="text-[10px] text-slate-500 font-medium">One-Way Drop</div>
                        </div>
                      </div>

                      <div className="space-y-1.5 mb-3">
                        <div className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">
                          Standard Inclusions:
                        </div>
                        {v.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-slate-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-amber-300 text-xs text-slate-800 flex justify-between font-semibold mt-2">
                        <span>Driver Bata: <strong>₹{v.driverBata}/day</strong></span>
                        <span>Round Trip: <strong>₹{v.roundTripRate}/km</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(v.id);
                        }}
                        className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-300 cursor-pointer"
                      >
                        Flip Back
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookVehicle(v.id);
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shadow-md text-center cursor-pointer transition-colors"
                      >
                        Select & Book {v.name}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Transparent Pricing Comparison Table */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm overflow-x-auto">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Chennai Travels Transparent Tariff Summary</span>
          </div>
          <table className="w-full text-xs text-left text-slate-700 min-w-[500px]">
            <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Vehicle Type</th>
                <th className="py-2.5 px-3">Seating</th>
                <th className="py-2.5 px-3">One-Way Drop</th>
                <th className="py-2.5 px-3">Round Trip</th>
                <th className="py-2.5 px-3">Driver Bata</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {VEHICLES.map((v) => (
                <tr key={v.id} className="hover:bg-amber-50/50 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-slate-900">{v.name}</td>
                  <td className="py-2.5 px-3">{v.passengers}</td>
                  <td className="py-2.5 px-3 font-extrabold text-amber-600">₹{v.oneWayRate} / km</td>
                  <td className="py-2.5 px-3 font-semibold text-slate-800">₹{v.roundTripRate} / km</td>
                  <td className="py-2.5 px-3">₹{v.driverBata} / day</td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleBookVehicle(v.id)}
                      className="px-3 py-1 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer shadow-2xs"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-[11px] text-slate-500 mt-2.5">
            * Note: Toll plaza fees, interstate commercial permit charges, and parking fees are extra at actuals. Zero return toll charged on one-way drops.
          </div>
        </div>

      </div>
    </section>
  );
}
