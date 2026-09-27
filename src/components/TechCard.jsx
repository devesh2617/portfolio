import Card3DTilt from "./Card3DTilt";
import { playHoverSound, playClickSound } from "../utils/audio";

const TechCard = ({ icon, technology, color, category, level = "Production" }) => {
  return (
    <Card3DTilt
      maxTilt={14}
      scale={1.05}
      onMouseEnter={playHoverSound}
      onClick={playClickSound}
      className="tech-card group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-400/60 flex flex-col items-center justify-center gap-3 backdrop-blur-md cursor-pointer transition-all duration-300"
    >
      {/* Icon with glowing aura */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          style={{ backgroundColor: color || "#38bdf8" }}
        />
        <div
          className="relative w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 shadow-glass"
          style={{ color: color || "#38bdf8" }}
        >
          {icon}
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-white transition-colors">
          {technology}
        </h4>
        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 group-hover:text-sky-300 transition-colors">
          {level}
        </span>
      </div>
    </Card3DTilt>
  );
};

export default TechCard;