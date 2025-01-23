import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const linkData = [
    {
    name:"Github",
    link: <a href="https://github.com/devesh2617" target='_blank'>Visit my GitHub Profile</a>
    },
    {
    name:"LinkedIn",
    link: <a href="https://www.linkedin.com/in/devesh-sharma-ds0717/" target='_blank'>Visit my LinkedIn Profile</a>
    },
    {
    name: "Resume",
    link: <a href="https://drive.google.com/file/d/1WPzoJ-b_VWj1Go3s9Y-V63xHAnbW-62i/view?usp=sharing" target='_blank'>Download my Resume</a>
    },
    {
    name:"Email",
    link: <a href="mailto:sdevesh069@gmail.com">Write Email to sdevesh069@gmail.com</a>
    },
    {
    name:"Mobile",
    link:<a href="tel:+919910590776">Call +91 9910590776</a>
    }
]

const Card = ({link}) => {
 return (<div className='bg-black text-white p-4 rounded-xl w-full links'>
        {link}
    </div>)
}

const Links = () => {
    useGSAP(() => {
        gsap.from(".links", {
          scrollTrigger: {
            trigger: "#links",
            start: "top bottom", // Animation starts when #summary reaches 80% of the viewport height
            end: "bottom bottom", // Animation ends when #summary reaches 20% of the viewport height
            scrub: 2, // Syncs the animation with the scrollbar
            toggleActions: "play reverse play reverse", // Reverses animation on scrolling up
          },      
          scale: 0,
          opacity: 0,
          y:"100%",
          stagger:0.2
        });
      }, []);
  return (
    <section id="links" className="section-class">
      <article className="container mx-auto">
        <div className="flex flex-col gap-4 items-stretch">
          {linkData.map(link=><Card key={link.name} {...link}/>)}
        </div>
      </article>
    </section>
  )
}

export default Links