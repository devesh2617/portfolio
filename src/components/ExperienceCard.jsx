const ExperienceCard = ({organisation,logo,from,to,designation,job_description}) => {
  return (
    <div className="experience-card flex flex-col gap-4 bg-black/20 rounded-xl px-8 py-4 backdrop-blur-lg">
    <img src={logo} alt="" className="w-full aspect-video"/>
    <div className=" self-end">
       {from} - {to} 
    </div>
    <div>
    <h2 className="text-2xl">{designation} |</h2>
    <p>{organisation}</p>
    <p className="mt-4 text-gray-300">{job_description}</p>
    </div>
    </div>
  )
}

export default ExperienceCard