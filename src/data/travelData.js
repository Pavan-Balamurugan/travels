// Demo Travels - Central Data Configuration
import sedanImg from "../assets/sedan.jpg";
import suvImg from "../assets/suv.jpg";
import innovaImg from "../assets/innova.jpg";

export const COMPANY_INFO = {
  name: "Demo Travels",
  tagline: "Premier Drop Taxi & Outstation Travel Agency",
  phone: "+91 96555 18489",
  phoneRaw: "919655518489",
  whatsapp: "+91 96555 18489",
  whatsappRaw: "919655518489",
  email: "support@demotravels.com",
  address: "Central Travel Hub, Main Bypass Road, Madurai, Tamil Nadu 625001",
  workingHours: "24 Hours / 7 Days a Week",
  rating: 4.9,
  reviewsCount: 3850,
  completedTrips: "50,000+",
  activeDrivers: "450+",
  citiesCovered: "120+",
};

export const VEHICLES = [
  {
    id: "sedan",
    name: "Prime Sedan",
    category: "Sedan (Dzire / Etios / Aura)",
    oneWayRate: 14,
    roundTripRate: 13,
    driverBata: 400,
    minKmPerDay: 250,
    passengers: "4 Passengers",
    luggage: "2 Bags (Large)",
    ac: "Dual Zone AC",
    image: sedanImg,
    popular: true,
    description: "Ideal for solo travelers, couples, or small families seeking economical, air-conditioned comfort on long highways.",
    features: [
      "Ample legroom & boot space",
      "Fastag enabled vehicle",
      "Clean sanitized interiors",
      "USB mobile charging point",
      "Experienced highway chauffeur"
    ]
  },
  {
    id: "suv",
    name: "Spacious SUV",
    category: "SUV (Ertiga / Triber / Carens)",
    oneWayRate: 19,
    roundTripRate: 18,
    driverBata: 450,
    minKmPerDay: 250,
    passengers: "6 Passengers",
    luggage: "3 Bags (Large + Medium)",
    ac: "Roof-mounted AC vents",
    image: suvImg,
    popular: true,
    description: "Perfect blend of space, seating capacity, and luggage room for family vacations, temple tours, and group outings.",
    features: [
      "Comfortable 6+1 seating",
      "Foldable rear seats for extra bags",
      "High ground clearance",
      "Smooth highway suspension",
      "Top-rated chauffeur"
    ]
  },
  {
    id: "innova",
    name: "Innova / Crysta",
    category: "Premium MPV (Innova / Innova Crysta)",
    oneWayRate: 20,
    roundTripRate: 19,
    driverBata: 500,
    minKmPerDay: 300,
    passengers: "7 Passengers",
    luggage: "4 Bags (Large + Medium)",
    ac: "Individual AC control",
    image: innovaImg,
    popular: false,
    description: "The gold standard of long-distance intercity travel. Unmatched executive comfort, plush captain seats, and whisper-quiet cabin.",
    features: [
      "Plush captain seating",
      "Maximum comfort on long journeys",
      "Ideal for hill stations & pilgrimage",
      "Huge luggage capacity with roof carrier",
      "VIP chauffeur service"
    ]
  }
];

export const POPULAR_ROUTES = [
  { from: "Madurai", to: "Chennai", distance: 460, time: "7h 30m", sedanFare: 6440, suvFare: 8740 },
  { from: "Madurai", to: "Bangalore", distance: 435, time: "7h 15m", sedanFare: 6090, suvFare: 8265 },
  { from: "Madurai", to: "Coimbatore", distance: 215, time: "4h 10m", sedanFare: 3010, suvFare: 4085 },
  { from: "Madurai", to: "Trichy", distance: 135, time: "2h 15m", sedanFare: 1890, suvFare: 2565 },
  { from: "Madurai", to: "Rameswaram", distance: 175, time: "3h 20m", sedanFare: 2450, suvFare: 3325 },
  { from: "Madurai", to: "Kodaikanal", distance: 120, time: "3h 00m", sedanFare: 2400, suvFare: 3200 },
  { from: "Madurai", to: "Munnar", distance: 165, time: "4h 30m", sedanFare: 3300, suvFare: 4400 },
  { from: "Madurai", to: "Kanyakumari", distance: 245, time: "4h 30m", sedanFare: 3430, suvFare: 4655 },
  { from: "Madurai", to: "Tirunelveli", distance: 160, time: "2h 45m", sedanFare: 2240, suvFare: 3040 },
  { from: "Madurai", to: "Palani", distance: 115, time: "2h 20m", sedanFare: 1610, suvFare: 2185 },
];

