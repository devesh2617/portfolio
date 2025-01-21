import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ExperienceCard from "./ExperienceCard";
gsap.registerPlugin(ScrollTrigger);
const expCardsData = [
  {
    organisation: "SARACA Solutions Pvt. Ltd.",
    from: "June 2023",
    to: "Present",
    logo: "https://www.saracasolutions.com/api/saraca-logo.svg",
    designation: "Software Engineer",
    job_description:
      "Developed and optimized web platforms using React, Express.js, Tailwind CSS, and Prisma, including a corporate website that increased traffic by 50%. Redesigned the QTST tool for seamless hiring management and reporting. Maintained the internal FASTRAMS project for PMCF survey tracking and reporting. Currently leading the development of FastRAMS, a failure management tool for UPMRC, featuring dynamic graphs and daily data updates using Node.js, React, and Recharts.",
  },
  {
    organisation: "Ebo Now",
    from: "Febuary 2023",
    to: "March 2023",
    logo: "https://i.ibb.co/FJrwLsM/Ebo.png",
    designation: "Web Developer",
    job_description:
      "Worked on a decoration website aimed at taking an offline business online, utilizing React and Express. Focused on developing the admin dashboard and addons sections in the web application. This project laid the foundation of my web development skills, and the product has since been successfully launched in Mumbai, generating significant profits",
  },
  {
    organisation: "Earthetic Inc.",
    from: "March 2023",
    to: "April 2023",
    logo: "https://i.ibb.co/yg5rK5j/Earthetic.png",
    designation: "Web Developer",
    job_description:
      "Worked on the frontend of a website named Kandufaori, a fishing competition in the Maldives, built to organize the competition and manage participants' data using Next.js",
  },
];

const Expertise = () => {
  useGSAP(() => {
    gsap.from(".experience-card", {
      scrollTrigger: {
        trigger: "#experience",
        start: "top bottom", // Animation starts when #summary reaches 80% of the viewport height
        end: "bottom bottom", // Animation ends when #summary reaches 20% of the viewport height
        scrub: 2, // Syncs the animation with the scrollbar
        toggleActions: "play reverse play reverse", // Reverses animation on scrolling up
      },
      translateX: "-100%",
      stagger: 0.2,
    });
  }, []);
  return (
    <section id="experience" className="section-class pt-16">
      <article className="container mx-auto">
        <div>
          <h2 className="text-sky-300 font-bold text-3xl">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {expCardsData.map((card) => (
              <ExperienceCard key={card.organisation} {...card} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Expertise;
