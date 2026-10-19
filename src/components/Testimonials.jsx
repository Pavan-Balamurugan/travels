import React from "react";
import { Star } from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
          Customer <span className="text-amber-400">Reviews</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto mb-10">
          See what our travelers say about our Chennai outstation drop taxi services.
        </p>

        {/* Elfsight Reviews Widget Container (Client can replace className with their widget ID) */}
        <div className="elfsight-app-42755aaf-9a10-4d44-bf2f-4619df7cb473" data-elfsight-app-lazy>
          {/* Subtle Minimalist Placeholder while widget connects */}
          <div className="max-w-md mx-auto p-8 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-center text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">4.9 / 5.0</div>
              <div className="text-xs text-slate-400 mt-1">
                Over {COMPANY_INFO.reviewsCount}+ Verified Google Traveler Reviews
              </div>
            </div>
            <a
              href="https://g.page/r/CbDTgub5KWiJEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-semibold border border-slate-800 transition-colors"
            >
              <span>View or Leave a Google Review</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
