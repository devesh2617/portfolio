import ProjectCard from "./ProjectCard";
import nasmokImg from "../assets/nasmok.svg";
import mobylxImg from "../assets/mobylx.svg";
import saracaImg from "../assets/saraca.svg";
import qtstImg from "../assets/qtst.svg";
import portfolioImg from "../assets/portfolio.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: "nasmok",
    name: "Nasmok — Full Stack E-Commerce & Microservices Platform",
    subtitle:
      "A complete e-commerce solution comprising a customer storefront, administrative operations portal, and decoupled backend microservices.",
    category: "fullstack",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
    ],
    architecture: {
      frontend: "Next.js 16 App Router, React 19, Tailwind CSS, Responsive Cart State",
      backend: "Node.js, Express microservices (nasmok-service, otp-service), JWT Auth",
      database: "PostgreSQL with Prisma ORM migrations, relational schemas",
      devops: "Docker, Docker Compose containerization for rapid deployment",
    },
    highlights: [
      "Architected the customer-facing storefront in Next.js 16 (App Router) and React 19 with dynamic product search, category filtering, cart state management, and checkout.",
      "Developed a dedicated admin dashboard for store operations, handling product catalog authoring, categories, and inventory stock auditing.",
      "Engineered decoupled backend microservices (nasmok-service and otp-service) using Express, Prisma ORM, and PostgreSQL for JWT authentication, order processing, and role-based access.",
      "Containerized backend services with Docker and Docker Compose for streamlined development and reliable local/production deployments.",
    ],
    img: nasmokImg,
  },
  {
    id: "mobylx",
    name: "Mobylx — B2B Mobile Trading Marketplace",
    subtitle:
      "A high-volume buyer and seller marketplace web application for trading pre-owned and refurbished smartphones.",
    category: "fullstack",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "WebSockets",
      "AWS S3",
    ],
    architecture: {
      frontend: "React.js SPA with Redux Toolkit centralized state, Code Splitting",
      backend: "Node.js REST APIs with WebSocket live bid subscription handlers",
      database: "Scalable transaction ledgers, digital wallet multi-currency balance",
      storage: "AWS S3 for device inspection photos and documentation uploads",
    },
    highlights: [
      "Engineered live device trading workflows including real-time buyer/seller bidding, bid fulfillment, and purchase order tracking.",
      "Built multi-currency wallet management modules with real-time balance inquiries, transaction ledgers, and payment top-up integration.",
      "Structured centralized application state management with Redux Toolkit and optimized bundle size through code splitting and lazy-loaded views.",
    ],
    img: mobylxImg,
  },
  {
    id: "saraca",
    name: "SARACA Solutions Corporate Website",
    subtitle:
      "Complete ground-up redesign and development of the corporate website for SARACA Solutions to drive digital growth and hiring.",
    category: "web",
    tech: ["React.js", "Express.js", "Prisma ORM", "Tailwind CSS", "Node.js"],
    architecture: {
      frontend: "React with Tailwind CSS, custom animated sections and SEO meta architecture",
      backend: "Express.js API for candidate applications and dynamic CMS publishing",
      database: "Prisma ORM connection layer for content and submissions management",
      analytics: "Integrated telemetry tracking leading to +50% visitor growth",
    },
    highlights: [
      "Developed the corporate website using React, Tailwind CSS, Express, and Prisma, resulting in a 50% increase in visitor web traffic.",
      "Built a dynamic career portal allowing candidates to explore openings and apply directly, streamlining talent recruitment.",
      "Integrated dynamic CMS workflows for blogs, webinars, and case studies, enabling marketing teams to update content seamlessly.",
      "Created an internal admin dashboard for Talent Acquisition and Marketing teams to track candidate leads and monitor engagement.",
    ],
    img: saracaImg,
  },
  {
    id: "qtst",
    name: "Quick Talent Search Tool (QTST)",
    subtitle:
      "Internal recruitment platform developed for Talent Acquisition to manage, search, and process candidate profiles efficiently.",
    category: "tools",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "DaisyUI", "Node.js"],
    architecture: {
      frontend: "React UI with high-throughput instant filtering and search indexers",
      backend: "Node.js service handling candidate parsing and profile classification",
      scale: "Database managing over 15,000 resumes with sub-second retrieval",
    },
    highlights: [
      "Developed the frontend using React to streamline candidate sourcing and manage a database of over 15,000 resumes.",
      "Built seamless candidate profile sharing between recruiters and account managers with real-time hiring progress tracking.",
      "Implemented a dashboard for leadership to track recruitment KPIs and business unit hiring progress.",
    ],
    img: qtstImg,
  },
  {
    id: "portfolio",
    name: "Personal 3D Interactive Portfolio",
    subtitle:
      "Personal developer portfolio built with Three.js, GSAP, and Tailwind CSS to showcase full-stack engineering and creative interaction.",
    category: "web",
    tech: ["React.js", "Three.js", "GSAP", "Tailwind CSS", "Vite", "Web Audio API"],
    architecture: {
      graphics: "Three.js interactive 3D particle universe & holographic geometry core",
      animation: "GSAP scroll triggers and smooth stagger entrances",
      audio: "Web Audio API synthetic micro-interactions and audio feedback",
    },
    highlights: [
      "Designed and developed a responsive personal portfolio using React, Three.js 3D graphics, and GSAP.",
      "Engineered 3D Card Tilt with specular reflections, interactive custom cursor, and particle starfield.",
      "Implemented versatile GSAP scroll animations, clean typography, and responsive layouts across all devices.",
    ],
    img: portfolioImg,
  },
];

const Projects = () => {
  useGSAP(() => {
    gsap.from(".projects-header", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });

    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: "#projects-list",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  });

  return (
    <section id="projects" className="section-class py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <article className="container mx-auto">
        {/* Header */}
        <div className="projects-header mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
        </div>

        {/* Project List */}
        <div id="projects-list" className="w-full flex flex-col gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id || project.name}
              {...project}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Projects;
