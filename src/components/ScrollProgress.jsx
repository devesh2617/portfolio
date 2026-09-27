import { useEffect, useState } from "react";
import { playClickSound, playHoverSound } from "../utils/audio";

const SECTIONS = [
  { id: "introduction", label: "Intro" },
  { id: "summary", label: "Profile" },
  { id: "expertise", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "links", label: "Contact" },
];

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Determine active section
      const sectionElements = SECTIONS.map((sec) => document.getElementById(sec.id));
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    playClickSound();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900/50 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 shadow-[0_0_12px_rgba(56,189,248,0.7)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Right Dock for Quick Navigation */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-800/80 shadow-2xl">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              onMouseEnter={playHoverSound}
              aria-label={`Jump to ${sec.label}`}
              className="group relative flex items-center justify-center w-7 h-7 rounded-full cursor-pointer focus:outline-none"
            >
              {/* Dot */}
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3 h-3 bg-sky-400 shadow-[0_0_10px_#38bdf8] scale-125"
                    : "w-1.5 h-1.5 bg-slate-600 group-hover:bg-slate-300 group-hover:scale-125"
                }`}
              />

              {/* Tooltip */}
              <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md text-xs font-medium text-white bg-slate-900/90 border border-slate-700 shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ScrollProgress;
