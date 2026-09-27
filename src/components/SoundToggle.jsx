import { useState, useEffect } from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { getSoundEnabled, setSoundEnabled, playClickSound, playHoverSound } from "../utils/audio";

const SoundToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(getSoundEnabled());
  }, []);

  const toggleSound = () => {
    const nextState = !enabled;
    setEnabled(nextState);
    setSoundEnabled(nextState);
    if (nextState) {
      playClickSound();
    }
  };

  return (
    <button
      onClick={toggleSound}
      onMouseEnter={playHoverSound}
      aria-label={enabled ? "Mute audio" : "Enable audio"}
      title={enabled ? "Audio: ON (Click to mute)" : "Audio: OFF (Click to unmute)"}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
        enabled
          ? "bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-[0_0_10px_rgba(56,189,248,0.3)]"
          : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
      }`}
    >
      {enabled ? (
        <>
          <HiOutlineSpeakerWave className="text-sm text-sky-400 animate-pulse" />
          <span className="hidden sm:inline">Audio ON</span>
        </>
      ) : (
        <>
          <HiOutlineSpeakerXMark className="text-sm" />
          <span className="hidden sm:inline">Audio OFF</span>
        </>
      )}
    </button>
  );
};

export default SoundToggle;
