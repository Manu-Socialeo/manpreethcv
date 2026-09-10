const NOTION_TOKEN = process.env.NOTION_TOKEN || '';
const NOTION_VERSION = '2022-06-28';

// All 8 Projects from Manpreeth's Resume & Portfolio
const PROJECTS = [
  {
    id: "yoga-school",
    title: "Srinatha Yoga School Integrated Platform",
    tagline: "Enterprise Next.js 14 & Supabase Yoga Education Platform with Custom Admin CMS",
    liveUrl: "https://srinathayogaschoolex.vercel.app",
    githubUrl: null,
    status: "Live in Production",
    category: "Full-Stack Web & Mobile App",
    role: "Full-Stack Developer & Product Architect",
    timeline: "2025 – Present",
    techStack: ["Next.js 14 (App Router)", "Supabase (PostgreSQL)", "TypeScript", "Tailwind CSS", "Vercel Edge", "Cloud Storage"],
    overview: "A comprehensive digital ecosystem for Srinatha Yoga School integrating international student course enrollment, digital product sales, custom multi-tier admin dashboards, and live schedule announcements without recurring third-party SaaS fees.",
    prd: {
      problem: "Traditional yoga schools rely on fragmented third-party tools (Eventbrite, Wix, Google Forms, Mailchimp) leading to high monthly SaaS costs, disconnected student records, and slow mobile experience for international applicants.",
      solution: "A unified custom web portal with centralized database management for courses, teachers, announcements, and promotional banners, paired with a sub-second mobile-first interface.",
      personas: [
        "Prospective International Students: Seeking authenticated course details, teacher credentials, and straightforward registration.",
        "Yoga Instructors: Showcasing lineage, teaching styles, and class schedules.",
        "School Administrators: Managing website alerts, instructor rosters, course offerings, and inquiries from an intuitive zero-maintenance dashboard."
      ],
      coreFeatures: [
        "Public Showcase: Responsive hero, teacher roster with rich bios, verified curriculum outlines, and emergency notification banners.",
        "Admin Dashboard: Secure CRUD operations for Instructors, Promotional Banners, and Notice Alerts directly updating live production.",
        "Course Enrollment Funnel: Streamlined multi-step inquiry and registration flow.",
        "Dynamic Content Delivery: Server-side rendering combined with client caching for instant worldwide load times."
      ]
    },
    trd: {
      architecture: "Next.js 14 App Router architecture deployed on Vercel's global edge network, paired with Supabase PostgreSQL for relational data and Supabase Storage for high-res media.",
      databaseSchema: "Entities include 'teachers' (id, name, bio, image_url, specialties, order_index), 'announcements' (id, message, active, link, created_at), and 'banners' (id, title, image, cta_url, is_active).",
      apiLayer: "RESTful API routes under /api/admin/* with payload validation, secure service role execution, and immediate edge revalidation.",
      securityPerformance: "Row-Level Security (RLS) on PostgreSQL, environment-variable isolation, automated image optimization via next/image, achieving 95+ Google Lighthouse scores."
    },
    uxui: {
      designSystem: "Warm earthy elegance blending traditional yoga serenity with high-precision modern typography (Plus Jakarta Sans).",
      colorPalette: "Deep terracotta (#B45309), soft sand ivory (#FDFBF7), forest accents, and dark obsidian text (#1C1917).",
      interactions: "Smooth accordion transitions, subtle glassmorphic alert cards, responsive touch-optimized teacher carousels."
    }
  },
  {
    id: "vo2-max",
    title: "VO2 Max Wellness Platform",
    tagline: "High-Performance Digital Presence & Local SEO Engine for Mysore Fitness Studio",
    liveUrl: "https://vo2-max.vercel.app",
    githubUrl: "https://github.com/Manu-Socialeo/Vo2max",
    status: "Live in Production",
    category: "Commercial Web Platform",
    role: "Lead Designer & Front-End Developer",
    timeline: "2024 – Present",
    techStack: ["Next.js", "Vercel", "Modern CSS", "Local SEO Schema", "Mobile-First UX"],
    overview: "Engineered a high-converting web platform for VO2 Max, a premier fitness and functional training studio in Mysore. The project drove substantial growth in local foot traffic and membership consultations.",
    prd: {
      problem: "Local fitness centers often lose leads due to slow, unoptimized landing pages that fail to appear on Google Local Search or effectively convey training methodology.",
      solution: "A mobile-first, high-contrast performance site equipped with Local Business Schema markup, direct WhatsApp consultation funnels, and real member testimonials.",
      personas: [
        "Fitness Enthusiasts & Athletes: Looking for specialized strength, conditioning, and VO2 max endurance training.",
        "Local Mysore Residents: Seeking verified workout schedules, trainer certifications, and quick membership inquiry."
      ],
      coreFeatures: [
        "High-Conversion Hero Section with one-tap WhatsApp / Call consultation triggers.",
        "Interactive Training Modules: Breakdown of HIIT, Strength, Conditioning, and Recovery protocols.",
        "Local SEO Schema Integration for Mysore geo-targeting.",
        "Frictionless Lead Capture modal."
      ]
    },
    trd: {
      architecture: "Static site generation with incremental static regeneration on Vercel, maximizing uptime and sub-second Time To First Byte (TTFB).",
      databaseSchema: "Lead inquiries captured and dispatched via serverless functions with email notifications.",
      apiLayer: "Lightweight contact and appointment dispatch handlers.",
      securityPerformance: "100% Core Web Vitals score, zero bloat, compressed WebP imagery, and responsive SVG icons."
    },
    uxui: {
      designSystem: "High-energy athletic aesthetic combining dark mode backdrop with neon energetic accents.",
      colorPalette: "Matte black (#0A0A0A), charcoal slate (#18181B), and vibrant electric lime/yellow accents.",
      interactions: "Micro-interactions on hover, kinetic ticker tapes, and clean visual hierarchy."
    }
  },
  {
    id: "socialeo-ai",
    title: "Socialeo Digital Agency & AI Platform",
    tagline: "Next-Generation Autonomous Marketing & AI-Assisted Agency Engine",
    liveUrl: "https://socialeo.vercel.app",
    githubUrl: "https://github.com/Manu-Socialeo/socialeo",
    status: "Live in Production",
    category: "AI Web Agency Platform",
    role: "Founder & Full-Stack AI Engineer",
    timeline: "2024 – Present",
    techStack: ["Next.js", "Vercel", "Node.js", "Claude AI API", "Autonomous Workflows"],
    overview: "Flagship digital agency web application crafted to deliver automated growth, client audit workflows, and AI-powered operational pipelines for businesses in Tier-2 and metropolitan markets.",
    prd: {
      problem: "Small-to-medium businesses struggle to execute modern multi-channel marketing campaigns and lead qualification due to high manual agency overhead.",
      solution: "A self-service and automated agency hub integrating LLM agent workflows for instant site audits, marketing strategy generation, and seamless client intake.",
      personas: [
        "Business Owners & Operators: Seeking clear ROI, rapid digital transformations, and performance marketing.",
        "Agency Team Members: Automating recurring deliverables, client onboarding, and lead routing."
      ],
      coreFeatures: [
        "Autonomous AI Audit Generator for instant website speed and SEO evaluations.",
        "Interactive Service Matrix: Full-Stack Web Development, AI Operations, Performance Marketing.",
        "Dynamic Client Portal: Automated brief submission and sprint status tracking.",
        "Real-Time Analytics Dashboard preview."
      ]
    },
    trd: {
      architecture: "Hybrid serverless Next.js architecture hosted on Vercel, integrating Anthropic / Claude API endpoints for intelligent prompt parsing and report generation.",
      databaseSchema: "Client lead data, audit logs, and service tier configurations.",
      apiLayer: "Secure edge functions handling AI inference, rate limiting, and webhook notifications.",
      securityPerformance: "Sub-500ms First Contentful Paint, protected API tokens, structured error handling, and SSL enforcement."
    },
    uxui: {
      designSystem: "Futuristic agency styling with modern glassmorphism, subtle gradients, and clean Swiss typography.",
      colorPalette: "Deep indigo navy (#030712), electric cyan (#06B6D4), violet accent (#8B5CF6), and crisp white typography.",
      interactions: "Dynamic card glow effects on cursor hover, smooth accordion disclosures, and responsive navigation."
    }
  },
  {
    id: "naati-nest",
    title: "Naati Nest Web Application",
    tagline: "Interactive Digital Ordering & Culinary Showcase for Mysore's Viral Food Truck",
    liveUrl: "https://naatinest.vercel.app",
    githubUrl: "https://github.com/Manu-Socialeo/Naati-Nest",
    status: "Live in Production",
    category: "Food & Hospitality Web Platform",
    role: "Full-Stack Developer & UX Designer",
    timeline: "2024 – Present",
    techStack: ["Next.js", "Vercel", "Mobile-First UX", "Responsive CSS", "PWA Ready"],
    overview: "Built for Naati Nest, a cult-favorite authentic Karnataka cuisine food truck in Vijayanagar, Mysore. Solved peak-hour rush bottlenecks with a lightning-fast mobile menu and ordering workflow.",
    prd: {
      problem: "Physical menus and crowded food truck counters created long wait times, missed orders, and zero customer retention data during peak evening rushes.",
      solution: "A QR-code accessible web menu enabling patrons to browse daily specials, check live item availability, and place orders directly from their smartphones.",
      personas: [
        "Dine-in / Takeaway Foodies: Wanting instant access to menu prices, dish descriptions, and spice levels without waiting in line.",
        "Food Truck Staff: Needing real-time control over sold-out items and rush-hour ordering flows."
      ],
      coreFeatures: [
        "Interactive Category Filter: Non-veg specialties, biryanis, gravies, and beverages.",
        "Live Operational Status: Clear display of opening hours and location coordinates in Vijayanagar.",
        "One-Tap Directions & WhatsApp Quick Order.",
        "Zero-install web experience that loads in under 1 second on mobile 4G."
      ]
    },
    trd: {
      architecture: "Lightweight client-rendered React/Next.js frontend optimized for mobile cellular connections with aggressive image compression.",
      databaseSchema: "Menu items JSON structure with category tags, pricing, availability flags, and dietary markers.",
      apiLayer: "Serverless endpoints handling order notification dispatch.",
      securityPerformance: "Lighthouse mobile score: 98/100, zero layout shifts (CLS = 0), and instant touch responsiveness."
    },
    uxui: {
      designSystem: "Appetizing culinary theme capturing the rustic warmth of traditional Karnataka non-veg heritage.",
      colorPalette: "Rich spice amber (#D97706), warm charcoal (#1E1E1E), and creamy parchment (#FFFBEB).",
      interactions: "Sticky category navigation bar, floating order summary pill, and responsive image lightboxes."
    }
  },
  {
    id: "meritus",
    title: "Meritus Diagnostics Platform",
    tagline: "High-Trust Medical Information & Diagnostic Test Booking Platform",
    liveUrl: "https://meritus-mys-25.vercel.app",
    githubUrl: "https://github.com/Manu-Socialeo/Meritus",
    status: "Live in Production",
    category: "Healthcare & Diagnostic Center",
    role: "Lead Web Developer & Architecture Consultant",
    timeline: "2024 – Present",
    techStack: ["React", "Next.js", "Vercel", "Accessible HTML5", "Local SEO"],
    overview: "Developed a patient-centric, high-accessibility web platform for Meritus Diagnostics in Vijayanagar, Mysore, streamlining test discovery, preventive checkup packages, and home sample collection.",
    prd: {
      problem: "Patients frequently face anxiety and friction understanding blood test requirements, fasting protocols, and pricing when looking up local diagnostic labs.",
      solution: "A clean, reassuring digital experience with categorized test directories, transparent test preparation instructions, and a one-click home collection booking funnel.",
      personas: [
        "Patients & Families: Looking for reliable diagnostic tests, clear preparation guidelines (fasting vs non-fasting), and quick booking.",
        "Elderly & Mobility-Impaired Patients: Requiring seamless home blood collection scheduling.",
        "Doctors & Specialists: Recommending standardized health checkup packages to patients."
      ],
      coreFeatures: [
        "Comprehensive Test Catalog: Complete with preparation notes, sample types, and turnaround times.",
        "Preventive Health Packages: Multi-tier executive, senior citizen, and women's health packages.",
        "Home Sample Collection Request Form with automated WhatsApp routing.",
        "Clinic Location, NABL compliance badges, and operating hours."
      ]
    },
    trd: {
      architecture: "Next.js with semantic HTML5 ensuring WCAG 2.1 AA accessibility standards for elderly and vision-impaired patients.",
      databaseSchema: "Relational test database with categorization, preparation guidelines, and pricing tiers.",
      apiLayer: "Appointment submission handlers integrated with instant notification triggers.",
      securityPerformance: "Strict patient data privacy adherence, HTTPS-only transport, zero trackers, and sub-second page loads."
    },
    uxui: {
      designSystem: "Clean clinical trustworthiness with calming hospital-grade hues and hyper-legible typography.",
      colorPalette: "Medical cyan/teal (#0D9488), calm clinical blue (#0284C7), sterile white (#FFFFFF), and charcoal text (#334155).",
      interactions: "Clear accordion FAQ disclosures, high-contrast call-to-action buttons, and accessible focus states."
    }
  },
  {
    id: "dog-protection-trust",
    title: "Dog Protection Trust (DPT) Platform",
    tagline: "Pro Bono Animal Welfare & Rescue Outreach Platform (VTVO Collaboration)",
    liveUrl: null,
    githubUrl: "https://github.com/Manu-Socialeo/DPT",
    status: "Completed (Open Source / Pro Bono)",
    category: "NGO Public Outreach & Animal Welfare",
    role: "Pro Bono Project Lead & Full-Stack Developer",
    timeline: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript", "VTVO Collab", "Accessible UI"],
    overview: "Spearheaded the pro bono design and development of an animal welfare NGO platform in collaboration with VTVO, giving volunteers and donors a modern hub for street dog rescue, sterilization drives, and adoption.",
    prd: {
      problem: "Grassroots animal welfare organizations lack the technical budget to maintain costly web portals, relying solely on messy social media feeds for emergency rescues and adoption coordination.",
      solution: "A lightweight, zero-maintenance, accessible web platform showcasing rescue success stories, adoption candidates, and instant donation channels.",
      personas: [
        "Compassionate Citizens: Wanting to adopt rescued pups or report injured street animals.",
        "Donors & Supporters: Seeking transparent updates on rescue missions and vaccination drives.",
        "Volunteer Rescuers: Needing a centralized place to publish adoption profiles."
      ],
      coreFeatures: [
        "Pet Adoption Gallery: Photos, medical history, vaccination status, and personality traits.",
        "Emergency Rescue Helpline: One-touch calling for street animal injury reporting.",
        "Donation & Sponsorship Portal: Direct UPI / bank transfer instructions with zero platform commissions.",
        "Volunteer Onboarding Form: For rescue drives and weekend shelter visits."
      ]
    },
    trd: {
      architecture: "Static, dependency-free architecture ensuring near-zero hosting costs and permanent long-term stability without framework obsolescence.",
      databaseSchema: "Structured data feeds for pet profiles and volunteer submissions.",
      apiLayer: "Lightweight form handlers connecting directly to email and messaging channels.",
      securityPerformance: "100% Google Lighthouse score across Performance, Accessibility, Best Practices, and SEO."
    },
    uxui: {
      designSystem: "Warm, empathetic visual language highlighting the resilience and beauty of rescued Indian indie dogs.",
      colorPalette: "Warm sunny terracotta (#EA580C), rescue green (#16A34A), and soft sand (#FAF8F5).",
      interactions: "Heartwarming photo cards, smooth modal popups for adoption inquiries, and clear donation triggers."
    }
  },
  {
    id: "shivaretreats",
    title: "Shiva Retreats Booking Platform",
    tagline: "Immersive International Yoga Retreat & 200hr/300hr YTT Enrollment Showcase",
    liveUrl: "https://shivaretreats.vercel.app",
    githubUrl: "https://github.com/Manu-Socialeo/Shivaretreats",
    status: "Live in Production",
    category: "Travel & Wellness Platform",
    role: "Full-Stack Web Architect",
    timeline: "2024 – Present",
    techStack: ["Next.js", "Vercel", "Modern CSS", "Booking Funnels", "Edge CDN"],
    overview: "Crafted a luxury travel and wellness retreat booking platform for Shiva Retreats in Goa, empowering international practitioners from Europe, Americas, and Asia to discover authentic Yoga Teacher Training courses.",
    prd: {
      problem: "High-ticket spiritual retreats require immense visual trust, verified teacher lineage, and clear room/package options to convert international travelers booking months in advance.",
      solution: "A visual-first web experience with immersive photography, comprehensive daily retreat schedules, accommodation breakdowns, and direct booking inquiries.",
      personas: [
        "International Yoga Students: Traveling to India for certified 200hr/300hr Yoga Alliance courses.",
        "Wellness Seekers: Looking for rejuvenating beach retreats, Ayurvedic meals, and meditation.",
        "Retreat Directors: Managing seasonal cohort cohorts and room availability."
      ],
      coreFeatures: [
        "Curriculum & Schedule Explorer: Hour-by-hour breakdown of asana, pranayama, and philosophy classes.",
        "Accommodation Showcase: Room tours (Cottages, Sea-View suites) with amenity listings.",
        "Multi-Currency Pricing & Early Bird Discount Calculator.",
        "Direct WhatsApp & Email Enrollment Concierge."
      ]
    },
    trd: {
      architecture: "Next.js deployed across Vercel's global edge network to deliver instantaneous load speeds for users browsing from Europe and the US.",
      databaseSchema: "Retreat cohort schedule schema, room inventories, and inquiry records.",
      apiLayer: "Serverless booking inquiry webhooks with automated confirmation autoresponders.",
      securityPerformance: "Next-gen WebP image optimization, lazy loading, and strict SSL."
    },
    uxui: {
      designSystem: "Coastal bohemian luxury infused with Vedic spiritual tranquility.",
      colorPalette: "Golden sunset amber (#D97706), ocean turquoise (#0EA5E9), and pure beach ivory (#FAFAF9).",
      interactions: "Parallax imagery, subtle retreat itinerary reveals, and intuitive booking steps."
    }
  },
  {
    id: "trekandstay",
    title: "Trek & Stay Platform",
    tagline: "Eco-Tourism & Western Ghats Trail Discovery Web Application",
    liveUrl: "https://trekandstay.vercel.app",
    githubUrl: "https://github.com/Manu-Socialeo/trekandstay",
    status: "Live in Production",
    category: "Eco-Tourism & Adventure Travel",
    role: "Full-Stack Developer & UI Architect",
    timeline: "2024 – Present",
    techStack: ["Next.js", "Vercel", "Tailwind CSS", "Interactive Itineraries", "Trail Maps"],
    overview: "Built an adventure tourism platform connecting nature enthusiasts with Karnataka's Western Ghats trails (Kudremukha, Kumara Parvatha, Tadiandamol) and verified eco-friendly Sahyadri homestays.",
    prd: {
      problem: "Trekkers often struggle with unreliable trail permits, hidden homestay conditions, and lack of verified packing/fitness guidelines.",
      solution: "A curated trail portal providing altitude profiles, trail difficulty ratings, weather advisories, gear checklists, and direct booking with local homestays.",
      personas: [
        "Weekend Adventure Trekkers: Tech professionals from Bangalore and Mysore seeking weekend getaways.",
        "Eco-Homestay Hosts: Rural hosts in Chikmagalur, Coorg, and Sakleshpur wanting direct guest bookings.",
        "Forest Trail Guides: Sharing verified safety rules and permit guidance."
      ],
      coreFeatures: [
        "Trail Difficulty Matrix: Distance, elevation gain, fitness prerequisites, and best seasons.",
        "Verified Homestay Booking: Authentic local Malnad food, campfire facilities, and tents.",
        "Interactive Packing & Gear Checklist for monsoons vs winter treks.",
        "Instant Booking Inquiry with local host coordinates."
      ]
    },
    trd: {
      architecture: "Modern Next.js application styled with Tailwind CSS, utilizing static pre-rendering for trail guides to ensure maximum search engine visibility.",
      databaseSchema: "Trail metadata, elevation records, homestay specs, and booking inquiry logs.",
      apiLayer: "Serverless booking dispatch with WhatsApp click-to-chat integration.",
      securityPerformance: "Sub-second load times on mobile devices even on spotty 3G/4G network zones in rural Ghat regions."
    },
    uxui: {
      designSystem: "Raw rugged outdoor aesthetics celebrating the lush green biodiversity of the Western Ghats.",
      colorPalette: "Deep pine green (#14532D), trail earth brown (#78350F), and misty cloud slate (#F1F5F9).",
      interactions: "Interactive trail difficulty badges, elevation profile diagrams, and sticky booking bar."
    }
  }
];

module.exports = { PROJECTS, NOTION_TOKEN, NOTION_VERSION };
