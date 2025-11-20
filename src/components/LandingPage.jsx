import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import {motion} from 'framer-motion'

const LandingPage = () => {
  return (
    <div  className='h-screen w-full bg-zinc-900 pt-1'> 
        <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
                return(
                    <div key={index} className='masker '> {/* Added key={index} */}
                         <div className='w-fit flex items-end-overflow-hidden '>
                                {index === 1 && (
                                  <motion.div 
                                  initial={{width: 0}} 
                                  animate={{width: "7vw"}}
                                 transition={{ease:[0.76, 0, 0.24, 1], duration: 1}}className='w-[7vw] h-[8vw]relative -top-[1vw] '>
                                  <img className='h-[6vw] w-[10vw] rounded-xl' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                 </motion.div>
                                  )} 
               <h1 className='uppercase leading-[5.5vw] tracking-tighter  text-7xl font-["Founders_Grotes"] font-regular'>{item}
               {/* Removed extra empty line inside h1, not an error but cleaner */}
               </h1>
               </div>
            </div>
            );
            })}
            
            
            </div>
        
        <div className='border-t-[1px] border-zinc-600 mt-32 flex justify-between items-center py-5 px-20'>
            {["Presentation and storytelling agency", 
              "For innovation teams and global brands","" ].map((item, index)=><p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
             )} {/* Added key={index} */}
              <div className='start flex items-center gap-3'>
               <div className='uppercase px-4 py-2 border-[2px] border-zinc-700 font-lighter text-md rounded-full'>Start the project</div>
               <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-700 font-lighter text-md'>
                 <span className='rotate-[45deg]'>
                 <FaArrowUp/>
                 </span>
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage