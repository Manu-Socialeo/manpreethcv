const SITE_DATA = {
  profile: {
    name: "Manpreeth",
    title: "AI Generalist & Full Stack Developer",
    company: "Founder at Socialeo",
    availability: "Available",
    spotsLeft: "2 Spots Left",
    bio: "From concept to launch, I build high-impact digital experiences, bespoke web applications, and AI automation systems with stunning visuals and seamless interactions.",
    aboutHeading: "Hi, I’m Manpreeth: AI Generalist & Developer",
    aboutSub: "Founder of Socialeo. B.E. in Computer Science. Specializing in AI automations, high-fidelity web design in Framer & Webflow, and full-stack web applications.",
    avatar: "assets/images/manu_photo.png",
    portrait: "assets/images/manu_photo.png",
    location: "India • Remote Worldwide",
    email: "manpreeth007@gmail.com",
    secondaryEmail: "socialeopvtltd@gmail.com",
    phone: "+91 8722163256"
  },

  clients: [
    { name: "acme", svg: `<svg width="78" height="24" viewBox="0 0 78 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4L3 20H8.5L10.5 16H15.5L12 4ZM11.2 12.5L12.5 8L14 12.5H11.2Z" fill="currentColor"/><text x="24" y="17" font-family="Figtree, sans-serif" font-weight="700" font-size="15" fill="currentColor" letter-spacing="-0.02em">acme</text></svg>` },
    { name: "kanba", svg: `<svg width="84" height="24" viewBox="0 0 84 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="12" r="7" stroke="currentColor" stroke-width="2.5"/><circle cx="10" cy="12" r="3" fill="currentColor"/><text x="24" y="17" font-family="Figtree, sans-serif" font-weight="700" font-size="15" fill="currentColor" letter-spacing="-0.02em">kanba</text></svg>` },
    { name: "goldline", svg: `<svg width="95" height="24" viewBox="0 0 95 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="12" r="7.5" stroke="currentColor" stroke-width="2"/><path d="M6 12H14M10 5V19" stroke="currentColor" stroke-width="1.8"/><text x="24" y="17" font-family="Figtree, sans-serif" font-weight="700" font-size="15" fill="currentColor" letter-spacing="-0.02em">goldline</text></svg>` },
    { name: "asgardia", svg: `<svg width="105" height="24" viewBox="0 0 105 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19V5M8 19V8M12 19V11M16 19V5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="25" y="17" font-family="Figtree, sans-serif" font-weight="700" font-size="14" fill="currentColor" letter-spacing="0.05em">ASGARDIA</text></svg>` }
  ],

  projects: [
    {
      id: "socialeo",
      title: "Socialeo",
      client: "Socialeo Inc",
      service: "AI Solutions & Platform",
      location: "Mysore / Remote",
      year: "2024",
      tagline: "Autonomous AI automation suite, SEO audit intelligence, and bespoke web platforms for modern businesses.",
      image: "assets/images/work_hanssen.webp",
      quote: "Transformed our digital workflows with AI automation.",
      author: "Founder Portfolio",
      rating: 5
    },
    {
      id: "hanssen",
      title: "Hanssen",
      client: "Beige",
      service: "Commercial Photography",
      location: "Prague",
      year: "2024",
      tagline: "A modern, Scandinavian-inspired portfolio website showcasing Hanssen’s handcrafted furniture collections and photography, blending clean aesthetics with seamless functionality.",
      image: "assets/images/work_hanssen.webp",
      detailImage: "assets/images/hanssen_detail.webp",
      quote: "Outstanding creativity & professional service from Manpreeth.",
      author: "Sarah Jenkins",
      rating: 5,
      websiteView: {
        creator: "Ema Hanssen",
        role: "Photographer",
        avatar: "assets/images/ema_hanssen_avatar.jpg",
        bio: "I'm Ema, a photographer based in Prague. I capture authentic moments and tell stories through my images, blending creativity and emotion in each shot.",
        selectedWorkImage: "assets/images/hanssen_selected_work.jpg",
        darkness1: "assets/images/hanssen_darkness_1.jpg",
        darkness2: "assets/images/hanssen_darkness_2.jpg",
        beigeImage: "assets/images/hanssen_beige.jpg",
        studioImage: "assets/images/hanssen_studio.jpg",
        studioAddress: "Vinohradská 121, 130 00 Praha 3, Czech Republic"
      }
    },
    {
      id: "fjord",
      title: "Fjord",
      client: "Nordic Living",
      service: "E-Commerce & 3D",
      location: "Oslo",
      year: "2024",
      tagline: "Crafting comfort, inspired by the north. A calm digital commerce space for minimalist architectural seating.",
      image: "assets/images/work_fjord.webp",
      quote: "Manpreeth delivered a flawless digital brand experience.",
      author: "Magnus Lind",
      rating: 5
    },
    {
      id: "ayano",
      title: "Ayano",
      client: "Ayano Creative",
      service: "Branding & Web",
      location: "Tokyo",
      year: "2023",
      tagline: "A cutting-edge agency portfolio spotlighting experimental generative art and branding campaigns.",
      image: "assets/images/work_ayano.webp",
      quote: "Truly exceptional attention to detail.",
      author: "Kenji Sato",
      rating: 5
    },
    {
      id: "qitchen",
      title: "Qitchen",
      client: "Qitchen Group",
      service: "Webflow & Motion",
      location: "Berlin",
      year: "2023",
      tagline: "A sensory restaurant experience blending interactive seasonal menu cards with instant reservations.",
      image: "assets/images/work_qitchen.webp",
      quote: "Increased table bookings by 42% in month one.",
      author: "Hannah Weber",
      rating: 5
    }
  ],

  services: [
    {
      id: "ai-automation",
      title: "AI Automation",
      desc: "Architecting autonomous agents, automated lead engines, and workflow pipelines tailored for your business."
    },
    {
      id: "web-development",
      title: "Full-Stack Dev",
      desc: "Building high-performance React, Node.js, and modern static web applications with sub-second speeds."
    },
    {
      id: "framer",
      title: "Framer & Webflow",
      desc: "Bringing designs to life with responsive, production-ready, interactive websites built with unmatched speed."
    },
    {
      id: "ui-ux",
      title: "UX/UI Design",
      desc: "Intuitive and seamless user experiences that engage and delight your audience across every screen."
    }
  ],

  testimonials: [
    {
      quote: "Amazing design and exceeded our expectations! Manpreeth is our go-to partner.",
      author: "Sarah Jenkins",
      role: "Founder at Lumina",
      rating: 5,
      image: "assets/images/review_thumb.webp",
      avatar: "assets/images/sarah_avatar.webp"
    },
    {
      quote: "Seamless collaboration with incredible results! Fast delivery and pixel-perfect design.",
      author: "Marcus Miller",
      role: "CMO at Kanba",
      rating: 5,
      avatar: "assets/images/sarah_avatar.webp"
    },
    {
      quote: "Truly a master developer! Built our complex custom features ahead of schedule.",
      author: "Laura Carrasco",
      role: "Design Lead at Form",
      rating: 5,
      avatar: "assets/images/sarah_avatar.webp"
    },
    {
      quote: "Outstanding creativity and professional service from start to finish.",
      author: "Emily Chen",
      role: "Product at Acme",
      rating: 5,
      image: "assets/images/work_fjord.webp",
      avatar: "assets/images/sarah_avatar.webp"
    },
    {
      quote: "Brought our vision to life beautifully with high-converting layouts and robust code.",
      author: "David Carter",
      role: "CEO at Goldline",
      rating: 5,
      image: "assets/images/work_ayano.webp",
      avatar: "assets/images/sarah_avatar.webp"
    },
    {
      quote: "Manpreeth was an absolute joy to work with. Code quality and aesthetics are world-class.",
      author: "Sofia Rodriguez",
      role: "Creative Director",
      rating: 5,
      avatar: "assets/images/sarah_avatar.webp"
    }
  ],

  pricing: [
    {
      name: "Landing Page",
      price: "$2500",
      desc: "Perfect for startups and businesses needing a high-converting single-page website.",
      features: [
        "Designed & built from scratch",
        "Fast delivery (5-7 days)",
        "Custom animations & micro-interactions",
        "Full SEO & Performance Optimization",
        "Figma & Framer / Code assets included"
      ]
    },
    {
      name: "Full Website & AI",
      price: "$3500",
      desc: "Comprehensive multi-page website or web application designed to scale your brand.",
      features: [
        "Custom Architecture & Design",
        "2-4 Weeks Delivery",
        "Up to 5 Pages (+ Custom APIs)",
        "AI Workflow Automation integration",
        "Full CMS & Analytics Dashboard"
      ]
    }
  ],

  faqs: [
    {
      q: "What is included in the Landing Page package?",
      a: "The Landing Page package includes custom UX/UI design, full responsive build in Framer, Webflow, or custom React/HTML, interactive animations, SEO optimization, and domain integration."
    },
    {
      q: "How long does it take to complete a project?",
      a: "A landing page typically takes 1 to 2 weeks, while a comprehensive multi-page website takes between 2 to 4 weeks depending on scope and feedback iterations."
    },
    {
      q: "Do you provide revisions during the design process?",
      a: "Yes, all projects include 2 rounds of comprehensive revisions to ensure the final product meets your exact specifications and expectations."
    },
    {
      q: "Can I request changes during the design process?",
      a: "Absolutely. We maintain transparent, async communication throughout the development phase so you can provide timely feedback and iterate smoothly."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, 100%. Every website is crafted mobile-first with adaptive layouts that look and perform flawlessly across all desktop, tablet, and mobile devices."
    }
  ],

  certifications: [
    {
      id: "claude-code-101",
      title: "Claude Code 101",
      course: "Terminal Agentic Coding & Workflows",
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
      issueDate: "Sept. 5, 2026",
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
      issueDate: "Sept. 5, 2026",
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
      issueDate: "Sept. 5, 2026",
      expiryDate: "Lifetime Verified",
      credentialId: "22709de98df6fc8ddf88a3e61517acc5",
      verifyUrl: "https://academy.claude.com/verify/22709de98df6fc8ddf88a3e61517acc5",
      image: "assets/images/certs/claude_ai_fluency.svg",
      status: "Verified Completion Badge",
      platform: "Claude Academy",
      skills: ["4D AI Framework", "Delegation & Description", "Discernment & Verification", "Ethical AI Systems"]
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
    },
    {
      id: "canva-essentials",
      title: "Canva Essentials & Visual Design",
      course: "Graphic Design, Branding & AI Content Creation",
      issuer: "Canva Design School",
      recipient: "Manpreeth N",
      issueDate: "Sept. 5, 2026",
      expiryDate: "Lifetime Verified",
      credentialId: "be7051c2-f724-432b-9cf1-4d121cc9fff9",
      verifyUrl: "https://www.canva.com/design-school/certification-award/be7051c2-f724-432b-9cf1-4d121cc9fff9?examCompleted=true&earnedBadges=learning-certificate-1",
      image: "assets/images/certs/canva_essentials.svg",
      status: "Official Certification Award",
      platform: "Canva",
      skills: ["Visual Design & Layout", "Brand Architecture & Identity", "Typography & Hierarchy", "Content Creation & AI Magic Studio"]
    }
  ],

  awards: [
    { title: "Best AI Automation Architecture", org: "Socialeo Studio", year: "2024" },
    { title: "Excellence in Full-Stack Web Apps", org: "Dev Innovators", year: "2024" },
    { title: "Top Framer Website Design", org: "Framer Showcase", year: "2023" },
    { title: "B.E. Computer Science Graduate", org: "University Engineering", year: "2023" },
    { title: "Outstanding Webflow Project Award", org: "Webflow Showcase", year: "2023" },
    { title: "Creative Excellence in Web Design", org: "Design Awards", year: "2022" }
  ],

  blogs: [
    {
      id: "5-essential-web-design-trends-for-2024",
      title: "5 Essential Web Design Trends for 2024",
      subtitle: "Stay ahead of the curve with these cutting-edge web design trends dominating the digital landscape this year.",
      date: "23rd November 2024",
      readTime: "2 Min",
      category: "Trends",
      image: "assets/images/blog_1_trends.webp",
      content: `
        <p>Web design is evolving at an unprecedented pace. As generative technology and browser capabilities expand, designers and developers have more tools than ever to craft immersive digital stories.</p>
        <h3>1. Sculpted Containers & Inverted Radii</h3>
        <p>Gone are the generic square cards. Modern layouts employ chamfered notches, inverted corner fillets, and mobile-inspired viewport shells that feel tactile and physical.</p>
        <h3>2. Micro-Interactions with Physical Physics</h3>
        <p>Subtle damping and spring animations give user interfaces weight and responsiveness that feels natural to the touch.</p>
        <h3>3. Dark & Light Mode Harmony</h3>
        <p>Seamless color transitions that don't just invert colors, but recalibrate luminance and contrast to maintain readability in any ambient condition.</p>
      `
    },
    {
      id: "the-power-of-ux-how-great-design-boosts-conversions",
      title: "The Power of UX: How Great Design Boosts Conversions",
      subtitle: "Discover how intuitive user experience design directly impacts business metrics and drives sustainable growth.",
      date: "14th November 2024",
      readTime: "3 Min",
      category: "Strategy",
      image: "assets/images/blog_2_ux.webp",
      content: `<p>Design isn't just how it looks; it's how it works. A seamless checkout or portfolio contact flow can double customer inquiries without increasing ad spend.</p>`
    },
    {
      id: "top-7-mistakes-to-avoid-in-website-design",
      title: "Top 7 Mistakes to Avoid in Website Design",
      subtitle: "Learn the common design pitfalls that hurt engagement, confuse visitors, and lower SEO rankings.",
      date: "2nd November 2024",
      readTime: "4 Min",
      category: "Design",
      image: "assets/images/blog_3_mistakes.webp",
      content: `<p>From unoptimized typography line-heights to cluttered hero sections, avoiding these 7 fatal flaws will immediately elevate your brand reputation.</p>`
    },
    {
      id: "framer-vs-webflow-which-platform-is-right-for-you",
      title: "Framer vs. Webflow: Which Platform is Right for You?",
      subtitle: "An honest, in-depth comparison of the two leading visual development platforms for modern designers.",
      date: "18th October 2024",
      readTime: "5 Min",
      category: "Tools",
      image: "assets/images/blog_4_framer_webflow.webp",
      content: `<p>Framer offers unrivaled rapid animation and Figma fidelity, while Webflow shines for complex programmatic logic and scalable enterprise CMS.</p>`
    },
    {
      id: "why-your-website-needs-responsive-design-in-2024",
      title: "Why Your Website Needs Responsive Design in 2024",
      subtitle: "Mobile browsing now represents over 60% of web traffic. Ensure your website adapts gracefully to all viewports.",
      date: "5th October 2024",
      readTime: "3 Min",
      category: "Tech",
      image: "assets/images/blog_5_responsive.webp",
      content: `<p>True responsiveness goes beyond shrinking images. It requires thoughtful touch targets, readable font sizes, and layout re-prioritization.</p>`
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
