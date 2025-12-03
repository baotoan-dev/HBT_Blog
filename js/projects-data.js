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
  "product-request": {
    id: "product-request",
    title: "Product Request Management",
    subtitle:
      "Centralized system for creating, tracking, and approving product requests across teams",
    hero: {
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    images: [
      "./assets/request/request-1.png",
      "./assets/request/request-1.png",
      "./assets/request/request-1.png",
      "./assets/request/request-1.png",
    ],
    sidebar: {
      role: "Lead Backend & System Architect",
      duration: "8 weeks (Aug - Oct 2024)",
      techStack: "NestJS, PostgreSQL, Redis, Kafka, ReactJS",
      teamSize: "4 backend, 2 frontend, 1 QA",
      status: "Production Ready",
      demoLink: "https://example.com/product-request",
    },
    content: {
      overview:
        "This module provides a robust and scalable solution for managing product requests within the organization. It enables employees and departments to submit new product proposals, track approval workflows, maintain version history, and collaborate seamlessly. Designed to support high-volume operations, the system ensures transparency, traceability, and efficient communication across teams.",
      features: [
        {
          icon: "fa-solid fa-file-circle-plus",
          title: "Create & Submit Product Requests",
        },
        {
          icon: "fa-solid fa-sitemap",
          title: "Multi–Level Approval Workflow",
        },
        {
          icon: "fa-solid fa-users-gear",
          title: "Role-Based Access Control (RBAC)",
        },
        {
          icon: "fa-solid fa-clock-rotate-left",
          title: "Full Activity & Version Tracking",
        },
        {
          icon: "fa-solid fa-bell",
          title: "Real-Time Notifications (Kafka/Redis)",
        },
        {
          icon: "fa-solid fa-database",
          title: "Centralized Request Repository",
        },
      ],
      achievements: [
        "Reduced approval time by 40% through automated workflow routing",
        "Improved transparency with detailed activity logs and status tracking",
        "Enabled cross-department collaboration with integrated comments system",
        "Ensured high availability with distributed cache and message queue",
        "Designed scalable schema supporting thousands of concurrent requests",
      ],
      technical:
        "Built using a microservice-ready architecture, the system leverages NestJS for API orchestration, PostgreSQL for structured data storage, and Redis for caching and realtime updates. Kafka is integrated to handle event-based workflows and notifications. The frontend UI uses ReactJS with reusable atomic components. Additional optimizations include query indexing, soft deletes with versioning, and comprehensive audit logging.",
    },
  },

  "meeting-room-booking": {
    id: "meeting-room-booking",
    title: "Meeting Room Booking Dashboard",
    subtitle:
      "Centralized platform for scheduling, managing, and monitoring meeting room usage with real-time analytics",
    hero: {
      gradient: "linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)",
    },
    images: [
      "./assets/booking/booking-1.png",
      "./assets/booking/booking-2.png",
      "./assets/booking/booking-3.png",
    ],
    sidebar: {
      role: "Full-stack Developer & System Architect",
      duration: "7 weeks (Jun - Jul 2024)",
      techStack: "React, NestJS, PostgreSQL, Socket.IO, Material-UI",
      teamSize: "3 backend, 2 frontend, 1 QA",
      status: "Production Ready",
      demoLink: "https://example.com/meeting-dashboard",
    },
    content: {
      overview:
        "A complete meeting room booking management system designed to streamline scheduling, resource allocation, and room utilization. The platform provides real-time availability tracking, automated booking workflows, conflict detection, and analytics to help organizations optimize workspace usage.",
      features: [
        {
          icon: "fa-solid fa-calendar-check",
          title: "Room Scheduling & Booking",
        },
        {
          icon: "fa-solid fa-clock",
          title: "Real-time Availability Tracking",
        },
        {
          icon: "fa-solid fa-map-location-dot",
          title: "Interactive Room Map & Layouts",
        },
        {
          icon: "fa-solid fa-user-lock",
          title: "Role-Based Access Control",
        },
        {
          icon: "fa-solid fa-bell",
          title: "Instant Notifications (Email/SMS)",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Usage & Productivity Analytics",
        },
      ],
      achievements: [
        "Reduced booking conflicts by 90% through automated availability validation",
        "Improved meeting room utilization by 35% via analytics-driven insights",
        "Enabled real-time updates using WebSockets for instant user feedback",
        "Enhanced admin productivity with centralized room management tools",
        "Integrated SSO and secure RBAC for enterprise-level access control",
      ],
      technical:
        "Developed with React 18 and NestJS, utilizing PostgreSQL for relational data and real-time updates via Socket.IO. Implemented clean architecture, caching with Redis, and database indexing for fast availability queries. The dashboard features advanced analytics powered by Material-UI and custom data visualizations. Comprehensive logging, JWT authentication, and rate limiting ensure system reliability and security.",
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
      duration: "12 weeks (Jul - Oct 2024)",
      techStack:
        "Python, NestJS, NuxtJS, Redis, MongoDB, Docker, Nginx, CI/CD, AWS, Socket.io",
      teamSize: "6 engineers, 2 designers, 1 HR consultant",
      status: "Enterprise Ready",
      demoLink: "https://example.com/hrm-demo",
    },
    content: {
      overview:
        "A comprehensive HR software automating attendance, payroll, leave requests, and work schedules. It calculates salaries, bonuses, and benefits, offering analytics and reports to support decision-making for companies like Talaw, AMVC, and MIGHTYID.",
      features: [
        {
          icon: "fa-solid fa-calendar-check",
          title: "Automated Attendance Tracking",
        },
        {
          icon: "fa-solid fa-money-bill-wave",
          title: "Payroll Management System",
        },
        {
          icon: "fa-solid fa-user-clock",
          title: "Leave & Time-off Requests",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Performance Tracking & Analytics",
        },
        {
          icon: "fa-solid fa-users-cog",
          title: "Employee Self-Service Portal",
        },
        {
          icon: "fa-solid fa-shield-alt",
          title: "Role-Based Access Control",
        },
      ],
      responsibilities: [
        "Optimize schemas and queries for large datasets on employee records, payroll, and attendance.",
        "Create RESTful APIs and WebSocket services for backend-frontend communication, ensuring authentication and data integrity.",
        "Set up testing frameworks, integrate with CI/CD, and ensure code quality via reviews and automated deployment",
      ],
      achievements: [
        "Automated payroll processing, reducing errors by 90%",
        "Improved employee satisfaction with self-service features",
        "Streamlined attendance tracking, saving 20 hours/week in manual work",
        "Enhanced decision-making with real-time HR analytics",
        "Successfully deployed in multiple enterprises with 1000+ employees",
      ],
      technical:
        "Built with a microservices architecture using Python Flask for the NLP engine and Node.js for API services. Utilizes TensorFlow and Hugging Face Transformers for model development, deployed on AWS with Docker containers. Features WebSocket integration for real-time chat, Redis for session management, and PostgreSQL for conversation logging.",
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
