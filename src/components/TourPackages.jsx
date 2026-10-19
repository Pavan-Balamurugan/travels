import React, { useState } from "react";
import { MapPin, Clock, ArrowRight, Sparkles, Compass } from "lucide-react";
import { TOUR_PACKAGES } from "../data/travelData";
import PackageModal from "./PackageModal";

import kodaikanalImg from "../assets/kodaikanal-bg.jpg";
import indiaImg from "../assets/india-bg.jpg";
import kashmirImg from "../assets/kashmir-bg.jpg";
import meenakshiImg from "../assets/meenakshi-bg.jpg";
import carImg from "../assets/car-bg.avif";

const imageMap = {
  "india-bg.jpg": indiaImg,
  "kodaikanal-bg.jpg": kodaikanalImg,
  "kashmir-bg.jpg": kashmirImg,
  "meenakshi-bg.jpg": meenakshiImg,
  "car-bg.avif": carImg,
};

export default function TourPackages() {
  const [activePackage, setActivePackage] = useState(null);

  return (
    <section id="packages" className="py-10 sm:py-14 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-2.5">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Weekend & Pilgrimage Getaways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Popular Tour Packages from <span className="text-amber-500">Chennai</span>
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
            All-inclusive door-to-door packages with certified tourist drivers, punctual pickup, and transparent fares.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TOUR_PACKAGES.map((pkg) => {
            const fallback = imageMap[pkg.fallbackImg] || indiaImg;

            return (
              <div
                key={pkg.id}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400 card-subtle transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={pkg.imageUrl || fallback}
                      alt={pkg.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallback;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                    {/* Tag badge */}
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black shadow-sm">
                      {pkg.tag}
                    </div>

                    {/* Duration Pill */}
                    <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Distance */}
                    <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-white text-[11px] font-bold">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{pkg.distance}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-black text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                      {pkg.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1 pt-2.5 border-t border-slate-100">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Trip Highlights:</div>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.slice(0, 3).map((h, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 font-medium border border-slate-200"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Starting Price and Action */}
                <div className="p-4 sm:p-5 pt-0">
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium">Starts from</div>
                      <div className="text-lg font-black text-amber-600">
                        {pkg.priceStarts}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActivePackage(pkg)}
                      className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs shadow-sm transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Booking Modal */}
      {activePackage && (
        <PackageModal pkg={activePackage} onClose={() => setActivePackage(null)} />
      )}
    </section>
  );
}
