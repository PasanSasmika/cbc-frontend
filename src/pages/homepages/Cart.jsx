import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { loadCart } from '../../utils/cartFunctions'
import { div } from 'framer-motion/client'
import CartCard from '../../components/CartCard'


function Cart() {

const [cart,setCart]= useState([])
useEffect(
    ()=>{
      setCart(loadCart())
    },[]
  )

  return (
    <div className='w-full h-full overflow-y-scroll flex flex-col items-center'>
         {
            cart.map(
                (item)=>{
                    return(
                     
                        <CartCard key={item.productId} productId ={item.productId}
                        qty={item.qty}/>
                        
                    )
                }
            )
        } 

   <button>Checkout</button>
    </div>
  )
}

export default Cart