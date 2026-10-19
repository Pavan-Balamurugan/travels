// Chennai Travels - Central Data Configuration (Chennai, Tamil Nadu)
import sedanImg from "../assets/sedan.jpg";
import suvImg from "../assets/suv.jpg";
import innovaImg from "../assets/innova.jpg";

export const COMPANY_INFO = {
  name: "Chennai Travels",
  brandShort: "Chennai",
  brandAccent: "Travels",
  tagline: "Chennai's #1 Rated Drop Taxi & Outstation Cab Service",
  subTagline: "Clean AC Cabs • Strictly One-Way Billing • 24/7 Doorstep Pickup Across Chennai & Tamil Nadu",
  city: "Chennai",
  state: "Tamil Nadu",
  phone: "+91 96555 18489",
  phoneRaw: "919655518489",
  whatsapp: "+91 96555 18489",
  whatsappRaw: "919655518489",
  email: "contact@chennaitravels.in",
  address: "No. 42, GST Road, Near Airport & Guindy Metro, Chennai, Tamil Nadu 600032",
  workingHours: "24 Hours / 7 Days a Week (Day & Night Dispatch)",
  rating: 4.9,
  reviewsCount: 4280,
  completedTrips: "52,000+",
  activeDrivers: "480+",
  citiesCovered: "140+",
};

export const CHENNAI_PICKUP_POINTS = [
  "Chennai Airport (MAA) - Domestic/Intl",
  "Chennai Central (Dr. MGR Central)",
  "Chennai Egmore Railway Station",
  "Tambaram (Sanatorium / Bus Stand)",
  "Koyambedu (CMBT / Metro)",
  "OMR (Tidel Park / Perungudi / Sholinganallur)",
  "Velachery (Phoenix Marketcity / MRTS)",
  "Guindy (Kathipara / Metro)",
  "Anna Nagar (Roundtana / Tower)",
  "T. Nagar (Panagal Park / Usman Road)",
  "Porur (DLF IT Park / Junction)",
  "Navallur / Siruseri SIPCOT",
  "Chromepet / Pallavaram",
  "Adyar / Besant Nagar",
  "Mylapore / Santhome",
  "Avadi / Ambattur Industrial Estate"
];

export const POPULAR_DESTINATIONS = [
  "Pondicherry (Promenade / Auroville)",
  "Bangalore (Electronic City / Majestic)",
  "Tirupati (Balaji Darshan)",
  "Vellore (Golden Temple / CMC)",
  "Mahabalipuram (ECR Beach)",
  "Kanchipuram (Temple City)",
  "Madurai (Meenakshi Temple)",
  "Trichy (Rockfort / Srirangam)",
  "Coimbatore (Gandhipuram / Airport)",
  "Salem (New Bus Stand)",
  "Kodaikanal (Hill Station)",
  "Ooty & Coonoor (Nilgiris)",
  "Rameswaram (Dhanushkodi)",
  "Tiruvannamalai (Girivalam / Temple)",
  "Kumbakonam (Navagraha Temples)",
  "Thanjavur (Brihadeeswara Temple)"
];

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
    luggage: "2 Large Bags + Handbags",
    ac: "Dual Zone Chilled AC",
    image: sedanImg,
    popular: true,
    description: "Best for solo travelers, couples, or small families. Super economical highway cruising with ample legroom and clean interiors.",
    features: [
      "Ample legroom & generous boot space",
      "Fastag enabled vehicle for quick toll transit",
      "Sanitized AC interiors before every trip",
      "Mobile USB fast-charging ports",
      "Courteous highway specialist chauffeur"
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
    luggage: "3 Large Bags + 2 Small",
    ac: "Roof-mounted AC vents",
    image: suvImg,
    popular: true,
    description: "The preferred choice for family vacations, temple tours, and group outings with comfortable seating and flexible luggage capacity.",
    features: [
      "Comfortable 6+1 family seating configuration",
      "Split foldable rear seats for extra luggage",
      "High ground clearance for comfortable village routes",
      "Rear individual AC blower controls",
      "Highly rated senior highway driver"
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
    luggage: "4 Large Bags + Roof Carrier",
    ac: "Tri-zone Automatic Climate Control",
    image: innovaImg,
    popular: false,
    description: "The gold standard for long-distance luxury. Plush captain seats, whisper-quiet cabin, and supreme riding comfort for long highway trips.",
    features: [
      "Plush captain seating with armrests",
      "Maximum comfort on hill station hairpin turns",
      "Ideal for wedding parties, pilgrimage & corporate trips",
      "Spacious luggage room with carrier support",
      "VIP uniform-dressed chauffeur"
    ]
  }
];

