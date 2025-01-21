import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import img from "../assets/intro-img.svg"

const Introduction = () => {
  useGSAP(()=>{
    gsap.from("#intro-div",{
      scale:0.5,
      opacity:0,
      duration:1
    })
    gsap.from("#intro-img",{
      scale: 0.5,
      opacity:0,
      duration:1
    })
  }, [])
  return (
    <section id="introduction" className="section-class">
      <article className="container mx-auto h-screen">
        <div id="intro-div" className="flex-1 flex flex-col max-md:h-full relative z-1 max-md:justify-end p-4 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold flex gap-4 max-md:justify-center">
            DEVESH <span className="text-sky-300">SHARMA</span>
          </h1>
          <h2 className="mt-8 md:text-2xl font-semibold max-md:text-center">
            Software Developer <br /> SARACA Solutions Pvt. Ltd.
          </h2>
        </div>
        <div id="intro-img" className="h-full w-full items-start max-md:absolute">
          <img src={img} className="h-full w-full object-contain" />
        </div>
      </article>
    </section>
  );
};

export default Introduction;
