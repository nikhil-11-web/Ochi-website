import React from 'react';

const Footer = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 px-5 md:px-20 py-10 md:py-20 flex flex-col md:flex-row gap-10 md:gap-5 font-["Founders_Grotesk"]'>
      
      {/* Left Section (Eye Opening) */}
      <div className='w-full md:w-1/2 flex flex-col justify-between'>
        <div className='heading'>
          <h1 className='text-[16vw] md:text-[9vw] uppercase font-bold leading-[0.8] tracking-tighter'>Eye-</h1>
          <h1 className='text-[16vw] md:text-[9vw] uppercase font-bold leading-[0.8] tracking-tighter'>Opening</h1>
        </div>
        
        {/* SVG Logo at bottom of left column */}
        <div className='mt-10 md:mt-0'>
             <svg width="72" height="30" viewBox="0 0 72 30" fill="none" className="text-white scale-125 origin-left" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"></path>
                <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
                <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"></path>
                <path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"></path>
             </svg>
             <p className='mt-5 font-["Neue_Montreal"] text-sm text-gray-400'>&copy; 2024-2025</p>
        </div>
      </div>

      {/* Right Section (Links) */}
      <div className='w-full md:w-1/2 flex flex-col justify-between'>
        
        {/* Main Title */}
        <h1 className='text-[16vw] md:text-[9vw] uppercase font-bold leading-[0.8] tracking-tighter mb-10'>Presentations</h1>
        
        {/* Link Columns */}
        <div className='flex flex-col md:flex-row gap-10 md:gap-20'>
          
          {/* Socials */}
          <div className='flex flex-col'>
             <h4 className='mb-5 text-gray-400'>S:</h4>
             {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item, index)=>(
                <a key={index} className='text-lg font-light border-b border-transparent hover:border-white w-fit cursor-pointer'>{item}</a>
             ))}
          </div>

          {/* Locations */}
          <div className='flex flex-col'>
             <h4 className='mb-5 text-gray-400'>L:</h4>
             <p className='text-lg font-light'>202-1965 W 4th Ave</p>
             <p className='text-lg font-light'>Vancouver, Canada</p>
             <p className='text-lg font-light mt-5'>30 Chukarina St</p>
             <p className='text-lg font-light'>Lviv, Ukraine</p>
          </div>

          {/* Email */}
          <div className='flex flex-col'>
             <h4 className='mb-5 text-gray-400'>E:</h4>
             <a className='text-lg font-light border-b border-transparent hover:border-white w-fit cursor-pointer'>hello@ochi.design</a>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className='flex justify-between mt-10 md:mt-20 text-gray-400 text-sm font-["Neue_Montreal"]'>
           <a href="#">Privacy Policy</a>
           <a href="#">Cookie Policy</a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
