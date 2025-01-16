import React, { useEffect } from 'react'
import home from '../../../public/home1.jpg'
import Login from './Login'



function Home() {
 
  return (
    <>
    <div className='h-full flex bg-primary'>
      <div className='w-[35%] h-[650px] bg-primary flex items-center'>
        <div className='relative bottom-14 left-32 z-20'>
          <h1 className='text-[85px] text-black font-medium font-main'>Discover the beauty within</h1>
          <div className='absolute'>
            <h1 className='text-[198px] font-second text-secondary relative bottom-24 left-80'>you</h1>
          </div>
          <div className='absolute'>
            <h1 className='text-[33px] font-accent text-secondary relative top-12 '>view all collection</h1>
          </div>
        </div>
      </div>
      <div className='w-[65%] bg-primary flex items-center z-10'>
        <img src={home} alt="" className='w-[1040px] h-[573px] rounded-md object-cover right-9 relative top-3' />
      </div>
      
    </div>

        <Login/>
    </>
  )
}

export default Home
