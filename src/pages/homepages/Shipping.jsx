import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom'
import CartCard from '../../components/CartCard';
import axios from 'axios';


function Shipping() {
    const navigate = useNavigate();
    const location = useLocation();
    const cart = location.state?.items;
    const [total, setTotal]= useState(0)
    const [labeledTotal, setLabeledTotal] = useState(0)
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    
    useEffect(() => {
      if (!cart) {
        toast.error("No items received");
        navigate("/cart");
        return;
      }
  
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
          orderedItems: cart,
        })
        .then((res) => {
          if (res.data.total != null) {
            setTotal(res.data.total);
            setLabeledTotal(res.data.labeledTotal);
          }
        })
        .catch((err) => {
          toast.error("Failed to fetch order quote. Please try again.");
          console.error(err);
        });
    }, [cart, navigate]);

      function createOrder(){
        const token = localStorage.getItem("token");
        if(token == null){
          return;
        }
        
        axios
          .post(
            import.meta.env.VITE_BACKEND_URL + "/api/orders",
            {
              orderedItems: cart,
              name,
              address,
              phone,
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
        )
      }

    if(cart == null){
        toast.error("No items recieverd..")
        navigate("/cart")
    }
  return (
    <div>
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
       
   <button onClick={createOrder}>Checkout</button>
    </div>
    <div className=' w-96  justify-center flex flex-col gap-3'>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  />
            <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)}  />
            <textarea type="text" value={address} onChange={(e)=> setAddress(e.target.value)}  />
        </div>
    </div>
  )
}

export default Shipping