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
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      id: "one-way",
      title: "One-Way Drop Taxi",
      badge: "Save Up To 40%",
      description:
        "Travel from Chennai to anywhere in Tamil Nadu, Pondicherry, Bangalore, or Andhra Pradesh paying only for the one-way distance. No empty return taxi charges.",
      icon: Car,
      features: ["Doorstep pickup across Chennai", "Strictly one-way billing", "Zero return toll or return fuel"],
    },
    {
      id: "round-trip",
      title: "Round-Trip Outstation",
      badge: "Family & Vacation",
      description:
        "Convenient multi-day journeys for family festivals, weekend getaways, and business visits. Dedicated professional chauffeur stays with your car throughout.",
      icon: Compass,
      features: ["Multiple sightseeing stops", "Transparent flat daily driver bata", "Fully customizable route plan"],
    },
    {
      id: "airport",
      title: "Chennai Airport (MAA) Taxi",
      badge: "24/7 Airport Service",
      description:
        "Punctual airport drops and pickups for Chennai International Airport (MAA). Live flight status monitoring with zero wait time guarantee.",
      icon: Plane,
      features: ["Pillar-side pickup coordination", "Luggage loading assistance", "Available 24/7 day and night"],
    },
    {
      id: "pilgrimage",
      title: "Tamil Nadu Temple Circuits",
      badge: "Devotional Darshan",
      description:
        "Specialized darshan tours from Chennai to Tirupati Balaji, Vellore Sripuram, Kanchipuram, Tiruvannamalai, Madurai Meenakshi, and Rameswaram.",
      icon: Sparkles,
      features: ["Temple timing knowledge", "Senior citizen friendly driver", "Flexible darshan queue waiting"],
    },
    {
      id: "hill-station",
      title: "Hill Station Tours",
      badge: "Ghat Specialists",
      description:
        "Scenic mountain trips to Kodaikanal, Ooty, Coonoor, Yercaud, and Valparai. Handled by experienced drivers trained in ghat hairpin turns and mist driving.",
      icon: Mountain,
      features: ["High ground clearance vehicles", "Scenic viewpoint photo stops", "Comfortable hill suspension"],
    },
    {
      id: "corporate",
      title: "Corporate & Wedding Fleet",
      badge: "Executive Class",
      description:
        "Executive sedans and Innova Crystas for corporate summits, wedding guest airport logistics, VIP delegations, and business travel with GST invoices.",
      icon: Building2,
      features: ["Official GST invoice provided", "Impeccably clean premium cars", "Priority business dispatch"],
    },
  ];

  const handleBookService = () => {
    const bookElem = document.getElementById("book");
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-10 sm:py-14 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-2.5">
            <Car className="w-3.5 h-3.5 text-amber-600" />
            <span>Reliable Travel Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Our Taxi Services in <span className="text-amber-500">Chennai</span>
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Whether you need a quick one-way drop, airport transit, or an extended holiday with family, Chennai Travels has you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 card-subtle transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-200 shadow-2xs group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-400 border border-slate-800 shadow-2xs">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleBookService}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-amber-400 text-slate-800 hover:text-slate-950 font-bold text-xs border border-slate-200 hover:border-amber-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
