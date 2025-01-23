const ProjectCard = ({
    name,
    tech,
    highlights,
    img
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-start backdrop-blur-lg project-card">
      <img src={img} alt="" className="w-full lg:w-96 aspect-video project-img rounded-xl"/>
      <div className="flex flex-col gap-4 bg-gradient-to-l from-white/10 to-white/20 p-4 rounded-xl project-content">
       <h2 className="text-2xl font-semibold">{name}</h2>
       <span className="flex gap-2 self-end">
        {tech.map((tech,index)=><button key={`tech ${name} ${index}`} className="bg-white text-black py-1 px-2 rounded-full pointer-events-none font-semibold text-sm">{tech}</button>)}
       </span>
       <ul className="list-disc flex flex-col gap-1 pl-8 text-gray-300">
        {highlights.map((highlight,index)=><li key={highlight} className="">{highlight}</li>)}
       </ul>
      </div>
    </div>
  )
}

export default ProjectCard