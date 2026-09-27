import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ThreeBackground from "./components/ThreeBackground";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Summary from "./components/Summary";
import Expertise from "./components/Expertise";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Links from "./components/Links";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#060911] text-slate-100 selection:bg-sky-500 selection:text-white overflow-x-hidden">
      {/* 3D Interactive Particle Universe Background */}
      <ThreeBackground />

      {/* Custom Luminous Trailing Cursor */}
      <CustomCursor />

      {/* Reading Progress Indicator & Quick Section Dock */}
      <ScrollProgress />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Introduction />
        <Summary />
        <Expertise />
        <WorkExperience />
        <Projects />
        <Links />
      </div>
    </main>
  );
}

export default App;
