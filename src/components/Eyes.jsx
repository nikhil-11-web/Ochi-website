import React from 'react'
import { useState, useEffect } from 'react'

function Eyes () {
    const [rotate, setRotate] = useState(0);

    // This useEffect hook runs once on mount to set up the mousemove listener
    useEffect(() => {
      const handleMouseMove = (e) => {
        
          let mouseX = e.clientX;
          let mouseY = e.clientY;

          // Calculate the difference between the mouse position and the center of the window
          let deltaX = mouseX - window.innerWidth / 2;
          let deltaY = mouseY - window.innerHeight / 2;

          // Calculate the angle using atan2
          var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); 
          
          // 💡 FIX: Subtract 180 degrees to reverse the direction.
          // This corrects the initial orientation of the pupil relative to the calculated angle.
          setRotate(angle - 180); 
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [])


  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        {/* The background image container with a scroll effect (data-scroll-speed="-0.5") */}
        <div data-scroll data-scroll-speed="-0.5" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
           
           {/* Container for both eyes, centered */}
           <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
           
               {/* === EYE 1 === */}
               <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-pink-300'>
                 <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                   
                   {/* Line/Pupil container (The element that rotates) */}
                   <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 w-full h-10'> 
                     {/* The pupil dot */}
                     <div className='w-10 h-10 rounded-full bg-zinc-100'> </div>
                   </div>
                   
                 </div>
               </div>
               
               {/* === EYE 2 === */}
               <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-pink-300'>
                 <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                   
                   {/* Line/Pupil container (The element that rotates) */}
                   <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 w-full h-10'> 
                     {/* The pupil dot */}
                     <div className='w-10 h-10 rounded-full bg-zinc-100'> </div>
                   </div>
                   
                 </div>
               </div>
               
           </div>
        </div>
    </div>
  )
}

export default Eyes