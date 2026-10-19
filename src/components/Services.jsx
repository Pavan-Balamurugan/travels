import React from "react";
import {
  Car,
  Plane,
  Compass,
  Building2,
  Mountain,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      id: "one-way",
      title: "One-Way Drop Taxi",
      badge: "Save Up To 40%",
      description:
        "Travel to any city across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh & Telangana paying solely for the one-way distance. No empty return charges.",
      icon: Car,
      features: ["Doorstep pickup & drop", "Strictly one-way billing", "No return toll / fuel charges"],
    },
    {
      id: "round-trip",
      title: "Round-Trip Outstation",
      badge: "Family & Vacation",
      description:
        "Hassle-free multi-day journeys for family functions, festivals, holidays, and meetings. Dedicated chauffeur stays with your vehicle throughout.",
      icon: Compass,
      features: ["Multiple stopovers allowed", "Fixed transparent daily bata", "Customizable itineraries"],
    },
    {
      id: "airport",
      title: "Airport Transfers",
      badge: "Punctual Pickup",
      description:
        "Reliable outstation airport drops and pickups for Madurai (IXM), Trichy (TRZ), Coimbatore (CJB), Chennai (MAA), and Bangalore (BLR) international airports.",
      icon: Plane,
      features: ["Flight tracking support", "Luggage assistance", "Zero delay guarantee"],
    },
    {
      id: "pilgrimage",
      title: "Spiritual & Temple Tours",
      badge: "Sacred Shrines",
      description:
        "Specialized darshan tours to sacred destinations: Rameswaram, Palani Murugan Temple, Tiruchendur, Meenakshi Temple, and Srirangam with devout drivers.",
      icon: Sparkles,
      features: ["Temple timing knowledge", "Senior citizen assistance", "Flexible darshan halts"],
    },
    {
      id: "hill-station",
      title: "Hill Station Escapes",
      badge: "Ghat Specialists",
      description:
        "Scenic journeys to Kodaikanal, Munnar, Ooty, Valparai, and Megamalai. Driven by experienced drivers trained in hairpin bends and mist conditions.",
      icon: Mountain,
      features: ["Smooth mountain suspension", "Viewpoint halts on request", "Safe hill driving"],
    },
    {
      id: "corporate",
      title: "Corporate & Event Fleet",
      badge: "Executive Class",
      description:
        "Punctual executive cabs for business summits, wedding guest logistics, VIP delegations, and corporate conventions with formal GST billing.",
      icon: Building2,
      features: ["GST invoice provided", "Executive clean sedans", "Dedicated account support"],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-900/60 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Tailored Travel Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-amber-400">Taxi Services</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            From quick one-way city drops to extended mountain vacations and spiritual temple circuits, Demo Travels delivers safe, comfortable, and affordable rides.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group p-7 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#book"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group/link mt-2"
                >
                  <span>Book this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
