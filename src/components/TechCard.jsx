const TechCard = ({img,technology}) => {
  return (
    <div className="w-full flex flex-col gap-2 bg-black/20 backdrop-blur-md p-4 rounded-xl tech-card">
     <img src={img} alt="" className="w-full aspect-square object-contain tech-logo"/> 
      <p className="text-center text-2xl font-semibold tech-name">
        {technology}
      </p>
    </div>
  )
}

export default TechCard