export const POPULAR_ROUTES = [
  { from: "Chennai", to: "Pondicherry", distance: 155, time: "2h 45m", sedanFare: 2170, suvFare: 2945, innovaFare: 3100 },
  { from: "Chennai", to: "Tirupati", distance: 135, time: "3h 00m", sedanFare: 1890, suvFare: 2565, innovaFare: 2700 },
  { from: "Chennai", to: "Bangalore", distance: 345, time: "5h 45m", sedanFare: 4830, suvFare: 6555, innovaFare: 6900 },
  { from: "Chennai", to: "Mahabalipuram", distance: 60, time: "1h 15m", sedanFare: 990, suvFare: 1350, innovaFare: 1500 },
  { from: "Chennai", to: "Vellore", distance: 140, time: "2h 30m", sedanFare: 1960, suvFare: 2660, innovaFare: 2800 },
  { from: "Chennai", to: "Trichy", distance: 330, time: "5h 30m", sedanFare: 4620, suvFare: 6270, innovaFare: 6600 },
  { from: "Chennai", to: "Madurai", distance: 460, time: "7h 30m", sedanFare: 6440, suvFare: 8740, innovaFare: 9200 },
  { from: "Chennai", to: "Coimbatore", distance: 505, time: "8h 30m", sedanFare: 7070, suvFare: 9595, innovaFare: 10100 },
  { from: "Chennai", to: "Salem", distance: 345, time: "5h 45m", sedanFare: 4830, suvFare: 6555, innovaFare: 6900 },
  { from: "Chennai", to: "Kodaikanal", distance: 525, time: "9h 00m", sedanFare: 7350, suvFare: 9975, innovaFare: 10500 },
  { from: "Chennai", to: "Ooty", distance: 535, time: "9h 30m", sedanFare: 7490, suvFare: 10165, innovaFare: 10700 },
  { from: "Chennai", to: "Kanchipuram", distance: 75, time: "1h 30m", sedanFare: 1150, suvFare: 1550, innovaFare: 1700 },
];

