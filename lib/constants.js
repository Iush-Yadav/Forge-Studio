/* ─── Brand palette ─── */
export const CREAM = "#f0ece4";
export const BLACK = "rgba(10, 10, 10, 0.85)";
export const LIME  = "#c8ff00";
export const GREY  = "rgba(21, 21, 21, 0.8)";

/* ─── Hyperspeed background opacity (0 = invisible, 1 = full brightness) ─── */
export const HYPERSPEED_OPACITY = 0.35;

/* ─── Contact details ─── */
export const WA_NUMBER  = "919153947946";
export const WA_LINK    = `https://wa.me/${WA_NUMBER}`;
export const EMAIL      = "contact.iush27@gmail.com";
export const PHONE_DISP = "+91 91539 47946";
export const PHONE_LINK = "tel:+919153947946";

/* ─── Site meta ─── */
export const SITE_NAME = "forge.studio";
export const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL || "https://forge.studio";
export const SITE_TAGLINE = "Websites that get local businesses more customers";
export const SITE_DESC =
  "forge.studio designs and builds fast, conversion-first websites for restaurants, salons, gyms, clinics and local businesses — built to rank on Google and turn visitors into paying customers.";

/* ─── Navigation ─── */
export const NAV_LINKS = [
  { label: "Services",     id: "work" },
  { label: "Capabilities", id: "portfolio" },
  { label: "Process",      id: "process" },
  { label: "Pricing",      id: "pricing" },
  { label: "FAQ",          id: "faq" },
  { label: "Contact",      id: "contact" },
];

/* ─── Marquee band ─── */
export const MARQUEE = [
  "Restaurant Websites", "Salon Websites", "Gym Websites", "Hotel Websites",
  "Clinic Websites", "Retail Stores", "Startup Websites", "E-Commerce",
  "SEO Optimization", "Landing Pages", "Website Redesign", "Mobile Responsive",
];

/* ─── Services (What we do) ─── */
export const SVCS = [
  { n: "01", icon: "globe",   title: "Business Websites",        sub: "Your digital storefront, open 24/7",    desc: "Clean, fast, conversion-first sites for any local business. Built to rank, built to impress." },
  { n: "02", icon: "cart",    title: "E-Commerce Stores",        sub: "Sell online. Earn around the clock.",    desc: "Full stores with cart, payments and inventory — launch in weeks, not months." },
  { n: "03", icon: "plate",   title: "Restaurant & Hospitality", sub: "Fill tables. Drive delivery orders.",    desc: "Menus, reservations, Zomato/Swiggy links and galleries. Everything hospitality needs online." },
  { n: "04", icon: "scissors",title: "Salon & Wellness",         sub: "Book appointments, not missed calls.",   desc: "Portfolio galleries, online booking and Instagram feeds. Turn scrollers into booked clients." },
  { n: "05", icon: "cross",   title: "Clinic & Healthcare",      sub: "Build trust before they walk in.",       desc: "Doctor profiles, appointment systems and patient testimonials. Authority that converts." },
  { n: "06", icon: "search",  title: "SEO & Local Growth",       sub: "Get found. Stay found.",                 desc: "Keyword research, Google Business Profile and local SEO. Rank before competitors wake up." },
];

/* ─── Capabilities (What we can build FOR YOU — aspirational, not fabricated) ─── */
export const CAPS = [
  { id: 1, icon: "plate",    cat: "Restaurants", name: "Restaurants & Cafés", tagline: "Menus that make mouths water.",
    col: "#141000", accent: "#f59e0b", tags: ["Menu", "Reservations", "Local SEO"],
    promise: "Built to turn hungry searches into full tables.",
    desc: "Mouth-watering menu layouts, one-tap reservations, and Swiggy/Zomato links front and centre — plus local SEO so you're the first result when someone nearby searches 'best place to eat'." },
  { id: 2, icon: "scissors", cat: "Salons", name: "Salons & Wellness", tagline: "Turn scrollers into booked clients.",
    col: "#100a14", accent: "#e879f9", tags: ["Booking", "Gallery", "Instagram"],
    promise: "Designed to keep your calendar full.",
    desc: "A portfolio gallery that shows off your best work, WhatsApp & online booking that never sleeps, and an Instagram feed that keeps your page alive between visits." },
  { id: 3, icon: "dumbbell", cat: "Gyms", name: "Gyms & Fitness", tagline: "Sign members up while you train.",
    col: "#0a1018", accent: "#38bdf8", tags: ["Schedules", "Plans", "Sign-ups"],
    promise: "Made to grow your membership base.",
    desc: "Class schedules, trainer profiles, membership plans and a sign-up flow that converts — so new members join before they ever walk through the door." },
  { id: 4, icon: "bed", cat: "Hotels", name: "Hotels & Stays", tagline: "Win direct bookings, skip commissions.",
    col: "#0d0f0a", accent: "#84cc16", tags: ["Rooms", "Booking", "SEO"],
    promise: "Crafted to drive commission-free bookings.",
    desc: "Room showcases, a clean booking flow, and an attractions guide that sells the whole experience — built to grow direct revenue and cut your dependence on OTAs." },
  { id: 5, icon: "cross", cat: "Clinics", name: "Clinics & Healthcare", tagline: "Earn trust before the first visit.",
    col: "#0a1210", accent: "#2dd4bf", tags: ["Appointments", "Profiles", "Trust"],
    promise: "Built to turn searches into patients.",
    desc: "Doctor profiles, easy online appointments and patient-first content that builds authority — so people arrive already confident they're in the right hands." },
  { id: 6, icon: "rocket", cat: "Startups", name: "Startups & Stores", tagline: "Launch fast. Sell from day one.",
    col: "#0d0a18", accent: "#818cf8", tags: ["Landing", "Payments", "Analytics"],
    promise: "Engineered to convert from launch.",
    desc: "High-converting landing pages, full storefronts with cart and secure payments, and the analytics to prove what's working — ready to scale the moment you are." },
];
export const CAP_CATS = ["All", "Restaurants", "Salons", "Gyms", "Hotels", "Clinics", "Startups"];

