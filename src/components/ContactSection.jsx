import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Car,
} from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const whatsappDirectUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    "Hi Demo Travels, I would like to get a quote for a taxi ride."
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    // Direct WhatsApp send with customer query
    const text = `Demo Travels - Quick Query%0AName: ${encodeURIComponent(
      form.name
    )}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(
      form.message || "General enquiry"
    )}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 Dispatch & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-amber-400">Demo Travels</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Need an urgent cab, corporate travel quotation, or pilgrimage package guidance? We are available around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Google Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-400/40 transition-all group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">24/7 Telephone Booking</div>
                  <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mt-0.5">
                    {COMPANY_INFO.phone}
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Instant Call Dispatch
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">WhatsApp Booking</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors mt-0.5">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Typical reply in 1 min
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Inquiries</div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors mt-0.5 truncate">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    For corporate & GST bills
                  </div>
                </div>
              </a>

              {/* Operating Hours Card */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Service Hours</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    24 Hours / 365 Days
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1">
                    Night pickups available
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 h-64 relative">
              <iframe
                title="Demo Travels Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124443.2386767664!2d80.12644265!3d12.9806385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d88691f618d%3A0x6b24513d8d73b060!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Quick Enquiry Form */}
          <div className="lg:col-span-5 bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">Send a Quick Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Our travel manager will respond immediately with custom rates and vehicle availability.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! WhatsApp conversation opened with your enquiry.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl py-3 px-4 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl py-3 px-4 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Trip Requirements / Questions
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your route, number of passengers, dates, or specific questions..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl py-3 px-4 text-sm text-white focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Send WhatsApp Enquiry</span>
              </button>

              <div className="text-[11px] text-slate-400 text-center">
                We respect your privacy. No marketing spam guaranteed.
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
