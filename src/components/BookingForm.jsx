import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { VEHICLES, POPULAR_ROUTES, COMPANY_INFO } from "../data/travelData";

export default function BookingForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tripType, setTripType] = useState("one-way"); // "one-way" | "round-trip"

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "sedan",
    distance: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const today = new Date();
    const formatted = today.toISOString().split("T")[0];
    const hours = String(today.getHours() + 2).padStart(2, "0");
    const defaultTime = `${hours > 23 ? "09" : hours}:00`;

    setFormData((prev) => ({
      ...prev,
      date: prev.date || formatted,
      time: prev.time || defaultTime,
    }));
  }, []);

  const currentVehicle = VEHICLES.find((v) => v.id === formData.vehicle) || VEHICLES[0];

  // Dynamic live fare calculation
  const calculateFare = () => {
    const dist = parseFloat(formData.distance);
    if (!dist || isNaN(dist) || dist <= 0) return null;

    const rate = tripType === "round-trip" ? currentVehicle.roundTripRate : currentVehicle.oneWayRate;
    const totalKm = tripType === "round-trip" ? dist * 2 : dist;
    const base = Math.round(totalKm * rate);
    const bata = currentVehicle.driverBata;
    return base + bata;
  };

  const estimatedFare = calculateFare();

  const applyPreset = (route) => {
    setFormData((prev) => ({
      ...prev,
      pickup: route.from,
      drop: route.to,
      distance: String(route.distance),
    }));
    setErrors((prev) => ({ ...prev, pickup: "", drop: "", distance: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const clean = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: clean }));
      if (clean.length === 10) setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }
    if (name === "distance") {
      const clean = value.replace(/[^0-9.]/g, "");
      setFormData((prev) => ({ ...prev, distance: clean }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Enter your name";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Enter valid 10-digit number";
    if (!formData.pickup.trim()) newErrors.pickup = "Enter pickup location";
    if (!formData.drop.trim()) newErrors.drop = "Enter drop location";
    if (!formData.date) newErrors.date = "Select date";
    if (!formData.time) newErrors.time = "Select time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const bookingPayload = {
      ...formData,
      tripType,
      vehicleName: currentVehicle.name,
      vehicleCategory: currentVehicle.category,
      ratePerKm: tripType === "round-trip" ? currentVehicle.roundTripRate : currentVehicle.oneWayRate,
      estimatedFare: estimatedFare || null,
      bookedAt: new Date().toISOString(),
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingPayload));

    setTimeout(() => {
      setLoading(false);
      navigate("/confirm-booking");
    }, 800);
  };

  return (
    <section id="book" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Soft Ambient Background Blur */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Why Choose Demo Travels (Spacious & Clean) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Doorstep Dispatch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Book Your Ride with <br />
                <span className="text-amber-400">Demo Travels</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Enjoy transparent pricing with zero return charges. Whether it's an outstation drop, airport run, or family pilgrimage, we ensure safe and punctual travel.
              </p>
            </div>

            {/* Clean Feature List */}
            <ul className="space-y-3.5 text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>One-way & outstation drop trips (Pay only one way)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Zero hidden charges • No peak surge multiplier</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Experienced highway drivers & sanitized AC fleet</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Punctual doorstep pickup at your preferred time</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>24×7 customer care & emergency road assistance</span>
              </li>
            </ul>

            {/* Quick Route Shortcuts */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Popular destinations (click to autofill):</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_ROUTES.slice(0, 4).map((r, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => applyPreset(r)}
                    className="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  >
                    {r.from} → {r.to}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Need immediate cab booking?</div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-sm font-bold text-white hover:text-amber-400 transition-colors"
                >
                  Call Hotline: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Spacious Booking Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 rounded-3xl p-7 sm:p-9 border border-slate-800 shadow-2xl backdrop-blur-xl">
              
              {/* Trip Type Segmented Pills */}
              <div className="flex p-1 bg-slate-950 rounded-2xl mb-6 border border-slate-800/80">
                <button
                  type="button"
                  onClick={() => setTripType("one-way")}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    tripType === "one-way"
                      ? "bg-amber-400 text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  One-Way Drop (No Return Fare)
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("round-trip")}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    tripType === "round-trip"
                      ? "bg-amber-400 text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Round Trip Outstation
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mobile Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Pickup & Drop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Pickup Location <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="pickup"
                        placeholder="e.g. Chennai (Central / Airport / OMR)"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.pickup && <p className="text-red-400 text-[11px] mt-1">{errors.pickup}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Drop Destination <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="drop"
                        placeholder="e.g. Pondicherry / Bangalore / Madurai"
                        value={formData.drop}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.drop && <p className="text-red-400 text-[11px] mt-1">{errors.drop}</p>}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Pickup Date <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.date && <p className="text-red-400 text-[11px] mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Pickup Time <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.time && <p className="text-red-400 text-[11px] mt-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Vehicle Selection: 3 clean tabs */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Select Vehicle
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {VEHICLES.map((v) => {
                      const isSelected = formData.vehicle === v.id;
                      const rate = tripType === "round-trip" ? v.roundTripRate : v.oneWayRate;
                      return (
                        <div
                          key={v.id}
                          onClick={() => setFormData((prev) => ({ ...prev, vehicle: v.id }))}
                          className={`cursor-pointer rounded-2xl p-3 text-center border transition-all ${
                            isSelected
                              ? "bg-slate-950 border-amber-400 text-white shadow-md ring-1 ring-amber-400"
                              : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          <div className="font-bold text-xs sm:text-sm text-white">{v.name}</div>
                          <div className="text-[11px] text-amber-400 font-extrabold mt-0.5">₹{rate}/km</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{v.passengers}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Distance (Optional for instant quote) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Estimated Distance (km) <span className="text-slate-400 text-[10px]">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="distance"
                      placeholder="e.g. 175"
                      value={formData.distance}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2.5 px-3.5 text-sm text-white focus:outline-none"
                    />
                  </div>

                  {/* Inline Estimated Fare pill */}
                  {estimatedFare ? (
                    <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/25 text-left sm:text-right mt-1 sm:mt-4">
                      <div className="text-[11px] text-slate-400">Estimated Total Fare:</div>
                      <div className="text-xl font-black text-amber-400">
                        ₹{estimatedFare.toLocaleString("en-IN")}
                      </div>
                    </div>
                  ) : (
                    <div className="hidden sm:block text-[11px] text-slate-400 pt-4">
                      Toll & parking charges extra at actuals.
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 mt-3"
                >
                  {loading ? (
                    <span>Confirming Details...</span>
                  ) : (
                    <>
                      <span>Proceed to Confirm Booking</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-400 pt-1">
                  ✔ Zero advance required • Instant WhatsApp confirmation
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
