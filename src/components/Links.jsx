import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import confetti from "canvas-confetti";
import Card3DTilt from "./Card3DTilt";
import { SiGithub, SiLinkedin } from "react-icons/si";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineDocumentText,
  HiOutlineArrowUpRight,
  HiOutlineArrowUp,
  HiOutlineClipboardDocumentCheck,
  HiOutlinePaperAirplane,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { playClickSound, playHoverSound, playSuccessSound } from "../utils/audio";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    name: "GitHub",
    label: "github.com/devesh2617",
    href: "https://github.com/devesh2617",
    copyValue: "https://github.com/devesh2617",
    icon: <SiGithub className="text-2xl text-white" />,
    color: "#ffffff",
    glow: "hover:border-slate-400/50 hover:shadow-glass",
  },
  {
    name: "LinkedIn",
    label: "in/devesh-sharma-ds0717",
    href: "https://www.linkedin.com/in/devesh-sharma-ds0717/",
    copyValue: "https://www.linkedin.com/in/devesh-sharma-ds0717/",
    icon: <SiLinkedin className="text-2xl text-[#0A66C2]" />,
    color: "#0A66C2",
    glow: "hover:border-blue-500/50 hover:shadow-neon-cyan",
  },
  {
    name: "Email",
    label: "sdevesh069@gmail.com",
    href: "mailto:sdevesh069@gmail.com",
    copyValue: "sdevesh069@gmail.com",
    icon: <HiOutlineEnvelope className="text-2xl text-sky-400" />,
    color: "#38bdf8",
    glow: "hover:border-sky-400/50 hover:shadow-neon-cyan",
  },
  {
    name: "Phone",
    label: "+91 9910590776",
    href: "tel:+919910590776",
    copyValue: "+919910590776",
    icon: <HiOutlinePhone className="text-2xl text-emerald-400" />,
    color: "#34d399",
    glow: "hover:border-emerald-400/50 hover:shadow-neon-emerald",
  },
  {
    name: "Resume (PDF)",
    label: "View / Download Resume",
    href: "https://drive.google.com/file/d/1bIaK4stSbrRcYxUexALxTvCJZzwjDJB9/view?usp=drive_link",
    copyValue: "https://drive.google.com/file/d/1bIaK4stSbrRcYxUexALxTvCJZzwjDJB9/view?usp=drive_link",
    icon: <HiOutlineDocumentText className="text-2xl text-purple-400" />,
    color: "#c084fc",
    glow: "hover:border-purple-400/50 hover:shadow-neon-purple",
  },
];

const Links = () => {
  const [copiedText, setCopiedText] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useGSAP(() => {
    gsap.from(".links-header", {
      scrollTrigger: {
        trigger: "#links",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });

    gsap.from(".contact-card", {
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 25,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
    });
  });

  const handleCopy = (e, text, label) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedText(`${label} copied!`);
    playSuccessSound();

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#34d399", "#c084fc"],
    });

    setTimeout(() => {
      setCopiedText("");
    }, 2800);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    playSuccessSound();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Devesh,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.open(`mailto:sdevesh069@gmail.com?subject=${subject}&body=${body}`, "_blank");

    setFormSent(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#38bdf8", "#818cf8", "#34d399", "#ffffff"],
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="links" className="section-class flex flex-col justify-between pt-24 pb-10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-sky-400 text-white shadow-neon-cyan text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-200">
          <HiOutlineClipboardDocumentCheck className="text-base text-emerald-400" />
          <span>{copiedText}</span>
        </div>
      )}

      <article className="container mx-auto">
        <div className="w-full">
          {/* Header */}
          <div className="links-header mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Connect &amp; <span className="gradient-text-cyan">Collaborate</span>
            </h2>
          </div>

          {/* Grid Layout: Contact Cards & Quick Note Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left: Contact Hub Cards (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact Channels</h3>
              <div className="contact-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactLinks.map((item) => (
                  <Card3DTilt
                    key={item.name}
                    maxTilt={8}
                    scale={1.02}
                    onMouseEnter={playHoverSound}
                    className={`contact-card group p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md flex items-center justify-between gap-3 transition-all duration-300 shadow-glass overflow-hidden ${item.glow}`}
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono mt-0.5 truncate">
                          {item.label}
                        </p>
                      </div>
                    </a>

                    <div className="spliced-btn group/dock flex-shrink-0 bg-slate-800/80 hover:bg-slate-800 border border-white/10 hover:border-sky-400/50 transition-all">
                      <button
                        onClick={(e) => handleCopy(e, item.copyValue, item.name)}
                        title={`Copy ${item.name}`}
                        className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center justify-center"
                      >
                        <HiOutlineClipboardDocumentCheck className="text-base" />
                      </button>
                      <div className="w-[1px] -skew-x-12 mx-0.5 bg-slate-700 group-hover/dock:bg-sky-400/50" />
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="p-2 text-slate-400 hover:text-sky-300 transition-colors flex items-center justify-center"
                        title={`Open ${item.name}`}
                      >
                        <HiOutlineArrowUpRight className="text-base" />
                      </a>
                    </div>
                  </Card3DTilt>
                ))}
              </div>
            </div>

            {/* Right: Quick Direct Note / Message Form (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">Send a Quick Message</h3>
              <form
                onSubmit={handleFormSubmit}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col gap-4 shadow-glass h-full justify-between"
              >
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Hi Devesh, I'd like to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  onMouseEnter={playHoverSound}
                  className="spliced-btn group w-full bg-slate-900/80 hover:bg-slate-800/80 border border-sky-500/40 hover:border-sky-400/80 backdrop-blur-xl shadow-glass hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:scale-[1.01] transition-all cursor-pointer"
                >
                  {/* Left Splice Segment */}
                  <div className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-white font-semibold text-sm transition-colors">
                    <span>{formSent ? "Opening Email Client..." : "Send Message"}</span>
                  </div>

                  {/* Spliced Diagonal Seam */}
                  <div className="w-[1.5px] -skew-x-12 mx-0.5 bg-sky-500/40 group-hover:bg-sky-400 transition-colors shadow-[0_0_6px_rgba(56,189,248,0.5)]" />

                  {/* Right Splice Segment */}
                  <div className="flex items-center justify-center px-4 py-3 bg-sky-500/10 group-hover:bg-sky-500/25 text-sky-400 group-hover:text-white transition-all">
                    <HiOutlinePaperAirplane className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800/80 pt-8 mt-12">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-slate-200 font-bold">Devesh Sharma</span>
            <span>• Full Stack Developer</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-[11px] hidden sm:inline">
              Built with React, Three.js, GSAP &amp; Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              onMouseEnter={playHoverSound}
              className="spliced-btn group bg-slate-900 border border-slate-800 hover:border-sky-400/50 text-xs transition-all cursor-pointer"
            >
              <span className="px-3 py-1.5 text-slate-400 group-hover:text-white transition-colors">Back to top</span>
              <div className="w-[1px] -skew-x-12 mx-0.5 bg-slate-800 group-hover:bg-sky-400/50" />
              <span className="px-2 py-1.5 text-slate-400 group-hover:text-sky-300 transition-colors flex items-center justify-center">
                <HiOutlineArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Links;