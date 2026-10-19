import React from "react";
import { Phone, MessageSquare, Car, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    "Hi Demo Travels, I want to book a drop taxi / outstation cab."
  )}`;

  return (
    <>
      {/* Floating Desktop WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-900/40 hover:scale-105 transition-all duration-200"
          title="Chat with Demo Travels on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-emerald-500 animate-ping"></span>
          </div>
          <span className="text-xs font-bold tracking-wide">
            WhatsApp Booking
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Visible on screens < 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-2.5 px-4 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          {/* Direct Call Button */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call Hotline</span>
          </a>

          {/* Direct WhatsApp / Book Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950 active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
