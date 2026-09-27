import { useState, useEffect, useRef } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import SoundToggle from "./SoundToggle";
import { playClickSound, playHoverSound } from "../utils/audio";

const navLinks = [
  { item: "Introduction", link: "introduction" },
  { item: "Summary", link: "summary" },
  { item: "Expertise", link: "expertise" },
  { item: "Experience", link: "experience" },
  { item: "Projects", link: "projects" },
  { item: "Contact", link: "links" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isManualScrollRef.current) return;

      // Section tracking
      const sections = navLinks.map((n) => document.getElementById(n.link));
      const pos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= pos) {
          setActiveSection(navLinks[i].link);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleClick = (sectionId) => {
    playClickSound();
    setActiveSection(sectionId);
    isManualScrollRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 800);

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navHeight);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060911]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-screen-xl w-full flex justify-between items-center mx-auto px-6">
        {/* Brand */}
        <div
          onClick={() => handleClick("introduction")}
          onMouseEnter={playHoverSound}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-neon-cyan group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="font-bold text-lg sm:text-xl tracking-wider uppercase text-white group-hover:text-sky-300 transition-colors">
            DEVESH <span className="text-sky-400">SHARMA</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="flex items-center gap-1 max-lg:hidden p-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800/80 text-sm font-medium text-slate-300">
          {navLinks.map((item) => {
            const isActive = activeSection === item.link;
            return (
              <li
                key={item.link}
                onClick={() => handleClick(item.link)}
                onMouseEnter={playHoverSound}
                className={`relative px-4 py-1.5 rounded-full cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? "text-white font-semibold bg-slate-800 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {item.item}
              </li>
            );
          })}
        </ul>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <SoundToggle />

          <a
            href="https://drive.google.com/file/d/1bIaK4stSbrRcYxUexALxTvCJZzwjDJB9/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="spliced-btn group hidden sm:inline-flex bg-slate-900/80 hover:bg-slate-800/80 border border-sky-500/40 hover:border-sky-400/80 text-xs shadow-glass hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all hover:scale-105"
          >
            <span className="px-3 py-1.5 text-slate-200 group-hover:text-white font-semibold">Resume</span>
            <div className="w-[1.5px] -skew-x-12 mx-0.5 bg-sky-500/40 group-hover:bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
            <span className="px-2 py-1.5 bg-sky-500/10 group-hover:bg-sky-500/25 text-sky-400 group-hover:text-white flex items-center justify-center">
              <FiDownload className="text-xs" />
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              playClickSound();
              setDropdownOpen((prev) => !prev);
            }}
            aria-label="Toggle navigation menu"
            className="lg:hidden text-2xl text-slate-300 hover:text-white p-2 rounded-lg bg-slate-900/60 border border-slate-800"
          >
            {dropdownOpen ? <MdClose /> : <MdOutlineMenu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {dropdownOpen && (
          <div className="lg:hidden fixed top-20 left-4 right-4 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl p-5 flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((item) => (
              <div
                key={item.link}
                className={`cursor-pointer py-2.5 px-3 rounded-xl transition-colors text-sm font-medium ${
                  activeSection === item.link
                    ? "bg-slate-800 text-white font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
                onClick={() => handleClick(item.link)}
              >
                {item.item}
              </div>
            ))}

            <div className="pt-2 border-t border-slate-800 flex justify-center">
              <a
                href="https://drive.google.com/file/d/1bIaK4stSbrRcYxUexALxTvCJZzwjDJB9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl font-semibold text-xs bg-sky-500 text-white shadow-neon-cyan flex items-center justify-center gap-2"
              >
                <FiDownload className="text-sm" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
