import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../../utils/cartFunctions';
import toast from 'react-hot-toast';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';

function ProductOverview() {

  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  useEffect(()=>{
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
      window.scrollTo(0, 0);

    })
  },[])

  function onAddtoCartClick(){
    addToCart(product.productId, quantity)
    toast.success(product.productName+ " Added to cart")
  }

  function onBuyNowClick(){
      navigate("/shipping", {state : {
        items:[
        {  productId: product.productId,
          qty: quantity
        }
        ]
        
      }})
  }

  return (
    <>
    <Header/>
    <div className="h-[120vh] w-full bg-primary flex items-center justify-center p-8">
  {status === "loading" && <Preloader />}

  {status === "not-found" && (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-red-500">Oops..! Product Not Found</h1>
    </div>
  )}

  {status === "found" && (
    <div className="flex w-full h-full rounded-lg overflow-hidden">
      
      <div className="w-[60%] bg-primary p-6 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 w-full">
  <img src={product.Images[0]} alt="" className="w-full h-[400px] object-cover  shadow-md" />
  <img src={product.Images[1]} alt="" className="w-full h-[400px] object-cover  shadow-md" />
  <img src={product.Images[2]} alt="" className="w-full h-[400px] object-cover shadow-md" />
  <img src={product.Images[3]} alt="" className="w-full h-[400px] object-cover  shadow-md" />
</div>

      </div>

      
      <div className="w-[40%] bg-primary p-8 flex flex-col  space-y-6">
        <h3 className="text-gray-600 text-lg font-accent font-medium uppercase tracking-wide">
          {product.category}
        </h3>
        <h1 className="text-4xl font-bold font-main text-gray-900">{product.productName}</h1>
        <h2 className="text-2xl font-medium text-gray-700">
          {product.altNames.join(" / ")}
        </h2>

        <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
          {product.price > product.lastPrice && (
            <span className="line-through text-red-500 font-main">LKR. {product.price}</span>
          )}
          <span className="text-green-600 font-main">LKR. {product.lastPrice}</span>
        </h1>

        <p className="text-gray-600 text-md font-accent">{product.description}</p>

        <div className="flex items-center space-x-4">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-4 py-2 border border-[#bfb9b4] hover:border-secondary  text-gray-800 font-bold rounded-md active:scale-105">-</button>
          <span className="text-xl font-semibold">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border border-[#bfb9b4]  hover:border-secondary text-gray-800 font-bold rounded-md active:scale-105">+</button>
        </div>
        <button
          onClick={onAddtoCartClick}
          className="mt-4 px-6 py-3 bg-[#653c20] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#824b26] hover:scale-105 transition duration-300"
        >
          Add to Cart
        </button>
        <button
          onClick={onBuyNowClick}
          className="mt-4 px-6 py-3 bg-[#d5883a] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#fc9f3f] hover:scale-105 transition duration-300"
        >
         Buy Now
        </button>
      </div>
    </div>
  )}
</div>
</>
  )
}

export default ProductOverview