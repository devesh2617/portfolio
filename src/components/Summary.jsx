import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
const Summary = () => {
  useGSAP(() => {
    gsap.from(".list-item", {
      scrollTrigger: {
        trigger: "#summary",
        start: "top bottom", // Animation starts when #summary reaches 80% of the viewport height
        end: "bottom bottom", // Animation ends when #summary reaches 20% of the viewport height
        scrub: 2, // Syncs the animation with the scrollbar
        toggleActions: "play reverse play reverse", // Reverses animation on scrolling up
      },      
      scale: 0,
      opacity: 0,
      translateX:"-100%",
      stagger:0.2
    });
  }, []);
  
  return (
    <section id="summary" className="section-class">
      <article className="container mx-auto">
        <div id="summary-headline" className="flex flex-col gap-4">
          <p className="text-2xl md:text-3xl list-item">
            As a Software Engineer with a proven track record in designing and
            deploying scalable, user-centric applications, I specialize in
            React.js, Node.js, Tailwind CSS and Javascript. My dedication to crafting
            responsive and efficient digital experiences has consistently driven
            business success and enhanced user engagement.
          </p>
          <h2 className="text-sky-300 font-bold text-3xl mt-8">Achievements</h2>
          <ul className="text-xl list-disc flex flex-col gap-4">
            <li className="list-item">
              Boosted visitor traffic by 50% through a complete redesign of
              corporate website.
            </li>
            <li className="list-item">
              Revolutionized talent acquisition workflows with the Quick Talent
              Search Tool (QTST), replacing manual processes and managing a
              database of over 15,000 resumes
            </li>
            <li className="list-item">
              Engineered high-impact solutions like dynamic user dashboards.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Summary;
