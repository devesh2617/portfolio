import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ExperienceCard from "./ExperienceCard";
import antinoLogo from "../assets/antino-logo.png";

gsap.registerPlugin(ScrollTrigger);

const expCardsData = [
  {
    organisation: "Antino Labs",
    from: "November 2025",
    to: "Present",
    logo: antinoLogo,
    designation: "Software Developer",
    isCurrent: true,
    skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "Kafka", "AWS", "Docker"],
    job_description:
      "Working as a Full Stack Software Developer, engineering modern high-scale web products, responsive frontend architectures, and resilient backend microservices.\n\n• Collaborating across engineering teams to build modular, maintainable, and high-performance applications.\n• Implementing scalable RESTful APIs, optimized database queries, and clean reactive user interfaces for product initiatives.",
  },
  {
    organisation: "SARACA Solutions Pvt. Ltd.",
    from: "June 2023",
    to: "October 2025",
    logo: "https://www.saracasolutions.com/api/saraca-logo.svg",
    designation: "Software Developer",
    isCurrent: false,
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Recharts"],
    job_description:
      "Developed and optimized full-stack web platforms and data dashboards using React, Node.js, Express, Tailwind CSS, and Prisma ORM.\n\n• Built the SARACA corporate website redesign, increasing web traffic by 50% and enhancing user engagement.\n• Re-architected the QTST (Quick Talent Sourcing Tool), automating candidate management across a database of 15,000+ resumes.\n• Maintained FastRAMS for PMCF survey tracking and developed an internal failure analytics dashboard for UPMRC using React, Node.js, and Recharts.",
  },
  {
    organisation: "Ebo Now",
    from: "February 2023",
    to: "March 2023",
    logo: "https://i.ibb.co/FJrwLsM/Ebo.png",
    designation: "Web Developer",
    isCurrent: false,
    skills: ["React.js", "Express.js", "JavaScript", "REST APIs", "Tailwind CSS"],
    job_description:
      "Worked on bringing a physical event and decoration business online using React and Express.js.\n\n• Developed the administrative dashboard and customizable add-ons module for customers.\n• Successfully launched the product in Mumbai, establishing digital operations and revenue generation.",
  },
];

const WorkExperience = () => {
  useGSAP(() => {
    gsap.from(".exp-header", {
      scrollTrigger: {
        trigger: "#experience",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });

    gsap.from(".experience-card", {
      scrollTrigger: {
        trigger: "#experience-grid",
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
    <section id="experience" className="section-class py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <article className="container mx-auto">
        <div className="w-full">
          {/* Header */}
          <div className="exp-header mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Work <span className="gradient-text-cyan">Experience</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div id="experience-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {expCardsData.map((card) => (
              <ExperienceCard key={card.organisation} {...card} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default WorkExperience;
