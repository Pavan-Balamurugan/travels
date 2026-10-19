import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const whatsappDirectUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    "Hello Chennai Travels, I would like to get a quote for a taxi ride from Chennai."
  )}`;

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    else if (form.name.trim().length < 2) errs.name = "Name must have at least 2 characters";

    if (!form.phone) errs.phone = "10-digit mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone)) errs.phone = "Enter valid 10-digit Indian mobile starting with 6, 7, 8, or 9";

    if (!form.message.trim()) errs.message = "Please enter your trip details or question";
    else if (form.message.trim().length < 5) errs.message = "Message must have at least 5 characters";

    setErrors(errs);
    setTouched({ name: true, phone: true, message: true });
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct WhatsApp send with customer query
    const text = `*CHENNAI TRAVELS - CUSTOMER ENQUIRY*%0A--------------------------------%0A• *Name:* ${encodeURIComponent(
      form.name
    )}%0A• *Phone:* +91 ${encodeURIComponent(form.phone)}%0A• *Enquiry:* ${encodeURIComponent(
      form.message
    )}%0A--------------------------------%0A_Please reply with vehicle availability and best fare._`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-2.5">
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>24/7 Dispatch & Travel Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-amber-500">Chennai Travels</span>
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Need an urgent cab dispatch, corporate travel quotation, or temple tour planning? We are available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Map */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all group flex items-start gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">24/7 Phone Booking</div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors mt-0.5">
                    {COMPANY_INFO.phone}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Immediate Call Dispatch
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all group flex items-start gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">WhatsApp Booking</div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors mt-0.5">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Instant reply in 1 minute
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all group flex items-start gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Email Enquiries</div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors mt-0.5 truncate">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    GST bills & corporate tie-ups
                  </div>
                </div>
              </a>

              {/* Operating Hours Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Operational Hours</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    24 Hours / 365 Days
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium mt-1">
                    Late night & early morning cabs
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map Embed & Chennai Address */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Head Office: {COMPANY_INFO.address}</span>
              </div>
              <div className="h-48 w-full rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  title="Chennai Travels Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124443.2386767664!2d80.12644265!3d12.9806385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d88691f618d%3A0x6b24513d8d73b060!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Enquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl">
            <h3 className="text-lg font-black text-slate-900 mb-1">Send an Instant Enquiry</h3>
            <p className="text-xs text-slate-500 mb-5">
              Have specific tour dates or group requirements? Get an immediate quote on WhatsApp.
            </p>

            {submitted && (
              <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! WhatsApp opened with your enquiry. We will reply instantly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (touched.name && e.target.value.trim().length >= 2) {
                        setErrors((prev) => ({ ...prev, name: "" }));
                      }
                    }}
                    onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                    className={`w-full bg-white border rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:outline-none transition-all ${
                      touched.name && errors.name
                        ? "border-red-400 bg-red-50/30 focus:border-red-500"
                        : "border-slate-300 focus:border-amber-500"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                </div>
                {touched.name && errors.name && (
                  <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Contact Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => {
                      const clean = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setForm({ ...form, phone: clean });
                      if (touched.phone && /^[6-9]\d{9}$/.test(clean)) {
                        setErrors((prev) => ({ ...prev, phone: "" }));
                      }
                    }}
                    onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                    className={`w-full bg-white border rounded-xl py-2.5 pl-11 pr-9 text-sm text-slate-900 focus:outline-none transition-all ${
                      touched.phone && errors.phone
                        ? "border-red-400 bg-red-50/30 focus:border-red-500"
                        : "border-slate-300 focus:border-amber-500"
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                  {touched.phone && !errors.phone && form.phone.length === 10 && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                </div>
                {touched.phone && errors.phone && (
                  <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Trip Details / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need Innova for 6 persons from Chennai to Tirupati on Saturday morning..."
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (touched.message && e.target.value.trim().length >= 5) {
                      setErrors((prev) => ({ ...prev, message: "" }));
                    }
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, message: true }))}
                  className={`w-full bg-white border rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:outline-none transition-all ${
                    touched.message && errors.message
                      ? "border-red-400 bg-red-50/30 focus:border-red-500"
                      : "border-slate-300 focus:border-amber-500"
                  }`}
                ></textarea>
                {touched.message && errors.message && (
                  <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md shadow-[#25D366]/25 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send WhatsApp Enquiry</span>
              </button>

              <div className="text-[11px] text-slate-500 text-center">
                ✔ 100% Privacy • No marketing spam guaranteed
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
