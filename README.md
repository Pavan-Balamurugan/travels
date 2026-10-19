# Demo Travels - Premier Drop Taxi & Outstation Travel Website

A modern, high-performance, and professional frontend website built for **Demo Travels** — a premier drop taxi, outstation cab, and tour agency.

---

## 🌟 Key Highlights & Features

- **Executive Brand Identity**: Rich obsidian slate dark mode with warm taxi golden amber accents, custom vector SVG logo, and responsive typography (Outfit & Plus Jakarta Sans).
- **Interactive Live Fare Estimator**:
  - Trip Modes: One-Way Drop (Zero return fare), Round-Trip Outstation, Airport Transfer, and Holiday Tour.
  - Live Real-Time Calculation: As distance is typed or selected, it dynamically calculates vehicle hire, driver bata, and estimated subtotal.
  - Popular Route Preset Pills (e.g. Madurai ➔ Chennai, Bangalore, Coimbatore, Rameswaram, Kodaikanal, Trichy) with 1-click auto-fill.
- **3D Flip Vehicle Showcase & Tariff Matrix**:
  - Interactive flip cards for **Prime Sedan**, **Spacious SUV**, and **Innova Crysta** showcasing seating, luggage capacity, AC specs, and inclusions.
  - Comprehensive comparison matrix comparing per-km rates, daily driver bata, and minimum daily km.
- **Curated Tour Packages & Modal Booking**:
  - Filterable packages (Hill Stations, Temple Pilgrimage, Heritage circuits).
  - 1-click booking modal with instant confirmation flow.
- **Dedicated Confirmation Screen (`/confirm-booking`)**:
  - Generates unique Booking Reference ID (`DT-2026-XXXX`).
  - Visual trip route map timeline (Pickup ➔ Drop).
  - Confetti celebration animation.
  - 1-Click WhatsApp booking dispatch with preformatted booking summary.
  - Clean print-friendly trip voucher.
- **High-Conversion Lead Channels**:
  - Floating WhatsApp chat trigger with status indicator.
  - Sticky mobile action bar with one-tap "Call Hotline" and "Book on WhatsApp".
  - 24/7 hotline cards with direct tel links.
- **Trust & Social Proof**:
  - 50,000+ Completed Trips counter.
  - 4.9★ Google Reviews section with real traveler testimonials.
  - Interactive FAQ accordion for customer confidence.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Modern CSS Design System
- **Icons**: Lucide React
- **Animations**: Canvas Confetti & CSS 3D Transforms
- **Routing**: React Router v7

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The website will be live at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle is output to the `dist/` directory, ready to deploy to any static host (Vercel, Netlify, Cloudflare Pages, AWS S3, or any web server).

---

## ⚙️ How to Update Business Details

All company information, phone numbers, WhatsApp numbers, vehicle models, rates, tour packages, and FAQs are centralized in:

📂 `src/data/travelData.js`

To change the phone number or company name for the client, simply edit the `COMPANY_INFO` object:
```javascript
export const COMPANY_INFO = {
  name: "Demo Travels",
  phone: "+91 96555 18489",
  phoneRaw: "919655518489",
  whatsapp: "+91 96555 18489",
  whatsappRaw: "919655518489",
  email: "support@demotravels.com",
  address: "Central Travel Hub, Main Bypass Road, Madurai, Tamil Nadu 625001",
  // ...
};
```
Everything across the website (Navbar, Hero, Booking Form, Confirmation WhatsApp message, Footer, Hotline buttons) will automatically reflect the updated details!
