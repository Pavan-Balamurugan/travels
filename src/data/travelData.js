// Demo Travels - Central Data Configuration (Chennai Based)
import sedanImg from "../assets/sedan.jpg";
import suvImg from "../assets/suv.jpg";
import innovaImg from "../assets/innova.jpg";

export const COMPANY_INFO = {
  name: "Demo Travels",
  tagline: "Chennai's Premier Drop Taxi & Outstation Travel Agency",
  city: "Chennai",
  phone: "+91 96555 18489",
  phoneRaw: "919655518489",
  whatsapp: "+91 96555 18489",
  whatsappRaw: "919655518489",
  email: "support@demotravels.com",
  address: "Main GST Road, Near Airport / Guindy, Chennai, Tamil Nadu 600032",
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
    description: "Ideal for solo travelers, couples, or small families seeking economical, air-conditioned comfort on highways.",
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
  { from: "Chennai", to: "Pondicherry", distance: 155, time: "2h 45m", sedanFare: 2170, suvFare: 2945 },
  { from: "Chennai", to: "Bangalore", distance: 345, time: "5h 45m", sedanFare: 4830, suvFare: 6555 },
  { from: "Chennai", to: "Madurai", distance: 460, time: "7h 30m", sedanFare: 6440, suvFare: 8740 },
  { from: "Chennai", to: "Tirupati", distance: 135, time: "3h 00m", sedanFare: 1890, suvFare: 2565 },
  { from: "Chennai", to: "Trichy", distance: 330, time: "5h 30m", sedanFare: 4620, suvFare: 6270 },
  { from: "Chennai", to: "Coimbatore", distance: 505, time: "8h 30m", sedanFare: 7070, suvFare: 9595 },
  { from: "Chennai", to: "Vellore", distance: 140, time: "2h 30m", sedanFare: 1960, suvFare: 2660 },
  { from: "Chennai", to: "Salem", distance: 345, time: "5h 45m", sedanFare: 4830, suvFare: 6555 },
];

