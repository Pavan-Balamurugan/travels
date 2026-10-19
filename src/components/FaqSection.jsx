import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { FAQS, COMPANY_INFO } from "../data/travelData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about one-way drop taxi billing, toll policies, cancellations, and vehicle choices.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-amber-400/20 text-amber-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a special custom trip requirement?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Speak directly with our travel dispatch team for group bookings or special quotes.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 border border-slate-700 text-xs font-bold flex items-center gap-2 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Call Hotline: {COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
