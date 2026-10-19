import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Calendar, Clock, Car, User, Phone, CheckCircle2, ArrowRight } from "lucide-react";

export default function PackageModal({ pkg, onClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    car: "sedan",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";
    const today = new Date().toISOString().split("T")[0];
    setForm((prev) => ({ ...prev, date: today, time: "08:00" }));

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const clean = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: clean }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.phone || form.phone.length < 10) newErrors.phone = "Enter a valid 10-digit mobile number";
    if (!form.date) newErrors.date = "Select trip start date";
    if (!form.time) newErrors.time = "Select pickup time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const [pickup, drop] = pkg.title.includes("→")
      ? pkg.title.split("→").map((s) => s.trim())
      : ["Chennai", pkg.title];

    const bookingPayload = {
      name: form.name,
      phone: form.phone,
      pickup: pickup || "Chennai",
      drop: drop || pkg.title,
      date: form.date,
      time: form.time,
      vehicle: form.car,
      vehicleName: form.car === "innova" ? "Innova / Crysta" : form.car === "suv" ? "Spacious SUV" : "Prime Sedan",
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
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 uppercase tracking-wider">
            {pkg.category} Package
          </span>
          <h3 className="text-2xl font-extrabold text-white mt-2">{pkg.title}</h3>
          <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-400">
            <span>Distance: <strong className="text-slate-200">{pkg.distance}</strong></span>
            <span>•</span>
            <span>Duration: <strong className="text-slate-200">{pkg.duration}</strong></span>
            <span>•</span>
            <span className="text-amber-400 font-bold">{pkg.priceStarts}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your Name <span className="text-amber-400">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none"
              />
            </div>
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Mobile Number <span className="text-amber-400">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none"
              />
            </div>
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Start Date <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2.5 pl-9 pr-2 text-xs sm:text-sm text-white focus:outline-none"
                />
              </div>
              {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Pickup Time <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2.5 pl-9 pr-2 text-xs sm:text-sm text-white focus:outline-none"
                />
              </div>
              {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Select Vehicle
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "sedan", label: "Sedan 4+1" },
                { id: "suv", label: "SUV 6+1" },
                { id: "innova", label: "Innova 7+1" },
              ].map((car) => (
                <button
                  key={car.id}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, car: car.id }))}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all ${
                    form.car === car.id
                      ? "bg-amber-400 text-slate-950 border-amber-400"
                      : "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {car.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {loading ? (
                <span>Confirming Booking...</span>
              ) : (
                <>
                  <span>Confirm Package Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Cancel and return
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
