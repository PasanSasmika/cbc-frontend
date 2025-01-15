import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ProductCard from '../../components/ProductCard'

function Products() {
    const [products, setProducts] = useState([])
    const [loadingStatus, SetLoadingStatus] = useState("loading")

    useEffect(()=>{
        if(loadingStatus== "loading"){
        axios.get(import.meta.env.VITE_BACKEND_URL+ '/api/products').then(
            (res)=>{
                console.log(res.data)
                setProducts(res.data)
                SetLoadingStatus('loaded')
            }
        ).catch(
            (err)=>toast.error('Error loading products')
        )
    }
    },[])


  return (
    <div className='w-full h-full gap-8 flex overflow-y-scroll flex-wrap justify-center'>
        {
            products.map((product)=>
            
                <ProductCard product={product}/>
                
            )
        }
    </div>
  )
}

export default Products