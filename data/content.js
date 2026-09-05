const SITE_DATA = {
  profile: {
    name: "Manpreeth N",
    preferredName: "Manu",
    title: "AI Generalist & Full Stack Developer",
    subtitle: "Operations Specialist • Founder at Socialeo",
    company: "Founder at Socialeo",
    availability: "Available for Remote Roles & Projects",
    status: "Actively Collaborating",
    bio: "AI Generalist, Full-Stack Web Developer, and Founder of Socialeo based in Mysore, India. Specializing in autonomous AI agent workflows, modern web applications, rapid Vibe Coding, and high-impact operations leadership.",
    aboutHeading: "Hi, I’m Manpreeth: AI Generalist & Developer",
    aboutSub: "Founder at Socialeo • BCA Student at KSOU • Operations & Customer Solutions Specialist",
    avatar: "assets/images/manu_photo.png",
    portrait: "assets/images/manu_photo.png",
    location: "Mysore, Karnataka, India • Remote Worldwide",
    email: "manpreeth007@gmail.com",
    secondaryEmail: "socialeopvtltd@gmail.com",
    phone: "+91 87221 63256",
    github: "https://github.com/Manu-Socialeo",
    education: "Bachelor of Computer Applications (BCA) — Karnataka State Open University (KSOU)",
    passions: ["AI Automation", "Vibe Coding", "Surfing & Skating", "Yoga (200hr TTS Certified)", "Global Travel"]
  },

  skills: {
    aiAutomation: ["Autonomous AI Agents", "Claude Code & Terminal Loops", "Prompt Architecture", "Vibe Coding", "Context Management", "Workflow Automation"],
    webDev: ["React", "Next.js", "JavaScript (ES6+)", "Node.js", "HTML5 & Modern CSS", "Supabase", "Firebase", "REST APIs", "Vercel"],
    operations: ["Operations Management", "Customer Success", "Business Analysis", "Client Advisory & Negotiation", "Team Coordination"],
    tools: ["Git & GitHub", "Figma", "Canva Design School", "Framer", "Notion Workspace Architecture"]
  },

  experience: [
    {
      id: "socialeo",
      role: "Founder & Product Engineer",
      company: "Socialeo Digital Product Studio",
      location: "Mysore / Remote",
      duration: "2024 – Present",
      type: "Founder / Full-time",
      desc: "Architecting autonomous AI automation pipelines, full-stack web platforms, and automated SEO audit engines for modern businesses.",
      highlights: [
        "Built Socialeo AI Suite with standing background cron agents and multi-hub keyword clustering",
        "Engineered bespoke web applications with sub-500ms First Contentful Paint and 100% Core Web Vitals",
        "Delivered full-stack solutions integrating Next.js, Supabase, and custom REST API endpoints"
      ]
    },
    {
      id: "freelance",
      role: "Freelance Full-Stack Developer",
      company: "Independent Consultant",
      location: "Remote Worldwide",
      duration: "2023 – Present",
      type: "Contract / Freelance",
      desc: "Designing and developing production-ready web applications, client portals, and e-learning platforms.",
      highlights: [
        "Yoga With Srinatha: Built comprehensive platform with user authentication, video player, and course checkout",
        "VO2 Max Mysore: Engineered athletic fitness studio web platform with interactive class schedules",
        "Dog Protection Trust: Developed animal rescue charity website with donation workflows (pro bono)"
      ]
    },
    {
      id: "medianest",
      role: "Operations Manager",
      company: "Medianest",
      location: "Mysore, India",
      duration: "3 Years",
      type: "Full-time",
      desc: "Directed end-to-end operational workflows, cross-functional team coordination, client delivery milestones, and SLA adherence.",
      highlights: [
        "Optimized delivery pipelines, accelerating project completion turnaround by 30%",
        "Led client communications, scope definition, and cross-team alignment across developers and designers",
        "Resolved high-priority escalations and ensured rigorous quality standards across all deliverables"
      ]
    },
    {
      id: "sankalp",
      role: "Property Advisor",
      company: "Sankalp Construction",
      location: "Mysore, India",
      duration: "1.5 Years",
      type: "Full-time",
      desc: "Delivered strategic advisory, customer consultation, and relationship management for premium residential and commercial developments.",
      highlights: [
        "Conducted high-touch customer consultations and client relationship nurturing",
        "Facilitated property closures and client onboarding documentation",
        "Maintained 95%+ client satisfaction rating through transparent consultation"
      ]
    },
    {
      id: "wld",
      role: "Campaign Associate",
      company: "WLD Bangalore",
      location: "Bangalore, India",
      duration: "5 Months",
      type: "Full-time",
      desc: "Coordinated digital campaign initiatives, brand outreach, and prospective client communications."
    },
    {
      id: "clevertise",
      role: "Growth & Marketing Intern",
      company: "Clevertise",
      location: "Indiranagar, Bangalore",
      duration: "1 Month",
      type: "Internship",
      desc: "Assisted in digital campaign copy, creative asset testing, and growth marketing research."
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Karnataka State Open University (KSOU)",
      duration: "2023 – 2027",
      status: "In Progress (3rd Sem Completed)",
      details: "Core focus on Web Technologies, Software Engineering, Database Management Systems, and Object-Oriented Programming."
    },
    {
      degree: "200-Hour Yoga Teacher Training (TTS)",
      institution: "Certified Yoga Institute",
      duration: "Completed",
      status: "Certified Instructor",
      details: "Mastery of physical wellness, breathwork discipline, posture alignment, and mindful leadership."
    }
  ],

  projects: [
    {
      id: "socialeo",
      title: "Socialeo",
      subtitle: "AI Solutions Platform & OpenSEO Engine",
      client: "Socialeo Digital Studio",
      service: "AI Platform & Web Engineering",
      location: "Mysore / Remote",
      year: "2024",
      tagline: "Autonomous AI agent architecture, local citation networks, and high-performance bespoke digital platforms.",
      metrics: "100% Core Web Vitals • 3 Autonomous Agents",
      tech: ["Next.js", "Node.js", "AI Agents", "Vercel", "OpenSEO"],
      link: "https://socialeo.vercel.app/",
      image: "assets/images/work_hanssen.webp",
      quote: "Transformed digital workflows and organic search visibility with autonomous multi-agent intelligence.",
      author: "Socialeo Studio",
      rating: 5
    },
    {
      id: "yoga-srinatha",
      title: "Yoga With Srinatha",
      subtitle: "Course Selling Platform & Web App",
      client: "Srinatha Yoga",
      service: "Full-Stack EdTech & Web App",
      location: "Mysore / Global",
      year: "2024",
      tagline: "Custom web platform + secure web application featuring user authentication, course selling, video streaming, and class bookings.",
      metrics: "User Auth • Video Streaming • Payment Checkout",
      tech: ["Supabase", "React", "Authentication", "Video Player"],
      image: "assets/images/work_fjord.webp",
      quote: "Seamless student onboarding, instant course access, and zero video buffering.",
      author: "Srinatha Yoga",
      rating: 5
    },
    {
      id: "omniroute",
      title: "OmniRoute",
      subtitle: "Universal Multi-Model AI Gateway",
      client: "Open-Source / BYOK",
      service: "AI Systems Infrastructure",
      location: "Global",
      year: "2024",
      tagline: "High-performance AI model routing gateway with OpenDesign BYOK integration, API key validation, and automated fallback routing.",
      metrics: "Zero Latency • Multi-LLM BYOK Routing",
      tech: ["Node.js", "Fastify", "ConnectRPC", "REST APIs"],
      image: "assets/images/work_ayano.webp",
      quote: "Intelligent failovers and unified access across proprietary and open-source models.",
      author: "OmniRoute Core",
      rating: 5
    },
    {
      id: "vo2max",
      title: "VO2 Max Mysore",
      subtitle: "Athletic Studio & Endurance Platform",
      client: "VO2 Max Mysore",
      service: "High-Performance Web Design",
      location: "Mysore",
      year: "2024",
      tagline: "Performance fitness and athletic endurance studio website with interactive class scheduling, trainer profiles, and membership tiers.",
      metrics: "Sub-400ms FCP • Interactive Schedule",
      tech: ["React", "CSS Grid", "Vercel", "Motion"],
      image: "assets/images/work_qitchen.webp",
      quote: "Increased membership inquiries by 55% within the first 60 days of launch.",
      author: "VO2 Max Team",
      rating: 5
    },
    {
      id: "dpt",
      title: "Dog Protection Trust",
      subtitle: "Animal Welfare & Rescue Charity",
      client: "Dog Protection Trust (DPT)",
      service: "Charity Platform (Pro Bono)",
      location: "Mysore",
      year: "2024",
      tagline: "Pro-bono non-profit web portal showcasing rescue cases, pet adoption pipelines, volunteer onboarding, and donation checkout.",
      metrics: "120+ Adoptions • Charity Donation Flow",
      tech: ["HTML5", "Vanilla CSS", "Donation Gateway"],
      image: "assets/images/hanssen_darkness_1.jpg",
      quote: "Helped connect rescue animals with loving families across the city.",
      author: "DPT Volunteers",
      rating: 5
    },
    {
      id: "merius",
      title: "Merius Diagnostics",
      subtitle: "Clinical Diagnostic & Health Portal",
      client: "Merius Health",
      service: "Healthcare Web Platform",
      location: "Bangalore / Mysore",
      year: "2024",
      tagline: "Clinical pathology lab testing platform with test catalog, home sample collection booking, and digital health package discovery.",
      metrics: "Test Directory • Appointment Scheduling",
      tech: ["React", "Node.js", "Form Workflows"],
      image: "assets/images/hanssen_beige.jpg",
      quote: "Streamlined home sample appointments and diagnostic package discovery.",
      author: "Merius Diagnostics",
      rating: 5
    }
  ],

  certifications: [
    {
      id: "claude-code-101",
      title: "Claude Code 101",
      course: "Terminal Agentic Coding & Autonomous Loops",
      issuer: "Anthropic • Claude Academy",
      recipient: "Manpreeth N",
      issueDate: "Sept. 5, 2026",
      expiryDate: "Lifetime Verified",
      credentialId: "12d6bf558501fc02760d84eafd6c2645",
      verifyUrl: "https://academy.claude.com/verify/12d6bf558501fc02760d84eafd6c2645",
      image: "assets/images/certs/claude_code_101.svg",
      status: "Verified Completion Badge",
      platform: "Claude Academy",
      skills: ["Agentic Coding", "Terminal Workflows", "Prompt Architecture", "Autonomous Loops"]
    },
    {
      id: "claude-cowork",
      title: "Introduction to Claude Cowork",
      course: "Enterprise Multi-Step Delegation & Task Loops",
      issuer: "Anthropic • Claude Academy",
      recipient: "Manpreeth N",
      issueDate: "Sept. 2026",
      expiryDate: "Lifetime Verified",
      credentialId: "b4405e2519f493c75e9ae3fe9c838ce0",
      verifyUrl: "https://academy.claude.com/verify/b4405e2519f493c75e9ae3fe9c838ce0",
      image: "assets/images/certs/claude_cowork.svg",
      status: "Verified Completion Badge",
      platform: "Claude Academy",
      skills: ["Multi-Step Delegation", "Context Management", "Task Loops", "Plugins & Tool Use"]
    },
    {
      id: "claude-ai-capabilities",
      title: "AI Capabilities and Limitations",
      course: "LLM Mental Models & Context Architecture",
      issuer: "Anthropic • Claude Academy",
      recipient: "Manpreeth N",
      issueDate: "Sept. 2026",
      expiryDate: "Lifetime Verified",
      credentialId: "2fa72df7c30ae461a8e2a04cce2ae2ad",
      verifyUrl: "https://academy.claude.com/verify/2fa72df7c30ae461a8e2a04cce2ae2ad",
      image: "assets/images/certs/claude_ai_capabilities.svg",
      status: "Verified Completion Badge",
      platform: "Claude Academy",
      skills: ["LLM Mental Models", "Context Limits", "Steerability & Attention", "Error Analysis"]
    },
    {
      id: "claude-ai-fluency",
      title: "AI Fluency: Framework & Foundations",
      course: "4D Collaboration Framework (Delegation, Description, Discernment, Diligence)",
      issuer: "Anthropic • Claude Academy",
      recipient: "Manpreeth N",
      issueDate: "Sept. 2026",
      expiryDate: "Lifetime Verified",
      credentialId: "22709de98df6fc8ddf88a3e61517acc5",
      verifyUrl: "https://academy.claude.com/verify/22709de98df6fc8ddf88a3e61517acc5",
      image: "assets/images/certs/claude_ai_fluency.svg",
      status: "Verified Completion Badge",
      platform: "Claude Academy",
      skills: ["4D AI Framework", "Delegation & Description", "Discernment & Verification", "Ethical AI Systems"]
    },
    {
      id: "canva-essentials",
      title: "Canva Essentials & Visual Design",
      course: "Graphic Design, Branding & AI Content Creation",
      issuer: "Canva Design School",
      recipient: "Manpreeth N",
      issueDate: "Sept. 2026",
      expiryDate: "Lifetime Verified",
      credentialId: "be7051c2-f724-432b-9cf1-4d121cc9fff9",
      verifyUrl: "https://www.canva.com/design-school/certification-award/be7051c2-f724-432b-9cf1-4d121cc9fff9?examCompleted=true&earnedBadges=learning-certificate-1",
      image: "assets/images/certs/canva_essentials.svg",
      status: "Official Certification Award",
      platform: "Canva",
      skills: ["Visual Design & Layout", "Brand Architecture & Identity", "Typography & Hierarchy", "Content Creation & AI Magic Studio"]
    },
    {
      id: "notion-essentials",
      title: "Notion Essentials",
      course: "Notion Essentials Quiz",
      issuer: "Notion Academy & Certifications",
      recipient: "Manpreeth N",
      issueDate: "Sept. 5, 2026",
      expiryDate: "Sept. 5, 2028",
      credentialId: "a7obunazytxj",
      verifyUrl: "https://verify.skilljar.com/c/a7obunazytxj",
      image: "assets/images/certs/notion_essentials.jpg",
      status: "Active & Verified",
      platform: "Skilljar",
      skills: ["Databases & Relations", "Formulas & Automation", "Workspace Architecture", "Team Collaboration"]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
