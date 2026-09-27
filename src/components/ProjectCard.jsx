import { useState } from "react";
import Card3DTilt from "./Card3DTilt";
import { HiOutlineCheckCircle, HiOutlineSparkles } from "react-icons/hi2";
import { playHoverSound, playSuccessSound } from "../utils/audio";
import confetti from "canvas-confetti";

const ProjectCard = ({
  name,
  subtitle,
  tech,
  highlights,
  img,
  category,
}) => {
  const [hasCheered, setHasCheered] = useState(false);

  const handleCheers = (e) => {
    e.stopPropagation();
    playSuccessSound();
    setHasCheered(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ["#38bdf8", "#fbbf24", "#34d399", "#c084fc", "#ffffff"],
    });
  };

  return (
    <Card3DTilt
      maxTilt={6}
      scale={1.01}
      onMouseEnter={playHoverSound}
      className="project-card group p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-400/50 backdrop-blur-md flex flex-col lg:flex-row gap-8 items-start transition-all duration-300 shadow-glass hover:shadow-neon-cyan"
    >
      {/* Project Image Preview */}
      <div className="w-full lg:w-96 aspect-video flex-shrink-0 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center relative group-hover:border-sky-500/40 transition-colors">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="flex-1 flex flex-col justify-between w-full">
        <div>
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
            {name}
          </h3>

          {/* Subtitle / Short Pitch */}
          <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            {subtitle}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Highlights List */}
          <ul className="flex flex-col gap-2.5 text-slate-300 text-sm mt-5">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <HiOutlineCheckCircle className="text-sky-400 text-base flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions bar: Cheers Spliced Button */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
          <button
            onClick={handleCheers}
            onMouseEnter={playHoverSound}
            className={`spliced-btn group/cheers bg-slate-900/80 hover:bg-slate-800/80 border text-xs font-semibold shadow-glass transition-all cursor-pointer hover:scale-105 ${
              hasCheered
                ? "border-amber-400/60 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                : "border-sky-500/30 hover:border-sky-400/80 text-sky-300"
            }`}
            title="Give Cheers to this project"
          >
            {/* Left Splice Segment */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 transition-colors">
              <span className="text-sm">🥂</span>
              <span>{hasCheered ? "Cheered!" : "Cheers"}</span>
            </div>

            {/* Spliced Diagonal Seam */}
            <div className="w-[1.5px] -skew-x-12 mx-0.5 bg-sky-500/40 group-hover/cheers:bg-amber-400/60 transition-colors shadow-[0_0_6px_rgba(56,189,248,0.5)]" />

            {/* Right Splice Segment */}
            <div className="px-2.5 py-1.5 bg-sky-500/10 group-hover/cheers:bg-amber-500/20 text-sky-400 group-hover/cheers:text-amber-300 transition-colors flex items-center justify-center">
              <HiOutlineSparkles className="text-xs group-hover/cheers:rotate-12 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </Card3DTilt>
  );
};

export default ProjectCard;