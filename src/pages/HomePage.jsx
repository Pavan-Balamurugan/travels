import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import Services from "../components/Services";
import FleetTariff from "../components/FleetTariff";
import TourPackages from "../components/TourPackages";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // If URL has a hash like #book, scroll to it smoothly
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BookingForm />
        <Services />
        <FleetTariff />
        <TourPackages />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
