import { motion } from "framer-motion";
import React from 'react'

function Preloader() {
  return (
    <div className=' w-full h-screen bg-primary flex flex-col justify-center items-center'>
    <div className="w-24 h-24 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f8ef7" />
            <stop offset="50%" stopColor="#a663cc" />
            <stop offset="100%" stopColor="#f74f6f" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f7b34f" />
            <stop offset="50%" stopColor="#5ef7a5" />
            <stop offset="100%" stopColor="#4f8ef7" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#gradient1)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="251.3274"
          strokeDashoffset="251.3274"
          animate={{ strokeDashoffset: [251.3274, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          stroke="url(#gradient2)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="188.4956"
          strokeDashoffset="0"
          animate={{ strokeDashoffset: [0, 188.4956] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
    </div>

    <p className="text-[#4f8ef7] font-bold text-xl">Loading....</p>
    </div>
    
  )
}

export default Preloader