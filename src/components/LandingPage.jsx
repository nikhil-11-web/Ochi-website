import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-32 md:mt-40 px-5 md:px-20'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className='masker'>
              <div className='w-fit flex items-center overflow-hidden'>
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] md:h-[5vw] relative -top-[0.2vw] bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'
                  ></motion.div>
                )}
                <h1 className='uppercase text-[12vw] md:text-[7.5vw] leading-[.85] tracking-tighter font-["Founders_Grotesk"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className='border-t-[1px] border-zinc-700 mt-20 md:mt-32 flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-5 md:px-20 gap-5'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className='text-md font-light tracking-tight leading-none'>
            {item}
          </p>
        ))}
        <div className='start flex items-center gap-3 group cursor-pointer'>
          <div className='uppercase px-5 py-2 border-[1px] border-zinc-400 font-light text-sm rounded-full group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-colors duration-300'>
            Start the project
          </div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-colors duration-300'>
            <span className='rotate-[45deg]'>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;