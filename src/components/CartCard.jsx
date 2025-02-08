import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { deleteItem } from '../utils/cartFunctions'
import { div } from 'framer-motion/client'

function CartCard(props) {

const productId = props.productId
const qty = props.qty

const [product, setProduct] = useState(null)
const [loaded, setLoaded] = useState(false)

useEffect(()=>{
    if(!loaded){
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then(
            (response)=>{
                if(response.data!=null){

                setProduct(response.data)
                setLoaded(true)
                }else{
                    deleteItem(productId)
                }
                
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
   
},[])

  return (
   <>
   {
    !loaded ? (
            <div>Loading,,...</div>
    ):(
        <div className='border w-1/2 flex justify-center items-center'>
        <span>image<img src={product?.Images[0]} alt="" className='w-6 h-6' /></span>
        <span>id {productId}</span>
        <span className='p-7'>name {product?.productName}</span>
        <span>{qty}</span>
        <span>LKR. {product?.lastPrice.toFixed(2)}</span>
        <span  className='p-7'>LKR. {(product?.lastPrice*qty).toFixed(2)}</span>


    </div>
    )
   }
   
    </>
  )
}

export default CartCard