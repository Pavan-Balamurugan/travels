import React from "react";
import { Star, CheckCircle2, MessageSquare, Quote } from "lucide-react";
import { COMPANY_INFO, TESTIMONIALS } from "../data/travelData";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-10 sm:py-14 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-2.5">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9 Star Average Customer Rating</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Verified Customer <span className="text-amber-500">Reviews</span>
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Real feedback from families, business owners, and solo travelers who ride with Chennai Travels.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-xs card-subtle transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{t.date}</span>
                </div>

                {/* Trip Route Pill - Subtle Dark Mix */}
                <div className="inline-block px-2.5 py-1 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 text-[10px] font-black tracking-wide mb-3 shadow-2xs">
                  Trip: {t.trip}
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  {t.avatar}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 truncate flex items-center gap-1.5">
                    <span>{t.name}</span>
                    {t.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Traveler" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {t.city} • <span className="text-slate-600">{t.role}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Google Reviews Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-amber-50/40 border border-amber-300 shadow-xs flex flex-col justify-between text-center items-center">
            <div className="space-y-2 my-auto">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-black flex items-center justify-center mx-auto shadow-sm">
                <Quote className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-slate-900">4.9 / 5.0</div>
              <div className="flex items-center justify-center text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Over <strong>{COMPANY_INFO.reviewsCount}+ verified reviews</strong> on Google & traveler forums across Chennai.
              </p>
            </div>

            <a
              href="https://g.page/r/CbDTgub5KWiJEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs transition-colors block text-center"
            >
              Write or View Google Reviews
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
