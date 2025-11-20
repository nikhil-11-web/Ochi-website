import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className='text flex border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap'>
        
        {/*
          1. Element 1: Starts at its natural position (0) and moves left.
          2. The 'pr-20' provides necessary spacing between the instances.
        */}
        <motion.h1 
          initial= {{x: "0%"}} 
          animate= {{x: "-100%"}} 
          transition={{repeat: Infinity, ease:"linear", duration:10}}
          className='text-[17vw] leading-none font-serif font-bold uppercase pt-10 mb-[7vw] pr-20 shrink-0'
        >
          We Are Ochi
        </motion.h1>
        
        {/*
          2. Element 2: Starts exactly where Element 1 started (x: "0%"),
             but its content is positioned right next to Element 1 due to the flex layout.
             Animating both by the same amount ensures they move together.
        */}
        <motion.h1 
          initial= {{x: "0%"}} 
          animate= {{x: "-100%"}} 
          transition={{repeat: Infinity, ease:"linear", duration:10}} 
          className='text-[17vw] leading-none font-serif font-bold uppercase pt-10 mb-[7vw] pr-20 shrink-0'
        >
          We Are Ochi
        </motion.h1>
        
        {/* ADDED A THIRD INSTANCE FOR RELIABILITY */}
        <motion.h1 
          initial= {{x: "0%"}} 
          animate= {{x: "-100%"}} 
          transition={{repeat: Infinity, ease:"linear", duration:10}} 
          className='text-[17vw] leading-none font-serif font-bold uppercase pt-10 mb-[7vw] pr-20 shrink-0'
        >
          We Are Ochi
        </motion.h1>

      </div>
    </div>
  )
}

export default Marquee