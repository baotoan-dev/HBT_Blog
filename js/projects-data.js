// Projects Database
const PROJECTS_DATA = {
  "product-landing": {
    id: "product-landing",
    title: "Product Landing Page",
    subtitle:
      "Modern, responsive landing page with advanced animations and conversion optimization features",
    hero: {
      gradient:
        "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    },
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    ],
    sidebar: {
      role: "Lead UI/UX Designer & Frontend Developer",
      duration: "6 weeks (Oct - Nov 2024)",
      techStack: "HTML5, CSS3, JavaScript ES6+, GSAP, Webpack",
      teamSize: "3 developers, 1 designer",
      status: "Live Demo & Source Code",
      demoLink: "https://example.com/demo",
    },
    content: {
      overview:
        "This comprehensive product landing page represents a modern approach to digital marketing and user experience design. Built with cutting-edge web technologies, the project focuses on creating an engaging, high-converting platform that effectively communicates product value while maintaining exceptional performance across all devices.",
      features: [
        {
          icon: "fa-solid fa-bolt",
          title: "Advanced GSAP Animations",
        },
        {
          icon: "fa-solid fa-mobile-screen",
          title: "Mobile-First Responsive Design",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "30% Conversion Rate Improvement",
        },
        {
          icon: "fa-solid fa-palette",
          title: "Contemporary UI/UX Design",
        },
        {
          icon: "fa-solid fa-rocket",
          title: "Optimized Performance",
        },
        {
          icon: "fa-solid fa-search",
          title: "SEO & Accessibility Compliant",
        },
      ],
      achievements: [
        "Delivered a 30% increase in conversion rates through strategic UX optimization",
        "Implemented responsive design ensuring seamless experience across all devices",
        "Achieved 95+ Google PageSpeed scores for both desktop and mobile",
        "Integrated advanced analytics and tracking for data-driven insights",
        "Designed with accessibility standards (WCAG 2.1) for inclusive user experience",
      ],
      technical:
        "The project leverages modern web standards including semantic HTML5, advanced CSS Grid and Flexbox layouts, and progressive JavaScript enhancement. Performance optimization techniques such as lazy loading, image optimization, and efficient code splitting ensure fast loading times across various network conditions.",
    },
  },

  "e-commerce-dashboard": {
    id: "e-commerce-dashboard",
    title: "E-commerce Admin Dashboard",
    subtitle:
      "Real-time analytics dashboard with advanced data visualization and inventory management system",
    hero: {
      gradient:
        "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)",
    },
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    ],
    sidebar: {
      role: "Full-stack Developer & UI Designer",
      duration: "8 weeks (Aug - Sep 2024)",
      techStack: "React, Node.js, MongoDB, Chart.js, Material-UI",
      teamSize: "4 developers, 2 designers",
      status: "Production Ready",
      demoLink: "https://example.com/dashboard-demo",
    },
    content: {
      overview:
        "A comprehensive e-commerce administration dashboard featuring real-time analytics, inventory management, and customer relationship tools. Built with modern React architecture and integrated with robust backend APIs for seamless data management and business intelligence.",
      features: [
        {
          icon: "fa-solid fa-chart-bar",
          title: "Real-time Analytics Dashboard",
        },
        {
          icon: "fa-solid fa-boxes-stacked",
          title: "Inventory Management System",
        },
        {
          icon: "fa-solid fa-users",
          title: "Customer Relationship Management",
        },
        {
          icon: "fa-solid fa-shopping-cart",
          title: "Order Processing & Tracking",
        },
        {
          icon: "fa-solid fa-credit-card",
          title: "Payment Gateway Integration",
        },
        {
          icon: "fa-solid fa-bell",
          title: "Real-time Notifications",
        },
      ],
      achievements: [
        "Reduced order processing time by 60% through automated workflows",
        "Improved inventory accuracy to 99.5% with real-time tracking",
        "Increased admin productivity by 40% with intuitive interface design",
        "Implemented secure role-based access control for multi-user environments",
        "Achieved 99.9% uptime with robust error handling and monitoring",
      ],
      technical:
        "Built using React 18 with TypeScript for type safety, integrated with Node.js and Express backend. MongoDB Atlas for cloud database with real-time synchronization. Implemented Redux Toolkit for state management and Chart.js for data visualization. Features JWT authentication, API rate limiting, and comprehensive error logging.",
    },
  },

  "maple-eduverse": {
    id: "maple-eduverse",
    title: "Maple Eduverse (TimeTable)",
    subtitle:
      "Next-gen mobile app for personalized learning schedules and interactive study tools",
    hero: {
      gradient:
        "linear-gradient(135deg, #6c5ce7 0%, #fd79a8 50%, #fdcb6e 100%)",
    },
    images: [
      "./assets/edu/maple-1.png",
      "./assets/edu/maple-2.png",
      "./assets/edu/maple-3.png",
    ],
    sidebar: {
      role: "Senior Mobile UI/UX Designer",
      duration: "10 weeks (Jun - Aug 2024)",
      techStack:
        "NuxtJS, NestJS, Firebase, Figma, Mongodb, Redis, Docker, Nginx, CI/CD, AWS",
      teamSize: "5 developers, 3 designers, 1 security expert",
      status: "App Store Ready",
      demoLink: "https://example.com/banking-prototype",
    },
    content: {
      overview:
        "A next-generation mobile banking application designed with security-first approach and user-centric interface. Features advanced biometric authentication, real-time transaction processing, and intelligent financial insights to provide users with a seamless and secure banking experience.",
      features: [
        {
          icon: "fa-solid fa-fingerprint",
          title: "Biometric Authentication",
        },
        {
          icon: "fa-solid fa-exchange-alt",
          title: "Instant Money Transfers",
        },
        {
          icon: "fa-solid fa-shield-alt",
          title: "Advanced Security Features",
        },
        {
          icon: "fa-solid fa-chart-pie",
          title: "Expense Analytics & Insights",
        },
        {
          icon: "fa-solid fa-qrcode",
          title: "QR Code Payments",
        },
        {
          icon: "fa-solid fa-bell",
          title: "Smart Transaction Alerts",
        },
      ],
      achievements: [
        "Achieved 4.8/5 rating in user testing with 500+ participants",
        "Reduced login time by 75% with biometric authentication implementation",
        "Increased user engagement by 85% with personalized financial insights",
        "Passed comprehensive security audits with zero critical vulnerabilities",
        "Optimized app performance resulting in 50% faster loading times",
      ],
      technical:
        "Developed using React Native with TypeScript for cross-platform compatibility. Implemented Redux for state management and React Native Reanimated for smooth animations. Integrated biometric authentication APIs, encryption libraries for data security, and real-time WebSocket connections for live updates. Features offline-first architecture with local SQLite database synchronization.",
    },
  },

  "mighty-id-hrm": {
    id: "mighty-id-hrm",
    title: "Mighty.ID HRM System",
    subtitle:
      "Comprehensive HR management platform with employee self-service and performance tracking",
    hero: {
      gradient:
        "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 50%, #8360c3 100%)",
    },
    images: [
      "./assets/hrm/hrm-1.png",
      "./assets/hrm/hrm-2.png",
      "./assets/hrm/hrm-3.png",
      "./assets/hrm/hrm-4.png",
      "./assets/hrm/hrm-5.png",
      "./assets/hrm/hrm-6.png",
    ],
    sidebar: {
      role: "Full-stack Developer & UX Researcher",
      // 07/2024 - 11/2024
      duration: "12 weeks (Jul - Oct 2024)",
      techStack:
        "Python, NestJS, NuxtJS, Redis, MongoDB, Docker, Nginx, CI/CD, AWS, Socket.io",
      teamSize: "6 engineers, 2 designers, 1 HR consultant",
      status: "Enterprise Ready",
      demoLink: "https://example.com/hrm-demo",
    },
    content: {
      overview:
        "An advanced AI-powered chat platform that integrates multiple language models to provide intelligent, context-aware conversations. Features real-time processing, multi-modal interactions, and sophisticated prompt engineering to deliver human-like conversational experiences for various use cases.",
      features: [
        {
          icon: "fa-solid fa-brain",
          title: "Multi-Model AI Integration",
        },
        {
          icon: "fa-solid fa-comments",
          title: "Real-time Chat Processing",
        },
        {
          icon: "fa-solid fa-language",
          title: "Multi-language Support",
        },
        {
          icon: "fa-solid fa-file-alt",
          title: "Document Analysis & Q&A",
        },
        {
          icon: "fa-solid fa-image",
          title: "Image Generation & Analysis",
        },
        {
          icon: "fa-solid fa-code",
          title: "Code Generation & Review",
        },
      ],
      achievements: [
        "Achieved 95% accuracy in intent recognition across 12 languages",
        "Reduced response latency to under 500ms with optimized model serving",
        "Processed over 1M+ conversations with 99.5% uptime reliability",
        "Implemented advanced context memory spanning 100+ conversation turns",
        "Created custom fine-tuned models improving domain-specific performance by 40%",
      ],
      technical:
        "Built with Next.js 14 and TypeScript frontend, Python FastAPI backend with async processing. Integrated OpenAI GPT-4, Anthropic Claude, and custom fine-tuned models. Implemented WebSocket connections for real-time streaming, Redis for session management, and PostgreSQL for conversation storage. Features advanced prompt engineering, context chunking, and multi-modal processing capabilities.",
    },
  },
};

// Export for use in other files (browser and Node.js)
if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PROJECTS_DATA;
}
