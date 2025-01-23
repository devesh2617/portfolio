import { useGSAP } from "@gsap/react";
import TechCard from "./TechCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const techCardsData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    name: "React",
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-256/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284965.png?f=webp&w=256",
    name: "Javascript",
  },
  {
    img: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
    name: "Express",
  },
  {
    img: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/prisma.png",
    name: "Prisma",
  },
];

const Expertise = () => {
  useGSAP(() => {
    gsap.from(".tech-card", {
      scrollTrigger: {
        trigger: "#expertise",
        start: "top bottom", // Animation starts when #summary reaches 80% of the viewport height
        end: "bottom bottom", // Animation ends when #summary reaches 20% of the viewport height
        scrub: 2, // Syncs the animation with the scrollbar
        toggleActions: "play reverse play reverse", // Reverses animation on scrolling up
      },
      translateX: "-100%",
      rotate: 360,
      stagger: 0.2,
    });
  }, []);
  return (
    <section id="expertise" className="section-class">
      <article className="container mx-auto">
        <div>
          <h2 className="text-sky-300 font-bold text-3xl">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {techCardsData.map((data) => (
              <TechCard key={data.name} img={data.img} technology={data.name} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Expertise;
