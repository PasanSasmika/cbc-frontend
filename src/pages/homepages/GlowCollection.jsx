import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../../components/ProductCard'

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
    <div className=" min-h-screen w-full bg-primary flex justify-center items-center flex-wrap gap-24">
            
            {
             product.slice(0, 4).map((product)=>
            
                <ProductCard product={product}/>
                
            )
        }
    </div>
  )
}

export default GlowCollection