/* ─── Process ─── */
export const STEPS = [
  { n: "01", title: "Discovery",   time: "Day 1",      desc: "Free 30-min call. We learn your business, customers, goals and competition — no jargon, no pressure, no commitment required." },
  { n: "02", title: "Strategy",    time: "Day 2–3",    desc: "Sitemap, content hierarchy, moodboard. You see exactly what we're building before a single pixel is designed." },
  { n: "03", title: "Design",      time: "Day 4–8",    desc: "Custom UI/UX around your brand and audience. Full desktop + mobile designs shared for approval before we build anything." },
  { n: "04", title: "Development", time: "Day 9–18",   desc: "Clean code, blazing performance, pixel-perfect on mobile. We build; you watch it come alive. Zero tech knowledge required." },
  { n: "05", title: "Launch",      time: "Day 19–21",  desc: "Domain, hosting, SSL, speed optimization and SEO all configured. We go live — then celebrate your new digital presence." },
  { n: "06", title: "Growth",      time: "Ongoing",    desc: "Analytics, monthly reports, content updates and SEO refinements. We stay by your side as your business grows — not a one-time vendor." },
];

/* ─── Pricing ─── */
export const PLANS = [
  { name: "Starter", price: "₹13,999", sub: "Get online in 7 days", highlight: false,
    features: ["3–5 Pages", "Mobile responsive", "Contact form", "Basic SEO setup", "1 Year hosting", "SSL certificate", "7-day delivery", "Email support"], cta: "Start Here" },
  { name: "Professional", price: "₹33,500", sub: "The most popular choice", highlight: true,
    features: ["8–12 Pages", "Full SEO optimization", "Google Analytics", "WhatsApp integration", "Blog / News section", "2 Years hosting", "3 revision rounds", "14-day delivery", "6 months priority support"], cta: "Go Professional" },
  { name: "Growth", price: "₹59,000", sub: "For serious business owners", highlight: false,
    features: ["Custom design system", "Unlimited pages", "E-Commerce ready", "Advanced SEO + blog", "CRM integration", "Payment gateway", "Admin dashboard", "Custom animations", "3 Years hosting", "1 year maintenance", "Priority 24/7 support", "21-day delivery", "Unlimited revisions"], cta: "Scale Now" },
];

/* ─── FAQ ─── */
export const FAQS = [
  { q: "How long does it take to build?", a: "Starter: 7 days. Professional: 14 days. Growth: 21 days. Rush delivery is available for urgent projects — just ask on your free strategy call." },
  { q: "Do you provide hosting and domain?", a: "Yes. Every plan includes 1–3 years of managed hosting. We handle domain setup, SSL and all technical configuration — you never need to touch a server." },
  { q: "Can I update the content myself?", a: "Absolutely. Every site ships with a simple CMS. Updating menus, prices, photos or hours takes minutes — no coding, no developer needed." },
  { q: "What about SEO?", a: "Basic on-page SEO is in every plan. Full keyword research, Google Business Profile, local SEO strategy and monthly reporting from the Professional tier up." },
  { q: "What if I'm not happy with the design?", a: "We show you the complete design before writing a single line of code. Every plan includes revision rounds, plus a 30-day satisfaction guarantee after launch." },
  { q: "Do you work outside India?", a: "Yes — we work globally. Payments in INR, USD, EUR, GBP, AED. All communication via WhatsApp, Zoom or email. Fully timezone flexible." },
];
