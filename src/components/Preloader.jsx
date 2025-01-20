import { div } from 'framer-motion/client'
import React from 'react'

function Preloader() {
  return (
    <div className=' w-full h-screen bg-primary flex flex-col justify-center items-center'>
    <span className="block mx-auto w-[109px] h-[109px] relative border-[15px] border-black animate-cssload-loader">
      <span className="inline-block w-full bg-[#050302] animate-cssload-loader-inner">
      </span>
    </span>
    <h2 className='mt-4 text-xl text-black font-semibold'>
    Loading......
  </h2>
    </div>
    
  )
}

export default Preloader