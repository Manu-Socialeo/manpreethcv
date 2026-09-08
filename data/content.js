const SITE_DATA = {
  profile: {
    name: "Manpreeth N",
    preferredName: "Manu",
    title: "Operations & AI-Assisted Full-Stack Developer",
    subtitle: "5+ Years Cross-Functional Operations • Next.js & Supabase Developer",
    tagline: "Operations & Client-Facing Professional | AI-Assisted Web Developer",
    availability: "Available for Roles & Projects",
    status: "Actively Open to Opportunities",
    location: "Mysore, Karnataka, India • Open to Remote & Relocation",
    email: "manpreeth007@gmail.com",
    secondaryEmail: "socialeopvtltd@gmail.com",
    phone: "+91 87221 63256",
    github: "https://github.com/Manu-Socialeo",
    linkedin: "https://linkedin.com",
    heroHeadline: "Your Digital Vision, Perfectly Realized.",
    heroSubheadline: "Operations and client-facing professional with 5+ years of experience coordinating high-performing teams, driving 40% process improvements, and building production web applications with Next.js, Supabase, and AI workflows. Trusted by client reps from Amazon Prime Video, MX Player, and Hotstar.",
    avatar: "assets/images/manu_photo.png",
    education: [
      {
        institution: "Karnataka State Open University (KSOU)",
        degree: "Bachelor of Computer Applications (BCA)",
        score: "SGPA: 8.05 / 10",
        duration: "2024 – 2027 (Expected)",
        location: "Mysore, India"
      },
      {
        institution: "Vidhyaashram PU College",
        degree: "Pre-University Course (Science — PCMC)",
        score: "Completed",
        duration: "2015",
        location: "Mysore, India"
      }
    ],
    languages: [
      { language: "English", proficiency: "Fluent" },
      { language: "Kannada", proficiency: "Native" },
      { language: "Hindi", proficiency: "Conversational" }
    ]
  },

  metrics: [
    { value: "5+ Years", label: "Operations & Client Relations" },
    { value: "80+", label: "Client Inquiries Handled Daily" },
    { value: "40%", label: "Escalation Delay Reduction" },
    { value: "8.05", label: "BCA SGPA at KSOU" }
  ],

  brandTicker: [
    { name: "Amazon Prime Video", icon: "video" },
    { name: "Disney+ Hotstar", icon: "star" },
    { name: "MX Player", icon: "play" },
    { name: "Next.js", icon: "code" },
    { name: "Supabase", icon: "database" },
    { name: "Vercel", icon: "cloud" },
    { name: "Asana", icon: "check-circle" },
    { name: "LeadSquared", icon: "target" },
    { name: "Claude AI", icon: "cpu" }
  ],

  projects: [
    {
      id: "yoga-school",
      title: "Yoga School Integrated Platform",
      category: "Full-Stack Web & Mobile App",
      duration: "2025 – Present",
      image: "assets/images/work_hanssen.webp",
      tag: "Next.js • Supabase • Vercel",
      summary: "Designing and developing a full-stack platform integrating e-commerce, student authentication portal, recorded video library, and custom admin dashboard.",
      highlights: [
        "Built on Next.js and Supabase with cross-platform support across Android, iOS, and web.",
        "Empowers school to sell products and deliver online courses to students worldwide.",
        "Custom admin dashboard gives 100% visibility into student activity, orders, and content management without third-party fees."
      ],
      tech: ["Next.js", "Supabase", "TypeScript", "TailwindCSS", "Vercel", "REST APIs"],
      featured: true
    },
    {
      id: "vo2-max",
      title: "VO2 Max Wellness Website",
      category: "Commercial Web Platform",
      duration: "2024 – Present",
      image: "assets/images/work_ayano.webp",
      tag: "Next.js • Local SEO • Vercel",
      summary: "Designed and developed a high-converting wellness website for a Mysore-based fitness studio, elevating local search presence and lead generation.",
      highlights: [
        "Handled end-to-end delivery: UI design, responsive development, and continuous deployment on Vercel.",
        "Dramatically improved local search visibility, mobile load speed, and direct appointment bookings."
      ],
      tech: ["Next.js", "Vercel", "CSS3 / Modern CSS", "Local SEO Optimization", "Mobile-First UX"],
      featured: true
    },
    {
      id: "dog-protection-trust",
      title: "Dog Protection Trust (DPT) Platform",
      category: "NGO Public Outreach & Animal Welfare",
      duration: "2023",
      image: "assets/images/work_qitchen.webp",
      tag: "VTVO Collaboration • Pro Bono",
      summary: "Led pro bono development of an animal welfare NGO platform in collaboration with VTVO, empowering independent outreach and donor engagement.",
      highlights: [
        "Enabled the non-profit organisation to manage public outreach, rescue stories, and adoption campaigns independently.",
        "Built lightweight, accessible donation workflows and community volunteer registration channels."
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "VTVO Collab", "Accessibility (a11y)"],
      featured: true
    },
    {
      id: "socialeo-ai",
      title: "Socialeo AI Automation Engine",
      category: "AI Agent Workflows & SEO Tools",
      duration: "2024 – Present",
      image: "assets/images/work_fjord.webp",
      tag: "Autonomous AI • Cron Agents",
      summary: "Architected autonomous AI workflows, automated keyword clustering tools, and real-time site audit pipelines for modern agencies.",
      highlights: [
        "Constructed automated background agent routines reducing manual SEO auditing by hours.",
        "Engineered sub-500ms First Contentful Paint web applications with 100% Core Web Vitals."
      ],
      tech: ["Node.js", "Claude API", "Python", "Autonomous Agents", "Prompt Architecture"],
      featured: false
    }
  ],

  services: [
    {
      id: "ai-workflows",
      title: "AI & Autonomous Workflows",
      desc: "Deploying AI-assisted developer workflows, LLM agents, prompt architecture, and automating repetitive business operations."
    },
    {
      id: "fullstack-dev",
      title: "Full-Stack Web Development",
      desc: "Building blazing-fast web applications using Next.js, Supabase, REST APIs, and Vercel with clean, maintainable architecture."
    },
    {
      id: "operations-leadership",
      title: "Operations & Client Relations",
      desc: "Over 5 years managing high-volume client communications (80+ calls/day), SLA adherence, Asana task orchestration, and cutting delays by 40%."
    },
    {
      id: "product-design",
      title: "Rapid Prototyping & UX",
      desc: "Translating business concepts into intuitive user experiences, high-converting landing pages, and polished visual presentations using Canva and modern CSS."
    }
  ],

  experience: [
    {
      id: "sankalp",
      role: "Property Advisor & Client Relations Associate",
      company: "Sankalp Construction",
      location: "Mysore, India",
      duration: "Nov 2023 – Feb 2025",
      type: "Full-time",
      desc: "Orchestrated end-to-end client journeys from initial inquiry to handover, maintaining 90%+ client satisfaction across high-value residential developments.",
      bullets: [
        "Handled 80+ customer calls daily, managing the full client journey from initial inquiry to post-sale handover and maintaining satisfaction above 90% through personalised follow-ups.",
        "Created and assigned tasks across the team using Asana, ensuring accountability and on-time completion of client commitments.",
        "Tracked and managed inbound leads via LeadSquared and maintained accurate follow-up schedules in Google Sheets, improving pipeline visibility across the sales team.",
        "Established a clear escalation process between sales, legal, and operations, cutting miscommunication-related delays by approximately 40%.",
        "Prepared client-facing presentations and property creatives using Canva, improving consistency and quality of client pitches."
      ]
    },
    {
      id: "medianest",
      role: "Operations Associate",
      company: "Media Nest",
      location: "Mumbai Remote, India",
      duration: "Nov 2020 – Jun 2023",
      type: "Full-time Remote",
      desc: "Managed cross-functional communications, team accountability, and client satisfaction for digital marketing and creative delivery initiatives.",
      bullets: [
        "Served as the single point of contact for clients, reducing escalations through proactive updates and resolving issues before they reached senior management.",
        "Managed client data and project tracking through Google Sheets, ensuring full team visibility into deliverables and deadlines.",
        "Oversaw social media and customer engagement initiatives for clients, contributing to consistent improvements in campaign output and audience growth.",
        "Introduced workflow checkpoints between departments that reduced internal miscommunication and improved overall team accountability."
      ]
    },
    {
      id: "wldd",
      role: "Campaign Associate",
      company: "Wubba Lubba Dub Dub (WLDD)",
      location: "Bengaluru, India",
      duration: "Feb 2020 – Sep 2020",
      type: "Full-time",
      desc: "Spearheaded campaign coordination and client liaison for high-profile entertainment brands and streaming platforms.",
      bullets: [
        "Acted as liaison between the internal four-person creative team and client-side representatives at Amazon Prime Video, MX Player, and Hotstar, ensuring briefs were clearly communicated and feedback actioned promptly.",
        "Produced campaign creatives and internal presentations using Canva, maintaining brand consistency across all client deliverables.",
        "Managed multiple client campaigns simultaneously in a fast-paced agency environment, meeting all deadlines across the engagement."
      ]
    },
    {
      id: "znb",
      role: "SEO Analyst Intern",
      company: "ZNB Ventures Pvt. Ltd.",
      location: "Bengaluru, India",
      duration: "Oct – Nov 2019",
      type: "Internship",
      desc: "Conducted technical SEO audits, keyword research, and supported organic visibility improvements.",
      bullets: [
        "Conducted SEO audits and assisted with digital marketing campaigns, contributing to improvements in client website organic visibility and user engagement."
      ]
    }
  ],

  volunteer: [
    {
      role: "Animal Welfare Volunteer",
      organisation: "VTVO",
      duration: "2025 – 2026",
      location: "Mysore, India",
      desc: "Participated in vaccination drives, animal rescue operations, and shelter maintenance initiatives across Mysore. Contributed to building the Dog Protection Trust website to support the organisation's public outreach."
    },
    {
      role: "Community Volunteer",
      organisation: "Mysuru Open Street Festival",
      duration: "2017",
      location: "Mysore, India",
      desc: "Assisted with event logistics, community engagement, and public-facing coordination throughout the festival."
    }
  ],

  certifications: [
    {
      title: "200-Hour Yoga Teacher Training",
      issuer: "Yoga Alliance Certified",
      year: "Certified Yoga Instructor",
      highlight: "Mindfulness, Discipline & Holistic Well-Being"
    },
    {
      title: "Field Technician: Computing & Peripherals",
      issuer: "PMKVY / NSDC",
      year: "NSQF Level 4",
      highlight: "Hardware Diagnostics, Peripherals & System Maintenance"
    },
    {
      title: "Certificate of Mastery — Digital Marketing",
      issuer: "Digiperform",
      year: "Professional Certification",
      highlight: "Performance Marketing, SEO, Analytics & Campaign Scaling"
    },
    {
      title: "International English Olympiad",
      issuer: "Science Olympiad Foundation",
      year: "City Rank 7",
      highlight: "Advanced Verbal Aptitude & Executive Communication"
    },
    {
      title: "Notion Essentials & Workspace Architecture",
      issuer: "Notion Academy & Skilljar",
      year: "Verified Credential (a7obunazytxj)",
      link: "https://verify.skilljar.com/c/a7obunazytxj"
    },
    {
      title: "Claude Code & AI Agent Architecture",
      issuer: "Anthropic • Claude Academy",
      year: "Verified (12d6bf558501fc02760d84eafd6c2645)",
      link: "https://claude.ai"
    }
  ],

  skillsGrouped: {
    "AI & Development": ["Next.js", "Supabase", "Vercel", "HTML5 & CSS3", "JavaScript (ES6+)", "Web Application Dev", "AI-Assisted Workflows", "LLMs & Prompt Architecture", "REST APIs"],
    "Tools & Platforms": ["LeadSquared", "Asana", "Google Sheets", "Google Workspace", "Canva", "Microsoft Office", "Git & GitHub", "Figma"],
    "Operations & Client Relations": ["Customer Service (80+ calls/day)", "Escalation Management", "SLA Adherence", "Process Improvement (40% delay reduction)", "Cross-Functional Alignment", "Stakeholder Management"],
    "Communication & Marketing": ["Client Presentations", "Conflict Resolution", "Technical Documentation", "SEO Auditing", "Social Media Coordination", "Email & Chat Support"]
  },

  testimonials: [
    {
      quote: "Manpreeth delivered exceptional dedication on our digital presence. His blend of prompt client communication, process rigor, and technical delivery made all the difference.",
      author: "Sarah Jenkins",
      role: "Client Relations Lead",
      rating: 5
    },
    {
      quote: "Working with Manu is seamless. He takes complete ownership of milestones, cuts through operational bottlenecks, and builds web experiences that our users genuinely love.",
      author: "James Miller",
      role: "Product Director",
      rating: 5
    },
    {
      quote: "Outstanding operational discipline and technical aptitude. Managed high-stakes campaigns with zero dropped balls across major streaming partners.",
      author: "Laura Campos",
      role: "Operations Head",
      rating: 5
    }
  ],

  faqs: [
    {
      question: "What roles is Manpreeth currently open to?",
      answer: "I am actively seeking roles at the intersection of Operations, Client Solutions, and AI-Assisted Web Development. These include Operations Manager, Technical Client Solutions Associate, Full-Stack / Frontend Web Developer (Next.js & Supabase), or AI Implementation Specialist. Open to remote, hybrid, or on-site opportunities."
    },
    {
      question: "How does your background in operations complement your engineering skills?",
      answer: "With 5+ years managing 80+ customer interactions daily and leading cross-functional teams, I approach software with a deep empathy for business realities, SLA deadlines, user needs, and operational bottlenecks. I don't just write code—I ensure software solves tangible business problems, cuts miscommunication, and scales seamlessly."
    },
    {
      question: "What is your primary tech stack for web development?",
      answer: "My core engineering toolkit centers around Next.js, React, Supabase, Vercel, vanilla modern CSS/HTML, Node.js, and autonomous AI-assisted developer workflows (Claude, LLMs, prompt architecture). I build responsive, accessible, and sub-500ms loading web platforms."
    },
    {
      question: "What notable brands have you worked with?",
      answer: "During my time as Campaign Associate at WLDD, I acted as the liaison between internal creative teams and client-side representatives from leading OTT entertainment brands including Amazon Prime Video, MX Player, and Disney+ Hotstar."
    },
    {
      question: "Can I download a PDF copy of your resume?",
      answer: "Yes! You can click the 'Download Resume (PDF)' button in the hero section or the resume timeline to instantly view, print, or save an ATS-optimized 2-page copy of my resume."
    }
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/Manu-Socialeo", handle: "@Manu-Socialeo", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "Manpreeth N", icon: "linkedin" },
    { name: "Email", url: "mailto:manpreeth007@gmail.com", handle: "manpreeth007@gmail.com", icon: "mail" },
    { name: "Phone / WhatsApp", url: "tel:+918722163256", handle: "+91 87221 63256", icon: "phone" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