export const TOUR_PACKAGES = [
  {
    id: "pkg-pondi",
    title: "Chennai → Pondicherry & Auroville",
    distance: "≈ 155 km",
    duration: "1 - 2 Days",
    tag: "Weekend Favorite",
    highlights: ["Scenic ECR Coastal Drive", "Auroville Matrimandir", "Promenade Beach & French Colony", "Paradise Beach Boat Ride"],
    priceStarts: "₹2,170",
    cost: 2170,
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=900&auto=format&fit=crop",
    fallbackImg: "india-bg.jpg",
    description: "Breath-taking East Coast Road drive from Chennai to Pondy. Enjoy peaceful beaches, authentic French colonial streets, and cozy beachfront cafes."
  },
  {
    id: "pkg-tirupati",
    title: "Chennai → Tirupati Balaji Darshan",
    distance: "≈ 135 km",
    duration: "Same Day / 2 Days",
    tag: "Devotional Darshan",
    highlights: ["Doorstep Early Pickup in Chennai", "Tirumala Hill Ghat Ride", "Padmavathi Ammavari Temple", "Alipiri Foothills"],
    priceStarts: "₹1,890",
    cost: 1890,
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010f4439c2c?q=80&w=900&auto=format&fit=crop",
    fallbackImg: "meenakshi-bg.jpg",
    description: "Punctual early-morning doorstep pickup from Chennai. Driver assists with parking, hill checkposts, and darshan waiting times."
  },
  {
    id: "pkg-mahabs",
    title: "Chennai → Mahabalipuram (Mamallapuram)",
    distance: "≈ 60 km",
    duration: "Day Outing (8 - 10 Hrs)",
    tag: "Heritage Day Trip",
    highlights: ["UNESCO Shore Temple", "Pancha Rathas & Arjuna's Penance", "Crocodile Bank & Kovalam Beach", "Fresh Coastal Seafood"],
    priceStarts: "₹990",
    cost: 990,
    imageUrl: "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=900&auto=format&fit=crop",
    fallbackImg: "india-bg.jpg",
    description: "Quick refreshing coastal getaway along the scenic ECR. Ideal for family outings, architectural sightseeing, and seaside dining."
  },
  {
    id: "pkg-bangalore",
    title: "Chennai → Bangalore Express Highway",
    distance: "≈ 345 km",
    duration: "One-Way / Round Trip",
    tag: "Business & Family",
    highlights: ["Smooth NH48 Highway Travel", "Electronic City / Whitefield Drop", "Doorstep Pickup Anywhere in Chennai", "Flexible Coffee Breaks"],
    priceStarts: "₹4,830",
    cost: 4830,
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
    fallbackImg: "car-bg.avif",
    description: "Direct highway connectivity between Tamil Nadu and Karnataka capitals. Clean AC cabs suited for corporate executives and families."
  },
  {
    id: "pkg-madurai",
    title: "Chennai → Madurai & Rameswaram",
    distance: "≈ 460 - 560 km",
    duration: "2 - 3 Days",
    tag: "Spiritual Circuit",
    highlights: ["Meenakshi Amman Temple", "Ramanathaswamy Temple Rameswaram", "Pamban Bridge Ocean View", "Dhanushkodi Border Point"],
    priceStarts: "₹6,440",
    cost: 6440,
    imageUrl: "https://images.unsplash.com/photo-1621245804639-c102ff937f22?q=80&w=900&auto=format&fit=crop",
    fallbackImg: "meenakshi-bg.jpg",
    description: "Comfortable interstate AC journey through Trichy to Madurai and the sacred island of Rameswaram. Experienced temple circuit drivers."
  },
  {
    id: "pkg-kodaikanal",
    title: "Chennai → Kodaikanal (Princess of Hills)",
    distance: "≈ 525 km",
    duration: "3 - 4 Days",
    tag: "Cool Hill Escape",
    highlights: ["Kodai Star Lake & Boating", "Coaker's Walk & Green Valley", "Silver Cascade Ghat Falls", "Pillar Rocks & Pine Forest"],
    priceStarts: "₹7,350",
    cost: 7350,
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop",
    fallbackImg: "kodaikanal-bg.jpg",
    description: "Escape Chennai's warm humidity with a cool mountain vacation. Drivers expertly trained in ghat hairpin bends and hill weather conditions."
  },
  {
    id: "pkg-ooty",
    title: "Chennai → Ooty & Coonoor Hills",
    distance: "≈ 535 km",
    duration: "3 - 4 Days",
    tag: "Queen of Hill Stations",
    highlights: ["Ooty Botanical Gardens", "Doddabetta Mountain Peak", "Tea Plantations & Factory Visit", "Coonoor Sim's Park"],
    priceStarts: "₹7,490",
    cost: 7490,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=900&auto=format&fit=crop",
    fallbackImg: "kashmir-bg.jpg",
    description: "Crisp Nilgiris mountain air with comfortable sedans and Innovas. Relax as our experienced mountain chauffeur manages the ghat roads."
  },
  {
    id: "pkg-kanchi-vellore",
    title: "Chennai → Kanchipuram & Vellore",
    distance: "≈ 140 km",
    duration: "1 - 2 Days",
    tag: "Heritage & Temples",
    highlights: ["Sri Sripuram Golden Temple (Vellore)", "Kamakshi Amman & Ekambareswarar", "Silk Saree Weaving Center", "Vellore Fort & Jalakanteswarar"],
    priceStarts: "₹1,960",
    cost: 1960,
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=900&auto=format&fit=crop",
    fallbackImg: "meenakshi-bg.jpg",
    description: "Convenient pilgrimage tour covering world-famous silk weaving temples in Kanchipuram and the magnificent Golden Temple in Vellore."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Arvind Sundaram",
    role: "Professor & Frequent Traveler",
    city: "Chennai (Anna Nagar)",
    rating: 5,
    date: "14 Oct 2026",
    trip: "Chennai to Pondicherry (Round Trip)",
    comment: "Extremely professional service by Chennai Travels! The driver arrived 15 minutes before time at our Anna Nagar residence, the Dzire was spotlessly clean, and billing was 100% transparent. No haggling or sudden charges.",
    avatar: "AS",
    verified: true
  },
  {
    id: 2,
    name: "Kavitha Natarajan",
    role: "Senior IT Lead",
    city: "Chennai (OMR / Perungudi)",
    rating: 5,
    date: "28 Sep 2026",
    trip: "Chennai to Bangalore (One-Way Drop)",
    comment: "Saved more than 40% compared to typical two-way cab operators. Chauffeur Shankar drove very safely through the Vellore-Hosur highway. The AC was chilling and seat was very comfortable. Highly recommended for OMR professionals!",
    avatar: "KN",
    verified: true
  },
  {
    id: 3,
    name: "Rajeshwar Rao",
    role: "Business Owner",
    city: "Chennai (T. Nagar)",
    rating: 5,
    date: "06 Oct 2026",
    trip: "Chennai to Tirupati (Family Darshan)",
    comment: "Booked an Innova Crysta for our family darshan with senior citizens. The driver knew all temple protocols, parking points, and ghat timings. Smooth, respectful, and hassle-free service throughout.",
    avatar: "RR",
    verified: true
  },
  {
    id: 4,
    name: "Meera Krishnan",
    role: "Solo Traveler & Consultant",
    city: "Chennai (Velachery)",
    rating: 5,
    date: "17 Oct 2026",
    trip: "Chennai to Madurai",
    comment: "As a solo female traveler, safety and punctuality are my #1 priority. Chennai Travels sent driver license details and vehicle registration beforehand. Chauffeur was polite and the highway drive was calm and secure.",
    avatar: "MK",
    verified: true
  },
  {
    id: 5,
    name: "Saravanan Balaji",
    role: "Architect",
    city: "Chennai (Tambaram)",
    rating: 5,
    date: "09 Oct 2026",
    trip: "Chennai Airport to Mahabalipuram",
    comment: "Flight landed late night at Chennai Airport. Driver was waiting with a name board at the pickup pillar. Clean sedan, fast checkout, direct WhatsApp support. Will book again!",
    avatar: "SB",
    verified: true
  }
];

