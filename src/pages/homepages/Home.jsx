import React, { useEffect } from 'react'
import home from '/image9.jpg'
import { motion } from 'framer-motion' 
import { HomePageAnimation, HomePageAnimation2 } from '../../animations/animation'
import { Link } from 'react-router-dom'
// import SkinImprove from './SkinImprove'
// import GlowCollection from './GlowCollection'



function Home() {

    useEffect(()=>{
        HomePageAnimation()
    },[])
  return (
    <>
    {/* Large Screen Layout - Unchanged */}
    <div className="hidden md:flex h-[130vh]">
      <div className="w-[35%] h-full bg-primary pb-64 flex items-center">
        <motion.div
          {...HomePageAnimation2()}
          className="relative bottom-14 left-32 z-20"
        >
          <h1 className="text-[85px] text-black font-medium font-main">
            Discover the beauty within
          </h1>
          <div className="absolute">
            <h1 className="text-[198px] font-second text-secondary relative bottom-24 left-80">
              you
            </h1>
          </div>
          <Link to="/products">
            <div className="absolute">
              <h1 className="text-[33px] font-accent text-secondary relative top-12">
                view all collection
              </h1>
            </div>
          </Link>
        </motion.div>
      </div>
      <div className="w-[65%] bg-primary flex items-center pb-64 z-10">
        <motion.img
          src={home}
          alt="Beauty image"
          {...HomePageAnimation()}
          className="w-[1040px] h-[573px] rounded-md shadow-lg object-cover right-9 relative top-3"
        />
      </div>
    </div>

    {/* Enhanced Small Screen Layout with Additional Text */}
    <div className="md:hidden h-screen w-full bg-primary flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <motion.div
        {...HomePageAnimation()}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={home}
          alt="Beauty image"
          className="w-full h-full object-cover opacity-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </motion.div>

      {/* Text Overlay with Additional Text */}
      <motion.div
        {...HomePageAnimation2()}
        className="relative z-10 text-center px-6 py-8"
      >
        <h1 className="text-[42px] text-white font-medium font-main leading-tight tracking-wide drop-shadow-md">
          Discover the beauty within
        </h1>
        <h1 className="text-[70px] font-second text-white font-light italic drop-shadow-lg">
          you
        </h1>
        <p className="text-[16px] text-white/90 font-main mt-3 max-w-[300px] mx-auto leading-relaxed drop-shadow-sm">
          Unveil your glow with our curated skincare essentials.
        </p>
        <Link to="/products">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[18px] font-accent text-white mt-6 inline-block px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/50 rounded-full shadow-md hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            View All Collection
          </motion.h1>
        </Link>
      </motion.div>

      {/* Subtle Decorative Element */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-4 left-0 right-0 flex justify-center"
      >
        <div className="w-16 h-1 bg-white/50 rounded-full"></div>
      </motion.div>
    </div>
  </>
  )
}

export default Home
