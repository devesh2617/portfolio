import { useState } from "react";
import { useGSAP } from "@gsap/react";
import TechCard from "./TechCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiHtml5,
  SiRedis,
  SiApachekafka,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { playClickSound, playHoverSound } from "../utils/audio";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "React.js", icon: <SiReact />, color: "#61DAFB", category: "frontend", level: "Expert" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", category: "frontend", level: "Expert" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", category: "frontend", level: "Expert" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", category: "frontend", level: "Advanced" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", category: "frontend", level: "Expert" },
  { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC", category: "frontend", level: "Advanced" },
  { name: "GSAP", icon: <SiGreensock />, color: "#88CE02", category: "frontend", level: "Advanced" },
  { name: "HTML5 / CSS3", icon: <SiHtml5 />, color: "#E34F26", category: "frontend", level: "Expert" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E", category: "backend", level: "Expert" },
  { name: "Express.js", icon: <SiExpress />, color: "#E2E8F0", category: "backend", level: "Expert" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D", category: "backend", level: "Advanced" },
  { name: "Apache Kafka", icon: <SiApachekafka />, color: "#E2E8F0", category: "backend", level: "Advanced" },
  { name: "Prisma ORM", icon: <SiPrisma />, color: "#5A67D8", category: "backend", level: "Advanced" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", category: "devops", level: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "devops", level: "Advanced" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900", category: "devops", level: "Advanced" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED", category: "devops", level: "Advanced" },
  { name: "Git & GitHub", icon: <SiGit />, color: "#F05032", category: "devops", level: "Expert" },
];

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & APIs" },
  { id: "devops", label: "Databases & DevOps" },
];

const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTech =
    selectedCategory === "all"
      ? techStack
      : techStack.filter((t) => t.category === selectedCategory);

  useGSAP(() => {
    gsap.from(".expertise-title-area", {
      scrollTrigger: {
        trigger: "#expertise",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });

    gsap.from(".tech-card", {
      scrollTrigger: {
        trigger: "#expertise",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 25,
      opacity: 0,
      duration: 0.5,
      stagger: 0.04,
      ease: "power2.out",
    });
  });

  const handleCategorySelect = (id) => {
    playClickSound();
    setSelectedCategory(id);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <section id="expertise" className="section-class !flex-col !justify-start py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <article className="container mx-auto">
        <div className="w-full">
          {/* Header */}
          <div className="expertise-title-area flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Technical <span className="gradient-text-cyan">Expertise</span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    onMouseEnter={playHoverSound}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-sky-500 text-white shadow-neon-cyan"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tech Grid */}
          <div className="tech-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredTech.map((tech) => (
              <TechCard
                key={tech.name}
                technology={tech.name}
                icon={tech.icon}
                color={tech.color}
                category={tech.category}
                level={tech.level}
              />
            ))}
          </div>

        </div>
      </article>
    </section>
  );
};

export default Expertise;
