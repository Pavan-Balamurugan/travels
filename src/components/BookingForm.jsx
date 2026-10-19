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
  ShieldAlert,
  Info,
  CheckCircle2,
  Sparkles,
  Calculator,
  Compass,
} from "lucide-react";
import { VEHICLES, POPULAR_ROUTES, COMPANY_INFO } from "../data/travelData";

export default function BookingForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tripType, setTripType] = useState("one-way"); // "one-way" | "round-trip" | "airport" | "package"

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "sedan",
    distance: "",
    tripDays: "1",
    specialNotes: "",
  });

  const [errors, setErrors] = useState({});

  // Set default date to today
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

  // Quick Preset Selection
  const applyPreset = (route) => {
    setFormData((prev) => ({
      ...prev,
      pickup: route.from,
      drop: route.to,
      distance: String(route.distance),
    }));
    setErrors((prev) => ({ ...prev, pickup: "", drop: "", distance: "" }));
  };

  // Find currently selected vehicle object
  const currentVehicle = VEHICLES.find((v) => v.id === formData.vehicle) || VEHICLES[0];

  // Dynamic Fare Calculation
  const calculateFare = () => {
    const dist = parseFloat(formData.distance);
    if (!dist || isNaN(dist) || dist <= 0) return null;

    const ratePerKm =
      tripType === "round-trip"
        ? currentVehicle.roundTripRate
        : currentVehicle.oneWayRate;

    // For round trip, distance is double
    const totalKm = tripType === "round-trip" ? dist * 2 : dist;
    const baseFare = Math.round(totalKm * ratePerKm);
    const driverBata = currentVehicle.driverBata * (parseInt(formData.tripDays) || 1);
    const totalEstimated = baseFare + driverBata;

    return {
      ratePerKm,
      totalKm,
      baseFare,
      driverBata,
      totalEstimated,
    };
  };

  const fareEstimate = calculateFare();

  // Input Change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name: letters and spaces only
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;

    // Phone: numbers only up to 10 digits
    if (name === "phone") {
      const clean = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: clean }));
      if (clean.length === 10) setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }

    // Distance: positive numbers only
    if (name === "distance") {
      const clean = value.replace(/[^0-9.]/g, "");
      setFormData((prev) => ({ ...prev, distance: clean }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = "Please enter pickup location or city";
    }

    if (!formData.drop.trim()) {
      newErrors.drop = "Please enter drop destination";
    }

    if (!formData.date) {
      newErrors.date = "Select travel date";
    }

    if (!formData.time) {
      newErrors.time = "Select pickup time";
    }

    // Check past time if same day
    const now = new Date();
    const selectedDate = new Date(`${formData.date}T${formData.time || "00:00"}`);
    if (formData.date && formData.time && selectedDate < now) {
      newErrors.time = "Pickup time cannot be in the past";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit / Booking enquiry
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const bookingPayload = {
      ...formData,
      tripType,
      vehicleName: currentVehicle.name,
      vehicleCategory: currentVehicle.category,
      ratePerKm: fareEstimate?.ratePerKm || currentVehicle.oneWayRate,
      estimatedFare: fareEstimate?.totalEstimated || null,
      fareBreakdown: fareEstimate,
      bookedAt: new Date().toISOString(),
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingPayload));

    setTimeout(() => {
      setLoading(false);
      navigate("/confirm-booking");
    }, 1200);
  };

  return (
    <section id="book" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Rate Estimator & Doorstep Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Book Your Ride with <span className="text-amber-400">Demo Travels</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Fill in your travel details to instantly calculate your estimated fare with 100% price transparency. No surge pricing, no surprises.
          </p>
        </div>

        {/* Popular Route Presets */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-400" />
              Quick Fill Popular Routes:
            </span>
            <span className="text-xs text-amber-400 font-medium hidden sm:inline">
              Click to autofill route & distance
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {POPULAR_ROUTES.slice(0, 6).map((route, i) => (
              <button
                key={i}
                type="button"
                onClick={() => applyPreset(route)}
                className="shrink-0 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-amber-400/40 text-xs font-medium transition-all duration-150 flex items-center gap-1.5 group"
              >
                <span>
                  {route.from} → {route.to}
                </span>
                <span className="text-[10px] text-amber-400 font-bold bg-amber-400/10 px-1 rounded">
                  {route.distance} km
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Form + Summary Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Card (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl backdrop-blur-xl">
            
            {/* Trip Type Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-slate-950/80 rounded-2xl mb-8 border border-slate-800">
              {[
                { id: "one-way", label: "One-Way Drop", desc: "No Return Fare" },
                { id: "round-trip", label: "Round Trip", desc: "Two-way Outstation" },
                { id: "airport", label: "Airport Drop", desc: "Flight Connection" },
                { id: "package", label: "Holiday Tour", desc: "Custom Sightseeing" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setTripType(tab.id)}
                  className={`py-2.5 px-3 rounded-xl text-center transition-all duration-200 ${
                    tripType === tab.id
                      ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 font-medium"
                  }`}
                >
                  <div className="text-xs sm:text-sm">{tab.label}</div>
                  <div className={`text-[10px] ${tripType === tab.id ? "text-slate-900/80" : "text-slate-400"}`}>
                    {tab.desc}
                  </div>
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-950/80 border rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none transition-all ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mobile Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-400 text-xs pointer-events-none">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      className={`w-full bg-slate-950/80 border rounded-xl py-3 pl-14 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none transition-all ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 2: Pickup & Drop Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Pickup Location / City <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="pickup"
                      placeholder="e.g. Madurai (Mattuthavani / Airport)"
                      value={formData.pickup}
                      onChange={handleChange}
                      className={`w-full bg-slate-950/80 border rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none transition-all ${
                        errors.pickup
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                  </div>
                  {errors.pickup && <p className="text-red-400 text-xs mt-1">{errors.pickup}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Drop Destination / City <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="drop"
                      placeholder="e.g. Chennai / Bangalore / Rameswaram"
                      value={formData.drop}
                      onChange={handleChange}
                      className={`w-full bg-slate-950/80 border rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none transition-all ${
                        errors.drop
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                  </div>
                  {errors.drop && <p className="text-red-400 text-xs mt-1">{errors.drop}</p>}
                </div>
              </div>

              {/* Row 3: Date & Time */}
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
                      className={`w-full bg-slate-950/80 border rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none transition-all ${
                        errors.date
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                  </div>
                  {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
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
                      className={`w-full bg-slate-950/80 border rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none transition-all ${
                        errors.time
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                  </div>
                  {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* Vehicle Selection Cards */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Choose Preferred Vehicle Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {VEHICLES.map((v) => {
                    const isSelected = formData.vehicle === v.id;
                    const rate =
                      tripType === "round-trip" ? v.roundTripRate : v.oneWayRate;
                    return (
                      <div
                        key={v.id}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, vehicle: v.id }))
                        }
                        className={`cursor-pointer rounded-2xl p-3.5 border transition-all duration-200 relative ${
                          isSelected
                            ? "bg-slate-900 border-amber-400 ring-2 ring-amber-400/20 shadow-lg shadow-amber-500/10"
                            : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400"></div>
                        )}
                        <div className="flex items-center gap-2 mb-1">
                          <Car className={`w-4 h-4 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
                          <span className="font-bold text-white text-sm">{v.name}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1 mb-2">
                          {v.category}
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                          <span className="text-slate-400">{v.passengers}</span>
                          <span className="text-amber-400 font-extrabold">₹{rate}/km</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Distance & Trip Days */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>Estimated One-Way Distance (km)</span>
                    <span className="text-slate-400 text-[11px]">Optional for Quote</span>
                  </label>
                  <div className="relative">
                    <Calculator className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="distance"
                      placeholder="e.g. 175"
                      value={formData.distance}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-400 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {tripType === "round-trip" && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Trip Duration (Days)
                    </label>
                    <select
                      name="tripDays"
                      value={formData.tripDays}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-400 rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all"
                    >
                      <option value="1">1 Day</option>
                      <option value="2">2 Days</option>
                      <option value="3">3 Days</option>
                      <option value="4">4 Days</option>
                      <option value="5">5+ Days</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating Trip Estimate...</span>
                  </div>
                ) : (
                  <>
                    <span>Proceed to Confirm Booking</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp booking confirmation • No upfront advance required</span>
              </div>
            </form>
          </div>

          {/* Right Column: Live Fare Preview & Guarantees (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Fare Card */}
            <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  Fare Estimate Preview
                </h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {tripType === "round-trip" ? "Round Trip" : "One-Way Drop"}
                </span>
              </div>

              {fareEstimate ? (
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Selected Vehicle:</span>
                    <strong className="text-white font-semibold">{currentVehicle.name}</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Billable Distance:</span>
                    <strong className="text-white font-semibold">{fareEstimate.totalKm} km</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Per Km Rate:</span>
                    <strong className="text-white font-semibold">₹{fareEstimate.ratePerKm} / km</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Base Vehicle Fare:</span>
                    <span className="text-slate-200">₹{fareEstimate.baseFare}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Driver Bata Allowance:</span>
                    <span className="text-slate-200">₹{fareEstimate.driverBata}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Estimated Fare</div>
                      <div className="text-[10px] text-emerald-400">Zero return charge</div>
                    </div>
                    <div className="text-2xl font-extrabold text-amber-400">
                      ₹{fareEstimate.totalEstimated.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-slate-800 mx-auto flex items-center justify-center text-amber-400">
                    <Info className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-300">
                    Enter distance or pick a preset route above to calculate live pricing.
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Base rates: Sedan ₹14/km • SUV ₹19/km • Innova ₹20/km
                  </p>
                </div>
              )}

              {/* Extra note info */}
              <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Transparent Billing Policy:</span>
                </div>
                <p>• Fastag toll plaza charges & parking are paid at actuals.</p>
                <p>• Drop trips please book min 2-3 hours prior for guaranteed cab.</p>
                <p>• Hill station travel may have slight variations due to ghat terrain.</p>
              </div>
            </div>

            {/* Why Us Trust Pill */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Why Riders Trust Demo Travels
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pay strictly for one way. Save 40% immediately.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Odometer started strictly from your pickup point.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Round the clock emergency fleet dispatch.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
