import React from 'react';

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex flex-col md:flex-row items-center px-5 md:px-20 gap-5 py-20'>
      
      {/* Big Card */}
      <div className='cardcontainer h-[50vh] w-full md:w-1/2'>
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Ochi" />
          <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-[1px] border-[#CDEA68] text-[#CDEA68] text-sm font-medium'>
             &copy;2019-2025
          </button>
        </div>
      </div>

      {/* Small Cards Container */}
      <div className='cardcontainer flex flex-col md:flex-row gap-5 w-full md:w-1/2 h-[50vh]'>
        
        <div className="card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#192826]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Clutch" />
          <button className='absolute bottom-10 left-10 px-5 py-1 border-[1px] border-zinc-100 rounded-full text-zinc-100 text-sm font-medium uppercase hover:bg-zinc-100 hover:text-black transition-colors'>
             Rating 5.0 on Clutch
          </button>
        </div>

        <div className="card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#212121]">
          <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Academy" />
          <button className='absolute bottom-10 left-10 px-5 py-1 border-[1px] border-zinc-100 rounded-full text-zinc-100 text-sm font-medium uppercase hover:bg-zinc-100 hover:text-black transition-colors'>
             Business Bootcamp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
