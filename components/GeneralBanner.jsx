import Image from 'next/image'
import React from 'react'

const GeneralBanner = () => {
  return (
    <div className='relative w-full h-[22rem] mb-10 '>
        
  <div className='absolute w-full h-full flex flex-col items-center justify-center bg-black/50 text-white'>
  <h2>Test</h2>
    <h3>Test</h3>
  </div>
  <Image className='w-full h-full object-cover' alt='taiwan auto parts' width="1000" height="200" src="/../public/assets/generalBannerPic.png"/>

    
        </div>
  )
}

export default GeneralBanner