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
    <div className="h-[105vh] w-full bg-primary flex flex-col absolute justify-center items-center gap-8">
    
    <motion.div {...SkinImprove4()} transition={{duration: 0.9}} className='flex flex-col items-center justify-center relative top-[-64px] '>
    <h1 className="font-main font-medium text-[45px]">Unleash your inner glow</h1>
    <h1 className="font-second  text-secondary text-[54px] relative">Collection</h1>
    </motion.div>
    <div className="absolute top-[200px] right-40">
   <Link to="/products"><h1 className="text-[27px] font-accent text-secondary">View all Collection</h1></Link> 
  </div>

    <motion.div {...SkinImprove4()} className='flex justify-center items-center  relative top-5 flex-wrap gap-24 w-full'>

            
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