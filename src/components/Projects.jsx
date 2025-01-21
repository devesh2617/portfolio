import React from "react";
import ProjectCard from "./ProjectCard";
import saraca from "../assets/saraca.png";
import FastRams from "../assets/FastRAMS.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import portfolio from "../assets/portfolio.png"
gsap.registerPlugin(ScrollTrigger)
const projectsData = [
  {
    name: "Portfolio Website",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "GSAP"],
    highlights: [
      "Created a portfolio website using React, Tailwind CSS, and GSAP to showcase my personal details, work experiences, projects, and technical expertise.",
    ],
    img: portfolio, // Placeholder for an image URL if needed
  },
  {
    name: "SARACA Solutions Corporate Website",
    tech: ["React.js", "Prisma", "Express.js", "Tailwind CSS"],
    highlights: [
      "Developed the corporate website for SARACA Solutions using React, Tailwind CSS, Express, and Prisma, aiming to enhance the company's online presence and facilitate user engagement.",
      "Built a dynamic career portal, allowing potential candidates to explore job opportunities and apply directly, making recruitment processes more streamlined and efficient.",
      "Integrated dynamic content features, including blogs, webinars, and case studies, allowing the marketing and content teams to easily manage and update the website without additional development work.",
      "Developed an admin dashboard for the Talent Acquisition (TA) and Marketing teams, enabling them to track leads, manage content, and generate insights to drive business growth.",
      "Focused on creating a cutting-edge UI with a responsive design to ensure an intuitive and seamless user experience across all devices, improving engagement and retention.",
    ],
    img: saraca, // Placeholder for an image URL if needed
  },
  {
    name: "Quick Talent Search Tool",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Daisy UI"],
    highlights: [
      "The QTST (Quality Talent Sourcing Tool) frontend was developed using React to streamline and enhance the recruitment process for the Talent Acquisition department.",
      "Key features include seamless profile sharing between recruiters and account managers, real-time tracking of hiring progress, and a dynamic dashboard for the IOG Head to monitor team performance and generate insights.",
      "BU Heads can track recruitment progress within their respective business units.",
      "The platform was designed with a responsive, user-friendly interface to improve collaboration and data access, ultimately improving the efficiency of the hiring process.",
    ],
    img: FastRams, // Placeholder for an image URL if needed
  },
];

const Projects = () => {
    useGSAP(() => {
        gsap.from(".project-img", {
          scrollTrigger: {
            trigger: "#projects",
            start: "top bottom", // Animation starts when #summary reaches 80% of the viewport height
            end: "bottom bottom", // Animation ends when #summary reaches 20% of the viewport height
            scrub: 2, // Syncs the animation with the scrollbar
            toggleActions: "play reverse play reverse", // Reverses animation on scrolling up
          },
          scale:0,
          translateX: "-50%",
          stagger: 0.2,
        });
        gsap.from(".project-content", {
            scrollTrigger: {
              trigger: "#projects",
              start: "top bottom", // Animation starts when #summary reaches 80% of the viewport height
              end: "bottom bottom", // Animation ends when #summary reaches 20% of the viewport height
              scrub: 2, // Syncs the animation with the scrollbar
              toggleActions: "play reverse play reverse", // Reverses animation on scrolling up
            },
            scale:0,
            translateX: "50%",
            stagger: 0.2,
          });
      }, []);
  return (
    <section id="projects" className="section-class pt-16">
      <article className="container mx-auto">
        <div>
          <h2 className="text-sky-300 font-bold text-3xl">Projects</h2>
          <div className="w-full flex flex-col gap-16 mt-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
