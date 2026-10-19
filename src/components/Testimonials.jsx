import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS, COMPANY_INFO } from "../data/travelData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Trusted by Over <span className="text-amber-400">50,000+ Travelers</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Read real stories from families, executives, and solo explorers who rely on Demo Travels for their highway journeys.
            </p>
          </div>

          {/* Google Rating Overview Badge */}
          <div className="flex items-center gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 self-start md:self-auto shrink-0 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center font-extrabold text-xl text-amber-400">
              4.9
            </div>
            <div>
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-300 font-semibold mt-0.5">
                Google Verified Reviews
              </div>
              <div className="text-[11px] text-slate-400">
                {COMPANY_INFO.reviewsCount}+ verified ratings
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-800" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Route */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {t.avatar}
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
                      <span className="truncate">{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {t.city} • <span className="text-amber-400/90">{t.trip}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write a review CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/CbDTgub5KWiJEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Had a great journey with Demo Travels? Leave us a Google Review</span>
            <span className="text-emerald-400">★★★★★</span>
          </a>
        </div>

      </div>
    </section>
  );
}
