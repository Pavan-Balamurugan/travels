import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Calendar, Clock, Car, User, Phone, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { VEHICLES } from "../data/travelData";

export default function PackageModal({ pkg, onClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const todayStr = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: todayStr,
    time: "07:00",
    car: "sedan",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const clean = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: clean }));
      if (touched.phone) validateField("phone", clean);
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) validateField(name, value);
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, form[field]);
  };

  const validateField = (field, value) => {
    let err = "";
    if (field === "name") {
      if (!value.trim()) err = "Passenger name is required";
      else if (value.trim().length < 2) err = "Name must have at least 2 characters";
    }
    if (field === "phone") {
      if (!value) err = "10-digit mobile number is required";
      else if (!/^[6-9]\d{9}$/.test(value)) err = "Valid 10-digit mobile starting with 6-9 is required";
    }
    if (field === "date") {
      if (!value) err = "Pickup date is required";
      else if (value < todayStr) err = "Pickup date cannot be in the past";
    }
    if (field === "time") {
      if (!value) err = "Pickup time is required";
    }

    setErrors((prev) => ({ ...prev, [field]: err }));
    return !err;
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Passenger name is required";
    else if (form.name.trim().length < 2) newErrors.name = "Name must have at least 2 characters";

    if (!form.phone) newErrors.phone = "10-digit mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone)) newErrors.phone = "Valid 10-digit mobile starting with 6-9 is required";

    if (!form.date) newErrors.date = "Select trip start date";
    else if (form.date < todayStr) newErrors.date = "Pickup date cannot be in the past";

    if (!form.time) newErrors.time = "Select pickup time";

    setErrors(newErrors);
    setTouched({ name: true, phone: true, date: true, time: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const [pickup, drop] = pkg.title.includes("→")
      ? pkg.title.split("→").map((s) => s.trim())
      : ["Chennai", pkg.title];

    const selectedVehicleObj = VEHICLES.find((v) => v.id === form.car) || VEHICLES[0];

    const bookingPayload = {
      name: form.name,
      phone: form.phone,
      pickup: pickup || "Chennai (Doorstep)",
      drop: drop || pkg.title,
      date: form.date,
      time: form.time,
      vehicle: form.car,
      vehicleName: selectedVehicleObj.name,
      vehicleCategory: selectedVehicleObj.category,
      ratePerKm: selectedVehicleObj.roundTripRate,
      driverBata: selectedVehicleObj.driverBata,
      tripType: "package",
      packageTitle: pkg.title,
      estimatedFare: pkg.cost,
      distance: pkg.distance.replace(/[^0-9]/g, ""),
      duration: pkg.duration,
      bookedAt: new Date().toISOString(),
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingPayload));

    setTimeout(() => {
      setLoading(false);
      onClose();
      navigate("/confirm-booking");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 uppercase tracking-wider">
            {pkg.tag || "Tour Package"}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">{pkg.title}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-600">
            <span>Distance: <strong className="text-slate-900">{pkg.distance}</strong></span>
            <span>•</span>
            <span>Duration: <strong className="text-slate-900">{pkg.duration}</strong></span>
            <span>•</span>
            <span className="text-amber-600 font-extrabold">{pkg.priceStarts}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                className={`w-full bg-white border rounded-xl py-2.5 pl-10 pr-9 text-sm text-slate-900 focus:outline-none transition-all ${
                  touched.name && errors.name
                    ? "border-red-400 bg-red-50/30 focus:border-red-500"
                    : touched.name && !errors.name && form.name
                    ? "border-emerald-400 focus:border-emerald-500"
                    : "border-slate-300 focus:border-amber-500"
                }`}
              />
              {touched.name && !errors.name && form.name && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
              )}
              {touched.name && errors.name && (
                <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
              )}
            </div>
            {touched.name && errors.name && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              10-Digit Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none">
                +91
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                maxLength={10}
                className={`w-full bg-white border rounded-xl py-2.5 pl-11 pr-9 text-sm text-slate-900 focus:outline-none transition-all ${
                  touched.phone && errors.phone
                    ? "border-red-400 bg-red-50/30 focus:border-red-500"
                    : touched.phone && !errors.phone && form.phone.length === 10
                    ? "border-emerald-400 focus:border-emerald-500"
                    : "border-slate-300 focus:border-amber-500"
                }`}
              />
              {touched.phone && !errors.phone && form.phone.length === 10 && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
              )}
              {touched.phone && errors.phone && (
                <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
              )}
            </div>
            {touched.phone && errors.phone && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Start Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  name="date"
                  min={todayStr}
                  value={form.date}
                  onChange={handleChange}
                  onBlur={() => handleBlur("date")}
                  className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-xl py-2 pl-9 pr-2 text-xs sm:text-sm text-slate-900 focus:outline-none"
                />
              </div>
              {touched.date && errors.date && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Pickup Time <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  onBlur={() => handleBlur("time")}
                  className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-xl py-2 pl-9 pr-2 text-xs sm:text-sm text-slate-900 focus:outline-none"
                />
              </div>
              {touched.time && errors.time && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.time}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Select Preferred Car
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "sedan", label: "Sedan 4+1", sub: "Dzire/Etios" },
                { id: "suv", label: "SUV 6+1", sub: "Ertiga" },
                { id: "innova", label: "Innova 7+1", sub: "Crysta" },
              ].map((car) => (
                <button
                  key={car.id}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, car: car.id }))}
                  className={`py-2 px-2 rounded-xl text-center border-2 transition-all cursor-pointer ${
                    form.car === car.id
                      ? "bg-amber-50 text-slate-950 border-amber-400 font-bold shadow-2xs"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="text-xs font-bold">{car.label}</div>
                  <div className="text-[10px] text-slate-500">{car.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 transition-all"
            >
              {loading ? (
                <span>Generating Booking Voucher...</span>
              ) : (
                <>
                  <span>Confirm Package Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <div className="text-center pt-1">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Cancel and go back
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
