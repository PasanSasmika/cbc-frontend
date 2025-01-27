import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../utils/cartFunctions';
import toast from 'react-hot-toast';
import SecondaryLoader from '../../components/SecondaryLoader';

function ProductOverview() {

  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(()=>{
    console.log(productId)
    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then((res)=>{
      console.log(res.data)

      //if null

      if(res.data == null){
        setStatus("not-found")
      }

      if(res.data != null){
        setProduct(res.data)
        setStatus("found")
      }
    })
  })

  function onAddtoCartClick(){
    addToCart(product.productId,1)
    toast.success(product.productName+ " Added to cart")
  }

  return (
    <div className='w-full h-full'>
      {
        status == "loading"&&(
          <SecondaryLoader/>
        )
      }

      {
        status == "not-found"&&(
          <div><h1>Oppps..! product not found</h1></div>
        )
      }

      {
        status == "found"&&(
          <div>
            <img src={product.Images[0]} alt="" className='w-[12%] h-[12%]' />
            <h1>{product.productName}</h1>
            <h2>{product.altNames.join(" / ")}</h2>
           <h1>{
            (product.price> product.lastPrice)&&
            <span className='line-through text-red-500'>LKR. {product.price}</span>
            } <span>{"LKR."+product.lastPrice}</span>
      </h1>
      <h3>{product.category}</h3>
      <h3>{product.description}</h3>

      <div>
        <img src={product.Images[1]} alt="" className='w-9 h-9' />
        <img src={product.Images[2]} alt="" className='w-9 h-9' />

      </div>
      <button onClick={onAddtoCartClick}>Add to cart</button>
          </div>
        )
      }
    </div>
  )
}

export default ProductOverview