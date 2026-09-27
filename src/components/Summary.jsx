import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Card3DTilt from "./Card3DTilt";
import {
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
  HiOutlineShoppingBag,
  HiOutlineDevicePhoneMobile,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { playHoverSound } from "../utils/audio";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    id: "saraca",
    title: "Corporate Web Growth",
    badge: "+50% Traffic",
    badgeColor: "text-sky-400 bg-sky-950/80 border-sky-800/80",
    icon: <HiOutlineArrowTrendingUp className="text-2xl text-sky-400" />,
    description:
      "Engineered ground-up redesign of SARACA corporate website, integrating dynamic content workflows, career portal, and optimized SEO to boost visitor traffic by 50%.",
    metric: "50% Growth",
    glow: "hover:border-sky-400/60 hover:shadow-neon-cyan",
  },
  {
    id: "qtst",
    title: "Recruitment Automation (QTST)",
    badge: "15,000+ Resumes",
    badgeColor: "text-emerald-400 bg-emerald-950/80 border-emerald-800/80",
    icon: <HiOutlineUserGroup className="text-2xl text-emerald-400" />,
    description:
      "Automated recruitment and talent acquisition pipelines by replacing manual spreadsheets with a high-throughput React/Node system searching 15K+ candidate resumes.",
    metric: "15K+ Records",
    glow: "hover:border-emerald-400/60 hover:shadow-neon-emerald",
  },
  {
    id: "nasmok",
    title: "Nasmok E-Commerce & Microservices",
    badge: "Decoupled Architecture",
    badgeColor: "text-purple-400 bg-purple-950/80 border-purple-800/80",
    icon: <HiOutlineShoppingBag className="text-2xl text-purple-400" />,
    description:
      "Architected customer storefront in Next.js 16 + React 19, admin operations portal, and containerized Docker/Prisma/PostgreSQL backend services with JWT authentication.",
    metric: "Docker & Next.js",
    glow: "hover:border-purple-400/60 hover:shadow-neon-purple",
  },
  {
    id: "mobylx",
    title: "Mobylx B2B Marketplace",
    badge: "Real-Time Bidding",
    badgeColor: "text-indigo-400 bg-indigo-950/80 border-indigo-800/80",
    icon: <HiOutlineDevicePhoneMobile className="text-2xl text-indigo-400" />,
    description:
      "Engineered live trading workflows for high-volume smartphone auctions, instant buyer/seller bidding, bid fulfillment, and multi-currency digital wallet balance management.",
    metric: "WebSockets & S3",
    glow: "hover:border-indigo-400/60 hover:shadow-cyber-glow",
  },
  {
    id: "dashboards",
    title: "Enterprise Dashboards & UPMRC",
    badge: "Mission Critical",
    badgeColor: "text-teal-400 bg-teal-950/80 border-teal-800/80",
    icon: <HiOutlineChartBar className="text-2xl text-teal-400" />,
    description:
      "Engineered failure analytics and telemetry dashboards for UPMRC and internal PMCF survey tools (FastRAMS) with interactive data visualization using Recharts and Node.js.",
    metric: "Telemetry Analytics",
    glow: "hover:border-teal-400/60 hover:shadow-neon-cyan",
  },
];

const Summary = () => {
  useGSAP(() => {
    gsap.from(".summary-header", {
      scrollTrigger: {
        trigger: "#summary",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });

    gsap.from(".achievement-card", {
      scrollTrigger: {
        trigger: "#summary-grid",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 35,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
    });
  });

  return (
    <section id="summary" className="section-class py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <article className="container mx-auto">
        {/* Section Header */}
        <div className="summary-header flex flex-col gap-4 max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Profile <span className="gradient-text-cyan">Summary</span>
          </h2>
        </div>

        {/* Interactive Bento Grid of Achievements */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <span>Key Achievements &amp; Impact</span>
          </h3>
        </div>

        <div id="summary-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <Card3DTilt
              key={item.id}
              maxTilt={9}
              scale={1.02}
              onMouseEnter={playHoverSound}
              className={`achievement-card p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${item.glow} ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Key Metric</span>
                <span className="font-semibold text-slate-200">{item.metric}</span>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Summary;
