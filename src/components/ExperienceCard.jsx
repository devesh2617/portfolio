import Card3DTilt from "./Card3DTilt";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi2";
import { playHoverSound } from "../utils/audio";

const ExperienceCard = ({
  organisation,
  logo,
  from,
  to,
  designation,
  job_description,
  isCurrent,
  skills = [],
}) => {
  return (
    <Card3DTilt
      maxTilt={7}
      scale={1.02}
      onMouseEnter={playHoverSound}
      className={`experience-card p-6 sm:p-8 rounded-2xl bg-slate-900/60 border backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${
        isCurrent
          ? "border-sky-500/50 shadow-neon-cyan hover:border-sky-400"
          : "border-slate-800/80 hover:border-slate-700 hover:shadow-glass"
      }`}
    >
      <div>
        {/* Top: Organisation logo / name + Timeline */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center p-2 overflow-hidden shadow-inner">
              {logo ? (
                <img
                  src={logo}
                  alt={organisation}
                  className="max-h-full max-w-full object-contain filter brightness-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <HiOutlineBriefcase className="text-xl text-sky-400" />
              )}
            </div>
            <div>
              <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                {organisation}
              </h4>
              <span className="text-xs text-slate-400">Software Engineering</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isCurrent && (
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            )}
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                isCurrent
                  ? "text-emerald-400 bg-emerald-950/70 border-emerald-800/80"
                  : "text-sky-300 bg-sky-950/60 border-sky-800/60"
              }`}
            >
              <HiOutlineCalendar className="text-xs" />
              <span>
                {from} &ndash; {to}
              </span>
            </span>
          </div>
        </div>

        {/* Role */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {designation}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
          {job_description}
        </p>
      </div>

      {/* Tech Chips */}
      {skills.length > 0 && (
        <div className="mt-6 pt-5 border-t border-slate-800/70 flex flex-wrap gap-1.5">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </Card3DTilt>
  );
};

export default ExperienceCard;