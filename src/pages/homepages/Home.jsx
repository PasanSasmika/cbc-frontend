import React, { useEffect } from 'react'
import home from '/image9.jpg'
import { motion } from 'framer-motion' 
import { HomePageAnimation, HomePageAnimation2 } from '../../animations/animation'
import SkinImprove from './SkinImprove'
import GlowCollection from './GlowCollection'



function Home() {

    useEffect(()=>{
        HomePageAnimation()
    },[])
  return (
    <>
    <div className='h-full flex bg-primary'>
      <div className='w-[35%] h-[650px] bg-primary flex items-center'>
        <motion.div {...HomePageAnimation2()}  className='relative bottom-14 left-32 z-20'>
          <h1 className='text-[85px] text-black font-medium font-main'>Discover the beauty within</h1>
          <div className='absolute'>
            <h1 className='text-[198px] font-second text-secondary relative bottom-24 left-80'>you</h1>
          </div>
          <div className='absolute'>
            <h1 className='text-[33px] font-accent text-secondary relative top-12 '>view all collection</h1>
          </div>
        </motion.div>
      </div>
      <div className='w-[65%] bg-primary flex items-center z-10'>
        <motion.img src={home} alt="" {...HomePageAnimation()} className='w-[1040px] h-[573px] rounded-md object-cover right-9 relative top-3' />
      </div>
      
    </div>

      <SkinImprove/>
      <GlowCollection/>
  
    </>
  )
}

export default Home
