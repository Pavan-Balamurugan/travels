import React, { useState } from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";
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
    <section id="packages" className="py-24 lg:py-32 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean & Minimal */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Popular Tour Packages from <span className="text-amber-400">Chennai</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Convenient outstation trips starting from Chennai with punctual doorstep pickup and transparent billing.
          </p>
        </div>

        {/* Minimalist Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => {
            const pkgImage = imageMap[pkg.bgImage] || indiaImg;

            return (
              <div
                key={pkg.id}
                className="group rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Clean Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={pkgImage}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                    {/* Simple Duration Pill */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-200 text-xs font-medium border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Distance */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-slate-200 text-xs font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{pkg.distance}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {pkg.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                      <div className="text-[11px] font-semibold text-slate-400">Highlights:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Starting Price and Action */}
                <div className="p-6 pt-0 mt-4">
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div>
                      <div className="text-[11px] text-slate-400">Starting from</div>
                      <div className="text-xl font-black text-amber-400">
                        {pkg.priceStarts}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActivePackage(pkg)}
                      className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Now</span>
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
