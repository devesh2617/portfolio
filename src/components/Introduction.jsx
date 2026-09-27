import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import Cartoon3DAvatar from "./Cartoon3DAvatar";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";
import { SiNextdotjs, SiDocker } from "react-icons/si";
import { playClickSound, playHoverSound, playSuccessSound } from "../utils/audio";

const ROLES = [
  "Full Stack Web Architect",
  "Software Developer @ Antino Labs",
  "React & Next.js Specialist",
  "Scalable Microservices Engineer",
  "Creative 3D & UI Technologist",
];

const CAPABILITIES = [
  { label: "High-Scale Architecture", color: "from-sky-500/20 to-sky-600/10", border: "border-sky-500/30", dot: "bg-sky-400" },
  { label: "React & Next.js Ecosystem", color: "from-teal-500/20 to-teal-600/10", border: "border-teal-500/30", dot: "bg-teal-400" },
  { label: "Resilient Microservices & APIs", color: "from-indigo-500/20 to-indigo-600/10", border: "border-indigo-500/30", dot: "bg-indigo-400" },
  { label: "Cloud & Dockerized Systems", color: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/30", dot: "bg-purple-400" },
];

const Introduction = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Dynamic Role Switching
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-headline", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        ".hero-role-banner",
        {
          x: -30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        ".hero-bio",
        {
          y: 25,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.3"
      )
      .from(
        ".hero-caps",
        {
          scale: 0.92,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.3"
      )
      .from(
        ".hero-spliced-actions",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2"
      )
      .from(
        ".hero-visual-container",
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.5"
      );
  });

  const scrollTo = (id) => {
    playClickSound();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResumeDownload = () => {
    playSuccessSound();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.75 },
      colors: ["#38bdf8", "#818cf8", "#34d399", "#c084fc", "#ffffff"],
    });
  };

  return (
    <section
      id="introduction"
      className="section-class min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Dynamic Aurora Ambient Glows */}
      <div className="absolute -top-10 left-1/4 w-[500px] h-[500px] bg-sky-500/12 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-[480px] h-[480px] bg-indigo-500/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cybernetic Grid Overlay for Depth */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <article className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        {/* Left Column: Bold Typography & Spliced Actions */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Headline with Optimized Balanced Font Size */}
          <h1 className="hero-headline text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight">
            DEVESH{" "}
            <span className="gradient-text-cyan drop-shadow-[0_0_30px_rgba(56,189,248,0.4)] relative inline-block">
              SHARMA
            </span>
          </h1>

          {/* Dynamic Role Banner */}
          <div className="hero-role-banner mt-3 flex items-center min-h-[44px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-xl shadow-inner">
              <h2 className="text-base sm:text-2xl font-bold gradient-text-aurora flex items-center gap-2 transition-all duration-300">
                <span>{ROLES[roleIndex]}</span>
                <span className="inline-block w-2 h-5 bg-sky-400 animate-pulse rounded-sm shadow-[0_0_8px_#38bdf8]" />
              </h2>
            </div>
          </div>

          {/* Attractive, Grounded Narrative Bio */}
          <p className="hero-bio text-slate-300 max-w-xl text-base sm:text-lg mt-5 leading-relaxed font-normal">
            Full Stack Engineer at <strong className="text-white font-semibold underline decoration-sky-400/60 decoration-2 underline-offset-4">Antino Labs</strong> architecting high-velocity digital experiences. Designing silky user interfaces, resilient microservices, and distributed cloud systems with{" "}
            <span className="text-sky-300 font-medium">React, Next.js, Node.js, Express, TypeScript, PostgreSQL, Redis, Kafka,</span> and{" "}
            <span className="text-teal-300 font-medium">AWS & Docker</span>.
          </p>

          {/* Interactive Glassmorphic Architectural Capability Chips */}
          <div className="hero-caps flex flex-wrap gap-2.5 max-w-xl mt-6 justify-center lg:justify-start">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                onMouseEnter={playHoverSound}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${cap.color} border ${cap.border} backdrop-blur-md text-xs font-medium text-slate-200 transition-all hover:scale-105 hover:border-sky-400/60 cursor-default select-none shadow-sm`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${cap.dot} shadow-[0_0_6px_currentColor]`} />
                <span>{cap.label}</span>
              </div>
            ))}
          </div>

          {/* Spliced Glassmorphic Action Buttons */}
          <div className="hero-spliced-actions mt-8 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            
            {/* Primary Spliced Button: Explore Projects */}
            <div
              onClick={() => scrollTo("projects")}
              onMouseEnter={playHoverSound}
              className="spliced-btn group bg-slate-900/80 hover:bg-slate-800/80 border border-sky-500/40 hover:border-sky-400/80 backdrop-blur-xl shadow-glass hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:scale-[1.03] transition-all"
              role="button"
              tabIndex={0}
              title="Explore Featured Projects"
            >
              {/* Left Splice Segment */}
              <div className="flex items-center gap-2 px-5 py-3 text-white font-semibold text-sm transition-colors">
                <HiOutlineSparkles className="text-sky-400 group-hover:rotate-12 transition-transform text-base" />
                <span>Explore Projects</span>
              </div>

              {/* Spliced Diagonal Seam */}
              <div className="w-[1.5px] -skew-x-12 mx-0.5 bg-sky-500/40 group-hover:bg-sky-400 transition-colors shadow-[0_0_6px_rgba(56,189,248,0.5)]" />

              {/* Right Splice Segment */}
              <div className="flex items-center justify-center px-3.5 py-3 bg-sky-500/10 group-hover:bg-sky-500/25 text-sky-400 group-hover:text-white transition-all">
                <HiOutlineArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Secondary Spliced Button: Get In Touch */}
            <div
              onClick={() => scrollTo("links")}
              onMouseEnter={playHoverSound}
              className="spliced-btn group glass-ultra hover:border-sky-400/60 hover:scale-[1.03]"
              role="button"
              tabIndex={0}
              title="Get in Touch"
            >
              {/* Left Splice Segment */}
              <div className="flex items-center gap-2 px-5 py-3 text-slate-200 group-hover:text-white font-semibold text-sm transition-colors">
                <span>Get In Touch</span>
              </div>

              {/* Spliced Diagonal Seam */}
              <div className="w-[1.5px] -skew-x-12 mx-0.5 bg-slate-700 group-hover:bg-sky-400/70 transition-colors shadow-[0_0_6px_rgba(56,189,248,0.5)]" />

              {/* Right Splice Segment */}
              <div className="flex items-center justify-center px-3.5 py-3 bg-white/[0.04] group-hover:bg-sky-500/20 text-slate-400 group-hover:text-sky-300 transition-all">
                <HiOutlineSparkles className="text-sm" />
              </div>
            </div>

            {/* Tertiary Spliced Button: Download CV */}
            <a
              href="https://drive.google.com/file/d/1bIaK4stSbrRcYxUexALxTvCJZzwjDJB9/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeDownload}
              onMouseEnter={playHoverSound}
              className="spliced-btn group border border-emerald-500/30 hover:border-emerald-400/60 bg-emerald-950/30 hover:bg-emerald-950/50 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] hover:scale-[1.03]"
              title="Download Resume / CV"
            >
              {/* Left Splice Segment */}
              <div className="flex items-center gap-2 px-5 py-3 text-emerald-300 group-hover:text-emerald-200 font-semibold text-sm transition-colors">
                <span>Download CV</span>
              </div>

              {/* Spliced Diagonal Seam */}
              <div className="w-[1.5px] -skew-x-12 mx-0.5 bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors shadow-[0_0_6px_rgba(52,211,153,0.8)]" />

              {/* Right Splice Segment */}
              <div className="flex items-center justify-center px-3.5 py-3 bg-emerald-500/20 group-hover:bg-emerald-500/30 text-emerald-300 group-hover:text-white transition-all">
                <FiDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Cartoon Avatar with Floating Glass Widgets */}
        <div className="hero-visual-container flex-1 flex flex-col items-center justify-center w-full max-w-lg relative">
          
          {/* Floating Glassmorphic Telemetry Pill 1 (Top-Right) */}
          <div
            onMouseEnter={playHoverSound}
            className="absolute -top-4 -right-2 sm:-right-4 z-20 animate-float-slow hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl glass-ultra border border-sky-400/40 shadow-neon-cyan cursor-default select-none"
          >
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 text-lg">
              <SiNextdotjs />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Active Role</div>
              <div className="text-xs font-bold text-white">Full-Stack @ Antino Labs</div>
            </div>
          </div>

          {/* Floating Glassmorphic Telemetry Pill 2 (Bottom-Left) */}
          <div
            onMouseEnter={playHoverSound}
            className="absolute -bottom-4 -left-2 sm:-left-4 z-20 animate-float-reverse hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl glass-ultra border border-teal-400/40 shadow-[0_0_20px_-3px_rgba(45,212,191,0.3)] cursor-default select-none"
          >
            <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 text-lg">
              <SiDocker />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Architecture</div>
              <div className="text-xs font-bold text-white">Microservices & 3D UI</div>
            </div>
          </div>

          {/* 3D Cartoon Avatar WebGL Canvas Frame */}
          <div className="relative w-full flex items-center justify-center p-2 rounded-3xl glass-ultra border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            <Cartoon3DAvatar className="w-full max-w-[400px] sm:max-w-[440px]" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Introduction;
