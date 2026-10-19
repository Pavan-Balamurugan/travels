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
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Compass,
  Info,
} from "lucide-react";
import { VEHICLES, POPULAR_ROUTES, COMPANY_INFO, CHENNAI_PICKUP_POINTS, POPULAR_DESTINATIONS } from "../data/travelData";

export default function BookingForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tripType, setTripType] = useState("one-way"); // "one-way" | "round-trip"

  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    returnDate: "",
    time: "",
    vehicle: "sedan",
    distance: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Initialize dates and listen to events
  useEffect(() => {
    const today = new Date();
    const formatted = today.toISOString().split("T")[0];
    const hours = String(today.getHours() + 2).padStart(2, "0");
    const defaultTime = `${hours > 23 ? "09" : hours}:00`;

    // Tomorrow for return default
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

    setFormData((prev) => ({
      ...prev,
      date: prev.date || formatted,
      returnDate: prev.returnDate || tomorrowFormatted,
      time: prev.time || defaultTime,
    }));

    // Listen to custom route prefill event from Hero or Footer
    const handlePrefillRoute = (e) => {
      const route = e.detail;
      if (route) {
        setFormData((prev) => ({
          ...prev,
          pickup: route.from || "Chennai",
          drop: route.to || "",
          distance: route.distance ? String(route.distance) : prev.distance,
        }));
        setErrors((prev) => ({ ...prev, pickup: "", drop: "" }));
      }
    };

    // Listen to vehicle select from FleetTariff
    const handleSelectVehicle = (e) => {
      const vId = e.detail?.vehicleId;
      if (vId) {
        setFormData((prev) => ({ ...prev, vehicle: vId }));
      }
    };

    window.addEventListener("prefillRoute", handlePrefillRoute);
    window.addEventListener("selectVehicle", handleSelectVehicle);

    return () => {
      window.removeEventListener("prefillRoute", handlePrefillRoute);
      window.removeEventListener("selectVehicle", handleSelectVehicle);
    };
  }, []);

  const currentVehicle = VEHICLES.find((v) => v.id === formData.vehicle) || VEHICLES[0];

  // Calculate days for round trip
  const calculateDays = () => {
    if (tripType !== "round-trip" || !formData.date || !formData.returnDate) return 1;
    const start = new Date(formData.date);
    const end = new Date(formData.returnDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays > 0 ? diffDays : 1;
  };

  const tripDays = calculateDays();

  // Dynamic live fare calculation
  const calculateFare = () => {
    const dist = parseFloat(formData.distance);
    if (!dist || isNaN(dist) || dist <= 0) return null;

    if (tripType === "one-way") {
      const rate = currentVehicle.oneWayRate;
      const baseFare = Math.round(dist * rate);
      const bata = currentVehicle.driverBata;
      return baseFare + bata;
    } else {
      // Round trip: minimum km per day applies
      const rate = currentVehicle.roundTripRate;
      const minKm = currentVehicle.minKmPerDay * tripDays;
      const totalKm = Math.max(dist * 2, minKm);
      const baseFare = Math.round(totalKm * rate);
      const totalBata = currentVehicle.driverBata * tripDays;
      return baseFare + totalBata;
    }
  };

  const estimatedFare = calculateFare();

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const validateField = (field, value) => {
    let err = "";

    switch (field) {
      case "name":
        if (!value.trim()) {
          err = "Passenger name is required";
        } else if (value.trim().length < 2) {
          err = "Name must have at least 2 characters";
        }
        break;

      case "phone":
        if (!value) {
          err = "10-digit mobile number is required";
        } else if (!/^[6-9]\d{9}$/.test(value)) {
          err = "Enter valid 10-digit Indian mobile starting with 6, 7, 8, or 9";
        }
        break;

      case "pickup":
        if (!value.trim()) {
          err = "Pickup location in Chennai is required";
        } else if (value.trim().length < 3) {
          err = "Please enter specific pickup landmark or address";
        } else if (formData.drop && value.trim().toLowerCase() === formData.drop.trim().toLowerCase()) {
          err = "Pickup and Drop locations cannot be identical";
        }
        break;

      case "drop":
        if (!value.trim()) {
          err = "Drop destination is required";
        } else if (value.trim().length < 3) {
          err = "Please enter a valid destination city or town";
        } else if (formData.pickup && value.trim().toLowerCase() === formData.pickup.trim().toLowerCase()) {
          err = "Pickup and Drop locations cannot be identical";
        }
        break;

      case "date":
        if (!value) {
          err = "Pickup date is required";
        } else if (value < todayStr) {
          err = "Pickup date cannot be in the past";
        }
        break;

      case "returnDate":
        if (tripType === "round-trip") {
          if (!value) {
            err = "Return date is required for round trips";
          } else if (value < formData.date) {
            err = "Return date cannot be earlier than pickup date";
          }
        }
        break;

      case "time":
        if (!value) {
          err = "Pickup time is required";
        } else if (formData.date === todayStr) {
          // Check if time is in the past
          const now = new Date();
          const [h, m] = value.split(":").map(Number);
          const pickupDateObj = new Date();
          pickupDateObj.setHours(h, m, 0, 0);

          if (pickupDateObj.getTime() < now.getTime() - 5 * 60 * 1000) {
            err = "Pickup time today cannot be in the past";
          }
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: err }));
    return !err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const clean = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: clean }));
      if (touched.phone) validateField("phone", clean);
      return;
    }

    if (name === "distance") {
      const clean = value.replace(/[^0-9.]/g, "");
      setFormData((prev) => ({ ...prev, distance: clean }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) validateField(name, value);
  };

  const validateAll = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Passenger name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must have at least 2 characters";

    if (!formData.phone) newErrors.phone = "10-digit mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit Indian mobile starting with 6, 7, 8, or 9";
    }

    if (!formData.pickup.trim()) newErrors.pickup = "Pickup location in Chennai is required";
    else if (formData.pickup.trim().length < 3) newErrors.pickup = "Please enter specific pickup area or landmark";

    if (!formData.drop.trim()) newErrors.drop = "Drop destination is required";
    else if (formData.drop.trim().length < 3) newErrors.drop = "Please enter a valid destination city";

    if (formData.pickup.trim() && formData.drop.trim() && formData.pickup.trim().toLowerCase() === formData.drop.trim().toLowerCase()) {
      newErrors.drop = "Pickup and Drop locations cannot be identical";
    }

    if (!formData.date) newErrors.date = "Pickup date is required";
    else if (formData.date < todayStr) newErrors.date = "Pickup date cannot be in the past";

    if (tripType === "round-trip") {
      if (!formData.returnDate) newErrors.returnDate = "Return date is required for round trips";
      else if (formData.returnDate < formData.date) newErrors.returnDate = "Return date cannot be earlier than pickup date";
    }

    if (!formData.time) newErrors.time = "Pickup time is required";

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      pickup: true,
      drop: true,
      date: true,
      returnDate: true,
      time: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) {
      // Scroll to first error
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        const inputElem = document.querySelector(`[name="${firstErrorKey}"]`);
        if (inputElem) inputElem.focus();
      }
      return;
    }

    setLoading(true);

    const bookingPayload = {
      ...formData,
      tripType,
      tripDays: tripType === "round-trip" ? tripDays : 1,
      vehicleName: currentVehicle.name,
      vehicleCategory: currentVehicle.category,
      ratePerKm: tripType === "round-trip" ? currentVehicle.roundTripRate : currentVehicle.oneWayRate,
      driverBata: currentVehicle.driverBata,
      estimatedFare: estimatedFare || null,
      bookedAt: new Date().toISOString(),
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingPayload));

    setTimeout(() => {
      setLoading(false);
      navigate("/confirm-booking");
    }, 600);
  };

  return (
    <section id="book" className="py-10 sm:py-14 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Why Book with Chennai Travels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Instant Doorstep Dispatch Across Chennai</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Quick & Transparent <br />
                <span className="text-amber-500">Cab Booking</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Book your drop taxi in under 60 seconds with zero advance deposit. Pay only for the exact distance travelled.
              </p>
            </div>

            {/* Clean Feature List */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Why Travelers Trust Us:</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Return Fare:</strong> Pay only for the one-way distance you ride.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Punctual Chauffeurs:</strong> Car arrives 15 mins before scheduled time.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Clean Sanitized AC Fleet:</strong> Dzire, Etios, Ertiga & Innova Crysta.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero Advance Required:</strong> Pay driver directly via GPay, PhonePe, or Cash.</span>
              </div>
            </div>

            {/* Chennai Quick Pickup Shortcuts */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Common Chennai Pickup Hubs (Click to set):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CHENNAI_PICKUP_POINTS.slice(0, 6).map((point, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, pickup: point }));
                      setErrors((prev) => ({ ...prev, pickup: "" }));
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-amber-100 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-amber-300 transition-colors font-medium cursor-pointer"
                  >
                    {point.split(" ")[0]} {point.split(" ")[1] || ""}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Phone Assistance Banner - Subtle Dark Mix */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white flex items-center justify-between gap-3 shadow-sm card-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold">Need immediate cab booking?</div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-sm font-black text-amber-400 hover:text-amber-300 transition-colors block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shrink-0 transition-all shadow-xs"
              >
                Call Now
              </a>
            </div>

          </div>

          {/* Right Column: Clean, High-Contrast Light Booking Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl card-subtle">
              
              {/* Trip Type Segmented Selector - Subtle Dark Mix */}
              <div className="flex p-1.5 bg-slate-900 rounded-2xl mb-5 border border-slate-800 shadow-sm">
                <button
                  type="button"
                  onClick={() => setTripType("one-way")}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    tripType === "one-way"
                      ? "bg-amber-400 text-slate-950 font-black shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  One-Way Drop (Save 40%)
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("round-trip")}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    tripType === "round-trip"
                      ? "bg-amber-400 text-slate-950 font-black shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Round Trip Outstation
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Passenger Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur("name")}
                        className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-9 text-sm text-slate-900 focus:outline-none transition-all ${
                          touched.name && errors.name
                            ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : touched.name && !errors.name && formData.name
                            ? "border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                            : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                        }`}
                      />
                      {touched.name && !errors.name && formData.name && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                      {touched.name && errors.name && (
                        <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                    </div>
                    {touched.name && errors.name && (
                      <p className="text-red-600 text-[11px] font-semibold mt-1 flex items-center gap-1">
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none">
                        +91
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("phone")}
                        maxLength={10}
                        className={`w-full bg-white border rounded-xl py-2.5 pl-11 pr-9 text-sm text-slate-900 focus:outline-none transition-all ${
                          touched.phone && errors.phone
                            ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : touched.phone && !errors.phone && formData.phone.length === 10
                            ? "border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                            : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                        }`}
                      />
                      {touched.phone && !errors.phone && formData.phone.length === 10 && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                      {touched.phone && errors.phone && (
                        <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                    </div>
                    {touched.phone && errors.phone ? (
                      <p className="text-red-600 text-[11px] font-semibold mt-1 flex items-center gap-1">
                        <span>{errors.phone}</span>
                      </p>
                    ) : (
                      <p className="text-slate-400 text-[10px] mt-1">Direct SMS & WhatsApp driver details will be sent here</p>
                    )}
                  </div>
                </div>

                {/* Pickup & Drop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pickup Location in Chennai <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="pickup"
                        placeholder="e.g. Chennai Airport / Tambaram / OMR"
                        value={formData.pickup}
                        onChange={handleChange}
                        onBlur={() => handleBlur("pickup")}
                        className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-9 text-sm text-slate-900 focus:outline-none transition-all ${
                          touched.pickup && errors.pickup
                            ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : touched.pickup && !errors.pickup && formData.pickup
                            ? "border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                            : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                        }`}
                      />
                      {touched.pickup && !errors.pickup && formData.pickup && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                      {touched.pickup && errors.pickup && (
                        <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                    </div>
                    {touched.pickup && errors.pickup && (
                      <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.pickup}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Drop Destination City <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="drop"
                        placeholder="e.g. Pondicherry / Bangalore / Madurai"
                        value={formData.drop}
                        onChange={handleChange}
                        onBlur={() => handleBlur("drop")}
                        className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-9 text-sm text-slate-900 focus:outline-none transition-all ${
                          touched.drop && errors.drop
                            ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : touched.drop && !errors.drop && formData.drop
                            ? "border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                            : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                        }`}
                      />
                      {touched.drop && !errors.drop && formData.drop && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                      {touched.drop && errors.drop && (
                        <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                    </div>
                    {touched.drop && errors.drop && (
                      <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.drop}</p>
                    )}
                  </div>
                </div>

                {/* Date & Time */}
                <div className={`grid grid-cols-1 ${tripType === "round-trip" ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-4`}>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pickup Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        name="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={handleChange}
                        onBlur={() => handleBlur("date")}
                        className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-900 focus:outline-none transition-all ${
                          touched.date && errors.date
                            ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                        }`}
                      />
                    </div>
                    {touched.date && errors.date && (
                      <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.date}</p>
                    )}
                  </div>

                  {tripType === "round-trip" && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Return Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          name="returnDate"
                          min={formData.date || todayStr}
                          value={formData.returnDate}
                          onChange={handleChange}
                          onBlur={() => handleBlur("returnDate")}
                          className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-900 focus:outline-none transition-all ${
                            touched.returnDate && errors.returnDate
                              ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                              : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                          }`}
                        />
                      </div>
                      {touched.returnDate && errors.returnDate && (
                        <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.returnDate}</p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pickup Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        onBlur={() => handleBlur("time")}
                        className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-900 focus:outline-none transition-all ${
                          touched.time && errors.time
                            ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                        }`}
                      />
                    </div>
                    {touched.time && errors.time && (
                      <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Vehicle Selection: 3 Clean Light Cards */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Select Vehicle Model
                    </label>
                    <span className="text-[11px] text-amber-700 font-semibold">
                      {tripType === "round-trip" ? `Round Trip (${tripDays} Days)` : "One-Way Drop"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {VEHICLES.map((v) => {
                      const isSelected = formData.vehicle === v.id;
                      const rate = tripType === "round-trip" ? v.roundTripRate : v.oneWayRate;
                      return (
                        <div
                          key={v.id}
                          onClick={() => setFormData((prev) => ({ ...prev, vehicle: v.id }))}
                          className={`cursor-pointer rounded-2xl p-3 text-center border-2 card-subtle transition-all ${
                            isSelected
                              ? "bg-amber-50 border-amber-400 shadow-sm ring-1 ring-amber-400 text-slate-950"
                              : "bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-slate-50"
                          }`}
                        >
                          <div className="font-extrabold text-xs sm:text-sm text-slate-900">{v.name}</div>
                          <div className="text-xs sm:text-sm text-amber-600 font-black mt-0.5">₹{rate}/km</div>
                          <div className="text-[10px] text-slate-500 mt-0.5 font-medium">{v.passengers}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Distance & Estimated Fare Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Distance in km <span className="text-slate-400 text-[10px] font-normal">(Optional for instant fare)</span>
                    </label>
                    <input
                      type="text"
                      name="distance"
                      placeholder="e.g. 155"
                      value={formData.distance}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 rounded-xl py-2 px-3 text-sm text-slate-900 focus:outline-none"
                    />
                  </div>

                  {estimatedFare ? (
                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300 text-left sm:text-right">
                      <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                        Estimated Fare ({tripType === "round-trip" ? `${tripDays} Days Round Trip` : "One-Way"}):
                      </div>
                      <div className="text-2xl font-black text-amber-600">
                        ₹{estimatedFare.toLocaleString("en-IN")}
                      </div>
                      <div className="text-[10px] text-emerald-700 font-medium">Includes Driver Bata • No hidden fee</div>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      💡 Toll and interstate permit charges extra at actual plaza receipts.
                    </div>
                  )}
                </div>

                {/* Submit Booking Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-base shadow-lg shadow-amber-400/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 mt-3"
                >
                  {loading ? (
                    <span>Verifying & Confirming Ride...</span>
                  ) : (
                    <>
                      <span>Proceed to Confirm Booking</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Zero advance payment
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    Free cancellation up to 2 hours
                  </span>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
