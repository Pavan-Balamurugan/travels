import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import confetti from "canvas-confetti";
import {
  Car,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Printer,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "../data/travelData";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const stored = localStorage.getItem("bookingData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData(parsed);
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        setBookingId(`CT-${new Date().getFullYear()}-${randomNum}`);

        // Gentle celebratory confetti
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#f59e0b", "#10b981", "#3b82f6", "#0f172a"],
        });
      } catch (e) {
        console.error("Failed to parse booking data", e);
      }
    }
  }, []);

  const sendWhatsAppBooking = () => {
    if (!data) return;

    const isRound = data.tripType === "round-trip";
    const isPackage = data.tripType === "package";

    const formattedMessage = `*CHENNAI TRAVELS - NEW BOOKING REQUEST*
----------------------------------------
*Booking Ref ID:* ${bookingId}
*Trip Service:* ${isPackage ? "TOUR PACKAGE" : isRound ? "ROUND TRIP OUTSTATION" : "ONE-WAY DROP"}

*Customer Details:*
• *Passenger Name:* ${data.name}
• *Mobile Number:* +91 ${data.phone}

*Trip Itinerary:*
• *Pickup From:* ${data.pickup}
• *Destination:* ${data.drop}
• *Pickup Date:* ${data.date}
${isRound && data.returnDate ? `• *Return Date:* ${data.returnDate} (${data.tripDays || 1} Days)\n` : ""}• *Pickup Time:* ${data.time}
• *Selected Vehicle:* ${data.vehicleName || "Prime Sedan"} (${data.vehicleCategory || "AC Cabs"})
• *Distance:* ${data.distance ? data.distance + " km" : "As per actual odometer"}
• *Estimated Fare:* ${data.estimatedFare ? "₹" + Number(data.estimatedFare).toLocaleString("en-IN") : "Fixed by distance"}

*Terms Accepted:* Yes, customer reviewed pricing & terms.
----------------------------------------
_Please reply with driver name, contact, and car registration details._`;

    setConfirmed(true);

    const url = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handlePrint = () => {
    window.print();
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 text-amber-600 mx-auto flex items-center justify-center">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-black text-slate-900">No Booking Details Found</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            It looks like you haven't filled out a ride request yet. Select your pickup and drop location on our homepage to get an instant quote.
          </p>
          <Link
            to="/#book"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Book a Taxi Now</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-8 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Bar Navigation */}
      <div className="max-w-3xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <button
          type="button"
          onClick={() => navigate("/#book")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold shadow-2xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Edit Trip Details</span>
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold shadow-2xs transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4 text-amber-600" />
          <span>Print Voucher</span>
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        
        {/* Main Voucher Card */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden print:border-black print:shadow-none">
          
          {/* Voucher Header Banner */}
          <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 p-6 sm:p-7 border-b border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center font-black shadow-md">
                <Car className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                  Chennai<span className="text-white">Travels</span>
                </h1>
                <p className="text-xs text-slate-900 font-semibold">
                  Official Outstation Taxi Confirmation Voucher
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-[10px] uppercase tracking-wider text-slate-800 font-bold">
                Booking Reference ID
              </div>
              <div className="text-lg font-mono font-black text-slate-950">
                {bookingId}
              </div>
              <div className="text-xs text-emerald-800 font-bold flex items-center sm:justify-end gap-1 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Ready for Dispatch
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Travel Route Visual Bar */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] uppercase tracking-wider text-amber-700 font-black mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Confirmed Trip Itinerary</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                {/* Pickup */}
                <div className="md:col-span-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold">Pickup Location</div>
                    <div className="text-base font-black text-slate-900">{data.pickup}</div>
                  </div>
                </div>

                {/* Arrow / Distance Pill */}
                <div className="md:col-span-1 text-center py-1 md:py-0">
                  <div className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-black">
                    {data.distance ? `${data.distance} km` : "➔"}
                  </div>
                </div>

                {/* Drop */}
                <div className="md:col-span-5 flex items-start gap-3 md:justify-end md:text-right">
                  <div className="order-2 md:order-1">
                    <div className="text-[11px] text-slate-500 font-semibold">Drop Destination</div>
                    <div className="text-base font-black text-slate-900">{data.drop}</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5 order-1 md:order-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of Trip Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                  <User className="w-3.5 h-3.5 text-amber-600" />
                  <span className="font-semibold">Passenger Name</span>
                </div>
                <div className="text-sm font-black text-slate-900 truncate">{data.name}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold">Mobile Number</span>
                </div>
                <div className="text-sm font-black text-slate-900">+91 {data.phone}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span className="font-semibold">Scheduled Date</span>
                </div>
                <div className="text-sm font-black text-slate-900">
                  {data.date} {data.returnDate ? `to ${data.returnDate}` : ""}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span className="font-semibold">Pickup Time</span>
                </div>
                <div className="text-sm font-black text-slate-900">{data.time}</div>
              </div>

            </div>

            {/* Vehicle & Pricing Breakdown Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              
              {/* Left: Vehicle Specs */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                  <Car className="w-4 h-4" />
                  <span>Assigned Vehicle</span>
                </div>
                <div className="text-lg font-black text-slate-900">
                  {data.vehicleName || "Prime Sedan"}
                </div>
                <p className="text-xs text-slate-600">
                  {data.vehicleCategory || "Air-conditioned sanitized vehicle with courteous highway chauffeur"}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-700 font-medium">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Dual AC</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Deep Sanitized</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Luggage Carrier</span>
                </div>
              </div>

              {/* Right: Fare Summary */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 space-y-2.5 shadow-sm">
                <div className="text-xs font-black uppercase tracking-wider text-amber-900">
                  Fare Estimate Summary
                </div>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Service Type:</span>
                    <strong className="text-slate-900 uppercase">
                      {data.tripType === "round-trip" ? `Round Trip (${data.tripDays || 1} Days)` : data.tripType === "package" ? "Tour Package" : "One-Way Drop"}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Rate per Kilometre:</span>
                    <strong className="text-slate-900">
                      ₹{data.ratePerKm || 14} / km
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Billable Distance:</span>
                    <strong className="text-slate-900">
                      {data.distance ? `${data.distance} km` : "As per actual odometer"}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Driver Bata Allowance:</span>
                    <strong className="text-slate-900">
                      ₹{data.driverBata ? data.driverBata * (data.tripDays || 1) : 400} ({data.tripDays || 1} Day)
                    </strong>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-amber-200 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-slate-600 font-bold">Total Estimated Fare</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">Zero return charge applied</div>
                  </div>
                  <div className="text-2xl font-black text-amber-700">
                    {data.estimatedFare
                      ? `₹${Number(data.estimatedFare).toLocaleString("en-IN")}`
                      : "Fixed by Distance"}
                  </div>
                </div>
              </div>

            </div>

            {/* Terms and Conditions Accordion */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Important Travel Guidelines</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px] leading-relaxed">
                <li>Toll plaza fees, state commercial entry permits (if entering AP/Pondy/Karnataka), and parking receipts are extra at actuals.</li>
                <li>One-way drop bookings: our dispatch team assigns the vehicle 1-2 hours prior to scheduled departure.</li>
                <li>1 calendar day is calculated from midnight 12:00 AM to 12:00 AM midnight.</li>
                <li>Luggage inside seating area should not compromise passenger safety or driving vision.</li>
                <li>Zero advance payment required — pay the driver directly upon reaching your destination.</li>
              </ul>
            </div>

            {/* Terms Acceptance Checkbox */}
            <label className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-200 cursor-pointer hover:bg-amber-50 transition-colors">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-amber-500 focus:ring-amber-400 accent-amber-500 cursor-pointer"
              />
              <span className="text-xs text-slate-800 leading-relaxed">
                I have reviewed my trip itinerary, contact details, and agree to the <strong>Chennai Travels Terms & Conditions</strong>.
              </span>
            </label>

            {/* WhatsApp Confirmation CTA */}
            <div className="space-y-3 pt-1 print:hidden">
              <button
                type="button"
                disabled={!accepted}
                onClick={sendWhatsAppBooking}
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-base shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send Booking Request on WhatsApp</span>
              </button>

              {!accepted && (
                <p className="text-center text-xs text-amber-800 font-semibold">
                  👉 Please check the confirmation box above to send your booking to our 24/7 WhatsApp dispatch.
                </p>
              )}

              {confirmed && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center font-semibold">
                  ✔ WhatsApp booking message generated! Our Chennai dispatch team will confirm your chauffeur details in a moment.
                </div>
              )}
            </div>

          </div>

          {/* Footer note */}
          <div className="bg-slate-100 p-4 text-center border-t border-slate-200 text-xs text-slate-600">
            For 24/7 urgent helpline assistance call <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-700 font-bold hover:underline">{COMPANY_INFO.phone}</a> • Chennai Travels
          </div>

        </div>

      </div>
    </div>
  );
}