export const FAQS = [
  {
    q: "How does One-Way Drop Taxi fare from Chennai work?",
    a: "Unlike traditional taxi operators that charge you for two-way round trip distance, Chennai Travels only charges for the exact one-way distance you travel from Chennai to your destination. You never have to pay return toll, empty return km fuel, or driver return charges."
  },
  {
    q: "Are toll gate fees, interstate permits, and parking included?",
    a: "Our per-km rate covers fuel, vehicle hire, and driver service. Fastag toll plaza charges, interstate commercial permits (e.g., entering AP/Karnataka/Pondy), and parking tickets are paid at actuals with receipts."
  },
  {
    q: "How far in advance should I book my cab in Chennai?",
    a: "For One-Way Drop trips across Tamil Nadu, booking 1 to 2 hours in advance is enough for doorstep dispatch. For holiday packages and weekend hill station trips, booking 24 hours prior guarantees your preferred vehicle model."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all modern digital payment methods including Google Pay, PhonePe, Paytm, BHIM UPI, net banking, debit/credit cards, or direct cash payment to the chauffeur upon trip completion. Zero advance deposit required."
  },
  {
    q: "Is there any cancellation fee if my plans change?",
    a: "Zero cancellation fees! If you inform us at least 2 hours prior to scheduled pickup, no charge is applied. We respect your schedule."
  },
  {
    q: "Are your drivers background-verified and experienced?",
    a: "Yes, 100%. Every chauffeur in our fleet undergoes police background verification, has a commercial driver's license with at least 5+ years of highway driving experience, and possesses thorough knowledge of South Indian routes."
  }
];
