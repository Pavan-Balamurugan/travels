import React, { useState } from "react";
import { MapPin, Clock, ArrowRight, Check, Compass, Star } from "lucide-react";
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePackage, setActivePackage] = useState(null);

  const categories = ["All", "Hill Station", "Pilgrimage", "Heritage"];

  const filteredPackages =
    selectedCategory === "All"
      ? TOUR_PACKAGES
      : TOUR_PACKAGES.filter((p) => p.category === selectedCategory);

  return (
    <section id="packages" className="py-20 lg:py-28 bg-slate-900/60 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Holiday & Sightseeing Circuits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Popular <span className="text-amber-400">Tour Packages</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Pre-planned outstation itineraries with doorstep pickup, scenic halts, and expert local chauffeurs for unforgettable getaways.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat} {cat !== "All" && "Tours"}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const pkgImage = imageMap[pkg.bgImage] || kodaikanalImg;

            return (
              <div
                key={pkg.id}
                className="group rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-amber-400/40 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={pkgImage}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 text-[11px] font-bold shadow-md">
                      {pkg.tag}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-slate-200 text-xs border border-white/10 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Distance Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-slate-300 text-xs font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{pkg.distance}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                        {pkg.type}
                      </span>
                      <div className="flex items-center text-amber-400 text-xs gap-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="font-bold text-slate-200">4.9</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {pkg.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                      <div className="text-[11px] font-semibold text-slate-300">Key Attractions:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price and Book Button */}
                <div className="p-6 pt-0 mt-4">
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div>
                      <div className="text-[11px] text-slate-400">Starting from</div>
                      <div className="text-xl font-extrabold text-amber-400">
                        {pkg.priceStarts}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActivePackage(pkg)}
                      className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Package</span>
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
