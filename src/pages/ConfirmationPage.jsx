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
  FileText,
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
    // Scroll to top
    window.scrollTo(0, 0);

    const stored = localStorage.getItem("bookingData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData(parsed);
        // Generate a random booking reference ID
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        setBookingId(`DT-${new Date().getFullYear()}-${randomNum}`);

        // Launch celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#f59e0b", "#10b981", "#3b82f6", "#ffffff"],
        });
      } catch (e) {
        console.error("Failed to parse booking data", e);
      }
    }
  }, []);

  const sendWhatsAppBooking = () => {
    if (!data) return;

    const formattedMessage = `*DEMO TRAVELS - NEW TAXI BOOKING REQUEST*
----------------------------------------
*Booking Ref ID:* ${bookingId}
*Trip Type:* ${data.tripType ? data.tripType.toUpperCase() : "ONE-WAY DROP"}

*Customer Details:*
• *Name:* ${data.name}
• *Mobile:* +91 ${data.phone}

*Trip Itinerary:*
• *Pickup:* ${data.pickup}
• *Destination:* ${data.drop}
• *Date:* ${data.date}
• *Time:* ${data.time}
• *Vehicle:* ${data.vehicleName || data.vehicle?.toUpperCase() || "Sedan"}
• *Distance:* ${data.distance ? data.distance + " km" : "As per actual odometer"}
• *Est. Fare:* ${data.estimatedFare ? "₹" + data.estimatedFare : "To be confirmed"}

*Customer Status:* Accepted Terms & Conditions.
----------------------------------------
_Please confirm chauffeur dispatch and car registration details._`;

    setConfirmed(true);

    const url = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(url, "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 mx-auto flex items-center justify-center">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-white">No Booking Details Found</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            It looks like you haven't filled out a ride request yet. Select your pickup and drop location on our homepage to get an instant quote.
          </p>
          <Link
            to="/#book"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Book a Taxi Now</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Bar Navigation */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate("/#book")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Edit Trip Details</span>
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-all print:hidden"
        >
          <Printer className="w-4 h-4 text-amber-400" />
          <span>Print Voucher</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Main Voucher Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden print:bg-white print:text-black print:border-black">
          
          {/* Voucher Header Banner */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-extrabold shadow-lg shadow-amber-500/20">
                <Car className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Demo<span className="text-amber-400">Travels</span>
                </h1>
                <p className="text-xs text-slate-400">
                  Official Outstation Booking Confirmation Voucher
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Booking Reference
              </div>
              <div className="text-base sm:text-lg font-mono font-bold text-amber-400">
                {bookingId}
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center sm:justify-end gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Ready for Dispatch
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Travel Route Visual Bar */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Confirmed Route Itinerary</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                {/* Pickup */}
                <div className="md:col-span-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Pickup Point</div>
                    <div className="text-base font-bold text-white">{data.pickup}</div>
                  </div>
                </div>

                {/* Arrow / Distance Pill */}
                <div className="md:col-span-1 text-center py-2 md:py-0">
                  <div className="inline-block px-2.5 py-1 rounded-full bg-slate-800 text-amber-400 text-[11px] font-bold">
                    {data.distance ? `${data.distance} km` : "➔"}
                  </div>
                </div>

                {/* Drop */}
                <div className="md:col-span-5 flex items-start gap-3 md:justify-end md:text-right">
                  <div className="order-2 md:order-1">
                    <div className="text-[11px] text-slate-400 font-medium">Drop Destination</div>
                    <div className="text-base font-bold text-white">{data.drop}</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 order-1 md:order-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of Trip Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Passenger Name</span>
                </div>
                <div className="text-sm font-bold text-white truncate">{data.name}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Contact Number</span>
                </div>
                <div className="text-sm font-bold text-white">+91 {data.phone}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Scheduled Date</span>
                </div>
                <div className="text-sm font-bold text-white">{data.date}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pickup Time</span>
                </div>
                <div className="text-sm font-bold text-white">{data.time}</div>
              </div>

            </div>

            {/* Vehicle & Pricing Breakdown Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Left: Vehicle Specs */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Car className="w-4 h-4" />
                  <span>Assigned Vehicle Type</span>
                </div>
                <div className="text-lg font-bold text-white">
                  {data.vehicleName || data.vehicle?.toUpperCase() || "Prime Sedan"}
                </div>
                <p className="text-xs text-slate-400">
                  {data.vehicleCategory || "Air-Conditioned clean vehicle with experienced highway chauffeur"}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">AC Enabled</span>
                  <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">Clean Sanitized</span>
                  <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">Luggage Carrier</span>
                </div>
              </div>

              {/* Right: Fare Summary */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-amber-400/30 space-y-3 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Fare Estimate Summary
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Rate per Kilometre:</span>
                    <strong className="text-white">
                      ₹{data.ratePerKm || (data.vehicle === "suv" ? 19 : 14)} / km
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Billable Distance:</span>
                    <strong className="text-white">
                      {data.distance ? `${data.distance} km` : "As per actual odometer"}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Driver Bata Allowance:</span>
                    <strong className="text-white">₹400 / day</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Total Estimated Fare</div>
                    <div className="text-[10px] text-emerald-400">Zero return fare applied</div>
                  </div>
                  <div className="text-2xl font-black text-amber-400">
                    {data.estimatedFare
                      ? `₹${Number(data.estimatedFare).toLocaleString("en-IN")}`
                      : "Fixed by Distance"}
                  </div>
                </div>
              </div>

            </div>

            {/* Terms and Conditions Accordion / Notice */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Important Travel Terms & Conditions</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px] leading-relaxed">
                <li>Toll fees, interstate commercial permit charges, and parking tickets are extra as per actual plaza receipts.</li>
                <li>One-way drop trips: please book minimum 2-3 hours before departure for timely driver arrival.</li>
                <li>1 calendar day means midnight 12:00 AM to the next midnight 12:00 AM.</li>
                <li>Hill station trips (Kodaikanal, Munnar, Ooty) might have slight hill charges based on ghat checkposts.</li>
                <li>Luggage inside seating area should not compromise passenger safety or vehicle operation.</li>
              </ul>
            </div>

            {/* Terms Acceptance Checkbox */}
            <label className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-amber-400 focus:ring-amber-400 bg-slate-900 border-slate-700 accent-amber-400 cursor-pointer"
              />
              <span className="text-xs text-slate-300 leading-relaxed">
                I have reviewed my trip itinerary, contact details, and agree to the <strong>Demo Travels Terms & Conditions</strong>.
              </span>
            </label>

            {/* WhatsApp Confirmation CTA */}
            <div className="space-y-3 pt-2 print:hidden">
              <button
                type="button"
                disabled={!accepted}
                onClick={sendWhatsAppBooking}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white font-extrabold text-base shadow-xl shadow-emerald-950 flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send Booking Request on WhatsApp</span>
              </button>

              {!accepted && (
                <p className="text-center text-xs text-amber-400/90 font-medium">
                  Please check the box above to enable instant WhatsApp dispatch confirmation.
                </p>
              )}

              {confirmed && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs text-center">
                  WhatsApp booking request sent! Our dispatch coordinator will reply with car and driver details shortly.
                </div>
              )}
            </div>

          </div>

          {/* Footer note */}
          <div className="bg-slate-950 p-4 text-center border-t border-slate-800 text-[11px] text-slate-500">
            For 24/7 urgent helpline assistance call <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 font-semibold">{COMPANY_INFO.phone}</a> • Demo Travels Drop Taxi
          </div>

        </div>

      </div>
    </div>
  );
}
