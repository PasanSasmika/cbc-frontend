import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../../components/ProductCard'
import { motion } from 'framer-motion' 
import { Link } from 'react-router-dom'
import { SkinImprove4 } from '../../animations/animation'

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
    <div className="h-screen w-full bg-primary flex flex-col justify-center items-center gap-10 py-12 px-6 ">
    
    <motion.div {...SkinImprove4()} transition={{duration: 0.9}} className='flex flex-col items-center justify-center gap-2'>
    <h1 className="font-main font-medium text-[42px] md:text-[48px] text-center">Unleash your inner glow</h1>
    <h1 className="font-second  text-secondary text-[48px] md:text-[54px] relative text-center">Collection</h1>
    </motion.div>
    <div className="absolute right-16 md:right-32 lg:right-60">
   <Link to="/products"><h1 className=" relative bottom-36  left-16 text-[20px] md:text-[24px] font-accent  text-secondary
    hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">View all Collection</h1></Link> 
  </div>

    <motion.div {...SkinImprove4()} className='flex flex-wrap justify-center items-center gap-8 lg:gap-20 mt-8 w-full px-4'>

            
            {
             product.slice(0, 4).map((product)=>
            
                <ProductCard product={product}/>
                
            )
        }
        </motion.div>
    </div>
  )
}

export default GlowCollection