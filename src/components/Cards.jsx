import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className="card relative rounded-xl w-full h-full  bg-[#004D43]  flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute text-orange-500 px-5 py-1 rounded-full border-2 left-10 bottom-10'> &copy;2019-2025</button>
            </div>
        </div>
       <div className='cardcontainer flex items-center justify-center gap-5 w-1/2 h-[50vh]'>
    {/* Card 1 */}
    <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-pink-700">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        
        {/* BUTTON ADDED HERE */}
        <button className='absolute bottom-5 left-5 px-4 py-1 border-2 border-white rounded-full text-white text-sm'>
            BUSINESS BOOTCAMP
        </button>
    </div>
    
    {/* Card 2 */}
    <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-zinc-900">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        
        {/* BUTTON ADDED HERE */}
        <button className='absolute bottom-5 left-5 px-4 py-1 border-2 border-white rounded-full text-white text-sm'>
            BRANDING
        </button>
    </div>
</div>
</div>

  )
}

export default Cards
