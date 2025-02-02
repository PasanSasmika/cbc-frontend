import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { loadCart } from '../../utils/cartFunctions'
import CartCard from '../../components/CartCard'
import axios from 'axios'


function Cart() {

const [cart,setCart]= useState([])
const [total, setTotal]= useState(0)
const [labeledTotal, setLabeledTotal] = useState(0)


useEffect(
    ()=>{
      setCart(loadCart())
      axios.post(import.meta.env.VITE_BACKEND_URL+"/api/orders/quote",{
        orderedItems : loadCart()
      }).then(
        (res)=>{
          setTotal(res.data.total)
          setLabeledTotal(res.data.labeledTotal)
        }
      )
    }, []
  )

  function checkoutOrderClicked(){

    const token = localStorage.getItem("token");
    if(token == null){
      return;
    }

    axios
      .post(
        import.meta.env.VITE_BACKEND_URL + "/api/orders",
        {
          orderedItems: cart,
          name: "John Doe",
          address: "123, Galle Road, Colombo 03",
          phone: "0771234567"
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      }
    );
  }

  return (
    <div className='w-full h-full overflow-y-scroll flex flex-col items-center'>
         {
            cart.map(
                (item)=>{
                    return(
                     
                        <CartCard key={item.productId}
                         productId ={item.productId}
                        qty={item.qty}/>
                        
                    );
                }
            )
        } 
        

          
       
<h1 className="text-3xl font-bold text-accent">
        Total: LKR. {labeledTotal.toFixed(2)}
      </h1>
      <h1 className="text-3xl font-bold text-accent">
        Discount: LKR. {(labeledTotal - total).toFixed(2)}
      </h1>
      <h1 className="text-3xl font-bold text-accent">
        Grand Total: LKR. {total}
      </h1>
       

   <button onClick={checkoutOrderClicked}>Checkout</button>
    </div>
  )
}

export default Cart