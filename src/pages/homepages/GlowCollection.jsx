import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../../components/ProductCard'
import { motion } from 'framer-motion' 
import { Link } from 'react-router-dom'
import { SkinImprove4 } from '../../animations/animation'
import toast from 'react-hot-toast'

function GlowCollection() {

  const [product, setProduct] = useState([])
  const [loadingStatus, setLoadingStatus] = useState("loading")

  useEffect(()=>{
    if(loadingStatus == "loading"){
      axios.get(import.meta.env.VITE_BACKEND_URL+ '/api/products').then(
        (res)=>{
          setProduct(res.data)
          setLoadingStatus('loaded')

        }
      ).catch(
        (err)=>toast.error('Error loading products')
    )
    }
  },[])
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col justify-center items-center gap-6 py-12 px-4 sm:px-6 lg:px-8">
    {/* Title Section */}
    <motion.div
      // {...SkinImprove4()}
      transition={{ duration: 0.9 }}
      className="flex flex-col items-center justify-center gap-2"
    >
      <h1 className="font-main font-medium text-3xl sm:text-4xl md:text-5xl text-center">
        Unleash your inner glow
      </h1>
      <h1 className="font-second text-secondary text-4xl sm:text-5xl md:text-6xl relative text-center">
        Collection
      </h1>
    </motion.div>

    <div className=" relative top-32 lg:top-36 lg:right-7 right-4 sm:right-8 md:right-16 ">
      <Link to="/products">
        <h1 className="relative bottom-24 sm:bottom-32 left-4 sm:left-8 text-lg sm:text-xl md:text-2xl font-accent text-secondary hover:after:block after:w-0 after:h-[2px] after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
          View all Collection
        </h1>
      </Link>
    </div>

    
    {/* Product Cards Section */}
    <motion.div
      // {...SkinImprove4()}
      className="flex flex-wrap justify-center items-center gap-4  lg:gap-20 mt-8 w-full px-2 sm:px-4"
    >
      {product.slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  
  </div>
  )
}

export default GlowCollection