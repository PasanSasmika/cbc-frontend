import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { loadCart } from '../../utils/cartFunctions'
import { div } from 'framer-motion/client'


function Cart() {

const [cart,setCart]= useState([])
useEffect(
    ()=>{
      setCart(loadCart())
    },[]
  )

  return (
    <div className='w-full h-full overflow-y-scroll'>
         {
            cart.map(
                (item)=>{
                    return(
                         <span>{item.productId} X {item.qty}</span>
                       
                    )
                }
            )
        } 

   
    </div>
  )
}

export default Cart