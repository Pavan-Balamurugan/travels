import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    "Hello Chennai Travels, I want to book a drop taxi / outstation cab."
  )}`;

  return (
    <>
      {/* Floating Desktop WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all duration-200"
          title="Chat with Chennai Travels on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-[#25D366] animate-ping"></span>
          </div>
          <span className="text-xs font-black tracking-wide">
            WhatsApp Booking
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Visible on screens < 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          {/* Direct Call Button */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-sm active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Hotline</span>
          </a>

          {/* Direct WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Book</span>
          </a>
        </div>
      </div>
    </>
  );
}
