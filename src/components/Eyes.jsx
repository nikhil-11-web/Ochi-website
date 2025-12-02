import React, { useState, useEffect } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          
          {/* Eye 1 */}
          <div className='flex items-center justify-center w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-4 md:h-8'>
                <div className='w-4 h-4 md:w-8 md:h-8 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className='flex items-center justify-center w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-4 md:h-8'>
                <div className='w-4 h-4 md:w-8 md:h-8 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Eyes;