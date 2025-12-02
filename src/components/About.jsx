import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full p-5 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[3.5rem] md:text-[4vw] leading-[3.5rem] md:leading-[4.5vw] tracking-tight mb-10 md:mb-20 md:w-[90%]'>
        We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership
      </h1>

      <div className='w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-10 border-[#a1b562]'>
        <div className='w-full md:w-1/2'>
          <h1 className='text-4xl md:text-6xl'>How we can help:</h1>
          
          <button className='group flex uppercase gap-6 items-center px-8 py-5 bg-zinc-900 mt-6 rounded-full text-white hover:bg-zinc-800 transition-all duration-300'>
            Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full group-hover:scale-[3] transition-transform duration-300'></div>
          </button>
        </div>

        <div className='w-full md:w-1/2 h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden bg-[#b0c859]'>
          <img 
            className='w-full h-full object-cover' 
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" 
            alt="Creative Process" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;