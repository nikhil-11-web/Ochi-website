import React from "react";

import { ArrowUpRight } from 'lucide-react' // Assuming you might want an icon, if not, I kept your dot logic

const About = () => {
  return (
    <div className='w-full p-6 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      
      {/* Main Heading Section */}
      <h1 className='font-["Neue_Montreal"] text-[3.5rem] md:text-[4vw] leading-none tracking-tight mb-10 md:mb-20 md:w-[90%]'>
        We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership
      </h1>

      {/* Split Section */}
      <div className='w-full flex flex-col md:flex-row gap-10 md:gap-5 border-t-[1px] pt-10 md:pt-5 border-[#99AD53]'>
        
        {/* Left Column (Text + Button) */}
        <div className='w-full md:w-1/2'>
          <h1 className='text-4xl md:text-6xl mb-6'>How we can help:</h1>
          
          {/* Premium Button with Hover Animation */}
          <button className='group flex uppercase gap-6 items-center px-8 py-5 bg-zinc-900 mt-4 md:mt-6 rounded-full text-white hover:bg-zinc-800 transition-all duration-300'>
            Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full group-hover:scale-[3] transition-transform duration-300'></div>
          </button>
        </div>

        {/* Right Column (Image) */}
        <div className='w-full md:w-1/2 h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden bg-[#b0c859]'>
          <img 
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out' 
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" 
            alt="Creative Process" 
          />
        </div>
      
      </div>
    </div>
  )
}

export default About