export const TOUR_PACKAGES = [
  {
    id: "pkg-pondi",
    title: "Chennai → Pondicherry",
    distance: "≈ 155 km",
    duration: "1 - 2 Days",
    tag: "Most Popular",
    highlights: ["Scenic ECR Coast", "Auroville", "Promenade Beach", "French Quarter"],
    priceStarts: "₹2,170",
    cost: 2170,
    bgImage: "india-bg.jpg",
    description: "Picturesque East Coast Road drive from Chennai to Pondy. Enjoy peaceful beaches, French architecture, and cafe culture."
  },
  {
    id: "pkg-tirupati",
    title: "Chennai → Tirupati",
    distance: "≈ 135 km",
    duration: "Same Day / 2 Days",
    tag: "Devotional Darshan",
    highlights: ["Sri Venkateswara Swamy Temple", "Alipiri Steps", "Padmavathi Ammavari Temple"],
    priceStarts: "₹1,890",
    cost: 1890,
    bgImage: "meenakshi-bg.jpg",
    description: "Doorstep pickup in Chennai for early morning Tirumala Balaji darshan with flexible halt timings."
  },
  {
    id: "pkg-bangalore",
    title: "Chennai → Bangalore",
    distance: "≈ 345 km",
    duration: "One-Way / Round Trip",
    tag: "Express Highway",
    highlights: ["Smooth NH44 Ride", "Electronic City", "Whitefield", "Doorstep Drop"],
    priceStarts: "₹4,830",
    cost: 4830,
    bgImage: "car-bg.avif",
    description: "Fast 6-lane highway connection from Chennai to Bangalore. Comfortable AC travel for tech professionals and families."
  },
  {
    id: "pkg-madurai",
    title: "Chennai → Madurai",
    distance: "≈ 460 km",
    duration: "2 - 3 Days",
    tag: "Cultural Tour",
    highlights: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace", "Famous Madurai Jigarthanda"],
    priceStarts: "₹6,440",
    cost: 6440,
    bgImage: "meenakshi-bg.jpg",
    description: "Comfortable long-distance ride through Trichy corridor directly to the historic Temple City of Madurai."
  },
  {
    id: "pkg-kodaikanal",
    title: "Chennai → Kodaikanal",
    distance: "≈ 525 km",
    duration: "3 - 4 Days",
    tag: "Hill Escape",
    highlights: ["Kodai Lake", "Coaker's Walk", "Pillar Rocks", "Silver Cascade Falls"],
    priceStarts: "₹7,350",
    cost: 7350,
    bgImage: "kodaikanal-bg.jpg",
    description: "Beat the Chennai heat with a cool escape to the Princess of Hill Stations. Experienced mountain chauffeurs."
  },
  {
    id: "pkg-ooty",
    title: "Chennai → Ooty & Coonoor",
    distance: "≈ 535 km",
    duration: "3 - 4 Days",
    tag: "Queen of Hills",
    highlights: ["Botanical Gardens", "Ooty Lake & Boating", "Doddabetta Peak", "Tea Factory"],
    priceStarts: "₹7,490",
    cost: 7490,
    bgImage: "kashmir-bg.jpg",
    description: "Relax in Nilgiri weather with comfortable mountain-ready cabs and courteous drivers at your service."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Arvind Sundaram",
    role: "Professor & Travel Enthusiast",
    city: "Chennai (Anna Nagar)",
    rating: 5,
    date: "12 Oct 2026",
    trip: "Chennai to Pondicherry",
    comment: "Extremely professional service by Demo Travels! The driver arrived 15 minutes before time at our Anna Nagar residence, the Dzire was spotlessly clean, and billing was 100% transparent.",
    avatar: "AS"
  },
  {
    name: "Kavitha Natarajan",
    role: "IT Professional",
    city: "Chennai (OMR)",
    rating: 5,
    date: "28 Sep 2026",
    trip: "Chennai to Bangalore (One-Way)",
    comment: "Saved more than 40% compared to typical two-way taxi operators. Chauffeur Shankar drove very safely through the highway. Truly recommend Demo Travels for any outstation ride!",
    avatar: "KN"
  },
  {
    name: "Rajeshwar Rao",
    role: "Business Owner",
    city: "Chennai (T. Nagar)",
    rating: 5,
    date: "04 Oct 2026",
    trip: "Chennai to Tirupati (Family Darshan)",
    comment: "Booked an Innova for our family darshan trip. The driver knew all temple protocols and parking points. Smooth and hassle-free service.",
    avatar: "RR"
  },
  {
    name: "Meera Krishnan",
    role: "Solo Traveler",
    city: "Chennai (Velachery)",
    rating: 5,
    date: "15 Oct 2026",
    trip: "Chennai to Madurai",
    comment: "As a solo female traveler, safety and punctuality are my priority. Demo Travels provided live driver details beforehand and the ride was exceptionally calm and secure.",
    avatar: "MK"
  }
];

export const FAQS = [
  {
    q: "How does One-Way Drop Taxi fare from Chennai work?",
    a: "Unlike traditional cab services that charge you for two-way round distance, Demo Travels only charges for the exact one-way distance you travel from Chennai to your destination. You never have to pay return toll, empty km fuel, or driver return charges."
  },
  {
    q: "Are toll fees, interstate permits, and parking included?",
    a: "Our per-km rate covers fuel, vehicle hire, and basic charges. Fastag toll gate fees, interstate commercial permits, and parking charges (if applicable) are paid directly as per actual receipts."
  },
  {
    q: "How far in advance do I need to book my taxi in Chennai?",
    a: "For One-Way Drop trips, we recommend booking at least 2 to 3 hours prior. For holiday packages and peak weekend travel, booking 24 hours in advance guarantees your preferred vehicle model."
  },
  {
    q: "Can I pay via UPI, Credit Card, or Cash?",
    a: "Yes! We accept all modern digital payment methods including Google Pay, PhonePe, Paytm, BHIM UPI, net banking, debit/credit cards, or direct cash payment to the driver upon trip completion."
  },
  {
    q: "Is there any cancellation fee if my travel plans change?",
    a: "No hidden charges! If you cancel your trip at least 2 hours before the scheduled pickup time, zero cancellation fee is charged. We value your flexibility."
  },
  {
    q: "Are your drivers background verified?",
    a: "Yes, 100%. Every chauffeur in our fleet undergoes thorough identity verification, criminal background verification, and has a minimum of 5+ years of highway driving experience."
  }
];