export const TOUR_PACKAGES = [
  {
    id: "pkg-rameswaram",
    title: "Madurai → Rameswaram",
    category: "Pilgrimage",
    type: "Oneway / Round Trip",
    distance: "≈ 175 km",
    duration: "1 - 2 Days",
    tag: "Most Popular",
    highlights: ["Pamban Bridge", "Ramanathaswamy Temple", "Dhanushkodi Point", "APJ Abdul Kalam Memorial"],
    priceStarts: "₹2,450",
    cost: 2450,
    bgImage: "india-bg.jpg",
    description: "Witness the engineering marvel of Pamban Sea Bridge and seek blessings at sacred shrines with total peace of mind."
  },
  {
    id: "pkg-kodaikanal",
    title: "Madurai → Kodaikanal",
    category: "Hill Station",
    type: "Scenic Hill Ride",
    distance: "≈ 120 km",
    duration: "2 - 3 Days",
    tag: "Best for Family",
    highlights: ["Kodai Lake", "Coaker's Walk", "Pillar Rocks", "Silver Cascade Falls", "Bryant Park"],
    priceStarts: "₹2,520",
    cost: 2520,
    bgImage: "kodaikanal-bg.jpg",
    description: "Escape the heat to the Princess of Hill Stations. Experienced ghat-road drivers ensure a gentle and safe hill ascent."
  },
  {
    id: "pkg-munnar",
    title: "Madurai → Munnar",
    category: "Hill Station",
    type: "Tea Valley Tour",
    distance: "≈ 165 km",
    duration: "2 - 3 Days",
    tag: "Scenic Beauty",
    highlights: ["Tea Gardens & Museum", "Eravikulam National Park", "Mattupetty Dam", "Echo Point"],
    priceStarts: "₹3,500",
    cost: 3500,
    bgImage: "kashmir-bg.jpg",
    description: "Breathtaking landscapes, misty hills, and lush green tea estates with our experienced long-route chauffeurs."
  },
  {
    id: "pkg-ooty",
    title: "Madurai → Ooty & Coonoor",
    category: "Hill Station",
    type: "Blue Mountain Explorer",
    distance: "≈ 285 km",
    duration: "3 - 4 Days",
    tag: "Queen of Hills",
    highlights: ["Botanical Gardens", "Ooty Lake & Boating", "Doddabetta Peak", "Sim's Park Coonoor"],
    priceStarts: "₹4,500",
    cost: 4500,
    bgImage: "kodaikanal-bg.jpg",
    description: "Relax in royal Nilgiri weather with comfortable mountain-ready cabs and courteous drivers at your service."
  },
  {
    id: "pkg-palani",
    title: "Madurai → Palani",
    category: "Pilgrimage",
    type: "Divya Darshan Drop",
    distance: "≈ 120 km",
    duration: "Same Day Return",
    tag: "Spiritual Tour",
    highlights: ["Palani Murugan Temple", "Rope Car / Winch Access", "Idumban Hill Temple"],
    priceStarts: "₹1,680",
    cost: 1680,
    bgImage: "meenakshi-bg.jpg",
    description: "Seamless darshan drop service with scheduled pickup directly from your doorstep in Madurai."
  },
  {
    id: "pkg-trichy",
    title: "Madurai → Trichy & Srirangam",
    category: "Heritage",
    type: "One-Way / City Drop",
    distance: "≈ 135 km",
    duration: "Same Day",
    tag: "Express Route",
    highlights: ["Rockfort Ucchi Pillayar", "Sri Ranganathaswamy Temple", "Jambukeswarar Temple"],
    priceStarts: "₹1,890",
    cost: 1890,
    bgImage: "car-bg.avif",
    description: "Fast, stress-free four-lane highway ride. Best for corporate visits, airport drops, and spiritual visits."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Arvind Sundaram",
    role: "Professor & Travel Enthusiast",
    city: "Chennai",
    rating: 5,
    date: "12 Oct 2026",
    trip: "Madurai to Rameswaram",
    comment: "Extremely professional service by Demo Travels! The driver arrived 15 minutes before time, the Dzire was spotlessly clean, and billing was 100% transparent without any hidden surprises.",
    avatar: "AS"
  },
  {
    name: "Kavitha Natarajan",
    role: "IT Professional",
    city: "Bangalore",
    rating: 5,
    date: "28 Sep 2026",
    trip: "Madurai to Bangalore (One-Way)",
    comment: "Saved more than 40% compared to typical two-way taxi operators. Chauffeur Shankar drove very safely through the night. Truly recommend Demo Travels for any outstation ride!",
    avatar: "KN"
  },
  {
    name: "Rajeshwar Rao",
    role: "Business Owner",
    city: "Coimbatore",
    rating: 5,
    date: "04 Oct 2026",
    trip: "Madurai to Kodaikanal (Family Tour)",
    comment: "Booked an Innova for our 3-day family trip. The driver knew all scenic viewpoints and handled the hair-pin bends smoothly. Best drop taxi service in the region.",
    avatar: "RR"
  },
  {
    name: "Meera Krishnan",
    role: "Solo Traveler",
    city: "Madurai",
    rating: 5,
    date: "15 Oct 2026",
    trip: "Trichy Airport Drop",
    comment: "As a solo female traveler, safety and punctuality are my #1 priority. Demo Travels provided live driver details beforehand and the ride was exceptionally calm and secure.",
    avatar: "MK"
  }
];

export const FAQS = [
  {
    q: "How does One-Way Drop Taxi fare work?",
    a: "Unlike traditional cab services that charge you for two-way round distance, Demo Travels only charges for the exact one-way distance you travel. You never have to pay return toll, empty km fuel, or driver return charges."
  },
  {
    q: "Are toll fees, interstate permits, and parking included?",
    a: "Our per-km rate covers fuel, vehicle hire, and basic charges. Toll gate fees, interstate commercial permits, and parking charges (if applicable) are paid directly as per actual receipts."
  },
  {
    q: "How far in advance do I need to book my taxi?",
    a: "For One-Way Drop trips, we recommend booking at least 2 to 3 hours prior. For holiday packages and peak festival dates, booking 24 hours in advance guarantees your preferred vehicle model."
  },
  {
    q: "Can I pay via UPI, Credit Card, or Cash?",
    a: "Yes! We accept all modern digital payment methods including Google Pay, PhonePe, Paytm, BHIM UPI, net banking, debit/credit cards, or direct cash payment to the driver upon trip completion."
  },
  {
    q: "Is there any cancellation fee if my plans change?",
    a: "No hidden charges! If you cancel your trip at least 2 hours before the scheduled pickup time, zero cancellation fee is charged. We value your flexibility."
  },
  {
    q: "Are your drivers background verified?",
    a: "Yes, 100%. Every chauffeur in our fleet undergoes thorough identity verification, criminal background verification, and has a minimum of 5+ years of highway driving experience."
  }
];
