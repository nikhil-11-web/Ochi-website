import React, { useState } from 'react';
import { motion } from "framer-motion";

const Featured = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    { title: "Salience Labs", imgUrl: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" },
    { title: "Medallia", imgUrl: "https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" },
    { title: "Vise", imgUrl: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" },
    { title: "Fyde", imgUrl: "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" },
  ];

  return (
    <div className='w-full py-20 bg-zinc-900'>
      <div className='w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-10'>
        <h1 className='text-4xl md:text-6xl text-white font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
      </div>

      <div className='px-5 md:px-20'>
        <div className="cards w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-20">
          
          {projects.map((project, index) => (
            <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)} 
                onMouseLeave={() => setHoveredIndex(null)}
                className="cardcontainer relative w-full h-[50vh] md:h-[75vh]"
            >
              {/* Animated Text Title */}
              <div className={`absolute flex overflow-hidden z-[9] text-[#CDEA68] font-bold font-["Founders_Grotesk"] leading-none tracking-tighter text-6xl md:text-8xl top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'}`}>
                {project.title.split('').map((item, i) => (
                  <motion.span 
                    key={i} 
                    initial={{y: "100%"}} 
                    animate={hoveredIndex === index ? {y: "0"} : {y: "100%"}}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: i*.05}}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Card Image */}
              <div className="card w-full h-full rounded-xl overflow-hidden bg-zinc-800">
                <img className='w-full h-full bg-cover object-cover hover:scale-110 transition-transform duration-500' src={project.imgUrl} alt={project.title} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Featured;